---
title: Open Image Editing Workshop
layout: post
tags: [images, open, workshop]
date: 2018-04-04
---

> MILL workshop 2018: Learn about free and open-source applications that make advanced media editing possible without expensive software! 
> This session will introduce the most popular open-source media editing applications and get you setup to use GIMP for photo editing.

When thinking about editing images and other media, a certain super expensive, close-source ecosystem usually comes to mind (i.e. Adobe)--to the point it has even become a verb, "photoshopping".
However, there are plenty of excellent open source alternatives that can power your media editing workflows for [free](https://www.gnu.org/philosophy/free-sw.en.html){:target="_blank" rel="noopener"}.
These cross-platform, open source options respect your rights as a user, and you won't be locked into a subscription service or platform.

*Please note:* we often mention open source software as an "alternative to" some proprietary / commercial option.
However, none of these open source projects are designed to specifically mimic or replace a proprietary tool. 
They are developed and guided by their own community and goals.

These notes are a sketch outline with links to lots of free tools. 
For open image editing tutorials and resources, the go to resource is [PIXLS](https://pixls.us/){:target="_blank" rel="noopener"}.

## GNU Image Manipulation Program (GIMP) 

When we talk about photo editing, we usually mean "raster images" or "pixel editing".
While "photoshopping" is a verb, [GIMP](https://www.gimp.org/){:target="_blank" rel="noopener"} is a powerful and popular free and open alternative. 

<a href="https://www.gimp.org/downloads/" target="_blank" rel="noopener"><button class="buttons" type="button">Download GIMP</button></a>

Once installed I suggest a quick tweak: click "Windows" > "Single window mode" for a more usable experience, unless you are comfortable with the floating docks.
If you have some favorite keyboard shortcuts, check in "Edit" > "Preferences" > "Interface" to configure them.
For help, click "Help" > "User Manual".

Download a couple free images to practice on:

- [Unsplash](https://unsplash.com/){:target="_blank" rel="noopener"}.
- [Flickr Commons](https://www.flickr.com/commons){:target="_blank" rel="noopener"}.

The basic GIMP interface:

- Left dock: tool box and tool options.
- Center: image window.
- Right dock: layers, history, channels; brushes options.

Demo outline: 

- Load image (File > Open).
- Adjust view on image window (zoom, quick move in corner, F11 for full screen).
- Image > Transform > rotate.
- Select tool, rectangle select, adjust selection.
- Image > Crop to selection.
- Filters > Enhance > Unsharp mask.
- Colors > Levels.
- Image > Scale image.
- File > Export as (add file extension to control output. *Note:* "Save as" is only `.xcf` format, similar to Photoshop's `.psd`, which stores the full image and editing history so it can be worked on losslessly in the future. However, it can not be opened by other software and is much bigger!)
- History tab, step back. 
- Try some tools: Airbrush, Smudge, Text, Color Picker.
- Select, Cut; Select, Copy, Move.
- Foreground / Background color.
- Export review!
- Load another image review!

> *Note:* GIMP used to have a great plugin ecosystem. However, it is temporarily suspended due to security concerns.

## Raw processing workflow

Advanced collection management and processing of raw image file types, including metadata editing, color management, batch processing, and automation (something like Adobe Lightroom).

- [darktable](https://www.darktable.org/){:target="_blank" rel="noopener"}, full workflow.
- [RawTherapee](http://rawtherapee.com/){:target="_blank" rel="noopener"}, focus on raw processing.
- [digiKam](https://www.digikam.org/){:target="_blank" rel="noopener"}, focus on management.

## Other Raster image tools

- [Krita](https://krita.org/){:target="_blank" rel="noopener"}, community focused on "digital painting" application.
- [Luminance HDR](http://qtpfsgui.sourceforge.net/){:target="_blank" rel="noopener"}, HDR utility.
- [Hugin](http://hugin.sourceforge.net/){:target="_blank" rel="noopener"}, Panorama stitching utility. 
- [Film Emulator](https://29a.ch/film-emulator/){:target="_blank" rel="noopener"}, web based tool to emulate to color of old film types with your image.

**Advanced:**

- [ImageMagick](http://www.imagemagick.org/script/index.php){:target="_blank" rel="noopener"}, powerful image manipulation tool, used via CLI or by many other applications (my [get started notes](https://evanwill.github.io/_drafts/notes/imagemagick.html)).
- [G'MIC](http://gmic.eu/){:target="_blank" rel="noopener"}, CLI, library, and GIMP plugin for advanced image processing.
- [ExifTool](http://www.sno.phy.queensu.ca/~phil/exiftool/){:target="_blank" rel="noopener"}, image metadata utility, the only reliable way to read and write photo file embedded metadata. Or you can try [Exiv2](http://www.exiv2.org/index.html).
- [ImageJ](http://imagej.net/Welcome){:target="_blank" rel="noopener"}, powerful batch image processor designed for scientific analysis (or [my notes](https://digitalaladore.wordpress.com/2017/06/07/visualizing-aladore-the-book/){:target="_blank" rel="noopener"} for less scientific purposes).

## Vector editing

Vector editing programs (something like Adobe Illustrator) use standards such as SVG to record information about the positions, paths, and properties of the components that make up a graphic, rather than the individual pixels seen in raster images.
This means the image can be scaled to any size with out loss of detail. 

- [Inkscape](https://inkscape.org/){:target="_blank" rel="noopener"}, powerful, with more advanced features than AI under the hood, but a steep learning curve. Luckily, there are a lot of tutorials, check the [official list](https://inkscape.org/en/learn/tutorials/){:target="_blank" rel="noopener"}, ["Mastering Inkscape in 2018"](http://libregraphicsworld.org/blog/entry/mastering-inkscape-in-2018){:target="_blank" rel="noopener"}, or ["Awesome new Inkscape features"](https://opensource.com/article/18/1/9-awesome-new-inkscape-features-and-how-use-them){:target="_blank" rel="noopener"}. The developers collaborate directly with the SVG standards committee to innovate the open specification.
- Not open source, but cost-free, easy to use: [Vectr](https://vectr.com/){:target="_blank" rel="noopener"} or [Gravit Designer](https://designer.io/){:target="_blank" rel="noopener"}.
- Traditional, but handy: *Draw* in [LibreOffice](https://www.libreoffice.org/){:target="_blank" rel="noopener"} or *Karbon* in [Calligra](https://www.calligra.org/){:target="_blank" rel="noopener"}. 
- Super basic, but quick and open: [SVG-edit](https://github.com/SVG-Edit/svgedit){:target="_blank" rel="noopener"}.

## Video 

Unfortunately, none of the open video editors are *great* just yet, and all seem a bit unstable at times. 
I have used [OpenShot](https://www.openshot.org/){:target="_blank" rel="noopener"} successfully on many projects, fairly easy to use.
Others say [Kdenlive](https://kdenlive.org/){:target="_blank" rel="noopener"} is stable and professional (check out the ["Current state of Linux video editing"](https://opensource.com/article/18/4/new-state-video-editing-linux) for some in-depth reviews). 

- Decent: [OpenShot](https://www.openshot.org/){:target="_blank" rel="noopener"} and [kdenlive](https://kdenlive.org/){:target="_blank" rel="noopener"}.
- Less stable in my experience: [Shotcut](https://shotcut.org/){:target="_blank" rel="noopener"}, [Pitivi](http://www.pitivi.org/){:target="_blank" rel="noopener"}, and [avidemux](http://avidemux.sourceforge.net/){:target="_blank" rel="noopener"}.
- Pro, not open, but cost-free: [Lightworks](https://www.lwks.com/){:target="_blank" rel="noopener"} (full editing software used by professional studios, with export limited to 720p) or [DaVinci Resolve](https://www.blackmagicdesign.com/uk/products/davinciresolve/){:target="_blank" rel="noopener"}.

## Others

- [Blender](https://www.blender.org/){:target="_blank" rel="noopener"}, super powerful 3D modeling, animation, rendering, and video. Complex, professional grade tool. The developers host movie projects that produce completely [free and open short films](https://www.blender.org/about/projects/){:target="_blank" rel="noopener"}.
- [Audacity](https://www.audacityteam.org/){:target="_blank" rel="noopener"}, audio recording and editing. 
- [Scribus](https://www.scribus.net/){:target="_blank" rel="noopener"}, desktop publishing.
