---
title: Using Cygwin
layout: post
tags: [shell, windows]
date: 2017-03-09
---

**Out of date! I haven't used this for a long time!**

[Cygwin](https://cygwin.com/index.html) is a project that adds Unix style terminal to Windows. 
It includes hundreds of Unix command line utilities built and packaged to function natively on Windows. 
It includes more functionality than Git Bash (included with [Git for Windows](https://git-for-windows.github.io/)), is open-source (unlike [MobaXterm](http://mobaxterm.mobatek.net/)), and has a package system to install utilities (unlike [Cmder](https://evanwill.github.io/_drafts/notes/cmdr.html)). 
If you are currently using Git Bash on Windows, you may want to move to Cygwin if you would like Nano Editor, Wget, and GNU Make (plus old school terminal games!). 

# Install Cygwin 

Download the current installation utility from the [Cygwin site](https://cygwin.com/install.html). 
I suggest the 64-bit version, `setup-x86_64.exe`.
Once the file downloads, move it to a sensible permanent location as the utility is used to update and make changes to your install. 
For example, move it to `C:\cygwin-stuff` (by default Cygwin uses `C:\cygwin64` as its root directory).

To get started quickly, simply double click `setup-x86_64.exe` to use the graphical installer.
However, the awkward interface makes finding and selecting packages very difficult. 
I suggest starting on the command line, which greatly simplifies getting what you want / need.

### Command line installer

Open Windows `cmd` command prompt in the directory containing `setup-x86_64.exe`.
Enter the command: 

```
setup-x86_64.exe -q -P nano,wget,git,chere,make,openssh,openssl,ninvaders,sl,fortune-mod,ctris
```

The `-P` option allows you to list the extra packages you would like installed. 
Get the package names from the [full package list](https://cygwin.com/packages/package_list.html) and separate each with a comma. 

The command above will start the Cygwin graphical installer with the listed packages selected in addition to the core utilities.
Since all the necessary options are not specified, the GUI will ask you a few more questions
(check the full [list of CLI options](https://cygwin.com/faq/faq.html#faq.setup.cli) if you want streamline further).

### Graphical installer 

The installer will ask about these options:

- Choose Download Source: "install from Internet"
- Select Root Install Directory: the folder selected in this step with become your fake Unix style root directory `/`. The default is `C:\cygwin64`, which should work for most users. Do not change it to an existing system directory! All Cygwin files will be located in this root, so you will risk over writing existing files or causing incompatibilities. 
- Select Local Package Directory: this folder will be for package downloads. I usually change it to a new directory in the same location as `setup-x86_64.exe`.
- Internet connection: use default unless you have a proxy.
- Download Site: choose a mirror to download from. Any should work. 
- Select Packages: This is where you can add additional packages beyond the default install--if you started with the command line options above, everything you need is already selected. Otherwise, select "Full" from the "View" drop down menu, then search to find useful packages. Click on "Skip" to mark the utility for installation. The list is not very user friendly, but poke around until you mark off everything you need.

### Update 

To update or install new packages, run `setup-x86_64.exe` again.
Your current packages and configurations will be saved, but everything will be updated to the latest versions.

# Using Cygwin

The installer should put a shortcut on your desktop. 
Click it to start the terminal (this starts `cygwin64/bin/mintty.exe`, if you double click `cygwin64/Cygwin.bat` you will start in the awful Windows `cmd.exe` terminal instead). 

### File system

It is important to know that the file system is a bit wonky via the Cygwin shell. 
According to Cygwin, your `/` root directory is `C:\cygwin64`. 
Cygwin creates a home directory inside this root.
This means that `cd ~` then `pwd` will read `/home/username`, but it is *NOT* your Windows user directory.
Instead it is `C:\cygwin64\home\username`, your user directory in Cygwin's root.

To access your normal Windows file system use `/cygdrive/`. 
For example `cd /cygdrive/c` will bring you to `C:\`.
Thus, your normal Windows user directory will typically be at `cd /cygdrive/c/Users/username`.

### Right click

To make life a bit easier, use the `chere` package to add a Windows context menu item (i.e. right click).

To configure, right click on your Cygwin terminal shortcut (on desktop or in start menu) and choose "Run as administrator". 
Then type the command: `chere -i -t mintty`.
This adds the default terminal to your context menu as "Bash Prompt Here".
Simply right click any folder and select the option to open Cygwin in that directory.

The option can be uninstalled via Windows Control Panel like a program.
To see the full options check `chere --help`. 
