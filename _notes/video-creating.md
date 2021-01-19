---
title: "OBS: Creating Screencast Videos"
layout: post
tags: [images, open, workshop]
date: 2020-12-04
---

[Open Broadcast Studio (OBS)](https://obsproject.com/) is an open source, cross platform tool for recording and live streaming video. 
It is focused on performance for video game streaming, but works well for creating instructional videos where you would like to share a screen cast of using software.

To install, grab the package from the main website. 
On Linux, first make sure you have ffmpeg installed, `sudo apt install ffmpeg`, then [add the PPA](https://obsproject.com/wiki/install-instructions#linux).

## Tips

- By default all audio sources are active which might result in crummy sound--so you might want to mute/disable desktop audio, and the mic on your webcam if you have a separate headset mic.
- If you want to use a webcam in multiple scenes: first make a scene that is just the webcam full screen, then add that scene to other scenes (adding it as a source to multiple scenes doesn't work).

## Handy Utilities

- [vidcutter](https://github.com/ozmartian/vidcutter) is a handy visual utility for cutting and combining videos. Installing via Flathub seems to work well--don't use old distro repository versions, since they probably won't work.
- Use ffmpeg to convert formats: `ffmpeg -i input.mp4 output.webm` (see [tips](https://opensource.com/article/17/6/ffmpeg-convert-media-file-formats))
- [combine videos with ffmpeg](https://trac.ffmpeg.org/wiki/Concatenate)
