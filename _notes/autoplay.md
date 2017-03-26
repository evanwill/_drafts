---
title: Disable Autoplay
layout: post
tags: [web]
date: 2016-02-30
---

Autoplay video and audio ads and content are amazingly annoying. 
Anyone who lived through the era of popups knows ad creators don't care about user experience, but I still don't understand why they think aggressive, annoying, and abusive additions to a web page will actually help sell stuff. 
Maybe they are driven by analytics numbers showing users interacting with the ads--unfortunately in most cases it's users trying to figure out how to block, disable, and dismiss the intrusion. Personally, I hate autoplay content just as much as ads, but some website seem convinced you want video and you want it to play immediately, and you don't want to be able turn it off or hide it on your own. I mean, what do you know anyway, your just the user?? 

In any case, ads that run using Flash or other plugins can and should be blocked simply by having all plugins ask before running. Many autoplay ads will be blocked by an adblocker, such as [uBlock Origin](https://github.com/gorhill/uBlock). However, HTML5 autoplay content videos / audio are a bit different.

Here is some options to block them:

## Firefox

- add [Flashstopper](https://addons.mozilla.org/en-US/firefox/addon/flashstopper/) plugin, which despite its name blocks HTML5 autoplay as well as Flash. 
- If you want to go further, Firefox has a relatively new and hidden setting to prevent most from playing as you load the page, although its not perfect. 
In your Firefox address bar, type `about:config` to bring up the manual configurations. If you haven't used it before, you will have to dismiss a warning about how its dangerous to modify things. Yep. 
Now search for `autoplay` using the box at the top. You should find a preference called `media.autoplay.enabled` with the value `true`. Right click on the value and choose `Toggle` to change it to `false`. 
Close the config, and restart Firefox.
Most HTML5 videos set to autoplay should now be blocked! The only problem is that a lot of sites use video autoplay for content you actually want to see and haven't implemented their videos properly to allow the user to start them manually. For example, video on Twitter doesn't seem to work with autoplay disabled. This is either bad developing, not realizing that there is use cases where a video needs to be started manually, or just intentional anti-feature to force you to watch auto play spam if you want to watch their legitimate content.

## Chromium / Chrome

- add [Disable HTML5 Autoplay](https://chrome.google.com/webstore/detail/disable-html5-autoplay/efdhoaajjjgckpbkoglidkeendpkolai) plugin. Unforturnately, this plugin is not actively developed (check news at the [repository](https://github.com/Eloston/disable-html5-autoplay)). There is some hints that the functionality will move to [uBlock Origin](https://github.com/gorhill/uBlock).
- be sure to enable tab muting (available by default in Firefox): paste `chrome://flags/#enable-tab-audio-muting` into the address bar. Click `Enable` to toggle the feature on. Now you can click on the little speaker icon on any tab to mute the audio.

