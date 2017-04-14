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

## Get an IMG / ISO

For Raspberry Pi and other single board computers, you will usually get an IMG file representing an hard drive image. 
These are often zipped or in some other archive (`.zip` or `.xz`) to decrease the download size. It is not necessary to unzip. 
For example:
- Official Raspberry Pi OS, https://www.raspberrypi.org/downloads/
- Volumio, https://volumio.org/

Linux distros are generally released as an ISO, often called a "live cd" or "live usb" meaning it can boot from the install media.
For example:
- Ubuntu, https://www.ubuntu.com/desktop
- KDE neon, https://neon.kde.org/
- Korora, https://kororaproject.org/

Some linux distros are specifically designed to be portable. You always use them from a USB stick and do not install to a hard drive.
For example: 
- Puppy Linux, http://puppylinux.org/
- Slax, https://www.slax.org/en/
- Porteus, http://www.porteus.org/

Many specialized utilities are also distributed as images so that they can be run from portable media to make changes to a system without a functioning OS. 
For example:
- GParted Live, http://gparted.sourceforge.net/livecd.php
- DBAN, http://gparted.sourceforge.net/livecd.php
- Anti-virus rescue CDs
	- Bitdefender, https://www.bitdefender.com/support/how-to-create-a-bitdefender-rescue-cd-627.html
	- AVG, http://www.avg.com/gb-en/rescue-cd-business-edition 

## Get media

Now you need a micro SD card for Raspberry Pi or a USB stick for linux on a computer.
There is a confusing variety of SD cards out there today. 
Look for one labelled SDHC (SDXC are incompatible with some systems), Class 10 / UHS 3. 
The numbers aren't essential, but faster read/write speeds will give better performance. 
Most USB drives will be fine for installing linux.
If you want to use it as a live USB or portable desktop, look for USB 3 versions with faster read/write speeds if possible.

Be sure to get media that is bigger than the image you want to burn! 
8GB is standard, but I would get 16GB.

Do you have an SD slot on your computer?
If not get an SD reader! 

## Format media

Start with a nice clean disk! 
If you are on Windows or Mac, get the official [SD Formatter](https://www.sdcard.org/downloads/formatter_4/index.html).
This will enable you to restore SD/USB you have previously burnt, which Windows and Mac are unable to actually read. 

On linux, the built in formatting utilities are generally sufficient to restore and format media. If necessary use Gparted and format to fat32.

## Get Etcher

[Download Etcher](https://etcher.io/#downloads) for your system, and extract the `.zip` file (you should get a single `.AppImage` file on Linux or an `.exe` on windows).

Why Etcher and not the million other options out there? 
- open source and cross platform
- new and actively developed (most are not)
- easy to install 
- easy to use, it automatically selects the right drives and just works!
- can burn from archived (.zip, .7z, etc) images automatically
- fast and efficient
- good verification 

## Burn image

Start up Etcher by clicking on the `.AppImage` file (or on windows the `.exe`). Etcher makes the rest easy!

1. Select the image.
2. Select the SD/USB.
3. Click Flash!
4. Wait. Wait... 
5. Remove your SD/USB.

Now you can go play with your Raspberry Pi or try out a new Linux distro!

## Appendix: Tips for booting from USB  

Burning a live USB is a great way to test out linux distros. 
However, for it to work you need to boot from USB. 
For some systems, this is not the default. 
Plug in your USB drive, then turn on your computer.
If it just boots as normal to your OS, you will need to change the boot order.

For older systems BIOS controls the boot order. 
To change it, you will have access the BIOS options menu as the computer powers on. 
Each device is slightly different, but as the computer starts to boot you should see a screen with the manufacture’s logo and a message that tells you which key to press--sometimes its so fast you can’t read it! The key is usually F1, F2, DEL, ESC, or F10 (here are some [tips from Pendrivelinux](https://www.pendrivelinux.com/how-to-access-bios/)).
Navigate the BIOS options and set USB first in the list of boot devices.

Newer systems will have UEFI Secure Boot (instead of traditional BIOS), and Windows 10 makes things a bit more complicated.
Each vendor is different, and some have a special key at start up to enter the EFI/UEFI boot order menu allowing you to choose to the boot device. However, you should do some set up first.
Here are the steps if you want to try out or install Linux on your Windows 10 machine:

1. Take precautions: 

	- Make a backup. You should make a backup of all your critical files anyway, but now is a good time to make sure you have everything you *really* want saved in multiple stable locations. 
	- Make a Windows Recovery Drive. Search your system for "recovery" and the option to create a recovery drive will pop up. This ensures you can reinstall or repair Windows if necessary
	
2.  Disable Fast Startup:

	- Fast Startup needs to be disabled or you will not get the option to boot from USB and your linux install will not be able to properly identify the Windows boot manager.
	- Open the Control Panel > Power Options.
	- Click "Choose what the power button does", then "Change settings that are currently unavailable"
	- Uncheck the box next to "Turn on fast startup (Recommended)"
	- Completely shutdown your computer (not sleep, hibernate, or restart).
	
3. Enable USB Boot:

	- Plug in your linux USB.
	- Start your machine, some systems may boot the USB directly or will have a key to enter EFI boot options and choose USB. If you don't see this, keep booting into Windows 10.
	- Go to the Windows shutdown menu, Hold `shift` key and click restart. Keep holding `shift`. 
	- You should see a blue boot options menu, select "Use a device", then select your USB.

There is a lot of variation in how to access BIOS and UEFI options from different computer companies, so if it doesn't seem to work, try searching for help on your specific model or manufacturer. 
When trying and installing most major Linux distributions you do NOT need to disable Secure Boot. 
