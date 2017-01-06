---
title: Add more to Git Bash on Windows
layout: post
tags: windows, linux, bash
---

[Git for Windows](https://git-for-windows.github.io/) comes bundled with the "Git Bash" terminal which is incredibly handy for unix-like commands on a windows machine.
It is missing a few standard linux utilities, but it is easy to add ones that have a windows binary available.

The basic idea is that `C:\Program Files\Git\mingw64\` is your `/` directory according to Git Bash (note: depending on how you installed it, the directory might be different. from the start menu, right click on the Git Bash icon and open file location. It might be something like `C:\Users\name\AppData\Local\Programs\Git`, the `mingw64` in this directory is your root).
If you go to that directory, you will find the typical linux root folder structure (`bin`, `etc`, `lib` and so on). 

If you are missing a utility, such as wget, track down a binary for windows and copy the files to the corresponding directories. 
Sometimes the windows binary have funny prefixes, so you should rename the `.exe` file to the standard name.
Since `bin` is on the PATH, it will be automatically available to Git Bash.

Here are some to add:

## wget 

- Download the lastest wget binary for windows from https://eternallybored.org/misc/wget/ (they are available as a zip with documentation, or just an exe)
- If you downloaded the zip, extract all (if windows built in zip utility gives an error, use [7-zip](http://www.7-zip.org/)).
- Move `wget.exe` to your `Git\mingw64\bin\`

## make

- Go to ezwinports, https://sourceforge.net/projects/ezwinports/files/
- Download `make-4.1-2-without-guile-w32-bin.zip` (get the version without guile)
- Extract zip
- Copy the contents to your `Git\mingw64\` merging the folders, but do NOT overwrite/replace any existing files. 
