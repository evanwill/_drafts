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

This will look like:

```
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oacUgWXrqwc?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Image API

YouTube image API is used by a ton of sites, yet doesn't seem to be documented anywhere by Google. 
Basically, you can get four sizes of the default thumbnail, or four smaller thumbnails from different points in the video using a YouTube ID.
Find the YouTube ID by look at the `v` key parameter at the end of the video's url or the last part of the "Share" url.
For example, in 

```
https://www.youtube.com/watch?v=oacUgWXrqwc

or

https://youtu.be/oacUgWXrqwc
```

the youtube id is `oacUgWXrqwc`.
Use that string to replace `< youtube id>` in the api recipes below.

Default images:

- thumb 120x90, `https://img.youtube.com/vi/< youtube id >/default.jpg`
- medium quality 320x180, `https://img.youtube.com/vi/< youtube id >/mqdefault.jpg`
- high quality 480x360, `https://img.youtube.com/vi/< youtube id >/hqdefault.jpg`
- SD 640x480 (not available for all videos), `https://img.youtube.com/vi/< youtube id >/sddefault.jpg`
- max quality 1280×720 (or 1920x1080?, not available for all videos), `https://img.youtube.com/vi/< youtube id >/maxresdefault.jpg`

Auto thumbs:

- default image 480x360, https://img.youtube.com/vi/< youtube id >/0.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/< youtube id >/1.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/< youtube id >/2.jpg 
- alternate thumb 120x90, https://img.youtube.com/vi/< youtube id >/3.jpg

Note: you can use the domain "img.youtube.com" or "i3.ytimg.com".

For more control, you can use [YouTube Data API](https://developers.google.com/youtube/v3/), but it requires a key to access.
