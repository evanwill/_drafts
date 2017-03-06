---
title: Ubuntu tips
layout: post
tags:
date: 2017-01-02
---

Ubuntu is great, but here are some tips to fix some issues that I regularly encounter.

## Install essentials

- Unity Tweak Tool is handy to change the look & feel of the desktop, exposing many settings that are normally buried deep in config files: `sudo apt-get install unity-tweak-tool`.
- GIMP, raster image editing. If you use raw images, check out Darktable as well.
- Inkscape, vector image editor.
- Calibre, if you have ebooks, this helps you manage them and connect with reading devices. It also has great builtin editing and conversion tools.
- Play MP3s: many common media codec are not free and open source, requiring complicated licensing. Thus Ubuntu does not ship with them. There is an option to add them during install, but I don't since it complicates the process. Install manually using `sudo apt-get install restricted-extras`
- VLC, get a better video player right away `sudo apt-get install vlc`.
- DVDs can't be played until you install some non-free stuff. The codecs are not ready to go in the main repositories, so the easiest way seems to be to build it yourself: `sudo apt-get install libdvd-pkg` then `sudo dpkg-reconfigure libdvd-pkg`. You may also need to add these packages `sudo apt-get install libdvdnav4 libdvdread4`
- Caffeine, turns off screen lock so that your screen doesn't turn off while you are watching youtube! Look for caffeine-indicator in the Software center.
- Text editor (Atom or MS Code)
- Python: Ubuntu comes with a system Python version installed. If you want to work with Python, its a good idea to install a more up-to-date version for your user account. I suggest [Anaconda](https://www.continuum.io/downloads), a scientific Python distribution with comes packages with everything you need, including iPython and Jupyter Notebook.

## Tweak settings

Open the Settings app:
- Appearance > Behavior > set options to Show the menus in the window's title bar and Always displayed.
- Screen Display > set the Scale if everything looks tiny on your High DPI screen. Start with this setting before tweaking other scaling options. 
- Use Unity Tweak to customize everything else...
- If you like the night time color shift, check out Redshift.

## Mouse doesn't seem quite right

If its a logitech mouse, install `solaar` with Unity/gnome extensions, `sudo apt-get install solaar-gnome3`.
Then unplug the mouse and restart the system. 
Or try `lomoco` to manually configure.

## gvfsd-smb-browse uses 100% of one CPU core

This is an odd bug that has effected people for a long time, but hasn't been fixed, particularly on 16.04. 
If you notice your machine heating up, check you system monitor and `stop` gvsd-smb-browse process, don't kill it.
There is 100 fixes available online, but all are sort of sketchy and odd. 
The best option: install samaba, `sudo apt-get install samba`. 
It seems Ubuntu doesn't have the full package, and once you install it, the bug seems to go away.


