---
title: Open image editing
layout: post
tags:
---

# Open image editing

Need to edit some photos? Need an alternative to absurdly expensive and user unfriendly commercial image software (i.e. photoshop)?

Luckily, the free software community has you covered. Here are some notes about some options. If you need more tools and processing workflows, check out the resources at [PIXLS.US](https://pixls.us/software/).

## Raster: GIMP

An essential utility for every computer, [GIMP (GNU Image Manipulation Program)](https://www.gimp.org/) is a complete raster graphics editing software package.
Download it or install from your software repository.
When you first open the application, its in the difficult to use multiple window mode. 
Personally, the first thing I do is click the "Window" menu and select "Single-Window Mode". 
This docks the various tool bars into a single window (much like modern versions of photoshop). To me it seems much easier to use in this mode, although many power users prefer the other mode. 

Also check out [Darktable](https://www.darktable.org/), the "workflow application and raw developer", kind of like Adobe Bridge.

## Other handy tools

- [Inkscape](https://inkscape.org/en/) is a decent free and open vector graphics application. 
- [ImageMagick](http://www.imagemagick.org) command line image processing / creation tool. Handy for batch processes, image type conversions, or editing with another programming language. It comes installed on most linux distros, so you can just open a terminal and type something like `convert test.jpeg test.png` to start using it. Or you might resize a whole directory of images like `convert '*.jpg[300x300]' squares%03d.png` and then make them into a GIF like `convert *.png images.gif`.
- [G'MIC](http://gmic.eu/) image processing language / library / plugin. 
- [Hugin](http://hugin.sourceforge.net/) Panorama stitching utility. I misuse it to create stitch nonsense together... 
- [Luminance HDR](http://qtpfsgui.sourceforge.net/) HDR utility. I use it to create glitchy images from arbitrary sets of images... 
- [ExifTool](http://www.sno.phy.queensu.ca/~phil/exiftool/) image metadata utility, the only reliable way to read and write photo file embedded metadata. Or you can try [Exiv2](http://www.exiv2.org/index.html).
- [Ifranview](http://www.irfanview.com/) if you are on Windows, this is a handy viewer with very good batch utilities built in. 



