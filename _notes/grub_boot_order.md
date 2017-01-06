---
title: Update Grub boot order on multi boot system
layout: post
tags: Linux
date: 2016-10-05
---

If you dual boot Windows and Linux, you will probably want to change the default boot order at some point. 
When logged into Ubuntu, open terminal:

`sudo nano /etc/default/grub`

Change `GRUB_DEFAULT=` to the value you want, based on its position on the GRUB menu when your computer starts up (the top OS is 0).
You can use the number or use the exact label like `GRUB_DEFAULT="Ubuntu 15"` 

If you want to just use the same OS as was choose last time, set `GRUB_DEFAULT=saved` and add a line `GRUB_SAVEDEFAULT=true`

Set `GRUB_TIMEOUT=` to the number of seconds you want to wait until it boots the default OS. 

Exit and save the file. 

To update the actual GRUB files, you must now run:

`sudo update-grub`

done!
