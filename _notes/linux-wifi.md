---
title: University Wifi on Linux
layout: post
tags: [linux, tips]
date: 2025-06-02
---

Sometimes connecting to secure wifi at institutions like universities is not so obvious and easy on Linux, it doesn't just connect but asks you for a bunch of configuration options. 

Go to your full Settings > Wi-Fi, click on the network name, which will get you to a security settings form with a lot of options.
In my experience, if you are trying to connect to most university wifi or eduroam, this is usually the correct configuration:

- Security: WPA & WPA2 Enterprise
- Authentication: Protected EAP (PEAP)
- Anonymous identity: [leave blank]
- Domain: [leave blank]
- CA certification: None
- check off "No CA certificate is required"
- PEAP version: Automatic
- Inner authentication: MSCHAPv2
- Username: [your individual username or email, for eduroam this is your full home institution email]
- Password: [your individual password]

Since your password is saved, don't share this with other users on your system.

