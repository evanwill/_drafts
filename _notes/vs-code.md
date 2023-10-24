---
title: Visual Studio Code Notes
layout: post
tags: [tools, editor]
date: 2019-10-01
---

[Code](https://code.visualstudio.com) is a nice open source text editor from microsoft ([docs](https://code.visualstudio.com/Docs)).
It is light weight compared to most traditional IDE, yet fully featured and efficient.
I find it perfect for working on web projects (i.e. *Open Folder* not a file), such as using Jekyll, with Git nicely integrated.

> The [VSCodium](https://vscodium.com/) project provides an alternative all open source + no tracking version of VS Code. 
> VS Code is open source, however, the installers you download from MS include additional non-open-source components.
>
> *Update:* unfortunately MS seems to be continuously adding more and more features (i.e. junk) all the time--taking it from a nice minimalist editor, to a getting-close-to bloated piece of software.
> I am still using it, but starting to get frustrated by more and more features that I don't want and actually get in the way of working.
Typical MS...

To configure the editor click the cog icon in the lower left and choose *Settings* (or go to *File* > *Preferences* > *Settings*, or `Ctrl + ,`). 
This will bring up the visual settings editor which can be searched to find options. 
By clicking the file icon in the upper right of the Settings pane will switch to the `settings.json` view. 
This allows you to view the key + value pairs representing your settings, or allow you to paste in new ones that will override the default settings. 
This is *very* handy for sharing your set up--just copy the values and save in a text file, then paste the values on a different computer. 
The Settings are cross-platform, so they will work on any computer, with a few that are specific to each OS.

Here are my notes-to-self about stuff:

## Config preferences

A few highlights: 

- Enable word wrap: `"editor.wordWrap": "on"`
- Get rid of excessive stuff in file explorer: `"problems.decorations.enabled": false`
- Hide minimap, sometimes I find the map annoyingly in the way: `"editor.minimap.enabled": false`
- Disable clearing clipboard if you accidentally `Ctrl+C` on blank line: `"editor.emptySelectionClipboard": false`
- Disable annoying drag and drop selection moving: `"editor.dragAndDrop": false`
- Disable annoyingly unhelpful html tag closing: `"html.autoClosingTags": false`
- Disable annoying persistent terminal sessions which cause endless errors: `"terminal.integrated.enablePersistentSessions": false,`

There is an ever increasing number of "helpful" "smart" auto select and delete things (seemingly modelled after the utterly infuriating and worthless features of MS Word) regularly added, so I end up spending a lot of time trying to turn things off.
But, once you have everything set up nicely, copy your `settings.json` file to a git repo and reuse it on all your computers!
(example at the bottom of this note)

## Integrated terminal

Access a terminal without leaving the editor by typing Ctrl + \` &nbsp; (control + backtick).
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

- Spell check: I use ["Code Spell Checker"](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), and it seems really good and avoids a lot of code-related false positives.
- CSV highlighter: ["Rainbow CSV"](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), this is incredibly helpful for looking at CSVs.
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
    "editor.minimap.enabled": false,
    "editor.fontFamily": "'Fira Code', 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'",
    "editor.wordWrap": "on",
    "breadcrumbs.enabled": false,
    "editor.autoClosingBrackets": "never",
    "editor.autoClosingQuotes": "never",
    "editor.autoSurround": "never",
    "editor.codeLens": false,
    "editor.colorDecorators": false,
    "editor.copyWithSyntaxHighlighting": false,
    "editor.dragAndDrop": false,
    "editor.emptySelectionClipboard": false,
    "editor.links": false,
    "editor.acceptSuggestionOnCommitCharacter": false,
    "editor.acceptSuggestionOnEnter": "off",
    "editor.quickSuggestionsDelay": 100,
    "workbench.enableExperiments": false,
    "workbench.startupEditor": "none",
    "workbench.statusBar.feedback.visible": false,
    "explorer.enableDragAndDrop": false,
    "outline.problems.badges": false,
    "outline.problems.enabled": false,
    "outline.problems.colors": false,
    "extensions.ignoreRecommendations": true,
    "problems.autoReveal": false,
    "html.autoClosingTags": false,
    "html.format.maxPreserveNewLines": 2,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.rightClickBehavior": "default",
    "html.format.wrapLineLength": 0,
    "git.terminalAuthentication": false,
    "cSpell.enabledLanguageIds": [
        "asciidoc",
        "c",
        "cpp",
        "csharp",
        "css",
        "git-commit",
        "go",
        "handlebars",
        "haskell",
        "html",
        "jade",
        "java",
        "javascript",
        "javascriptreact",
        "json",
        "jsonc",
        "latex",
        "less",
        "markdown",
        "php",
        "plaintext",
        "python",
        "pug",
        "restructuredtext",
        "rust",
        "scala",
        "scss",
        "text",
        "typescript",
        "typescriptreact",
        "yaml",
        "yml",
        "xml"
    ],
    //"terminal.integrated.sendKeybindingsToShell": true,
    "problems.decorations.enabled": false,
    "rainbow_csv.enable_tooltip": false,
    "rainbow_csv.enable_tooltip_warnings": false,
    "rainbow_csv.enable_tooltip_column_names": false,
    "terminal.integrated.enableFileLinks": false,
    "terminal.integrated.experimentalLinkProvider": false,
    "terminal.integrated.altClickMovesCursor": false,
    "terminal.integrated.gpuAcceleration": "off",
    "workbench.settings.enableNaturalLanguageSearch": false,
    "telemetry.telemetryLevel": "off",
    "terminal.integrated.enablePersistentSessions": false,
    "cSpell.enableFiletypes": [
        "csv",
        "md"
    ],
    "html.autoCreateQuotes": false,
    "editor.autoClosingDelete": "never",
    "editor.autoClosingOvertype": "never",
    "workbench.editor.enablePreview": false,
    "editor.smartSelect.selectLeadingAndTrailingWhitespace": false,
    "editor.smartSelect.selectSubwords": false
}
```

## Old Notes 

A few things are easier now--below are some older notes about configuring things the hard way.

To use Git Bash as Windows terminal, look in Git's `bin` directory in the program files (on Win 10 this should be `C:\Program Files\Git\bin` or something more complicated on Win 7 like `C:\Users\username\AppData\Local\Programs\Git\bin`). 
In your settings replace the cmd path with the full path to `bash.exe`, and escape the back slashes, 
e.g.  `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`.

(note: shortcuts to Git Bash terminal on your desktop and start menu will point to `C:\Program Files\Git\git-bash.exe`, the MinTTY terminal. If you use that app, Code will open a new external terminal. To use Git Bash on the built in terminal make sure you are pointing to the `bin\bash.exe`). 
