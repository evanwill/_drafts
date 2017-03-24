---
title: Download metadata from flickr
layout: post
tags: [flickr]
date: 2016-02-30
---

You can bulk download stuff from flickr very easily now (which is a great feature), by going to Camera Roll, selecting things, and clicking download.
Or you can bulk download your sets/albums now as well by visiting the set/album and clicking the download button. 
This is handy, but it doesn't export any metadata you added to the photos in the system. 

Unfortunately, I found none of the apps are very stable.
The most recent and least broken apps are:

- Flickr Downloadr, https://flickrdownloadr.com/ 
- FlickrMetadataSynchr, http://flickrmetadatasynchr.codeplex.com/

Linux has one good option, but set up takes forever if you have lots of photos, 

- picty, https://github.com/spillz/picty

## Exiftool

You want `exiftool`, nothing else consistently works to look at metadata. 

- Download the complete version, http://www.sno.phy.queensu.ca/~phil/exiftool/
- extract the files
- in the extracted directory, use `./exiftool picture.jpg` to look at exif data of the pic without installing. 
- use `./exiftool -json=picture.jpg.json picture.jpg` to write json metadata to the embedded exif data of the image (you get the json or xmp file from other applications).




