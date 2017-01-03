---
layout: post
title: The Basics of Ricing Linux
---

**TL;DR** Here are my [dotfiles](https://github.com/getmicah/dotfiles).

*Disclaimer*: I am in no way a ricing expert. This guide is intended for fellow beginners confused on the very basics when it comes to the customization of their Unix system.

# Introduction
After making my departure to Arch Linux a month ago I was quickly introduced to the world of tiling window managers. The idea is that instead of having a full blown desktop environment (DE) such as Gnome or Unity, you just have a window manager that utilizes keyboard shortcuts to organize your windows. With this you are able to create a very customizable experience without using up all your system's resources.

# So What is Rice / Ricing?
The term 'rice' is used to describe a person's unix desktop where 'ricing' is when someone customizes their desktop such as the icons, panels, or system interface. When it comes to ricing a tiling window manager though, the ricing of a user's system becomes much more involved. Basic things such as the panel bar and application launcher must be configured by the user.

# The State of Ricing
It's and there are more ways than ever to rice your PC. The reddit community [/r/unixporn](https://www.reddit.com/r/unixporn) is a great place to stay up to date on what people are using for their setups.

*Window Managers:*
The most popular WMs at the moment seem to be the young [bspwm](https://github.com/baskerville/bspwm) and the widely used [i3wm](https://i3wm.org/), though people are also making some awesome [openbox](http://openbox.org/wiki/Main_Page) desktops.

*Panel / Bar:*
Lots of redditors are also using some sort panel or bar in the configuration which displays all sorts of information such as the time, volume, even the current song playing. I'm not going to go into much details on how panels work, but if your interested check out [z3bra's great introduction](http://blog.z3bra.org/2014/04/meeting-at-the-bar.html). At the moment, [lemonbar](https://github.com/LemonBoy/bar) seems to be the best option for creating a panel in your WM but other options such as i3bar also work great and are built into i3wm. You can check out my lemonbar files in the link at end of this page.

*Program Launcher:*
When it comes to launching programs in linux, there has always been many ways to do it. You could just execute the program from a terminal emulator but that's lame and some programs make the terminal log for errors when executed like this. As I write this post [dmenu](http://tools.suckless.org/dmenu/) and [rofi](https://davedavenport.github.io/rofi/) are the goto applications launchers for many ricers. Rofi is actually "A window switcher, run dialog and dmenu replacement" according to its homepage which means it can do a lot more than just execute your web browser (most of which I have yet to experiment with).

*Terminal Emulator:*
The last part of ricing that I'm going to explain in this guide is the terminal emulator. The terminal emulator allows the user to interact with the Unix shell while in the X environment, according to the [Arch Wiki](https://wiki.archlinux.org/index.php/Category:Terminal_emulators). I personally use [urxvt](https://wiki.archlinux.org/index.php/Rxvt-unicode), or rxvt-unicode, which I think works very well with window managers and is very customizable through the .Xresource file in your home directory. The terminal is a very important part of a good ricing and is very

# What Do I Use?
Here's a list of what I'm using on my Arch Linux System:  

* WM: bspwm
* GTK: arc-theme
* Icons: papier
* Bar: lemonbar
* Terminal: urxvt
* Launcher: rofi
* Files: pcmanfm

<br>
All the [dotfiles](https://github.com/getmicah/dotfiles) can be found on Github. If you want to see a gallery of what my desktop looks like at the moment, check out my [reddit post](https://www.reddit.com/r/unixporn/comments/4f3rm0/bspwm_some_blue/) where can find some more details and a gallery.
