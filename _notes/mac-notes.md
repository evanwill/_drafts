---
title: Mac Notes
layout: post
tags: [tips]
date: 2025-11-20
---

I am not a fan of Apple or especially macOS which I think is probably the worst operating system possible. 
However, at work the choices are Windows 11 or macOS, and well Mac is better and IT is a lot worse at trying to lock it down and surveillance it all. 
Windows computers have become almost entirely unusable with the constant Sophos and other enterprise non-sense consuming CPU at all hours.
So here are my notes about things to remember about Mac (coming from mostly using Ubuntu):

- General
    - end of line > command + right arrow
    - Spotlight > command + space
- Finder
    - *is astonishingly bad and unstable*
    - view hidden files > command + shift + .
    - delete a file/folder > command + backspace
    - Mac does NOT have any open source or FREE to use NTFS software. It can read, but can not write NTFS. Don't get tricked into downloading some that seem to have a free trial, because they don't!
- Terminal 
    - version of grep is very out of date, missing some options that can cause errors (applies to a lot of commandline tools)
    - [Homebrew](https://brew.sh/) is essential to do anything
    - [git in zsh](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh), missing tab completion in a lot of areas
    - on rake tasks, need to escape arguments brackets like `rake example\["one","two"\]`
- Ruby via [rbenv](https://collectionbuilder.github.io/cb-docs/docs/software/ruby_mac/)
- Node via [pnpm](https://pnpm.io/installation) then use pnpm to install node version

## Global gitignore

Installing git via XCode doesn't seem to set up a global gitignore, and doesn't ignore ".DS_Store".

```
echo '.DS_Store' >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## Update keys/passwords

When you change github keys etc:

- open Keychain Access (not Passwords)
- search for bitbucket or github
- open the entry
- edit the password

## pandoc

```
brew install pandoc 
brew install librsvg 
brew install --cask basictex  
sudo tlmgr install collection-fontsrecommended
```
