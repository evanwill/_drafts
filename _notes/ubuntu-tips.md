---
title: Ubuntu essentials
layout: post
tags: [ubuntu, linux]
date: 2017-11-02
---

Ubuntu is great, but here are some essentials and tips to get started and fix some issues that I regularly encounter.
This post is from Ubuntu < 17.04, when Ubuntu shipped with the Unity desktop. 
Since 17.10+, Ubuntu ships with Gnome desktop, so some of this post is not relevant or out-of-date--check my notes about [Gnome on Ubuntu]({{ "/notes/ubuntu-gnome.html" | absolute_url }}) for tips. 

## Install essentials

The quick and easiest method to install [packages](https://packages.ubuntu.com/) is to use the command line, `sudo apt install packagename`.
Otherwise, search the Software Center.

- Tweak Tool is handy to change the look & feel of the desktop, exposing many settings that are normally buried deep in config files. On Gnome (17.10+) `gnome-tweak-tool` or Unity (<17.04) `unity-tweak-tool`.
- Play MP3s: many common media codec are not free and open source, requiring complicated licensing. Thus Ubuntu does not ship with them. There is an option to add them during install, but I don't since it complicates the process. Install manually using `ubuntu-restricted-extras` (note there is a different package name for each desktop and version, so confirm by searching on [packages](https://packages.ubuntu.com/)).
- Play videos: VLC, get a better video player right away, `vlc`.
- Play DVDs: DVDs can't be played until you install some non-free stuff. The codecs are not ready to go in the main repositories, so the easiest way seems to be to build it yourself: `sudo apt install libdvd-pkg` then `sudo dpkg-reconfigure libdvd-pkg`. You may also need to add these packages `sudo apt install libdvdnav4 libdvdread4`
- Caffeine, turns off screen lock so that your screen doesn't turn off while you are watching youtube! On Unity look for `caffeine-indicator` in the Software center. On Gnome, use the [Caffeine extension](https://extensions.gnome.org/extension/517/caffeine/).
- Text editor: tweak the settings of [Gedit](https://evanwill.github.io/_drafts/notes/gedit-editor.html), and add [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/).
- Git: `sudo apt install git` do it!
- Simple firewall: `gufw`. Check out some more extreme [security suggestions](https://wiki.ubuntu.com/BasicSecurity).
- Image editing: GIMP, `gimp` (the first time you open it, click "Windows" > "Single window mode" for a more usable experience). If you use raw images, check out Darktable. To play with HDR, `luminance-hdr`.
- Ebook manager: Calibre, if you have ebooks, this helps you manage them and connect with reading devices. It also has great built in editing and conversion tools.
- KeePass2 (`keepass2`) or KeePassX for passwords.
- `build-essential` adds Make and compilers necessary for building a lot of software.
- `curl` is often to grab web stuff on the command line.
- A few extra fonts: `fonts-firacode` `fonts-noto`
- Firefox extensions: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Facebook Container](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/), [Multi-account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/), [Side-view](https://testpilot.firefox.com/experiments/side-view), [Notes](https://testpilot.firefox.com/experiments/notes/), [OneTab](https://addons.mozilla.org/en-US/firefox/addon/onetab/)
- Disk utilities: [Etcher](https://www.balena.io/etcher/) for burning USBs, and GParted for formatting.

## Languages

- Python: Ubuntu comes with a system Python version installed. If you want to work with Python, its a good idea to install a more up-to-date version for your user account. I suggest [Anaconda](https://www.continuum.io/downloads), a scientific Python distribution with comes packages with everything you need, including iPython and Jupyter Notebook. Then [set up Jupyter](https://evanwill.github.io/_drafts/notes/dual-python-notebook.html) with Py 2, 3, and R.
- Java: `default-jre` or `default-jdk` (this tends to be up-to-date, some apps may require an old version, search [packages](https://packages.ubuntu.com/search?keywords=jdk&searchon=names&suite=bionic&section=all) for find them).
- Ruby: probably best to use [RVM](https://rvm.io/) (see [note]({{ '/notes/ruby-notes.html' | relative_url }})), although you can use the repository (`ruby-full`), but it is slightly out of date.
- Processing3: [download](https://processing.org/download/)
- Arduino: [download](https://www.arduino.cc/en/Main/Software)
- NodeJS: use [nvm](https://github.com/creationix/nvm) (this seems to be the best method; install nvm, then `nvm install --lts`), or official [NodeSource ppa](https://github.com/nodesource/distributions/blob/master/README.md), or repository version `nodejs` (which maybe a bit behind)

## Older suggestions for Ubuntu < 17.04 with Unity

### Tweak settings

Open the Settings app:
- Appearance > Behavior > set options to Show the menus in the window's title bar and Always displayed.
- Screen Display > set the Scale if everything looks tiny on your High DPI screen. Start with this setting before tweaking other scaling options. 
- Use Unity Tweak to customize everything else...

If you like the night time color shift, check out Redshift.

### Mouse doesn't seem quite right

If its a logitech mouse, install `solaar` with Unity/gnome extensions, `sudo apt-get install solaar-gnome3`.
Then unplug the mouse and restart the system. 
Or try `lomoco` to manually configure.

### gvfsd-smb-browse uses 100% of one CPU core

This is an odd bug that has effected people for a long time, but hasn't been fixed, particularly on 16.04. 
If you notice your machine heating up, check you system monitor and `stop` gvsd-smb-browse process, don't kill it.
There is 100 fixes available online, but all are sort of sketchy and odd. 
The best option: install samaba, `sudo apt-get install samba`. 
It seems Ubuntu doesn't have the full package, and once you install it, the bug seems to go away.
