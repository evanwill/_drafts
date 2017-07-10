---
title: Transfer iPhone to Linux
layout: post
tags: [linux, tips]
date: 2017-06-01
---

There was a brief time when you could simply plug your iPhone in to your Linux computer via USB and access the photos. For all logical people this seems like sensible functionality. So of course, Apple killed it with the latest iOS 10 updates (cause Apple hates users, linux, and openness as far as I can tell based on my experience). 

But maybe you are like me, you have an iPhone that some one gave you and you need to get the photos off. Don't mess around with searching years and years of forum posts for solutions, because iOS changes constantly and intentionally prevents the functionality you want and expect. If you have iOS <=9, Ubuntu will work with it automatically. If you have iOS >=10, as of around March 2017 none of the old solutions to directly connect via USB will work. 

The utility package `libimobiledevice` that allowed connection to iOS ships with Ubuntu now, but doesn't seem to work alone with iOS 10+.
Some have suggested downloading the most recent source code and manually building `libimobiledevice` works.
However, with most i-devices, adding the simply `ifuse` package seems to bring back normal plugin functionality, but you have to manually mount the iphone's drive.

Install it via `sudo apt install ifuse`.
Then you can use `ifuse` to mount the iPhone file system: 

1. make sure it is connected: `idevicepair validate`
2. create a mount point: `mkdir ~/phone` 
3. mount the phone's file system: `ifuse ~/phone`
4. now you can navigate to the directory and copy files off the phone (images are in "DCIM")
5. unmount the iphone: `fusermount -u ~/phone`

Now if that didn't work, oddly enough, the easiest solution seems to be FTP:

1. On the iphone, install `FileExplorer` by Skyjos. 
2. You can't directly share your photo library, so using the `FileExplorer` app, create a new "local" folder and copy your photos to it.
3. On the Local tab, click the wifi icon to start a FTP server.
4. Using the IP address and port given by the app, connect from your computer. The url is basically `ftp://[ip-address]:[port]`. On Ubuntu the easiest method is to use the built in "connect to a server" feature of the Nautilus file explorer. Open the file browser, click on "Other Locations", look at the bottom of the window for "Connect to Server". Type in the url and click connect. Now you can copy & paste where ever you would like!
