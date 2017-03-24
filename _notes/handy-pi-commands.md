---
title: Handy Raspberry Pi Commands
layout: post
tags: [rpi, linux]
date: 2016-01-05
---

cheat sheet of tips mainly for headless RPI 

## First time set up

default password for “pi” is “raspberry”

First time set up:
`sudo raspi-config`

update everything:
`sudo apt-get update && sudo apt-get upgrade`

## General

start GUI:
`startx `

shut down:
`sudo shutdown -h now`

## SSH

ssh into the pi:
`ssh pi@ip.address`

copy files to pi:
`scp filename pi@ip.address:~/destination/foldername/`

copy files From pi:
`scp pi@ip.address:~/source/file /destination/directory/`

## VNC - desktop sharing

install VNC:
https://www.raspberrypi.org/documentation/remote-access/vnc/

start a vnc server:
`vncserver :0 -geometry 800x600 -depth 16`

stop:
`vncserver -kill :0`

## Networking

check network config and get ip address:
`ifconfig `

edit config:
`sudo nano /etc/network/interfaces`

## Startup

edit startup:
`sudo nano /etc/rc.local`

## Mount USB drive

1. plug in the usb drive
2. find what the drive is called with `ls -l /dev/disk/by-uuid/`, normally it will be /sda1
3. create a directory to connect to the drive, i.e. a mount point: `sudo mkdir /media/usb`
4. make the main user, i.e. `pi`, the owner of the mount point: `sudo chown -R pi:pi /media/usb`
5. mount the drive: `sudo mount /dev/sda1 /media/usb -o uid=pi,gid=pi` (replace /dev/sda1 with your actual drive name if it is not the usual setup)

## Use a HDMI to VGA adapter

If you are trying to use an HDMI to VGA adapter, the pi will not detect the HDMI screen and will default to using composite video only.
You need to edit your `/boot/config.txt` file on the pi's SD card to manually tell it to use HDMI.
See eLinux RPiconfig for full info [about config.txt](http://elinux.org/RPiconfig).

1. Put your pi's SD card in a computer's card reader.
2. Find config.txt in the boot directory (which will likely be the only thing you can see from your computer).
3. Open `/boot/config.txt` in an editor.
4. Uncomment the line `hdmi_safe=1`
5. save
