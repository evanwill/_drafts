---
title: CONTENTdm metadata export tips
layout: post
tags: [library, workshop]
date: 2020-04-04
---

Many libraries use [CONTENTdm](https://www.oclc.org/en/contentdm.html) (CDM) to create and host their digital collections. 
Because many workflows include creating and updating metadata in project client, your CDM repository may contain metadata that is not reflected in other sources.
Additionally, you may want to get CDM numbers out of the system for your objects so that you can use the [CDM API](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference.en.html) to access them--or to create "skins" like [CollectionBuilder-CONTENTdm](https://github.com/CollectionBuilder/collectionbuilder-contentdm).

The most efficient way to get this metadata is to export it from the CDM admin interface.
These tips assume you have access to a CDM instance's admin interface--if you do not have access, check [CDM api tips]({{ '/notes/contentdm-tips.html' | relative_url }}) for other ways to harvest metadata.

## Export collection metadata

1. Log into your CDM admin (at a url something like "https://server12345.contentdm.oclc.org/cgi-bin/admin/start.exe" using your associated OCLC account).
2. Click on "Collections" tab.
3. Select desired collection from the drop down menu on left, then click "Change" to switch to that collection.
4. Click on "export" in the nav under the "Collections" tab.
5. On Export metadata page, choose "Tab-delimited", check "Return field names in first record" option, and then click "next".
6. This will lead to an "Export successful" page. Right click on the "export.txt" and select "Save link as" from your context menu. This should open a file save dialog box on your computer--I usually rename the file from "export.txt" to something meaningful including the collection name and export date ("example_2020-12.txt").

At this point I also like to record some collection information for reference:

- Click "reports", then "Item Types" to see total number of items and file types.You will want this information to check the accuracy of your metadata once you start processing the export.
- Click "profile" to find the "Collection alias" (e.g. `/example`). This will be necessary to construct API calls.
- Click "fields" to review the metadata template for the collection so you know what should be in the export.

## Reformat "export.txt"

"Tab-delimited" text (also commonly called "tab-separated values" or TSV) is a plain text tabular data format, using tabs as the delimiter between columns.
Like "Comma-separated values" (CSV), it is a convenient format for data exchange often used to store spreadsheet data, but is often implemented without a formal spec.

The tab-delimited "export.txt" from CDM uses UTF-8 encoding and LF line endings, which are the standard on the web and Linux, but not well supported in default Windows applications.
If you open the file directly with Excel, it has a good chance of being corrupted (messing up special characters or line breaks).
Collections that include a full text field (e.g. extracted from PDFs) are particularly challenging to get parsed correctly.
These errors are often hard to detect, so it is important to take care in initial handling the "export.txt" and reformat to a more useable file type.

Here is some suggestion workflows:

[OpenRefine](https://openrefine.org/) (free and open):

- Start OpenRefine.
- Select your "export.txt" and click "Next".
- On the "Configure Parsing Options", the preview will likely be all wrong. Choose *all* these options to parse correctly:
    - In "Parse data as" select "CSV / TSV / separator-based files".
    - In "Character encoding" click the box and select "UTF-8" (*this is essential to avoid losing special characters on Windows*).
    - In "Columns are separated by" select "tabs (TSV)".
    - Uncheck the option 'Use character " to enclose cells containing column separators' (*this is essential to avoid scrambled or losing records!*)
    - Click "Create Project" to finish parsing / importing the data
- Once set up, use Refine's "Export" button to cleanly reformat. If you would like to work with Excel, use ".xlsx" option. For preservation and interchange, "Comma-separated value" is best option.

[LibreOffice Calc](https://www.libreoffice.org/) (free and open):

- Open LibreOffice Calc, then File > Open and choose your "export.txt" 
- This will open the "Text Import" parsing options, choose these options:
    - "Character set" select "Unicode (UTF-8)"
    - "Separator Options" choose "Separated by" and check *only* "Tab".
    - "Fields" use the box to select all the columns, then select "Column type" "text" (this will prevent it from reformatting dates and numbers).
    - Click "Okay" to finish parsing.
- Calc will allow you to safely save as CSV, ODS, or XLSX.  

Google Sheets:

- Open a new blank Sheet.
- Click "File" > "Import" > "Upload", and choose your "export.txt".
- This will open the "Import file", choose these options:
    - "Import location" select "Replace current sheet".
    - "Separator type" select "Tab".
    - "Convert text to numbers, dates, and formulas" select "No" (to avoid reformatting dates and numbers and running into issues with full text field).

Excel (different versions have the menu options labeled differently, so these steps are just a vague approximation. As far as I can tell online Excel 365 can't import data and can't really be used for this process at all.):

- Open a new blank spreadsheet in Excel (*do not double click "export.txt" or open with Excel directly*)
- Click "Data" > "From Text/CSV" (in "Get data" area left side of ribbon)
- This should pop open an "Import" options menu similar to the one described above for LibreOffice Calc--choose similar options. In "File origin" be sure to choose "Unicode (UTF-8)" or the parsing will have errors. (Excel 365 flashes some notices like "connecting" and "loading" data, as if you are setting up a live database connection--you can ignore this mysticism, its just importing data like normal).

## Metadata notes

**Admin fields:** 
Exports contain a set of administrative metadata fields added by CDM. 
These are the last columns of the export, including:
"Filename,OCLC number,Date created,Date modified,Reference URL,CONTENTdm number,CONTENTdm file name,CONTENTdm file path".
"CONTENTdm number" is the most useful, since this provides the "pointer" used along with the collection "alias" in API calls.
The "Full Text" field is also usually auto generated by extracting text from uploaded items.

**Compound objects:**
If your collection contains Compound objects (image or pdf), there will be a row for the object description, as well as each page of the compound object.
The main object descriptions can be identified by checking "CONTENTdm file name" column for the extension `.cpd`.
Page level item rows follow the main item, but can be difficult to disambiguate from normal items.
Usually page level items do not have the full metadata filled out, so use a column always filled in object descriptions but blank in page level to isolate them. 
If you have extensive page level metadata this can be complex.

## CDM Terms

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

Check [CDM API tips]({{ '/notes/contentdm-tips.html' | relative_url }}) for API recipes to use / harvest digital objects.
