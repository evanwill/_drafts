---
title: Setup XPS 15 with Pop_OS
layout: post
tags: [linux, install]
date: 2019-01-25
---

I recently got a [Dell XPS 15 9570](https://www.dell.com/en-us/shop/dell-laptops/xps-15/spd/xps-15-9570-laptop) (16gb ram, i7-8750H CPU) for work expecting it to have good support in Linux, considering other XPS laptops ship with Ubuntu. 
However, the massive (for a laptop) NVIDIA GeForce GTX 1050Ti with 4GB GDDR5 ensures installing Linux is not so smooth... 

Any distro will boot into the live usb pretty well with the basic Intel graphics--however, you will eventually end up with a few issues trying to get NVIDIA to work. 
To simplify, I decided to use [Pop!_OS](https://system76.com/pop), an Ubuntu-based distro from computer manufacturer [System76](https://system76.com).
There is a few [differences from Ubuntu](https://pop.system76.com/docs/difference-between-pop-ubuntu/), but most importantly Pop!_OS provides a special image specifically for NVIDIA machines so you don't have to follow a bunch of post install steps to get things working. 

*Note: I did not install as a dual boot, so I am not sure how smoothly that would go, but check the [official docs](https://pop.system76.com/docs/dual-booting-windows/).*

## Set up and install Pop!_OS

1. [download Pop!_OS](https://system76.com/pop) choosing the NVIDIA option.
2. [Burn to a USB stick](https://evanwill.github.io/_drafts/notes/burn-iso.html)
3. Plug in your Pop!_OS USB
4. Boot XPS 15 and hit F2 as it boots to enter the BIOS menu
5. Enter BIOS:
    - turn off Secure Boot (this is necessary for the NVIDIA drivers, and eventually if you want to use virtual machines)
    - Settings > General > Advanced Boot Option, select "enable legacy option ROMS"
    - SATA Operation, select "AHCI" (you need to turn "RAID" mode off because it is not supported by Linux, because its not worth while...)
6. Save and exit BIOS
7. Reboot and hit F12 as it boots to enter boot option menu
8. Choose the first USB boot option
9. After a minute, it should boot into a live desktop with the Pop installer running. You can test out the live system if desired.
10. Follow the installer steps. It is a bit different than other distros because setting up a user takes place after install, during your first boot. Check the [official docs](https://pop.system76.com/docs/install-pop-os/). I chose to do a full disk encrypt (work computer), but keep in mind it will ask you for the encryption password (different than your user password) at every restart.
11. After installation is complete, reboot, and type in your encrypt password a few times
12. Follow the steps to set up a user account
13. Checkout your new system! See the [intro docs](https://support.system76.com/articles/pop-basics/) and [keyboard shortcuts](https://pop.system76.com/docs/keyboard-shortcuts/) for more info.

## Updates

If you have used GNOME before, everything should be pretty familiar although it starts out more vanilla than an Ubuntu install.
Click on Activities or hit Super (windows key) to bring up your menu.

You should run updates, which brings up the first noticeable difference from Ubuntu.
The "update manager" is gone, instead updates are applied from the "Pop!_Shop" software center. 
Open Pop!_Shop, click on Installed, and if updates are available a button will appear to install them.

## Graphics switch

Another unique Pop! feature: click the upper right for the power menu, then click the battery icon / status meter. 
This opens options to set power profile (performance / balanced / long life), or to switch between graphics cards (NVIDIA / Intel).
Switching between graphics cards takes a minute and a restart--its not instantaneous...

## Set up and customize desktop

Open Settings:

- Settings > Background to get your wallpaper set.
- Settings > Devices > Display to set up your monitor and turn on Night Light if you want a red shift in the evening.
- Settings > Bluetooth, turn bluetooth off if you don’t use it, since it is a security risk. 

Pop uses [Ubuntu packages](https://packages.ubuntu.com/).
Open a terminal and install these right away, `sudo apt install`:

- `gnome-tweak-tool` (lets you customize the desktop)
- `chrome-gnome-shell` (might be installed already, but enables gnome extensions, connecting the manager with Firefox or Chromium)
- `tlp tlp-rdw` ([advanced laptop power management](https://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html), also see [system76 battery](https://support.system76.com/articles/battery/))

Pop! comes with a lot of development essentials already installed (build-essentials, git, curl, gpg2, ufw). But you do have to enable firewall: `sudo ufw enable`.

Next, set up Firefox browser:

- Preferences > Privacy & Security > check "Use a master password" and set.
- Add [GNOME extensions](https://extensions.gnome.org/) plugin, [gnome-shell-integration](https://addons.mozilla.org/en/firefox/addon/gnome-shell-integration/)
- Add [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/?src=search)
- Add adblocker such as [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search)

Now you can add [GNOME extensions](https://extensions.gnome.org/), click the GNOME icon in the browser's upper right side.
Pop! comes with a few pre-installed, but here are a few more to add:

- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/), disable screen lock to watch movies or just not have your laptop locking all the time.
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/), adds a highly customizable  dock to your desktop. For an Ubuntu-like look, go to installed extensions page: click settings, turn off intelligent autohide, select panel mode, and make icon size smaller.
- More suggestions, see [GNOME on Ubuntu notes](https://evanwill.github.io/_drafts/notes/ubuntu-gnome.html)

Next I like to have Gedit ("Text Editor") customized so its ready as a quick editor. 
Open the app, then click the name in the top bar to open the app menu > Preferences.
See [customization suggestions notes](https://evanwill.github.io/_drafts/notes/gedit-editor.html).

## Simplify git credentials

You can permanently store your Git credentials with your user account.
Configure Git as normal:

```
git config --global user.name "Evan Will"
git config --global user.email "myemail@gmail.com"
git config --global core.editor "nano -w"
```

Install dependencies:

`sudo apt install libgnome-keyring-dev`

Build the helper:

```
cd /usr/share/doc/git/contrib/credential/gnome-keyring
sudo make
```

Configure git helper:

`git config --global credential.helper /usr/share/doc/git/contrib/credential`

Then the next time you need a Git credential, it will prompt for username and password as normal, but it will be stored going forward.

## Issue with sleep

With Intel graphics activated, closing the lid for sleep or using the sleep icon from the power menu works correctly.
However, XPS 15 does not seem to sleep correctly with NVIDIA activated, either it won't go to sleep or it won't wake up the screen... 

Supposedly there is a way to fix this with boot options passed to the Linux kernel.
If you were on Ubuntu, editing the GRUB options *in theory* should work. 
However, Pop! no longer uses GRUB, instead uses systemd-boot and [kernelstub](https://github.com/pop-os/kernelstub).

Ubuntu would look something like: 

> Open GRUB options, `sudo nano /etc/default/grub`, and edit the value of the `GRUB_CMDLINE_LINUX_DEFAULT` line, so it looks like:
>
> `GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_rev_override=1 acpi_osi=Linux nouveau.modeset=0 pcie_aspm=force drm.vblankoffdelay=1 scsi_mod.use_blk_mq=1 nouveau.runpm=0 mem_sleep_default=deep"`
>
> Then update GRUB: `sudo update-grub`
> 
> See [dell-xps-9570-ubuntu-respin](https://github.com/JackHack96/dell-xps-9570-ubuntu-respin) "xps-tweaks.sh" for scripts which inspired these settings.

You can do this on Pop (since all the Ubuntu stuff is still there), but it won't have any effect, since it isn't actually booting via GRUB!

Check your current set up with `sudo kernelstub -p` (mine says the kernel options are "quiet loglevel=0 systemd.show_status=false splash").
You could then add on the same kernel options as the GRUB config above, like:

`sudo kernelstub -a "acpi_rev_override=1 acpi_osi=Linux nouveau.modeset=0 pcie_aspm=force drm.vblankoffdelay=1 scsi_mod.use_blk_mq=1 nouveau.runpm=0 mem_sleep_default=deep"`

Honestly, I haven't tried it... 
Since sleep works fine on Intel graphics, which I generally use for better battery life anyway, I will wait for some other brave soul to figure out the best boot options.
Let me know if you do!

## Add some apps

Languages:

- Ruby: [RVM set up](https://evanwill.github.io/_drafts/notes/ruby-notes.html)
- Python: [Anaconda set up](https://evanwill.github.io/_drafts/notes/dual-python-notebook.html)
- Java: `sudo apt install default-jre` or `default-jdk` (this will be OpenJDK 11+, fine for apps like OpenRefine, if you need more specific versions search [packages](https://packages.ubuntu.com/search?keywords=jdk&searchon=names&suite=bionic&section=all))
- Node: use [nvm](https://github.com/creationix/nvm) (this seems to be the best method; install nvm, then `nvm install --lts`), or official [NodeSource ppa](https://github.com/nodesource/distributions/blob/master/README.md), or repository version `nodejs` (which is out of date)

Search [Ubuntu Packages](https://packages.ubuntu.com/) or Pop!_Shop for software.
App essentials:

- A few extra fonts: `fonts-firacode`, `fonts-noto`
- Chromium Browser, `chromium-browser`
- Tilix terminal, `tilix`
- KeePassXC
- GIMP image editing, `gimp`
