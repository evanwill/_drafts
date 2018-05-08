---
title: Atom Editor Notes
layout: post
tags: [tools, editor]
date: 2018-01-27
---

[Atom](https://atom.io/) is an open source code editor built by GitHub on the [Electron](https://electronjs.org/) platform.
In the past, I used it for quite awhile before switching to [VS Code](https://evanwill.github.io/_drafts/notes/vs-code.html), because I felt like Atom was too slow and clunky.
However, in classic Microsoft style, VS Code is moving toward too much unnecessary/undesired functionality that gets in the way of the clean, quick, simple interface that attracted users to it in the first place.
So, it is time to give Atom another go!

Install is easy and good on all OS.

Click Edit > Preferences to start customizing.
Click on the Editor tab. I like to check "Show Indent Guide", "Soft Wrap", and "Soft Wrap Hanging Indent" 1.

### Git (builtin)

Atom now comes bundled with GUI Git / GitHub tools.
`Ctrl+Shift+9` toggles the Git panel (or click the file icon on the bottom right), which looks similar to GitHub Desktop.
Click on a file to view it's diff.
Click on the up arrow / down arrow icon to access buttons to git pull or push.

### Markdown (builtin)

Atom has a Markdown preview builtin: just click `Ctrl+Shift+M` and a side-by-side live preview will appear.
However, I like to tweak the settings to use GitHub's standard Markdown styling.
Go to Preferences > Packages, search for Markdown, click on `markdown-preview`, and check off "Use GitHub.com style".

### Terminal

Atom is missing a built in terminal, so you need to install one from the Community Packages.
In the Preferences screen, click +Install, and search for `platformio-ide-terminal` (there are several other options, but this seems to be the only actively developed, [on github](https://github.com/platformio/platformio-atom-ide-terminal)).
Click Install and Atom will get it ready.
Now you can click ```Ctrl+` ``` to open a terminal, or look for the icons in the bottom left.

### Fira Code

I like to use [Fira Code](https://github.com/tonsky/FiraCode) font in my editor.
However, I do not like Fira Code's fancy font ligatures--they just confuse me.
Ligatures are enabled by default on Atom, so to turn them off you need to edit the config.

First, open Preferences > Editor, and add `Fira Code` to the front of the Font Family list.
Then click on "Open Config Folder".
This will pop open a new editor window.
Open the `styles.less` file.
Inside the `atom-text-editor` selector, add the rule `-webkit-font-feature-settings: "liga" off, "calt" off;`.
It will look like:

```
atom-text-editor {
  -webkit-font-feature-settings: "liga" off, "calt" off;
}
```

You should have Fira Code with no ligatures.

## Handy keys

- Use Ctrl + mouse wheel to zoom font size.
