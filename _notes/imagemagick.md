---
title: Setup ImageMagick
layout: post
tags: [tools]
date: 2018-04-02
---

ImageMagick is a powerful open source commandline utility for processing image files that is used under the hood by numerous other tools and websites.
Once you get the hang of it, you can use it directly to do a lot of interesting things, from simple batch conversions to complex rendering.

> *Note:* ImageMagick commands made a major change between version 6 and 7+. 
> The [docs](http://www.imagemagick.org/script/command-line-processing.php) on the main website refer to version 7+, where all commands start with `magick`. 
> Previous versions used several different commands, such as `convert`, instead.
> A mirror site contains all documentation about ["legacy" ImageMagick](https://legacy.imagemagick.org/script/command-line-processing.php).

## Install ImageMagick

Install ImageMagick and Ghostscript (which enables it to work with PDFs).
Setup is easy on Linux, however, it will likely be a legacy version (see note above):

- Ubuntu: `sudo apt install imagemagick ghostscript`.
- Fedora: `sudo dnf install ImageMagick ghostscript`.

On Windows:

1. Download the [ImageMagick installer](http://www.imagemagick.org/script/download.php#windows).
2. Run the installer with default options.
3. Download the [Ghostscript installer](https://www.ghostscript.com/download/gsdnld.html) (you probably want the AGPL Windows 64 bit version).
4. Run the install with default options.

Also on Windows, if you want to follow the commands in this note, be sure to have a bash terminal, such as Git Bash (packaged with [Git installer](https://git-scm.com/)) or [Cmder](https://evanwill.github.io/_drafts/notes/cmdr.html).

## Using ImageMagick

The full [ImageMagick docs](http://www.imagemagick.org/script/command-line-processing.php) do a nice job of introducing commandline processing concepts. 
However, here is the basics.
Give the command, the image options, the input filename(s), image operator(s), and the output filename(s).

First, use a built in pattern to create a test image: 
`magick -size 640x480 pattern:checkerboard checkerboard.png`

Convert into a JPEG: 
`magick checkerboard.png output.png`

Resize:
`magick checkerboard.png -resize 75% out2.png`

Crop:
`magick checkerboard.png -crop 120x120+10+5 test-cr.png`

Combine all PNG in the folder into a PDF:
`magick *.png test.pdf`

Combine all JPEG in the folder into a GIF:
`magick *.jpg test.gif`

Create an image from first page of PDF:
`magick test.pdf[0] new.jpg`

Resize all PNG in a folder, convert to JPEG, and sequentially number:
`magick *.png -resize 200x200 thumb%d.jpg`

Resize all PNG in a folder, convert to JPEG, but keep original file name: 
`magick *.png -resize 200x200 -set filename:f '%t' '%[filename:f]-thumb.png'`

## Create PDF Thumbs

In this example, I want to create an image representing a PDF by grabbing the first page from each PDF in a directory and creating a JPEG. 
A few approaches: 

- use Magick's batch abilities: `magick *.pdf[0] -resize x500 -set filename:f '%t' '%[filename:f]-thumb.jpg'`
- use simple Magick command in a Bash loop: `for f in *.pdf; do magick "$f"[0] -resize x500 -flatten "${f%.pdf}.jpg"; done`

For higher quality result, add `-density 600`, for example: `for f in *.pdf; do magick -density 600 "$f"[0] -resize x500 -flatten "${f%.pdf}.jpg"; done`
