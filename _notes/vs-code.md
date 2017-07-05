---
title: Visual Studio Code Notes
layout: post
tags: [tools, editor]
date: 2017-06-30
---

[Code](https://code.visualstudio.com) is a nice open source text editor from microsoft ([docs](https://code.visualstudio.com/Docs)).
It is light weight compared to most traditional IDE, yet fully featured and efficient.
I find it perfect for working on web projects, such as using Jekyll.
In the past I used [Atom](https://atom.io/), but Code seems quicker and less clunky.

Here are my notes-to-self about stuff:

## Enable word wrap

Go to File > Preferences > Settings, then add `{ "editor.wordWrap": "on",
}` to the `settings.json` on the right side.

## Markdown

click `Ctrl+Shift+V` to preview file.

## Spell check

Search in the Extensions, there are several spell check options available.

## Integrated terminal

Access a nice terminal without leaving the editor by typing Ctrl + \` (control + backtick).
This is extremely handy when developing Jekyll projects, since you can `jekyll s` and have the output easily visible while you are editing.

On Windows the default terminal is horrible old cmd. 
You can change it by overriding the setting `"terminal.integrated.shell.windows": "C:\\Windows\\system32\\cmd.exe"`.

For example, to use Git Bash, look in Git's `bin` directory in the program files (on Win 10 this should be `C:\Program Files\Git\bin` or something more complicated on Win 7 like `C:\Users\username\AppData\Local\Programs\Git\bin`). 
In your settings replace the cmd path with the full path to `bash.exe`, and escape the back slashes, 
e.g.  `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`.

(note: shortcuts to Git Bash terminal on your desktop and start menu will point to `C:\Program Files\Git\git-bash.exe`, the MinTTY terminal. If you use that app, Code will open a new external terminal. To use Git Bash on the built in terminal make sure you are pointing to the `bin\bash.exe`). 

## HTML

Emmet snippet expansion: write the abbreviation and press `tab` ([Emmet Cheatsheet](http://docs.emmet.io/cheat-sheet/)).

Auto format html, highlight area and `Ctrl+Shift+I`. 
Setting for auto format are in File > Preferences > User Settings, add `"html.format.wrapLineLength": 0,` to prevent auto link breaks.
