---
title: Burn SD or USB for Raspberry Pi and more!
layout: post
tags: [linux, rpi, workshop]
date: 2017-01-27
---

> MILL-Mini workshop 2017-01-27.
> This session will take you through the Why and How of burning ISO/IMG files to SD or USB for single board computers or installing Linux.

## Background

Burning a disk image or bootable USB stick is an important task if you want to use Raspberry Pi or Linux. 
When you buy a Windows, Chromebook, or Mac computer, the operating system (OS) comes pre-installed. 
However, if you are interested in running Linux or other open OS, you will most likely have to install it yourself. 
Traditionally, installation was done by burning a disk image onto a bootable CD or DVD. 
Since most devices no longer have optical drives, we now create bootable SD or USB instead. 

## Copying files versus burning an image

A Raspberry Pi doesn't come with an OS. 
To get started using your Pi, you need to add a OS to a SD card. 
You can simply copy [NOOBS](https://www.raspberrypi.org/downloads/noobs/) on to an SD card, and it will magically work! 
But that is **NOT** burning a disk image. You have only copied the files on to the SD's existing file system.

If you want to try any other Pi OS, it will come as an IMG file.
Most [linux distributions](https://distrowatch.com/) are provided as an ISO file.
IMG and ISO are exact binary copies of a storage device. 
If you simply copy them over to an SD, nothing will happen. 
The image has to be "burnt", essentially overwriting the entire media removing the existing file system.

So let's get an image and burn it to some media!

## 1. Get an IMG / ISO

For Raspberry Pi and other single board computers, you will usually get an IMG file representing an hard drive image. 
These are often zipped or in some other archive (`.zip` or `.xz`) to decrease the download size. It is not necessary to unzip. 
For example:
- [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) Official OS of Raspberry Pi
- [Volumio](https://volumio.org/)

Linux distros are generally released as an ISO, often called a "live cd" or "live usb" meaning it can boot from the install media.
For example:
- [Ubuntu](https://www.ubuntu.com/)
- [KDE Neon](https://neon.kde.org/)
- [Korora](https://kororaproject.org/)

Some linux distros are specifically designed to be portable. You always use them from a USB stick and do not install to a hard drive.
For example: 
- [Puppy Linux](http://puppylinux.org/)
- [Slax](https://www.slax.org/en/)
- [Porteus](http://www.porteus.org/)

Many specialized utilities are also distributed as images so that they can be run from portable media to make changes to a system without a functioning OS. 
For example:
- [GParted Live](https://gparted.sourceforge.io/livecd.php)
- [DBAN](https://dban.org/)
- Anti-virus rescue CDs
	- [Bitdefender](https://www.bitdefender.com/support/how-to-create-a-bitdefender-rescue-cd-627.html)
	- [AVG](http://www.avg.com/gb-en/rescue-cd-business-edition)

## 2. Get media

Now you need a micro SD card for Raspberry Pi or a USB stick for linux on a computer.
Be sure to get media that is bigger than the image you want to burn! 

- **SD cards:** There is a confusing variety of SD cards out there today. Look for one labelled SDHC (SDXC are incompatible with some systems), Class 10 / UHS 3. The numbers aren't essential, but faster read/write speeds will give better performance. 8GB is standard, but I would get 16GB, since the SD card will be the main hard drive for your Pi. If your computer does not have an SD slot, get a SD reader.
- **USB drives:** Most USB drives will be fine for installing linux. However, if you want to use it as a live USB or portable desktop, look for USB 3 versions with faster read/write speeds if possible.

**Optional: Format media.**
If you have previously used the media, you might want to start with a nice clean disk by re-formatting. 
If you are on Windows or Mac, get the official [SD Formatter](https://www.sdcard.org/downloads/formatter_4/index.html).
This will enable you to restore SD or USB you have previously burnt, which Windows and Mac are unable to actually read. 
On linux, the built in formatting utilities are generally sufficient to restore and format media. If necessary use Gparted and format to fat32.
However, when using Etcher, formatting before burning is rarely necessary.

## 3. Get Etcher

[Download Etcher](https://etcher.io/) for your system, and extract the `.zip` file (you should get a single `.AppImage` file on Linux or an `.exe` on windows).

Why Etcher and not the million other options out there? 

- easy to use, it automatically selects the right drives and just works!
- can burn from archived (.zip, .7z, etc) images automatically
- open source, cross platform, and easy to install
- new and actively developed (most are not)
- fast and efficient

## 4. Burn image

Start up Etcher by clicking on the `.AppImage` file (or on windows the `.exe`). Etcher makes the rest easy!

1. Plug your media into your computer.
2. Select the image.
3. Select the SD/USB (if you have only one plugged in, it will be automatically selected).
4. Click Flash! (you may need to authenticate at this point, since you are making changes to a drive)
5. Wait. Wait... 
6. Remove your SD/USB.

Now you can go play with your Raspberry Pi or try out a new Linux distro!

See [Boot a Live USB](https://evanwill.github.io/_drafts/notes/linux-boot-usb.html) for tips about how to get the USB to boot on your computer.
