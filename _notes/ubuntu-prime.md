---
title: Issues Switching NVIDIA mode on Ubuntu
layout: post
tags: [ubuntu, linux]
date: 2022-11-22
---

Ubuntu supports NVIDIA graphics cards out of the box with a proprietary driver that allows you to switch between different modes on your laptop for battery life, called "PRIME profiles":

- nvidia (nvidia gpu always on high performance mode)
- on-demand (turn on nvidia for select tasks only)
- intel (use only builtin gpu for power saving)

Any change in profile requires a restart.

In general, switching profiles is possible using the "NVIDIA X Server Settings" application, which also gives you lots of details about your graphics card when in NVIDIA modes.
However, I find that the NVIDIA settings app can switch from intel into nvidia modes, but *not* back to intel mode... 

So as an alternative that always works, you can use the command line `prime-select` command to switch profiles.
Use `prime-select -h` to list the options. 

To check the profile currently in use, `prime-select query`. 
To switch to a different profile, use `sudo prime-select intel` (with either `nvidia`, `intel`, or `on-demand`). 
Then restart your system!
