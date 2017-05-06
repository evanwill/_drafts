---
title: Using Cmdr
layout: post
tags: [cli, shell, windows]
date: 2017-05-06
---

[Cmdr](http://cmder.net/) is a fully featured terminal emulator for Windows that can host a variety of shells, including Git for Windows Git Bash. 
Download the **full** version and unzip to a permanent location.
By default Cmdr opens with the standard Windows `cmd.exe` shell, but you can open `bash` in a new tab.
You can (and should) change the default shell.

Similar to [Git Bash](https://evanwill.github.io/_drafts/notes/gitbash-windows.html), binaries for standard utilities can be placed the `bin` directory to add functionality.
Anything in the `bin` will be on the PATH, i.e. you can use it directly on the command line. 
Sometimes the windows binaries have funny prefixes, so you should rename the `.exe` file to the standard name.

# Add Nano editor 

Unlike Git Bash, Cmdr supports adding Nano. 
Get the Nano binary from their [win32-support](https://www.nano-editor.org/dist/win32-support/) page.
You just need the `.exe` file, which is named `nano-git-0d9a7347243.exe` (as of this writing).
Download it, rename the file to `nano.exe`, and copy to the Cmdr `bin` directory.
