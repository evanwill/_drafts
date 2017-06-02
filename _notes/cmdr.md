---
title: Using Cmdr
layout: post
tags: [shell, windows]
date: 2017-05-06
---

[Cmdr](http://cmder.net/) is a fully featured terminal emulator for Windows that can host a variety of shells, including Git for Windows Git Bash. 
[Download](http://cmder.net/) the **full** version and unzip to a permanent location (such as `C:\`).

In the `cmder` directory, double click `Cmder.exe` to get started.
Windows might give some warning about programs downloaded from the internet that you have to Okay to run.
ConEmu (the terminal emulator) might also suggest you download a newer version, click "Cancel" to ignore (or the first download option to automatically install the update).
Pin the icon to the taskbar to make starting it easier.

By default Cmdr opens with the standard Windows `cmd.exe` shell, but you can open other shells in a new tab by clicking the drop down next to the plus icon in the lower right. 
Options include Windows CMD (bad), PowerShell (bad), mintty (better, same as Git Bash), or bash (best).
You can (and should) change the default shell. 
Click the menu button in the lower right and select "settings". Click on "Startup", then check the "Specified named task" option and select "{bash::bash}" from the drop down, and "Save settings". Now when Cmdr starts, Bash will be the default terminal.

On Bash, your drive letters will be translated to UNIX-like paths. For example, Windows `C:\` will be `/c/`. Your home directory will probably be `/c/Users/username`.

Similar to [Git Bash](https://evanwill.github.io/_drafts/notes/gitbash-windows.html), binaries for standard utilities can be placed the `bin` directory to add functionality.
Anything in the `bin` will be on the PATH, i.e. you can use it directly on the command line. 
Sometimes the windows binaries have funny prefixes, so you should rename the `.exe` file to the standard name.

## Add Nano editor 

Unlike Git Bash, Cmdr bash supports adding Nano. 
Get the Nano binary from Nano [win32-support](https://www.nano-editor.org/dist/win32-support/) page.
You just need the `.exe` file, which is named `nano-git-0d9a7347243.exe` (as of this writing).
Download it, rename the file to `nano.exe`, and copy to the Cmdr `bin` directory.

## Add Wget

Download the Windows binary from one of the options listed at [Wget FAQ](http://wget.addictivecode.org/FrequentlyAskedQuestions.html#download) (for example, from [eternallybored wget64.exe](https://eternallybored.org/misc/wget/current/wget64.exe).
Rename the file to `wget.exe`, and copy to the Cmdr `bin`.
