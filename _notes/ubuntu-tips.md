---
title: Ubuntu essentials
layout: post
tags: [linux]
date: 2017-01-02
---

Ubuntu is great, but here are some essentials and tips to fix some issues that I regularly encounter.

## Install essentials

- Unity Tweak Tool is handy to change the look & feel of the desktop, exposing many settings that are normally buried deep in config files: `sudo apt-get install unity-tweak-tool`
- Play MP3s: many common media codec are not free and open source, requiring complicated licensing. Thus Ubuntu does not ship with them. There is an option to add them during install, but I don't since it complicates the process. Install manually using: `sudo apt-get install restricted-extras`
- Play videos: VLC, get a better video player right away: `sudo apt-get install vlc`.
- Play DVDs: DVDs can't be played until you install some non-free stuff. The codecs are not ready to go in the main repositories, so the easiest way seems to be to build it yourself: `sudo apt-get install libdvd-pkg` then `sudo dpkg-reconfigure libdvd-pkg`. You may also need to add these packages `sudo apt-get install libdvdnav4 libdvdread4`
- Caffeine, turns off screen lock so that your screen doesn't turn off while you are watching youtube! Look for `caffeine-indicator` in the Software center.
- Text editor: tweak the settings of [Gedit](https://evanwill.github.io/_drafts/notes/gedit-editor.html), and add [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/).
- Python: Ubuntu comes with a system Python version installed. If you want to work with Python, its a good idea to install a more up-to-date version for your user account. I suggest [Anaconda](https://www.continuum.io/downloads), a scientific Python distribution with comes packages with everything you need, including iPython and Jupyter Notebook. Then [set up Jupyter](https://evanwill.github.io/_drafts/notes/dual-python-notebook.html) with Py 2, 3, and R.
- Git: `sudo apt-get install git` do it!
- Image editing: GIMP. If you use raw images, check out Darktable as well.
- Vector drawing: Inkscape.
- Ebook manager: Calibre, if you have ebooks, this helps you manage them and connect with reading devices. It also has great built in editing and conversion tools.
- KeePassX for passwords.

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

