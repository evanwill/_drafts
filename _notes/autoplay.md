---
title: Disable Autoplay
layout: post
tags: [web]
date: 2016-02-30
---

Autoplay video ads and content are amazingly annoying. 
Anyone who lived through the era of popups knows ad creators don't care about user experience, but I still don't understand why they think aggressive, annoying, and abusive additions to a web page will actually help sell stuff. 
Maybe they are driven by analytics numbers showing users interacting with the ads--unfortunately in most cases it's users trying to figure out how to block, disable, and dismiss the intrusion. 

In any case, ads that run using Flash or other plugins can and should be blocked simply by having all plugins ask before running. HTML 5 autoplay videos are a bit different. 

One option is to add a plugin that blocks autoplay, such as Firefox [Flashstopper](https://addons.mozilla.org/en-US/firefox/addon/flashstopper/), which despite its name blocks HTML5 autoplay as well. 

If you want to go further, Firefox has a relatively new and hidden setting to prevent most from playing as you load the page, although its not perfect. 
In your Firefox address bar, type `about:config` to bring up the manual configurations. If you haven't used it before, you will have to dismiss a warning about how its dangerous to modify things. Yep. 
Now search for `autoplay` using the box at the top. You should find a preference called `media.autoplay.enabled` with the value `true`. Right click on the value and choose `Toggle` to change it to `false`. 
Close the config, and restart Firefox.
Most HTML5 videos set to autoplay should now be blocked! The only problem is that a lot of sites use video autoplay for content you actually want to see and haven't implemented their videos properly to allow the user to start them manually. For example, video on Twitter doesn't seem to work with autoplay disabled. This is either bad developing, not realizing that there is use cases where a video needs to be started manually, or just intentional anti-feature to force you to watch auto play spam if you want to watch their legitimate content.
