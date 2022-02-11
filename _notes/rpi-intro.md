---
title: Intro to Raspberry Pi
layout: post
tags: [rpi, workshop]
date: 2019-10-07
---

> Please see [newer version of this outline](https://evanwill.github.io/_drafts/notes/rpi-intro2.html).
> Some content below is out of date.

## Arduino vs. Raspberry Pi

Both are very flexible, with great documentation and community.

Arduino: 

- microcontroller, 8-bit, tiny memory
- very simple, solid, reliable
- very low power consumption
- do one thing really well

Raspberry Pi:

- Single board computer, 32/64-bit CPU, 512MB - 4GB RAM
- Connect: USB, Ethernet, Wifi, Bluetooth
- Output: Video (HDMI), audio (HDMI, 3.5mm jack), GPIO pins
- Full operating system 
- Use high-level programming languages (mainly Python)
- can do MUCH more than Arduino, but...
    - consumes much more power and requires steady power supply
    - OS requires updates
    - less reliable overall

e.g. [poemBot](https://github.com/evanwill/poemBot)

### Raspberry Pi starter kit

- [Boards](https://www.raspberrypi.org/products/) (A, B, Zero, Compute, [spec chart](https://en.wikipedia.org/wiki/Raspberry_Pi#Specifications))
- Power supply (you need a good one! A rainbow icon shows up on screen if power goes low)
- SD card (try to get decent quality, high read/write speed, "SDHC, Class 10 / UHS 3", min 8GB)
- [Console cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/overview)
- [Keyboard](https://www.logitech.com/en-us/product/wireless-touch-keyboard-k400r?crid=27), mouse, HDMI cord
- add ons / HATs
- [ribbon cable](https://www.adafruit.com/product/1988) + breadboard

# Get Started 

First step is to choose an OS for your Pi and burn it to your SD card.
See [official step-by-step](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up) for a visual walk through.
Most likely you will want to start with NOOBS (does not require burning image) or an image of Raspbian:

**NOOBS**

- [NOOBS](https://www.raspberrypi.org/downloads/noobs/) is an automatic Pi OS installer designed to be super simple
- Download NOOBS, unzip, copy to SD card (you do NOT burn an image, just copy)
- Plugin SD, connect video, keyboard, and power to Pi
- Follow instructions!

**Burn image to SD**

- See [Burn ISO note](https://evanwill.github.io/_drafts/notes/burn-iso.html)
- Download [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) (headless or desktop) (Linux distro for Pi, based on [Debian](https://www.debian.org/), see [Intro to Linux note](https://evanwill.github.io/_drafts/notes/linux-intro.html))
- [SD Formatter](https://www.sdcard.org/downloads/formatter/index.html)
- [Etcher](https://www.balena.io/etcher/)
- Plug SD into Pi, boot up!
- see [Raspbian docs](https://www.raspberrypi.org/documentation/raspbian/)

## Use Pi

- GUI (i.e. plugin HDMI, this is often easiest way to get started, even if you are planning to go headless)
- [console cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/overview) (can be handy for developing headless projects, can provide power to the board)
- SSH (not possible on university wifi) `ssh pi@ip.address`
    - enable on Pi
    - [find IP address](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)
    - [use SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/README.md)
    - copy files to Pi: `scp filename pi@ip.address:~/destination/foldername/`
    - copy files from Pi: `scp pi@ip.address:~/source/file /destination/directory/`
- [VNC (virtual desktop)](https://www.raspberrypi.org/documentation/remote-access/vnc/README.md)
    - enable/install on Pi
    - install client, use cloud service
- Tip: plug SD into computer to directly edit file system!
- `/etc/rc.local` file runs at boot, so you can add command line calls to start your program

## Resources 

- Offical Raspberry Pi [Documentation](https://www.raspberrypi.org/documentation/), [Help](https://www.raspberrypi.org/help/), and [Forum](https://www.raspberrypi.org/forums/)
- [Adafruit Learn](https://learn.adafruit.com/), [pi category](https://learn.adafruit.com/category/learn-raspberry-pi)
- Play around to learn more: [Volumio](https://volumio.org/) music center, [RetroPi](https://retropie.org.uk/)
