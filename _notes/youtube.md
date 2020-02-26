---
title: YouTube API tips 
layout: post
tags: [tips, web]
date: 2019-05-06
---

YouTube is pretty handy for hosting video and audio to embed in your sites.
Here are some tips to use the embeds and image API effectively. 

## Video Embed Options 

When grabbing the embed iframe code from YouTube share button, I usually modify a few options. 
Some of these are documented in [YouTube Player iframe reference](https://developers.google.com/youtube/iframe_api_reference), but not all or very well...

- Privacy-enhanced mode: does not send data to YouTube unless users click play, is enabled by using domain `www.youtube-nocookie.com` rather than `www.youtube.com` in the iframe src.
- Related videos: the option `rel=0` asks YouTube to not show related videos. However, YouTube changed this option in 2018 and may still show related videos from the same channel (which is better than totally random stuff at least).
- Modest branding: the option `modestbranding=1` removes some YouTube branding from the iframe player. 

## Image API

YouTube image API is used by a ton of sites, yet doesn't seem to be documented anywhere by Google. 
Basically, you can get four sizes of the default thumbnail, or four smaller thumbnails from different points in the video.
You can use the domain "img.youtube.com" or "i3.ytimg.com"

Default images:

- thumb 120x90, https://img.youtube.com/vi/{{ youtubeid }}/default.jpg
- medium quality 320x180, https://img.youtube.com/vi/{{ youtubeid }}/mqdefault.jpg
- high quality 480x360, https://img.youtube.com/vi/{{ youtubeid }}/hqdefault.jpg 
- SD 640x480 (not available for all videos), https://img.youtube.com/vi/{{ youtubeid }}/sddefault.jpg
- max quality 1280×720 (or 1920x1080?, not available for all videos), https://img.youtube.com/vi/{{ youtubeid }}/maxresdefault.jpg 

Auto thumbs:

- default image 480x360, https://img.youtube.com/vi/{{ youtubeid }}/0.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/{{ page.youtubeid }}/1.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/{{ page.youtubeid }}/2.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/{{ page.youtubeid }}/3.jpg

For more control, you can use [YouTube Data API](https://developers.google.com/youtube/v3/), but it requires a key to access.
