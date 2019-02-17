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

- a Raspberry Pi 3 (from [MCM](http://www.mcmelectronics.com/product/83-17300), official distributor in US, also available many other places)
- an micro SD card > 8GB (the RetroPie image is 2GB+, but you want plenty of room to add games)
- some game pads, [USB](https://www.amazon.com/dp/B01KJS4ILY/ref=cm_sw_r_cp_ep_dp_09aIzb6JAXW5P) or [bluetooth](https://www.amazon.com/dp/B014QP2H1E/ref=cm_sw_r_cp_ep_dp_58aIzbS183WB8)

## Burn SD

1. Download the [RetroPie image](https://retropie.org.uk/download/) for your RPI type (it will be an `img.gz` file, you do NOT need to extract it).
2. Download and install [Etcher](https://www.balena.io/etcher/) if you don't have it.
3. Insert your SD card into your computer and start up Etcher.
4. Select the RetroPie image (e.g. `retropie-4.4-rpi2_rpi3.img.gz`), your SD card, and click "Flash!"

*For more about burning SD images, see [Burn SD or USB](https://evanwill.github.io/_drafts/notes/burn-iso.html) note.*

## Start RetroPie

1. Put your SD into the RPI, plug the HDMI into a TV, and connect USB controllers.
2. Plug in the RPI and watch it boot. It will need go through some initial set up, such as expanding the file system--so this is a slow process, but only happens this once.
3. Follow on screen instructions to configure game pads. Tip: if configuration asks for more buttons than your device has, hold down one of the buttons to skip. 

After configuring the pads, you will see a menu, but no games will show up, because you haven't added any yet... 

*(personally I don't bother connecting to wifi, but you could)*

## Add ROMS

There are a few methods to get ROMs on your RetroPie, but the most foolproof way seems via their USB method:

1. Get a USB drive with enough space to hold all your ROMs, preferably one that has a LED indicator light.
2. Format the USB stick.
3. Create a single folder named `retropie` on the USB stick.
4. Plug the USB stick into your RetroPie, watch the busy indicator light and wait for it to stop flashing.
5. Unplug the USB stick from RetroPie (no need to "eject", just pull it out), and plug it back into your computer. 
6. Copy your ROMs into the correct folders in the directory structure set up by the RetroPie (i.e. inside `retropie/roms`... keep in mind the folders are named after the international model names, so don't necessarily match USA console names.)
7. Plug the USB stick back into the RetroPie, watch the indicator light and wait for it to stop flashing--this may take awhile depending on how many ROMs you are adding!
8. Restart the RetroPie via the menu system (access by clicking "Select + Start" on a game pad. Do not shut down your RPI by simply unplugging if possible, this has the potential to permanently corrupt your SD. When you give the shutdown command, wait for the screen to go blank and the green light on the RPI to stop blinking.)

However, my favorite *fast* method is to just pull out the SD and plug it into a linux computer. 
Then head into the `/retropie/home/pi/RetroPie/roms` directory, and copy roms into the correct folders. 
Unmount from your computer, and plug back into Pi. 

## Play!

You should be good to go!

General menu controls:
- A = select
- B = back
- Start = menu
- Start + Select (in game) = exit back to main menu
- Select + B (in game) = reset

To shut down: "Start" (for main menu) > "Quit" > "Shutdown System"
