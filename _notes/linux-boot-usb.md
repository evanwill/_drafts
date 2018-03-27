---
title: Boot a Live USB
layout: post
tags: [linux, workshop]
date: 2018-03-26
---

Burning a live USB is a great way to test out Linux distros (*see* [Burn SD/USB](https://evanwill.github.io/_drafts/notes/burn-iso.html) and [Linux Intro](https://evanwill.github.io/_drafts/notes/linux-intro.html) notes). 
However, for it to work you need to boot from USB. 
For most systems this is not the default and you will have to intervene as your computer starts up.

The boot process is controlled by the BIOS or UEFI installed by your computer manufacturer. 
Since each company creates a slightly different firmware, there is a lot of variation in how to exactly interrupt normal startup--but this note tries to gather some general tips together. 

## Backup

If you are messing around with your computer, its a good time to take some basic precautions to give you peace of mind--these are best practices that you should follow anyway!
Backup of all your files on external storage to make sure you have everything you *really* want saved in multiple stable locations.

On Mac, review how to get to [macOS Recovery](https://support.apple.com/en-us/HT201314).
On Windows, make a Windows Recovery Drive on a USB stick (search your system for "recovery" and the option to create a recovery drive will pop up. This ensures you can reinstall or repair Windows if necessary).

## Windows 10 / 8 Prep

Windows 10 / 8 overwrite parts of the file system to enable quicker boot times, bypassing the traditional boot process. 
This "Fast Startup" needs to be disabled or you will not have the option to boot from USB and your linux install will not be able to properly identify the Windows boot manager.

- Open the Control Panel > Power Options.
- Click "Choose what the power button does", then "Change settings that are currently unavailable"
- Uncheck the box next to "Turn on fast startup (Recommended)"
- Completely shutdown your computer (not sleep, hibernate, or restart).

## Secure Boot

Newer PCs have a [Secure Boot](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_boot) feature that prevents unsigned OS from booting on the system.
Major Linux distributions (Ubuntu, Fedora, SUSE) have secure signatures that allow them to run on systems with Secure Boot (you do NOT need to disable it).
However, smaller distros do not, so the Secure Boot will have to be disabled.
If you try the Boot USB tips below, but after selecting the USB the system skips it and boots into the normal OS--Secure Boot is probably at work and should be disabled.

To disable Secure Boot: 

- Enter your BIOS menu during bootup (see tips as below) or while in Windows: go to the shutdown menu, hold the `shift` key and click Restart, from the recovery menu select "Troubleshoot" then "Advanced Options: UEFI Firmware Settings".
- Look for the Secure Boot settings under the Security, Boot, or Authentication tab (each manufacturer is different).
- Set Secure Boot to Disabled.
- Save changes and exit

(See more advice from [Microsoft help](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/disabling-secure-boot))

## Boot USB

With your system fully shutdown, plug your Live USB into your computer. 

If your computer currently has Linux or Mac installed, it *might* be easy:

- **On Linux:** turn on the computer, when you see the GRUB boot menu, use arrow keys to select "System Setup". This should open the machine's BIOS/UEFI menu, which should have a boot device option.
- **On Mac:** turn on the computer, immediately press and hold the `Option` key. This should bring you to the "Startup Manager" allowing you to select the USB drive (more tips on [Mac help](https://support.apple.com/en-us/HT202796)).

*Otherwise*, try the following tips:

Press the power button--then watch closely! 
Each device is different, but just as the computer starts to boot you should see a screen with the manufacture’s logo and a message that tells you which key to press to "interrupt the boot process", enter BIOS/UEFI, or "choose a boot device".
Sometimes it flashes by so fast you can’t read it! 

The key is usually F12, Esc, F11, F10, F9, F1, F2, or DEL (here are some tips from [Pendrivelinux](https://www.pendrivelinux.com/how-to-access-bios/) or [gpost](https://www.groovypost.com/howto/bios-uefi-setup-guide-boot-from-cd-dvd-usb-drive-sd-card/)).
If your laptop has a compact keyboard, be sure to use the correct key combo (often `fn` + key).
Click the key repeatedly until you get a response, if it flashes by too quick and starts booting Windows, hold the power button to shut down, then try again.

Here are some possible outcomes: 

- **Choose Boot Device:** If you are lucky, your vender provides the "choose a boot device" option. Once you click the correct key, a small menu will appear listing the available disk drives in the system. Look for your USB's label and size to identify the correct drive. Use the arrow keys to highlight the USB drive, then click enter to boot--Success!
- **BIOS Boot Order:** For older systems if you get into a BIOS menu, but can't find a "choose a boot device" option, look for a "Boot order" setting. Use the menu to change the boot order, moving USB drives to the top (traditionally, optical drives are at the top, then hard drives). Save and exit the BIOS menu and reboot--the USB should boot.
- **Locked down UEFI:** On some Windows 10 / 8 machines, UEFI has been made a bit more complicated and there is no boot device or boot order options at start up. Allow Windows to boot up. First, make sure you have disabled "Fast Startup" as described above. Then, go to the Windows shutdown menu, hold the `shift` key and click Restart. This should bring up a blue boot options menu, select "Use a device", then select your USB.  Alternatively, try Settings > Update & security > Recovery, then look for "Advanced startup" and click "Restart now".

There is a lot of variation in exactly how to access BIOS and UEFI options from different computer companies, so if none of this seems to work, try searching for help on your specific model and manufacturer. 
