---
title: GNOME on Ubuntu
layout: post
tags: [linux]
date: 2018-06-02
---

Starting with 17.10+ Ubuntu ships with [GNOME](https://www.gnome.org/) desktop rather than Unity.
There are many good reasons for this, but for those of us who actually liked Unity, there is new stuff to get used to.

## Start Tweaking

When you first install, there are a few things to do right away to get Gnome on Ubuntu looking better.
First, remove the junk from the dock, i.e. Amazon, by right clicking and selecting "remove from favorites" (to uninstall Amazon, open Ubuntu Software and look on the Installed tab). 
Add good stuff to the dock as you open it, by right clicking the dock icon and "add to favorites".

Then head to Settings to get the desktop looking better.

- Settings > Dock, make the icons smaller (the default seems to take up way too much space).
- Settings > Background to get your wallpaper set.
- Settings > Devices > Display to set up your monitor and turn on Night Light if you want a red shift in the evening.
- Settings > Bluetooth, turn bluetooth off if you don't use it, since it is a security risk.

Next, install Tweak tool, `gnome-tweak-tool`, to give more complete customization options.

Finally, if you don't like Ubuntu's dock, you can remove it to go to a more [vanilla Gnome experience](http://www.omgubuntu.co.uk/2017/10/install-vanilla-gnome-shell-ubuntu-17-10).

## Change Themes 

The default style for 18.04 is the pretty ugly and dated "Ambiance", the familiar default from Unity.
Luckily, changing themes is incredibly easy with Tweak tool, a simple drop down in Appearance > Themes, plus a separate drop down for your icon set.
There is a whole [universe of themes](https://www.gnome-look.org/) out there, but to get started you can install a few decent options from the main repository: 

`sudo apt install arc-theme numix-gtk-theme numix-blue-gtk-theme numix-icon-theme moka-icon-theme faba-icon-theme elementary-icon-theme pocillo-icon-theme`

Other themes can be installed via PPA or manually. 
I like [Pop theme](https://github.com/pop-os/gtk-theme) (instructions in the middle of the readme).

You can also try out Ubuntu's new theme in development, Communitheme.
It is a little different, you install as a snap app `snap install communitheme`, then choose it as a session when you log in.

## Get Extensions 

The cool part of GNOME is the flexibility of using shell extensions to quickly add functionality to the desktop. 
These range from new themes to menus to info widgets.

First, install the Extensions browser plugin for [Firefox](https://addons.mozilla.org/en/firefox/addon/gnome-shell-integration/) or [Chromium](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep).
Then, install the helper `sudo apt install chrome-gnome-shell` on your system (works for all browsers).
Now, you can install and manage everything from your browser by visiting the [GNOME Extensions page](https://extensions.gnome.org/).
Configuration can also be done in Tweak tool > Extensions.

For example, add useful utilities:

- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/), disable screen lock to watch movies--I consider this an essential, and the app version used in other Ubuntu versions will not work with Gnome.
- [OpenWeather](https://extensions.gnome.org/extension/750/openweather/)

Or completely change the desktop functionality:

- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/), a customized version of this extension ships with Ubuntu to create the Unity-like dock on the left side of the desktop--you can uninstall the Ubuntu version and add the vanilla extension if you want.
- [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/), puts dash into the top/bottom bar, sort of like windows 10.
- [Arc Menu](https://github.com/LinxGem33/Arc-Menu), replaces "show applications" with a more traditional drop down menu organized into categories.
- [gTile](https://extensions.gnome.org/extension/28/gtile/), add a button to resize windows based on a grid, something like a basic tiling window manager (that you manually adjust). 

## Organize Apps

The main application launcher has an icon for every installed app.
To help organize this list, you can group items together using GNOME/Ubuntu Software, it's just not very obvious how to do it...

Open Software, click on Installed tab, then on the check mark at the upper right corner.
Now click the box next to each app you want to add to a folder.
Once the group is checked off, click the "Add to Folder" button at the bottom left. 
In the pop up, click on the folder you want to add them too, or click the "+" to create a new folder.
Finally, click "Add" to finish creating the new group.

## New Apps

18.04 contains some new apps not available in the older version repositories.
Here are a few I like:

- `gnome-games` (collection of games)
- `gnome-games-app` (browse and organize games)
- `tilix` (tiling terminal)
- `gnome-boxes` (browse virtual boxes)

## Keyboard shortcuts

- `F11`, toggle full screen for any app
- `Super` (i.e. Windows key between Ctrl and Alt), toggle "Activities" overview / switcher (or `Alt+F1`)
- `Super+A`, show application menu
- `Ctrl+Alt` + Up/Down arrow, switch between workspaces (or `Super+Page Up/Down`)
- `Alt+Tab`, switch between windows (or `Super+Tab`)
- `Alt+F2`, command window, type `r` to restart GNOME to recover from freezes
- To sleep rather than shutdown, open the topbar menu, hold `Alt` and the shutdown power icon will turn into a pause icon.
- You can also [customize your shortcuts](https://help.gnome.org/users/gnome-help/stable/keyboard-shortcuts-set.html.en) using Settings > Keyboard > Shortcuts.

## Issues with snap apps and themes

A few of the standard applications that ship with 18.04 are now snap apps, rather than traditionally installed software.
There seems to be a bug with them when you are using a non-default theme, and they either won't open or just look usably terrible. 
This is *really* frustrating. 
So uninstall the snaps and reinstall the traditional app. 

`sudo snap remove gnome-system-monitor gnome-calculator`

`sudo apt install gnome-system-monitor gnome-calculator`

## Wayland Issues

While Ubuntu 17.10 shipped with next gen display server Wayland as default, 18.04 switched back to the venerable Xorg.
At the login screen, you can choose which type of session to start
When you start up your computer and arrive at the login screen, click on the gear icon next to the "Sign In" button. 
This will display two options, one saying "on Xorg" or "on Wayland".

Using Wayland introduces a few complications with some traditional applications,
most notably with graphical apps that require sudo access (gparted, synaptic, gufw) and screen recorders.
These issues are part of the reason 18.04 went back to Xorg. 

The other option is to avoid using those problematic graphical apps. 
For example, `gufw` is commonly used to set up a simple firewall on your personal computer, but will not run on Wayland. 
Just go commandline and use `ufw` with out the graphical interface (the defaults are good for most personal uses).

```
sudo apt install ufw
sudo ufw status
sudo ufw enable
``` 

## More stuff

Other than the complications mentioned above, most of the essentials to get set up are in my older [Ubuntu tips]({{ "/notes/ubuntu-tips.html" | absolute_url }}).

If you want to do some more serious customization, GTK+ can be styled with CSS ([docs](https://developer.gnome.org/gtk3/stable/theming.html)).
You can start a program with a debug window to get all the information, sort of like using inspect dev tools on a web browser:

`GTK_DEBUG=interactive gedit`

## Older notes

If you have issues with your keyboard or touch pad, there is a bug with some laptops in the kernel shipped with 17.10--see my note on [adding new kernels to Ubuntu]({{ "/notes/ubuntu-kernel.html" | absolute_url }}).
