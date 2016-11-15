# Ubuntu tips

Ubuntu is great, but here are some tips to fix some issues that I regularly encounter.

## Mouse doesn't seem quite right

If its a logitech mouse, install `solaar` with Unity/gnome extensions, `sudo apt-get install solaar-gnome3`.
Then unplug the mouse and restart the system. 
Or try `lomoco` to manually configure.

## gvfsd-smb-browse uses 100% of one CPU core

This is an odd bug that has effected people for a long time, but hasn't been fixed. 
If you notice your machine heating up, check you system monitor and `stop` gvsd-smb-browse process, don't kill it.
There is 100 fixes available online, but all are sort of sketchy and odd. 
The best option: install samaba, `sudo apt-get install samba`. 
It seems Ubuntu doesn't have the full package, and once you install it, the bug seems to go away.


