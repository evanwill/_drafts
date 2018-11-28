---
title: ExifTool Notes
layout: post
tags: [images, library, tools]
date: 2018-11-27
---

To read, write, and manipulate metadata embedded in image files you need [ExifTool](https://sno.phy.queensu.ca/~phil/exiftool/) (p.s. can also read/write metadata on many other file formats such as PDF, videos, music, and documents). 
Truthfully, nothing else works reliably. 

## Install

ExifTool is a [Perl](https://www.perl.org/) library and commandline tool.
Check the [install docs](https://sno.phy.queensu.ca/~phil/exiftool/install.html) for full information, but basically on Windows use the "stand-alone executable", Mac use the "MacOS package", and on Linux use your distro repository.

Windows:

- Download the "stand-alone Windows Executable" from the [ExifTool](https://sno.phy.queensu.ca/~phil/exiftool/) page (this will be a `.zip` file e.g. "exiftool-11.20.zip").
- Unzip the downloaded file.
- Inside you will find a file named `exiftool(-k).exe`. Rename it to `exiftool.exe`.
- Add it to your PATH: 
    - If you use Git Bash, find your Git Bash root directory by typing `cd /` then `pwd -W`. In your Git Bash root, copy `exiftool.exe` into the `bin` folder (see [my note on adding stuff to Git Bash](https://evanwill.github.io/_drafts/notes/gitbash-windows.html) for more detail). ExifTool will only be available on Git Bash, but this install method does not require admin access and I would suggest only using Git Bash with it anyway.
    - Alternatively, you can copy `exiftool.exe` into a directory on the Window's PATH, i.e. `C:\Windows`. ExifTool will be available on CMD and GitBash.

Linux:

- install ExifTool as the Perl library, e.g. `sudo apt install libimage-exiftool-perl`.

## Use 

To use ExifTool, start with the command `exiftool`, add some options, and the file name of an image.
Type `exiftool` to printout the [full manual page](https://sno.phy.queensu.ca/~phil/exiftool/exiftool_pod.html).

### Read Metadata 

The most basic command is to read all metadata:

`exiftool test.jpg`

From there add Options and/or Tags to the command. 

**Options** typically change the tool's output. 
Option examples: 

- `-v`, the [Verbose Option](https://sno.phy.queensu.ca/~phil/exiftool/verbose.html) adds more technical detail to the output: `exiftool -v test.jpg`
- `-T` outputs the data as a tab delimited table: `exiftool -T test.jpg > table.txt`
- `-X` outputs RDF/XML format: `exiftool -X test.jpg > metadata.xml`
- `-ee` reads metadata for embedded files in addition to the main file, e.g. images combined into a PDF: `exiftool -ee test.pdf`
- `-a` (allow duplicates) and `-u` (allow unknown tags) extract metadata that might otherwise be hidden: `exiftool -a -u test.jpg`

**Tags** correspond to embedded metadata elements and are used to read or write specific values.
Metadata elements are given a "Tag Name" (and machine readable "Tag ID") that ExifTool can take as a commandline argument by adding `-` in front. 
To find the notation explore the [Tag Names](https://sno.phy.queensu.ca/~phil/exiftool/TagNames/index.html) index.

To **read** a specific tag, include it as an argument.
For example, `exiftool -Make test.jpg` will output the EXIF metadata for camera/scanner make. 

*Note*, some tags are part of a larger "group", such as IPTC or XMP, and may have a "namespace". 
The tag names are prefixed with the group name, for example, `-XMP:Description` or `-IPTC:Source`.
Namespaces are added to the group name, for example, `-XMP-dc:Source`. 

### Write Metadata 

Writing metadata follows the same pattern as reading, but adds a value to the Tag.
To **write** a specific tag, include the tag argument followed by a `=` and value.

For example, to build up the command flag we want to add XMP metadata (`-XMP`), from Dublin Core namespace (`-dc`), in the tag Source (`:ProjectionType`), with the value of "Example source" (`="Example source"`).
Thus to add/change that one metadata value, the full command would be:
`exiftool -XMP-dc:Source="Example source" test.jpg`.

Writing examples: 

- `exiftool -Title="New title value" test.jpg` will delete the current EXIF title and replace it with "New title value". 
- `exiftool -Title= test.jpg` will delete the current EXIF title, i.e. replacing the value with nothing.
- `exiftool -all= test.jpg` will delete all current metadata except the most basic technical EXIF.
- `exiftool -XMP-dc:Source="Uni, Uni Archives, Wonderful Collection" test.jpg` will add XMP Dublin Core metadata.
- Multiple tags can be written simply by adding more flags, `exiftool -Title="New title" -XMP-dc:Source="Uni, Uni Archives, Wonderful Collection" test.jpg`

*Note*, although there are lots of possible ways to embed metadata, not many are actually readable to commonly used applications. 
If you want the metadata to be visible in Window's file properties stick to common tags such as Title, Authors, and Copyright.
Full XMP DC elements are not commonly read.
IPTC metadata has a ~30 character limit. 

### Use for Batches

If you want to add the same metadata to a large batch of files, it is most efficient to use ExifTool's built in batch processing. 
For example, adding a wildcard `*` and file extension `.tif` will add the metadata tags to all TIF files in a folder:

`exiftool -Title="Example Collection" -Copyright="Photo courtesy of the Example Collection, University of X." -XMP-dc:Source="Example Collection, SPEC, University of X." *.tif`

If each file requires individualized metadata, it is possible to use a Bash loop, although this is much slower.
For example, this loop uses the file name (assumed to be based on an identifier) to add an identifier to the metadata:

`for f in *.tif; do exiftool -Title="Example Collection ${f%.tif}" -Copyright="Photo courtesy of the Example Collection, catalog nos. ${f%.tif}, SPEC, University of X" -XMP-dc:Source="Example Collection, catalog nos. ${f%.tif}, SPEC, University of X" "$f"; done`

## Guidelines for Digitized materials

- FADGI, [Minimal Descriptive Embedded Metadata in Digital Still Images](http://www.digitizationguidelines.gov/guidelines/digitize-core_embedded_metadata.html) ([PDF](http://www.digitizationguidelines.gov/guidelines/GuidelinesEmbeddedMetadata.pdf))
- FADGI, [Embedded Metadata in TIFF Images](http://www.digitizationguidelines.gov/guidelines/digitize-tiff.html)
