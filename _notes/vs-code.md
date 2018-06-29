---
title: Visual Studio Code Notes
layout: post
tags: [tools, editor]
date: 2018-01-27
---

[Code](https://code.visualstudio.com) is a nice open source text editor from microsoft ([docs](https://code.visualstudio.com/Docs)).
It is light weight compared to most traditional IDE, yet fully featured and efficient.
I find it perfect for working on web projects (i.e. *Open Folder* not a file), such as using Jekyll, with Git nicely integrated.
In the past I used [Atom](https://atom.io/), but Code seems quicker and less clunky.
*Update:* unfortunately MS seems to be continuously adding more and more features (i.e. junk) all the time--taking it from a nice minimalist editor, to a getting-close-to bloated piece of software.
I am still using it, but starting to get frustrated by more and more features that I don't want and actually get in the way of working.
Typical MS...

To configure the editor you override the default settings by writing new values into a `settings.json` file.
Go to *File* > *Preferences* > *Settings* (or `Ctrl+,`), and add the new name + value pairs in the JSON brackets `{ }` on the right (or click on the pencil icon next to the setting on the left side listings and select from menu). 

Here are my notes-to-self about stuff:

## Config preferences

- Enable word wrap: `"editor.wordWrap": "on"`
- Get rid of excessive stuff in file explorer: `"problems.decorations.enabled": false`
- Hide minimap, sometimes I find the map annoyingly in the way: `"editor.minimap.enabled": false`
- Disable clearing clipboard if you accidentally `Ctrl+C` on blank line: `"editor.emptySelectionClipboard": false`
- Disable annoying drag and drop selection moving: `"editor.dragAndDrop": false`
- Disable annoyingly unhelpful html tag closing: `"html.autoClosingTags": false`
- Limit html suggestions: `"html.suggest.angular1": false, "html.suggest.ionic": false`

Once you have everything set up nicely, copy your `settings.json` file to a git repo and reuse it on all your computers!

## Change themes

Type `Ctrl+K` then `Ctrl+T`, then choose a theme from the list. 
Get more themes from the Extensions shop.

## Integrated terminal

Access a nice terminal without leaving the editor by typing Ctrl + \` &nbsp; (control + backtick).
This is extremely handy when developing Jekyll projects, since you can `jekyll s` and have the output easily visible while you are editing.
I also use it for any non-routine Git activity, since the built in GUI client is only good for basic `git add/commit/push` equivalents.

The terminal is very straight forward on Linux or Mac, but on Windows the default terminal is horrible old cmd. 
You can change it by overriding the setting `"terminal.integrated.shell.windows": "C:\\Windows\\system32\\cmd.exe"`.

For example, to use Git Bash, look in Git's `bin` directory in the program files (on Win 10 this should be `C:\Program Files\Git\bin` or something more complicated on Win 7 like `C:\Users\username\AppData\Local\Programs\Git\bin`). 
In your settings replace the cmd path with the full path to `bash.exe`, and escape the back slashes, 
e.g.  `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`.

(note: shortcuts to Git Bash terminal on your desktop and start menu will point to `C:\Program Files\Git\git-bash.exe`, the MinTTY terminal. If you use that app, Code will open a new external terminal. To use Git Bash on the built in terminal make sure you are pointing to the `bin\bash.exe`). 

## Markdown preview

Click `Ctrl+Shift+V` to preview rendered file.

## Spell check

Search in the Extensions, there are several spell check options available.
I have been using "Code Spellchecker".

## Multi-cursor

To add more cursors to work on multiple lines at once, `Alt` and left-click (or toggle to `Ctrl` + left-click in Selection menu).

## Arduino

If you have Arduino IDE installed on your system, you can add similar functionality to Code.
Search in the Extensions for Arduino from Microsoft. 
Click install, Code will have to reload a couple times to install everything. 
Now when you open a `.ino` sketch, you will have options at the bottom of the window to select your board and port.
More info [vscode-arduino](https://github.com/Microsoft/vscode-arduino).

## HTML

Emmet snippet expansion: write the abbreviation and press `tab` ([Emmet Cheatsheet](http://docs.emmet.io/cheat-sheet/)).

Auto format html, highlight area and `Ctrl+Shift+I`. 
Setting for auto format are in File > Preferences > User Settings, add `"html.format.wrapLineLength": 0,` to prevent auto link breaks.

## XML

There are several extensions to add XML functionality--look for "XML Language Support" to do validation and work with schemas.
