---
title: Burn a ISO image to SD or USB
layout: post
tags: usb, linux, rpi
date: 2016-12-10
---

If you are installing Linux distros or working with Raspberry Pi, you probably need to burn a `.iso` or `.img` to a USB stick or SD card regularly. 
I have used a bunch of different techniques and tools, but always had inconsistent results on Linux. 
However, a fairly new app, [Etcher](https://etcher.io/) seems to make it insanely easy on any OS.
It just works: 

1. [Download Etcher](https://etcher.io/#downloads) for your system, and extract the `.zip` file (you should get a single `.AppImage` file on Linux or an `.exe` on windows).

2. Download your ISO, for example maybe you want [Raspbian with PIXEL](https://www.raspberrypi.org/downloads/raspbian/) for your Raspberry Pi. You do NOT need to unzip the download! Images are often packaged in different archives, but Etcher will deal with extracting them automatically. 

3. Insert your media, USB stick for Linux live install or SD for Raspberry Pi image. 

4. Start up Etcher by clicking on the `.AppImage` file (or on windows the `.exe`). 

5. Select your ISO image (or the archive package containing the image), your drive, and `Flash!`. Wait around for it to finish! 

