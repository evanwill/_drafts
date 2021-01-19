---
title: File naming for web and Git collaboration
layout: post
tags: [git, jekyll, windows]
date: 2020-12-01
---

Be *extra careful* of file naming case sensitivity when working with people across Linux, Mac, and Windows.

In Linux file systems, filenames are case sensitive. 
So files like "README.md", "readme.md", and "ReadMe.md" are three totally different files. 

However, Windows and Mac file systems are by default case insensitive.
On Window and Mac files like "README.md", "readme.md", and "ReadMe.md" can not exist at the same time, and all would refer to a single file.

Adding to confusion, Windows and Mac are still *case preserving*, i.e. the filesystem stores the original case information ("README.md" vs. "readme.md") even though they treat filename as case insensitive.
Windows Explorer lets you edit the filename case including extension.
However, Mac doesn't seem to really let you change case in the filesystem and records extensions as upper case by default.
This can lead to a lot of confusion trying to fix case sensitivity in filenames and extensions.

*Importantly*, even if you do not have a desktop Linux user in your team, case sensitivity still matters since Git platforms, testing, continuous integration, and web servers are most likely Linux systems. 

So to avoid issues: 

- Set up a project filename convention (probably all lowercase if a web project)
- When working on Linux or web platforms don't create files that would conflict if insensitive
- When working on Windows and Mac, use actual filenames and don't rely on case insensitivity when creating links or scripts.
- *Tell everyone that file naming is super important!*

## Issues On Web

For example, when Windows and Mac users run a local dev server (such as using Jekyll), the localhost urls and filesystem will be case insensitive. 
You may have a file like "assets/ExampleImg.PNG", and the urls "localhost:4000//assets/ExampleImg.PNG", "localhost:4000//assets/ExampleImg.png", and "localhost:4000//assets/exampleimg.png" will work.
However, once on most Linux servers, only the case sensitive filename "/assets/ExampleImg.PNG" will work.

## Issues on Git 

Git is developed and designed for Linux, thus treat file history as case sensitive.
This can lead to nasty Git errors on Windows and Mac if a Linux user commits files that would be the same if case insensitive.

E.g. Linux user commits "README.md" and "readme.md" in the same directory, if Windows and Mac users pull the update they end up with fatal errors and a lot of confusion.
It can't be gracefully fixed on Windows or Mac, so it is best to clean it up on GitHub or Linux, then do a fresh clone (see [xkcd git](https://xkcd.com/1597/)).
