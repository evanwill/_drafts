---
title: Fedora Setup
layout: post
tags: [linux]
date: 2018-03-17
---

After being a long-term Ubuntu user, while using 17.10 and looking ahead at 18.04, I suddenly lost a bit of hope for the distribution and decided to try some others for awhile (especially since I have been manually [installing new kernels](https://evanwill.github.io/_drafts/notes/ubuntu-kernel.html) due to bugs with my laptop with 17.10).

First, [Fedora](https://getfedora.org/).
I choose Fedora because it is a bit more cutting edge than Ubuntu, yet still fairly stable (and running a newer kernel that works correctly with my laptop).
I have found that although Debian/Ubuntu is known for gigantic repositories, Fedora plus RPM Fusion has more packages that I am interested in and they are more up-to-date.
Fedora is also interesting because of its connection to the huge enterprize Linux company [Red Hat](https://www.redhat.com/en).
There are a lot of good things about Fedora philosophically, I am liking it but I haven't been totally sold on it yet... anyway, here are my notes about getting started:

## Installer 

Fedora uses their "Anaconda" installer, which is not as immediately user friendly as Ubuntu's. 
Unlike Ubuntu, it does not automatically detect existing operating systems and offer to dual-boot or other options. 
However, dual-booting is still possible, it is just not well documented and the UX is poor. 

To dual-boot with an existing OS, chick on the install location icon and select your hard drive. 
In the options below, check "Automatic" and "I would like to make additional space available".
Then click "Done" at the top. 
This will open a window where you can choose existing partitions to delete--i.e. select your old Linux partition you want to over write and the old `/boot/efi`. 
The selected partitions will be deleted, and Fedora will automatically set up new ones in the freed up space. 

In my case, this seemed to work good. 
However, Grub does not detect Windows on my machine for some reason.
I haven't been able to fix this yet, because Grub uses `os-prober` and doesn't find anything except Fedora.

This highlights the main frustration I have run into so far with Fedora: there just isn't as much help online. 
If you search for any issue you will get a thousand Ubuntu answers, and maybe one incomplete/out-of-date Fedora one. 

Try [Ask Fedora](https://ask.fedoraproject.org/en/questions/)... 

## Get started

Once Fedora is installed, I noticed start up time is longer than expected. 
 
1. Update: do a `sudo dnf upgrade --refresh`, this will refresh the package list and update everything. This first one might be big and will require a restart to finish updating.
2. Tweaks: `sudo dnf install gnome-tweaks`, to get started customizing the look and feel. I turn off animations right away.
3. Enable RPM Fusion: follow the links on the [Fusion Configuration page](https://rpmfusion.org/Configuration) to set up the extended repository for Fedora (the main repos are purely Free software only).
 
## Get Gnome Extensions 
 
Fedora comes with a few GNOME extensions installed, head to Tweaks > Extensions to try turning them off and on. 
To get more, you have to add some things, because the current GNOME shell extensions browser plugin doesn't work with up-to-date Firefox. 
You need Chromium and the host app to get started:

`sudo dnf install chromium chrome-gnome-shell` 
 
Once installed, head to [GNOME Extensions](https://extensions.gnome.org/) to try stuff out.
Here are two I like:

 - [Caffeine](https://extensions.gnome.org/extension/517/caffeine/), disable screen lock to watch movies
 - [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/), puts dash into the top/bottom bar, sort of like windows 10

## Get themes

The default Adwaita theme isn't that lovely. 
There are a bunch of themes in the Fedora repos, so install a bunch and play around:

```
sudo dnf install arc-theme numix-gtk-theme numix-icon-theme numix-icon-theme-circle bluecurve-gnome-theme bluecurve-icon-theme gnome-shell-theme-selene bluecurve-metacity-theme nodoka-theme-gnome elementary-icon-theme pop-gtk-theme pop-icon-theme moka-icon-theme evopop-gtk-theme evopop-icon-theme arc-theme adapta-gtk-theme paper-icon-theme
```

Then open Tweaks > Appearance to switch between the Applications and Icons themes to see how they look. 

## Get more apps

Use Software, or search [Fedora Packages](https://apps.fedoraproject.org/packages/) and use `sudo dnf install <packagename>`.

## Jekyll

My next set is always to get Jekyll set up. 
You could use the main repositories, like `sudo dnf install ruby ruby-devel rubygem-jekyll`, but you end up with a fairly out-of-date Jekyll. 

Unfortunately, you need a bunch of stuff. This worked for me:

`sudo dnf groupinstall "C Development Tools and Libraries"`

`sudo dnf install redhat-rpm-config`

`sudo dnf install ruby ruby-devel rubygems-devel`

`gem update --system` *note: vulnerabilities recently discovered in gem, update!*

`gem install jekyll bundler`

## Fonts

You might want a few more fonts, open Software, click Add-ons > Fonts. 
Scroll through and install a bunch. 
I also do: `sudo dnf install google-noto-mono-fonts adobe-source-code-pro-fonts`.

Also, you can download [Fira Code](https://github.com/tonsky/FiraCode), look in the ttf folder, then double click on each of the font weights. 
This opens up the font install window, click the Install button to add to the system.
