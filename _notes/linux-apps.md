---
title: Handy Linux Apps
layout: post
tags: [linux]
date: 2017-02-02
---

Search the repository at [Ubuntu Packages](http://packages.ubuntu.com/) to find proper names to install with `sudo apt install`.
If you want to install apps from outside the repositories, download the `.deb`. 
Install `.deb` via commandline using `sudo dpkg -i package-name.deb`, and remove with `sudo dpkg -r package-name` (note: the remove package name is not the same as the `.deb`'s name).

## Text Editors

- [Gedit](https://evanwill.github.io/_drafts/notes/gedit-editor.html) 
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [notepadqq](http://notepadqq.altervista.org/wp/), linux notepad++ clone

## Utilities

- Password database: `keepass2`
- File renamer: [pyRenamer](https://launchpad.net/pyrenamer), older batch file renamer, but still works. Unique feature allows you to use a csv list to rename a batch of files. 
- Screencast: `vokoscreen`, or `kazam`
- File transfer/sync: `grsync` (GUI rsync), `meld` (GUI diff and merge).
- Backup: `deja-dup`
- Rip DVDs: `handbrake` (note: the version in the repository is out-of-date, check the official [handbrake site](https://handbrake.fr/) for instructions to install the latest)
- Flickr uploader: `frogr`
- Ebook manager: Calibre, if you have ebooks, this helps you manage them and connect with reading devices. It also has great built in editing and conversion tools.
- Burn SD/USB images: [Etcher](https://etcher.io/)
- Firewall: `ufw` or `gufw`
- `caffeine` keeps screen awake during movies

## Image editing

- Image editing: GIMP, `gimp` (the first time you open it, click "Windows" > "Single window mode" for a more usable experience). If you use raw images, check out Darktable. To play with HDR, `luminance-hdr`.
- Vector drawing: Inkscape or Vectr.

## Games

- SuperTux Kart, `supertuxkart`
- SuperTux 2, `supertux`
- [Endless Sky](https://endless-sky.github.io/), `endless-sky`
- [mari0](http://stabyourself.net/mari0/#download)
- `gweled`

## Handy distros

- [Volumio](https://volumio.org/), dedicated audio player
- [RetroPie](https://evanwill.github.io/_drafts/notes/retropie.html), dedicated game emulator
