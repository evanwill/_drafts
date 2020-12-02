---
title: Getting iPhone HEIC Images on Linux
layout: post
tags: [linux, tips, tools]
date: 2020-11-05
---

Apple seems to spend a lot of effort *trying* to make their ecosystem incompatible with others.
Which is frustrating, selfish, greedy, stupid, etc.

But sometimes you need to get images off an iphone. 
Support to just plug it in seems to go in and out on mainstream Linux (see [my earlier notes](https://evanwill.github.io/_drafts/notes/iphone-transfer.html)), but right now it sort of works.
I can plug in an iphone, tell the phone to "trust" the computer, and automatically mount the iphone's "photos" and "documents" without too much trouble. 
If it doesn't work after you "trust", unplug and plug it in again.

## Keep Originals 

Once connected you will still get endless errors trying to transfer more than a few photos. 
It seems like the iphone in its wisdom is trying to convert the HEIC format images in its storage on the fly to JPG for you--and this kind gesture seems to cause it to timeout constantly.
To fix this, you need to go into Settings > Photos > "Transfer to mac or pc" and switch from "Automatic" to "Keep Originals".
(Notice the "mac or pc" snub? Apple seems to really hate linux...)

If you are making large transfers, you still may need to unplug and plug in again a few times if you start getting errors. 

## Convert HEIC?

Now you have a folder of `.HEIC` images ([HEIF format](https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format)).

To decode HEIC files you need `libheif`, which is already installed on Ubuntu (package `libheif1`).
However, most programs (other than GIMP) need some additional packages installed to actually start using HEIF. 
To use ImageViewer you need `heif-gdk-pixbuf`, to get thumbnails in Files you need `heif-thumbnailer`, and to do conversions you need extra utilities provided in `libheif-examples` (unless you want to manually recompile imagemagick). 
So:

`sudo apt install libheif1 heif-gdk-pixbuf heif-thumbnailer libheif-examples`

should get everything you need.
Right click on a `.heic` image, select open with ImageViewer, and from then on they will be viewable just like any other image. 

However, there isn't a ton of support for `.heic`. 
If you are uploading images to a website or working with many apps you may need to convert them all to `.jpg`. 
GIMP can do an individual image effectively, however for batch conversion `libheif-examples` provides the commandline tool `heif-convert`.
Use a bash loop in the folder of `.heic` images:

`for f in *.HEIC; do heif-convert "$f" "${f%.HEIC}.jpg"; done`

By default `heif-convert` seems to use "90" quality.
You can set your own quality (0-100) by adding `-q` flag, e.g. 
`heif-convert -q 98 input.heic output.jpg`

Have fun!
