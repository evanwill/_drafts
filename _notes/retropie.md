---
title: Get started with RetroPie
layout: post
tags: [fun, rpi]
date: 2017-06-26
---

[RetroPie](https://retropie.org.uk/) is a fun and handy linux distribution that turns your raspberry pi into a console game emulator. 
It is intended to get emulators and controllers setup with minimum configuration and hassle. 
Perfect for your living room, the graphical interface is is designed to be navigated with game pad controllers, so you don't need a boring old keyboard and mouse to use it!

Check the [official installation guide](https://retropie.org.uk/docs/First-Installation/) for full details, but here is my quick reference summary:

## Hardware

Suggested:
- a raspberry pi 3
- an micro SD card > 8GB (the RetroPie image is 2GB+, but you want plenty of room to add games)
- some game pads, USB or bluetooth

## Burn SD

1. Download the [RetroPie image](https://retropie.org.uk/download/) for your RPI (it will be an `img.gz` file, you do NOT need to extract it).
2. Download and install [Etcher](https://etcher.io/) if you don't have it.
3. Insert your SD card into your computer and start up Etcher.
4. Select the RetroPie image (e.g. `retropie-4.2-rpi2_rpi3.img.gz`), your SD card, and click "Flash!"

## Start RetroPie

1. Put your SD into the RPI, plug the HDMI into a TV, and connect USB controllers.
2. Plug in the RPI and watch it boot
3. Follow on screen instructions to configure game pads

After configuring the pads, you will see a menu, but no games will show up--because you haven't added any yet... 

*(personally I don't bother connecting to wifi, but you could)*

## Add ROMS

There are a few methods to get ROMs on your RetroPie, but the most fool proof way seems via USB:
1. Get a USB drive with enough space to hold all your ROMs, preferably one that has a LED indicator light on it.
2. Format the USB stick
3. Create a single folder named `retropie` on the USB stick
4. Plug the USB stick into your RetroPie, watch the busy indicator light and wait for it to stop flashing
5. Unplug the USB stick from RetroPie, and plug it back into your computer. 
6. Copy your ROMs into the correct folders in the directory structure set up by the RetroPie (i.e. inside `retropie/roms`... )
7. Plug the USB stick back into the RetroPie, watch the indicator light and wait for it to stop flashing--this may take awhile depending on how many ROMs you are adding!
8. Restart the RetroPie via the menu system (access by clicking "Select + Start" on a game pad. Do not shut down your RPI by simply unplugging if possible, this has the potential to permanently corrupt your SD. When you give the shutdown command, wait for the screen to go blank and the green light on the RPI to stop blinking.)

## Play!

You should be good to go!
