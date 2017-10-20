---
title: Gaming on Raspberry Pi
layout: post
tags: [fun, rpi]
date: 2017-09-18
---

> #MakeItMondays in the [MILL](https://mill.lib.uidaho.edu/): Gaming on Raspberry Pi!

Raspberry Pi is a wonderful little $35 linux computer--and it's a lot of fun. 
Sure there is a lot of applications for physical computing or learning to code, but Pi also a handy open-source gaming machine!
If you are interested in retro emulation, there are specialized distributions such as [RetroPie](https://retropie.org.uk/) (my [RetroPie notes](https://evanwill.github.io/_drafts/notes/retropie.html)).
However, there are plenty of gaming opportunities on the standard Pi operating system, [Rasbian](https://www.raspberrypi.org/downloads/raspbian/).
Rasbian is a [free and open-source](https://www.gnu.org/philosophy/free-sw.en.html) OS, and most of the applications available are as well, which means no cost for you, so give these games a try!

## Built in games

These can be found in the Menu, under the Games category: 

- [Minecraft Pi](https://minecraft.net/en-us/edition/pi/): RPI ships with a special edition of the popular game Minecraft with a programming console for learning Python. Check out [Getting Started with Minecraft Pi](https://www.raspberrypi.org/learning/getting-started-with-minecraft-pi/).
- [Python Games](https://www.raspberrypi.org/documentation/usage/python-games/). A set of a dozen simple games writen in the Python programming language. This means you can play the games--and easily learn to edit them yourself. The source code for each is in `/home/pi/python_games`. Check out Al Sweigart's [Making Games with Python & Pygame](https://inventwithpython.com/pygame/chapters/) to learn Python while making games!

## Install packages

Linux distributions have package managers designed to automatically install and update in software in a safe and secure way.
Rasbian is based on [Debian linux](https://www.debian.org/) and uses the `apt` utility on the command line. 
To use it, open Terminal, and type `sudo apt install package-name` (replacing package-name with the actual application name).
You can search for package names using `sudo apt-cache search`. 
If you want more information, check Linux's built in manual by typing `man apt`.

Debian's repositories have a lot of fun games (here's a decent [list for Pi](http://www.raspberryconnect.com/raspbian-packages-list/item/65-raspbian-games), or a database of all [linux games](https://lgdb.org/)). 
Keep in mind not all will run well on Pi given the low spec hardware, but it is all free, so why not give them a try?
(p.s. remove packages using `sudo apt remove package-name`)
Here are a few options:

- Classic [KDE games](https://games.kde.org/): `kblocks kbreakout kapman kmines kgoldrunner kdiamond kspaceduel kpat`
- Arcade-like classics: `frozen-bubble`, `xgalaga`, `snake4`, `battleball`, `tint`, `freesweep`, `pingus`, `chromium-bsu`
- Classic point-n-click adventures: `flight-of-the-amazon-queen`, `beneath-a-steel-sky`, `drascula`, `lure-of-the-temptress`
- Tux classics: `supertux` (Mario inspired platformer), `supertuxkart` (Mario kart like races, might not work on current Rasbian), `extremetuxracer` (downhill penguin race)
- Others: `freeciv` (Civilization builder), `openttd` (Transport Tycoon), `lincity` (sim city), `endless-sky` (space exploration), `freeorion` (space conquest)
- Create levels: there are many games inspired by commercial classics that fans create open engines and free content for, such as `freedink` (zelda-like),`flare` (action rpg), or `freedoom` (free DOOM game base).
- Cat that follows your mouse: `oneko` (is this a game? well it's amusing anyway...)

## Web emulator

The [Internet Archive](https://archive.org/) has thousands of old games preserved in their digital library.
They make them available in a browser based emulator, so you can play them anywhere, but Pi is just right for many of these retro games!
Check out these collections: 

- [Internet Arcade](https://archive.org/details/internetarcade)
- [MS DOS](https://archive.org/details/softwarelibrary_msdos_games)
- [Console Living Room](https://archive.org/details/consolelivingroom)

## Commandline fun

The Terminal is a powerful command line interface in Linux. 
So why not use it for some fun?

- Classic BSD Games: install `bsdgames` to get access to dozens of classics. Type the name of the game in the terminal to start playing, for example, `tetris-bsd`. Check the [list](http://wiki.linuxquestions.org/wiki/BSD_games) for the names.
- Text adventure: try the original `colossal-cave-adventure`
- Rogue-like: enter the retro world of text-based RPGs with `nethack`, `slashem`, `omega-rpg`, `crawl`, `angband`, or `moria`
- Wise cow: install `cowsay` and `fortune` to access the wisdom of the command line. Try `cowsay "Hello"` or `fortune`, then advance to `fortune | cowsay` or `fortune | cowsay -f dragon`.

## OpenGL

On rpi2 with the newest version of Raspbian Stretch, you can enable a new hardware OpenGL driver. 
Run `sudo raspi-config`, look in Advanced > GL Driver.
Select the new driver, then select finish and reboot the pi.

Try it out with a few OpenGL games, such as `neverball` and `oolite`.
