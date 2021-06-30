---
title: CONTENTdm api tips
layout: post
tags: [libraries, workshop]
date: 2017-04-04
---

Many libraries use [CONTENTdm](https://www.oclc.org/en/contentdm.html) to host their digital collections. 
You may want to harvest metadata, text, and digital objects from these repositories.
CDM is not the easiest to use, but there is a few handy ways to get stuff out via URLs.

We can access the CDM data using the [CDM API](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference).
This API is helpful because its possible to create a set of queries using [OpenRefine](https://openrefine.org/) or a language such as [Python](https://www.python.org/) to add the harvesting raw materials step directly to your data processing workflow.

## CDM Terminology

The key to using the CDM API is to figure out the base URLs, the collection "Alias" (the short name represented in a collection's url), and the item id "pointer" (the id number assigned the item by the CDM database).
(*Note:* very old CDM instances also required a `port`, usually ":81", that is no longer necessary, but still often appears in CDM documentation)

CDM uses some terminology for the components of their API:

- CDM server number: each hosted CDM has a number which is used in two different URLs in the "contentdm.oclc.org" subdomain, which are used for different types of API calls.
    - "CDM server URL" - this is where your CDM admin is hosted, named "server" + server number, e.g. `https://server12345.contentdm.oclc.org/`. In general collection level API calls have to go to this URL.
    - "CDM website URL" - this is where your public CDM instance is exposed, named "cdm" + server number, e.g. `https://cdm12345.contentdm.oclc.org/`. Many organizations have a custom domain in front of this subdomain which should work for most API calls. In general item level API calls have to go to this URL.
- "Alias" - the identifier name for an individual collection, used in URLs. If set by CDM they look like `p17254coll3`, or can be manually created looking like `argonaut`.
- "pointer" / "CONTENTdm number" - the identifier number of an individual item or object assigned by the CDM database, e.g. `14`. If harvesting metadata, this value is usually called "pointer" in XML. However, it is found in metadata export as "CONTENTdm number".

If you look at the URL for at a CDM item page you can find the information.
For example, in:

`https://cdm17254.contentdm.oclc.org/digital/collection/p17254coll3/id/155/rec/1`

The "CDM website URL" is `https://cdm17254.contentdm.oclc.org`,
collection "Alias" is `p17254coll3`,
and "pointer" is `155`.

If you know the "CDM website URL" using the "contentdm.oclc.org" subdomain, then you can find the "server url" by replacing the leading "cdm" with "server", in this example `https://server17254.contentdm.oclc.org/`.
If you know a "server URL", you can use the API for find alias and pointers.
Unfortunately, it is difficult to figure out the server url if the organization uses a custom url. 

If you have direct access the the CDM instance--skip the metadata harvesting--instead export collection metadata from the admin interface, then use the "CONTENTdm number" it provides to harvest objects out of the database (see [CDM metadata tips]({{ '/notes/contentdm-meta.html' | relative_url }}) info).

*Note:* it is also possible to harvest metadata via OAI PMH--however OAI PMH is even more tedious that CDM's API and does not contain all the information necessary to harvest digital objects.
In my experience, CDM's implementation of OAI PMH is unreliable with larger collections.

## Collection level API

These calls require the OCLC server url, e.g. `https://server12345.contentdm.oclc.org/` as used in the examples below.

### Find Alias and Pointers

Get an XML list of all collections using:

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmGetCollectionList/xml`

(if you prefer JSON, replace `/xml` with `/json`)

From that XML document you can find the `alias` for a collection of interest in the `<alias>` element.

Next, you want a list of items so you can find the `pointer`.
There is no obvious easy way.
The best way is to choose a metadata field to query that every item has (generally you'll be safe just using the field `title` to query). 
Following our example, to check which metadata fields exist for a collection with `alias` "example", use: 

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmGetCollectionFieldInfo/example/xml`

This list will provide the list of fields including `name` and `nick`, you have to use the nickname in API calls using the field value.

After choosing a field, for example "title", we can form a query to return items for the "example" collection. 
There are a bunch of options that must be included for the query to work, and if you don't want to use the option you usually replace it with `0` in the url string.

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmQuery/example/0/title/title/1024/0/0/0/0/0/xml`

*Importantly, the API will only return a max of 1024 items.* 
Note the `1024` in url above is the "maxrecs" value. 
To get more than 1024 items, you will have to do multiple API calls, changing the value directly after "maxrecs" (e.g. `/1024/0/`, then `/1024/1024/`, etc).

The first XML element `<pager>` tells you how many `<total>` items there are in the collection. 
Each item in the collection is in a `<record>` element with a `<pointer>`. 
Now that you have `pointer` for individual items, you can retrieve metadata or files for the items.

### Get full text

Most document collections in CDM have a full text field filled by an OCR transcript.
If you want to get the full text for all items in a small collection, its easy using the Query method mentioned above. The automatically populated full text field is usually called `full` in CDM. For example:

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmQuery/example/0/full/xml`

However, this will only return 10 items. 
You can set the max number to return between 1 and 1024. 
So to set it to 1024, use this query:

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmQuery/example/0/full/nosort/1024/xml`

Obviously, if your collection has more than a thousand items, this isn't very helpful.
However, CDM usually times out on large collections anyway, this method probably won't work on larger collections with large full text fields. 
Instead, make a list of pointers, and use them to individually download metadata as shown below.

### Get item metadata

To get an item's full descriptive metadata, use the `alias` and `pointer`.
For example, if the `pointer` is "1":

`https://server12345.contentdm.oclc.org/dmwebservices/index.php?q=dmGetItemInfo/example/1/xml`

## Item level API

For these calls you will need to know the CDM URL, `alias` of the collection, and `pointer` of the item.
The url will work with either the OCLC CDM address, e.g. `https://cdm12345.contentdm.oclc.org/`, or a custom domain of an organization, e.g. `https://digital.lib.uidaho.edu/`.

In the examples below, use CDM url `https://cdm12345.contentdm.oclc.org/`, collection alias `p12345coll1`, and pointer `1`.

- [GetThumbnail](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getthumbnail.en.html#par_text_4c0f) - will provide a thumb for any object in the repository, "/utils/getthumbnail/collection/alias/id/pointer" - `https://cdm12345.contentdm.oclc.org/utils/getthumbnail/collection/p12345coll1/id/1`
- [GetFile](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getfile.en.html#par_text_6545) - provides a download link for PDF objects, "/utils/getfile/collection/alias/id/pointer/filename" - `https://cdm12345.contentdm.oclc.org/utils/getfile/collection/p12345coll1/id/1/example.pdf`
- [GetStream](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getstream.en.html#par_text_2d39) - provides download and playable link for video/audio objects, "/utils/getstream/collection/alias/id/pointer" - `https://cdm12345.contentdm.oclc.org/utils/getstream/collection/p12345coll1/id/1`

### Use IIIF for Images

CDM now implements a [IIIF API](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/IIIF_API_reference?sl=en) exposed at "/digital/iiif/", *only* for collections that contain images.
This is the best method for accessing images in collections.

- Get max image size: `https://cdm12345.contentdm.oclc.org/digital/iiif/p12345coll1/1/full/max/0/default.jpg`
- Get the full frame of an image at 50% size: `https://cdm12345.contentdm.oclc.org/digital/iiif/p12345coll1/1/full/pct:50/0/default.jpg`
- Get image info: `https://cdm12345.contentdm.oclc.org/digital/iiif/p12345coll1/1/info.json`

Check [IIIF Image API 2.1.1](https://iiif.io/api/image/2.1/) docs for more possibilities.
However, CDM's implementation of IIIF has some limitations:

- using the Size parameter `!w,h` does not work, instead returns `max` instead.
- using the Size parameter `pct:` with less than 10% does not work, and will return an error message.
- if either pixel size used in Size parameter `w,h` is larger than actual dimension of the full image, it will return an error message.
