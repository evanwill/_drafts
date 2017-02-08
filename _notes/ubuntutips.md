---
title: Ubuntu tips
layout: post
tags:
---

Ubuntu is great, but here are some tips to fix some issues that I regularly encounter.

## Install essentials

- Unity Tweak Tool, `sudo apt-get install unity-tweak-tool`.
- GIMP, Inkscape
- Calibre, if you have ebooks, this helps you manage them.
- VLC, get a better video player right away. 
- Caffeine, turns off screen save / lock so that your screen doesn't turn off while you are watching youtube!
- Text editor (Atom or MS Code)
- Python distro Anaconda

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


