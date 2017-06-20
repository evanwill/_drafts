---
title: Using Cmder
layout: post
tags: [shell, windows]
date: 2017-05-06
---

[Cmder](http://cmder.net/) is a fully featured terminal emulator for Windows that can host a variety of shells, including Git for Windows Git Bash (which comes bundled with the full version). 
It is handy because it is full portable--simply unzip and start using it.
Once you configure Cmder, you can even copy the directory to a USB and use/share your fully customized version.
This is great for workshops.

## "Install"

[Download](http://cmder.net/) the **full** version and unzip to a permanent location (such as `C:\`).

In the `cmder` directory, double click `Cmder.exe` to get started.
Windows might give a warning about programs downloaded from the internet that you have to Okay to run.
ConEmu (the terminal emulator) might also suggest you download a newer version, click "Cancel" to ignore or the first download option to automatically install the update.
Pin the icon to the taskbar to make starting it easier.

By default Cmder opens with the standard Windows `cmd.exe` shell, but you can open other shells in a new tab by clicking the drop down next to the plus icon in the lower right. 
Options include Windows CMD (bad), PowerShell (bad), mintty (better, same as Git Bash), or bash (best).
You can (and should) change the default shell. 
Click the menu button in the lower right and select "settings". Click on "Startup", then check the "Specified named task" option and select "{bash::bash}" from the drop down, and "Save settings". Now when Cmder starts, Bash will be the default terminal.

On Bash, your drive letters will be translated to UNIX-like paths. For example, Windows `C:\` will be `/c/`. Your home directory will probably be `/c/Users/username`.

Similar to [Git Bash](https://evanwill.github.io/_drafts/notes/gitbash-windows.html), binaries for standard utilities can be placed the `bin` directory to add functionality.
Anything in the `bin` will be on the PATH, i.e. you can use it directly on the command line. 
Sometimes the Windows binaries have funny filenames, so you should rename the `.exe` file to the standard name.

## Add Nano editor 

Unlike Git Bash, Cmder bash supports adding Nano. 
Get the Nano binary from Nano [win32-support](https://www.nano-editor.org/dist/win32-support/) page.
You just need the `.exe` file, which is named `nano-git-0d9a7347243.exe` (as of this writing).
Download it, rename the file to `nano.exe`, and copy to the Cmder `bin` directory.

Now, Nano editor can be started from the Bash shell using a command such as `nano test.txt`.

## Add Wget

Download the Windows binary from one of the options listed at [Wget FAQ](http://wget.addictivecode.org/FrequentlyAskedQuestions.html#download) (for example, from [eternallybored wget64.exe](https://eternallybored.org/misc/wget/current/wget64.exe).
Rename the file to `wget.exe`, and copy to the Cmder `bin`.

*Note: I have noticed some bugs when using Wget on Cmder to create WARC files. For more complex use of Wget, consider [Cygwin](https://evanwill.github.io/_drafts/notes/cygwin.html) instead.*

## Add Ubuntu Bash shell

If you have Windows 10 and [installed "Windows Subsystem for Linux"](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide), you can add the "Bash on Ubuntu on Windows" shell to Cmder. 
Check solutions [here](https://gingter.org/2016/11/16/running-windows-10-ubuntu-bash-in-cmder/) and [here](http://conemu.github.io/en/BashOnWindows.html).
