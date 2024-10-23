---
title: Chromebooks Disable Touchscreen
layout: post
tags: [tips, linux]
date: 2024-10-05
---

I have several nice higher end Chromebooks that we got via pandemic money for remote schooling. 
The problem is that in most of the devices (2 out of 3) the touch screen goes wacky, causing all sorts of ghost clicking that makes it totally unusable. 
Which is too bad, since the devices are fine otherwise...

I wish Chromebook manufacturers wouldn't do such a terrible job on this hardware--these aren't cheapo ones, so it is really disappointing. 
Also, not sure why disabling touch screen isn't a built in short cut *or* why there isn't a permanent method to do so (and that is on ChromeOS)...

But, if you have them, and the screen starts going crazy, there is still a couple of ways to use it. 

## Connect to Monitor/TV

First, to escape wild behavior if the touch screen is making it impossible to even log in, connect the Chromebook to a monitor or TV. 
Hopefully your device has some port that will allow that (mine all have HDMI output).

Leave the Chromebook closed, connect the monitor, a keyboard, and mouse. 
Then push the power button to start the device up without opening the screen. 

This will allow you to get into the settings to fix things. 

(Or just keep using it as a desktop computer...)

## Use Chrome Flags

1. Open Chrome browser on the Chromebook.
2. Put `chrome://flags/` in the address bar.
3. Search for ash-debug-shortcuts
4. Switch ash-debug-shortcuts option to "Enabled"
5. Click Restart (which will restart the device)

Now you will have a new keyboard shortcut `Shift + Search + T` that toggles the touch screen on and off. 

Unfortunately, it will toggle back on each time you restart (for example when installing updates). 
This is okay if you can get the shortcut applied fast enough when logging in before the ghost action gets too wild.

However, if your touch screen is really out of wack, this can still be super frustrating.
One of my devices is super erratic, sometimes fine I can toggle off the touch screen and log in and be happy--other times the ghosting starts zooming in and out and randomly clicking all over resulting in all kinds of wild activity.
To recover, you can always go back to connecting to a monitor--but if this is the case you might want to go more drastic.

## Developer Mode

If you want to go further, you have to switch on Developer Mode. 
This will erase all the local data and set up. 

Unfortunately, Chromebook is a maze of proprietary weird exceptions, so pretty much nothing you find online with *exactly* match up with your actual device. 
It goes out of date fast and each vendor has a bunch of odd custom stuff.

- [enable developer mode](https://techysnoop.com/enable-disable-chrome-os-developer-mode-chromebook/)
- [permanently disable touchscreen via shell](https://techysnoop.com/disable-touchscreen-on-chromebook/) - however, this does NOT work for me (xinput not found) and I have been unable to debug or find any other suggestion.
- Install something else, [chrultrabook](https://docs.chrultrabook.com/) and [mrchromebox](https://docs.mrchromebox.tech/docs/getting-started.html).

Some handy key shortcuts:

- Open crosh shell: `Ctrl + Alt + T`
- Switch to VT-2 shell with sudo commands: `Ctrl + Alt + ->/F2` (log in as "chronos")
- Switch back to crosh: `Ctrl + Alt + <-/F1`
