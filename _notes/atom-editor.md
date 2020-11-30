---
title: Atom Editor Notes
layout: post
tags: [tools, editor]
date: 2020-05-27
---

[Atom](https://atom.io/) is an open source code editor built by GitHub in the [Electron](https://electronjs.org/) framework.
In the past, I used it for quite awhile before switching to [VS Code](https://evanwill.github.io/_drafts/notes/vs-code.html), because I felt like Atom was too slow and clunky.
However, in classic Microsoft style, VS Code is moving toward too much unnecessary/undesired functionality that gets in the way of the clean, quick, simple interface that attracted users to it in the first place.
Now MS purchased GitHub, so the development status of Atom seems a bit unclear--does MS really want to develop both the leading Electron based text editors separately?
Seeing the many unmaintained Packages makes me feel like Atom community is losing steam...
In any case, I recently tried it again to see if I would like to switch back.

Install is easy and good on all OS.
Click Edit > Preferences to start customizing.

Click on the Editor tab. I like to check "Show Indent Guide", "Soft Wrap", and "Soft Wrap Hanging Indent" 1.
Spellcheck is built in which is handy.

### Git / GitHub (builtin)

Atom comes bundled with GUI Git / GitHub tools which look similar to GitHub Desktop.
Click the icons in the lower right or `Ctrl+Shift+9` toggles the Git panel.
Click on a file to view it's diff.
Right click on the "Fetch" icon to access Pull or Push options.

This seems like a real plus for people who might use GitHub Desktop instead.
However, I prefer the efficiency of VS Code's approach which adds version control to a tab in the Project browsing panel.

### Markdown (builtin)

Atom has a Markdown preview builtin: just click `Ctrl+Shift+M` and a side-by-side live preview will appear.
However, I like to tweak the settings to use GitHub's standard Markdown styling.
Go to Preferences > Packages, search for Markdown, click on `markdown-preview`, and check off "Use GitHub.com style".

### Terminal

Atom is missing a built in terminal, so you need to install one from the Community Packages.
This seems like a major barrier to adoption since it frustrates many users.
There is a confusingly large array of options, yet very few actively developed.

Open Edit > Preferences > +Install, and search for terminal to find options.
In the past I used [platformio-ide-terminal](https://github.com/platformio/platformio-atom-ide-terminal).
However recently (as of Nov 2020) it no longer works for me on Ubuntu, nor do the many related terminals.
`platformio-ide-terminal` adds an icon to the lower left and the key binding ```Ctrl+` ``` to open the terminal.

The only terminal package that actually works for me anymore is [x-terminal](https://github.com/bus-stop/x-terminal).
`x-terminal` treats the terminal as a pane just like any other open editor--interesting approach, but I don't think I like it.
It uses the keybinding ```Ctrl+` ``` to open a terminal, but doesn't seem to add an icon anywhere.

### Fira Code

I like to use [Fira Code](https://github.com/tonsky/FiraCode) font in my editor.
However, I do not like Fira Code's fancy font ligatures--they just confuse me.
Ligatures are enabled by default on Atom, so to turn them off you need to edit the config.

First, open Edit > Preferences > Editor, and add `Fira Code` to the front of the Font Family list.
Then open Edit > Stylesheet, which will open a file `styles.less` in your config folder where you can add customizations.
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
