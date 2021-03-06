---
title: Visual Studio Code Notes
layout: post
tags: [tools, editor]
date: 2019-10-01
---

[Code](https://code.visualstudio.com) is a nice open source text editor from microsoft ([docs](https://code.visualstudio.com/Docs)).
It is light weight compared to most traditional IDE, yet fully featured and efficient.
I find it perfect for working on web projects (i.e. *Open Folder* not a file), such as using Jekyll, with Git nicely integrated.
In the past I used [Atom](https://atom.io/), but Code seems quicker and less clunky.

*Update:* unfortunately MS seems to be continuously adding more and more features (i.e. junk) all the time--taking it from a nice minimalist editor, to a getting-close-to bloated piece of software.
I am still using it, but starting to get frustrated by more and more features that I don't want and actually get in the way of working.
Typical MS...

To configure the editor click the cog icon in the lower left and choose *Settings* (or go to *File* > *Preferences* > *Settings*, or `Ctrl + ,`). 
This will bring up the visual settings editor which can be searched to find options. 
By clicking the file icon in the upper right of the Settings pane will switch to the `settings.json` view. 
This allows you to view the key + value pairs representing your settings, or allow you to paste in new ones that will override the default settings. 
This is *very* handy for sharing your set up--just copy the values and save in a text file, then paste the values on a different computer. 
The Settings are cross-platform, so they will work on any computer, with a few that are specific to each OS.

Here are my notes-to-self about stuff:

## Config preferences

- Enable word wrap: `"editor.wordWrap": "on"`
- Get rid of excessive stuff in file explorer: `"problems.decorations.enabled": false`
- Hide minimap, sometimes I find the map annoyingly in the way: `"editor.minimap.enabled": false`
- Disable clearing clipboard if you accidentally `Ctrl+C` on blank line: `"editor.emptySelectionClipboard": false`
- Disable annoying drag and drop selection moving: `"editor.dragAndDrop": false`
- Disable annoyingly unhelpful html tag closing: `"html.autoClosingTags": false`

Once you have everything set up nicely, copy your `settings.json` file to a git repo and reuse it on all your computers!
(example at the bottom of this note)

## Integrated terminal

Access a nice terminal without leaving the editor by typing Ctrl + \` &nbsp; (control + backtick).
This is extremely handy when developing Jekyll projects, since you can `jekyll s` and have the output easily visible while you are editing.
I also use it for any non-routine Git activity, since the built in GUI client is only good for basic `git add/commit/push` equivalents.

The terminal is very straight forward (automatic) on Linux or Mac, but on Windows the default terminal is horrible old cmd. 
The first time you open the terminal on Windows, it should prompt you to with options to change to other terminals you have installed (i.e. Git Bash, WSL Bash, or PowerShell). 
If you don't get the prompt, click the drop down on the left side of the terminal window that says "Command Prompt" and select "Select Default Shell". 
This should open a list of option in the "command pallet" at the top of the window. 
Or override the setting `"terminal.integrated.shell.windows": "C:\\Windows\\system32\\cmd.exe"` with the path to the terminal you want to use.

## Extensions

Code has a growing ecosystem of extensions.
Click the Extensions icon on the left side and search in the box to find new ones.

- Spell check: I have been using "Code Spell Checker".
- CSV highlighter: "Rainbow CSV"
- Data viz: [SandDance for VSCode](https://marketplace.visualstudio.com/items?itemName=msrvida.vscode-sanddance) (handy for looking at CSV contents)
- Arduino: If you have Arduino IDE installed on your system, you can add similar functionality to Code. Search for "Arduino" from Microsoft. Now when you open a `.ino` sketch, you will have options at the bottom of the window to select your board and port. More info [vscode-arduino](https://github.com/Microsoft/vscode-arduino).
- XML: "XML Language Support"

## Multi-cursor

To add more cursors to work on multiple lines at once, `Alt` and left-click (or toggle to `Ctrl` + left-click in Selection menu).

## HTML

Auto format html, highlight area and type `Ctrl+K` followed by `Ctrl+F` (or maybe `Ctrl+Shift+I`). 
Setting for auto format are in Settings, add `"html.format.wrapLineLength": 0,` to prevent auto link breaks.

Emmet snippet expansion: write the abbreviation and press `tab` ([Emmet Cheatsheet](http://docs.emmet.io/cheat-sheet/)).

## Markdown preview

Click `Ctrl+Shift+V` to preview rendered file.

## Change themes

Type `Ctrl+K` then `Ctrl+T`, then choose a theme from the list. 
Get more themes from the Extensions shop.

## Settings

```
{
    "terminal.integrated.shell.windows": "C:\\Users\\username\\AppData\\Local\\Programs\\Git\\bin\\bash.exe",
    "workbench.startupEditor": "newUntitledFile",
    "editor.minimap.enabled": false,
    "breadcrumbs.enabled": false,
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.wordWrap": "on",
    "editor.autoClosingBrackets": "never",
    "editor.autoClosingQuotes": "never",
    "editor.autoSurround": "never",
    "editor.colorDecorators": false,
    "editor.copyWithSyntaxHighlighting": false,
    "editor.dragAndDrop": false,
    "editor.emptySelectionClipboard": false,
    "editor.links": false,
    "editor.acceptSuggestionOnCommitCharacter": false,
    "editor.acceptSuggestionOnEnter": "off",
    "explorer.enableDragAndDrop": false,
    "outline.problems.badges": false,
    "outline.problems.enabled": false,
    "outline.problems.colors": false,
    "extensions.showRecommendationsOnlyOnDemand": true,
    "extensions.ignoreRecommendations": true,
    "problems.decorations.enabled": false,
    "problems.autoReveal": false,
    "html.format.maxPreserveNewLines": 2,
    "html.autoClosingTags": false,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.rightClickBehavior": "default",
    "html.format.wrapLineLength": 0
}
```

## Old Notes 

A few things are easier now--below are some older notes about configuring things the hard way.

To use Git Bash as Windows terminal, look in Git's `bin` directory in the program files (on Win 10 this should be `C:\Program Files\Git\bin` or something more complicated on Win 7 like `C:\Users\username\AppData\Local\Programs\Git\bin`). 
In your settings replace the cmd path with the full path to `bash.exe`, and escape the back slashes, 
e.g.  `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`.

(note: shortcuts to Git Bash terminal on your desktop and start menu will point to `C:\Program Files\Git\git-bash.exe`, the MinTTY terminal. If you use that app, Code will open a new external terminal. To use Git Bash on the built in terminal make sure you are pointing to the `bin\bash.exe`). 
