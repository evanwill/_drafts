---
title: Ubuntu 20.04
layout: post
tags: [ubuntu, linux, install]
date: 2020-04-27
---

New long term release [Ubuntu 20.04](https://ubuntu.com/download/desktop) is out!

Long term releases get guaranteed five years of support, so are great if you like to install a solid system once and leave it.
On the other hand, I like do a fresh install at every release, but either way, this note gathers up tips for getting everything set up after you install. 
I have a Dell XPS 15, Lenovo Flex, and HP Envy, and so far everything seems to work well--and the desktop seems noticeably faster than 18.04.

## Install from USB

1. download [Ubuntu 20.04](https://ubuntu.com/download/desktop) 
2. [Burn ISO to a USB stick](https://evanwill.github.io/_drafts/notes/burn-iso.html)
3. Plug in your live USB into computer (while turned off)
4. Press power button and hit boot interrupt button (usually F12, Delete, Esc, or F2)
5. Look for boot options menu, then select your USB to boot from
6. After some thought, it should boot into the Ubuntu installer where you can choose to test or install. I usually test first, so you can play around with the live system to make sure it seems to be working, then click the installer from the live system.
7. During install, when it asks about hard drive, select the "Advanced options" to find LVM and encryption. 

## Settings

Open Settings:

- Settings > Background to get your wallpaper set.
- Settings > Appearance > checkout new "Dark" mode option and set Dock icon size.
- Settings > File History & Trash > checkout new options for automatically deleting history, trash, and temp files.
- Settings > Display > click the "Night Light" option at the top to configure a red shift in the evening.
- Settings > Date & Time > use "Time Format" option to change 24hr or AM/PM.

## Tweaks

Install Gnome Tweaks (GUI tool to customize desktop) and Gnome Extensions integration (enables using extensions via browser interface) right away, `sudo apt install gnome-tweaks chrome-gnome-shell`.
(Note: `gnome-tweaks` used to be named `gnome-tweak-tool`)

Open Tweaks:

- General > turn Animations off for faster performance.
- Appearance > change themes.
- Extensions > turn off Desktop icons.

Open Firefox browser:

- Preferences > Privacy & Security > check "Use a master password" and set.
- Add [GNOME extensions](https://extensions.gnome.org/) plugin, [gnome-shell-integration](https://addons.mozilla.org/en/firefox/addon/gnome-shell-integration/)
- Add Firefox [Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/?src=search), [Facebook Container](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/)
- Add adblocker such as [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search)

Now you can add [GNOME extensions](https://extensions.gnome.org/), click the GNOME icon in the browser's upper right side.
Try [Caffeine](https://extensions.gnome.org/extension/517/caffeine/) (disable screen lock to watch movies or just not have your laptop locking all the time) or check some [other suggestions](https://evanwill.github.io/_drafts/notes/ubuntu-gnome.html#get-extensions).

Enable firewall: `sudo ufw enable`

Next I like to have Gedit ("Text Editor") customized so its ready as a quick editor. 
Open the app, then click the name in the top bar to open the app menu > Preferences.
See [customization suggestions notes](https://evanwill.github.io/_drafts/notes/gedit-editor.html).

## Install Essentials

Check [Ubuntu packages](https://packages.ubuntu.com/) and install `sudo apt install`:

- `tlp tlp-rdw` ([advanced laptop power management](https://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html))
- development necessities: `build-essential git curl`

Note that some packages are transitioning to snaps instead traditional debs.
Check [snapcraft store](https://snapcraft.io/store) for snap details or find them in Ubuntu Software. 
I like to look for the official "Canonical" + checkmark as developer, since you have to pay attention to who packaged the snaps.
From snap install: 

- Chromium (browser)
- Visual Studio Code or Atom (editor)
- KeePassXC (password manager)

## Install Languages

*Note*, 20.04 has some different system languages installed.
It ships with Ruby 2.7 (new) and Python 3.8 (no more Python 2).
In the terminal, Python is `python3`, so `which python` will come up with nothing.

- Ruby: [rbenv](https://evanwill.github.io/_drafts/notes/ruby-rbenv.html) or [RVM set up](https://evanwill.github.io/_drafts/notes/ruby-notes.html)
- Python: [Anaconda set up](https://evanwill.github.io/_drafts/notes/dual-python-notebook.html)
- Java: `sudo apt install default-jre` or `default-jdk` (this will be OpenJDK 11+, fine for apps like OpenRefine, if you need more specific versions search [packages](https://packages.ubuntu.com/search?keywords=jdk&searchon=names&suite=bionic&section=all))
- Node: use [nvm](https://github.com/creationix/nvm) (this seems to be the best method; install nvm, then `nvm install --lts`), or official [NodeSource ppa](https://github.com/nodesource/distributions/blob/master/README.md), or repository version `nodejs` (which is out of date)
