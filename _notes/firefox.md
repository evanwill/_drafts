---
title: Firefox Tips
layout: post
tags: [web, linux]
date: 2024-07-05
---

Tips about Firefox:

- Preferences > Privacy & Security > check "Use a primary password" and set. This ensures your saved passwords are encrypted on your device.
- Add Firefox [Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/?src=search), [Facebook Container](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/)
- Add adblocker such as [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search)

## Disable Gestures

I have issues accedentally going back via the default "guestures" for "swipe" somehow causing Back at random on my touch pad. 
Turn off the option to avoid this issue: 

- in address bar, type `about:config`
- accept the risk warning
- search for `browser.gesture`
- in the `.swipe.left` and `.swipe.right` options, click the edit icon, delete the value, and click the check icon to save.

## Issues with Cisco VPN

For some weird reason, Cisco AnyConnect / Secure Client has issues with Ubuntu + Firefox for authentication. 
To avoid issues, first go to Ubuntu Settings > Connectivity and uncheck the option. 
Second, use Chromium for authentication...
