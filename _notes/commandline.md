---
title: Intro to the Command Line
layout: post
tags: [shell, linux, workshop]
date: 2017-03-04
---

> Mini-workshop: Does command line interface (CLI), REPL, terminal, console, or shell sound scary? Don't worry, we'll learn about the basic computer interface that gives you super powers! If you want to work with Raspberry Pi, Linux, or many programming languages you need a basic familiarity with the CLI. This MILL-Mini will demystify the terminal so you can use it to get things done.

## What is the Shell?

The command line is a text-based interface for efficiently getting stuff done. 
It's often called the shell, terminal, console, cmd, or Bash, but ultimately the **Shell** is just a program on your computer like any other application. 
Its job is to act as a **command shell**, taking input from the user, ordering the computer's operating system (OS) to execute the instructions, and returning the outputs.

Since the 1980's the most common way to interact with a computer is via the **graphical user interface** (GUI), i.e. the windows, icons, and pointers of a desktop environment.
Technically this is a shell.
However, when people talk about *the shell* it usually refers to a **command-line interface** (CLI) made up of only text in a **read-evaluate-print loop** (REPL).

This means:

1. you type something on the input line and press return
2. the shell interprets the command
3. the OS executes it
4. the shell prints the output
5. repeat!

Note that the shell does not execute commands itself. 
It calls on hundreds of other applications in the OS to get things done. 
It's the most basic way to interface with your computer short of re-wiring it!

## Which Shell?

There are actually a lot of shells out there! 
Most OS come with one as a standard application. 
On Windows, CMD or PowerShell are normally available.
These use a syntax and set of applications unique to Windows systems. 

However, the most popular and commonly used is the Unix shell **Bash** ([Bourne Again SHell](https://en.wikipedia.org/wiki/Bash_(Unix_shell))) which is standard on Linux and Mac OS.
Even if you are a Windows user, learning Bash will open up a powerful set of tools on your personal machine, in addition to familiarizing you with the standard remote interface used on almost all servers and super computers.
If you want to control a Raspberry Pi or virtual machine in the cloud, you will need to use the Bash Shell.

There are several options to add a UNIX style shell to Windows:

- Git Bash: installing [Git for Windows](https://git-for-windows.github.io/) adds the Git Bash shell. It comes with some of the standard UNIX applications (and you can [add more](https://evanwill.github.io/_drafts/notes/gitbash-windows.html)). It is easy to install, integrates with Windows context menus (right click), and works well.
- [Cygwin](https://www.cygwin.com/): a project that adds Unix style terminal to Windows including hundreds of utilities built and packaged to function natively on Windows. It includes more functionality than Git Bash and has a package system to install utilities ([more info](https://evanwill.github.io/_drafts/notes/cygwin.html)).
- [MobaXterm](http://mobaxterm.mobatek.net/): a non-opensource emulator similar to Cygwin with quite a bit of functionality and an optional paid version.
- [Bash on Windows Subsystem](https://msdn.microsoft.com/en-us/commandline/wsl/about): Windows 10 has the option to install a Ubuntu Linux subsystem which enables a native Bash shell with all the standard functionality. This is very handy, but installing takes [a few steps](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide).

The window that hosts the text based CLI is often called a **terminal emulator**. 
Most people use the default that comes with the OS, but if you want to get fancy, there are a surprising number of options out there!
Check out [Guake](http://guake-project.org/), [Hyper](https://hyper.is/), [ConEmu](https://conemu.github.io/)(Windows), [Cmder](https://evanwill.github.io/_drafts/notes/cmdr.html)(Windows).

## Navigate 

Start up your terminal and type `pwd`.

This command asks the shell to "print working directory".
The shell should give you some out put, like `/home/username`.
That's where we are right now!
The string `/home/username` is a file path representing our current location in the file system, just like navigating the folders in the GUI explorer.
Typically, on Unix systems the `/` is the root directory.
All other directories are organized below it.

> *Note:* when using Git Bash on Windows, `cd ~` should bring you to your Windows user directory, such as `C:\Users\username`. 
> However, the Windows alternatives locate the `/` directories in a "fake" root directory, not the actual Windows file system root. 
> For example, on Git Bash `cd /` will bring you to something like `C:\Program Files\Git\mingw64\` not `C:\`. 
> Cygwin and MobaXterm also place the "home" directory inside the fake root. 
> For example, when using Cygwin, `cd ~` the `pwd` will say `/home/username`, but will actually be located in the Windows `C:\cygwin\home\username`.

Take a look around:
- `ls` ("listing")
- `ls -a` (`-a` is a flag, it adds an option to the command, in this case to show all files including hidden ones. There is often a short and long version, `-a` or `--all`)
- `ls --help` (you can use `--help` with almost any command!)
- `cd Desktop` ("change directory")
- `cd ..` (back one level)
- Save typing with `tab` complete and up arrow for command history!!
- Copy & paste with your mouse or `ctrl+shift+C` / `ctrl+shift+V` (short cuts may need to be enabled in your terminal's settings options)

## Work with files

Let's make a test directory to play in:

- `cd ~` (back to home directory)
- `cd Desktop`
- `mkdir test` ("make directory")
- `cd test`

Now lets create a file in it: 

- `echo hello world` (terminal repeats what you said)
- `echo hello world > test.txt` (the `>` is **redirect** that prints the output to a file rather than the screen)
- `ls`
- `cat test.txt` ("concatenate" displays one or more files in the terminal)
- `echo more text >> test.txt` (the `>>` redirects the output and **appends** it to the end of an file. A single `>` would over write the file)
- `cat test.txt`

Play with it:

- `mkdir new`
- `cp test.txt new/test.txt` ("copy")
- `cd new`
- `mkdir new2`
- `mv test.txt new2/test2.txt` ("move" changes location and/or name, be careful!)
- `cd new2`
- `rm -i test2.txt` ("remove", be careful there is no recycle bin!)
- wildcards `?` and `*`, try `grep -i "hello" *.txt`

## Run Programs

Many programs run interactively inside the terminal (*note: these don't work well in Git Bash, but can be installed in Cygwin*):

- `nano test3.txt` (text editor in the terminal)
- `python` (running another REPL system in the terminal)
- `curl http://www.lib.uidaho.edu/` (utility to get URLs in terminal)
- `top` (process monitor)

## Have Fun

A good way to get familiar with the commandline is with some fun and games! 
These demos install amusing programs (*note: demos based on Ubuntu. Only available on Linux or Bash on Windows Subsystem. However, most can be found in Cygwin packages.*)

Train:

- `sudo apt-get install sl` (apt-get is Debian / Ubuntu's utility to find and install packages)
- `sl`

Wise cow:

- `sudo apt-get install cowsay`
- `cowsay "Hello world!"`
- `cowthink "Grass?"`
- `sudo apt-get install fortune`
- `fortune`
- `fortune | cowsay` (pipes `|` send output to another command)
- `cowsay -l`
- `fortune | cowsay -f dragon`

Classic games:

- `sudo apt-get bsdgames`
- `tetris-bsd` (see [full list](http://wiki.linuxquestions.org/wiki/BSD_games))

Or watch Star Wars: `telnet towel.blinkenlights.nl`

## Reference

- [SS64 Command line reference](https://ss64.com/)
- [Shell lesson](http://swcarpentry.github.io/shell-novice/) from Software Carpentry
- [The Linux Command Line](http://linuxcommand.org/tlcl.php) by William Shotts
- [10 command-line tools for data analysis in Linux](https://opensource.com/article/17/2/command-line-tools-data-analysis-linux) by Jason Baker
