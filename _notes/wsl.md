---
title: Windows Subsystem for Linux
layout: post
tags: [shell, windows, wsl]
date: 2020-04-28
---

On Windows I use Git Bash (from [Git for Windows](https://git-scm.com/)) for everyday commandline tasks.
Occasionally I need something a bit more complete and have used [Cygwin](https://evanwill.github.io/_drafts/notes/cygwin.html) in the past.
However, [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (WSL) is now offering a great alternative that is easy to install. 

> *P.S.* [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-about) sounds even better, but I don't have an up-to-date enough Windows built to try it.
> *P.S.S.* If you are using Bash commandline a lot, why not just [try to linux](https://evanwill.github.io/_drafts/notes/linux-workshop.html) fulltime or dual boot!

## Install WSL

Check the [official install docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for details, but recent improvements has made installing WSL relatively easy. 

1. Enable WSL by opening PowerShell as admin and running `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`. You will probably have to restart.
2. Open "Microsoft Store" app and search for your preferred distro (check the author to ensure it is official). I suggest the latest LTS Ubuntu from "Canonical Group Limited", currently 20.04 LTS. 
3. On the app listing, click "Get" button then "Install".
4. Once installed, click "Launch" on the app listing, or find and click in your Start Menu. This will open up a terminal window that says something about initializing. This first time startup will take awhile, a few minutes at least. 
5. Once initialization finishes, a prompt will appear in the terminal to create a username and password. This will be your sudo admin user (and is not related to your Windows accounts). 
6. Once your user is set, a normal terminal prompt will appear. Update your system since this is not done automatically (Ubuntu: `sudo apt update`, then `sudo apt upgrade`).
7. All ready! Now you can find it in your Start Menu, or from the context menu when holding Shift.

## WSL Tips

- From WSL terminal, your Windows files are at `/mnt/c/`.
- The easiest way to get to a Windows file location is to hold `Shift` then right click in a folder in Explorer--the context menu will have the option "Open linux shell here".
- On the Windows side, your WSL files are somewhere in `C:\Users\<username>\AppData\Local\Packages`, but Windows says don't mess with that. Up-to-date Window's builds allow you to access WSL directly in Explorer at `\\wsl$\`. If you are in WSL terminal, type `explore.exe .` to open Explorer in that location.
- Updates are not automatic, so update manually when you use it.
- Uninstall is easy via Microsoft Store app. 
- If you forget your user password it is possible to [reset via Powershell](https://docs.microsoft.com/en-us/windows/wsl/user-support#reset-your-linux-password).
