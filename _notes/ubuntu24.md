---
title: Ubuntu 24.04
layout: post
tags: [ubuntu, linux, install]
date: 2025-01-20
---

When I started writing this blog, I had new computers, and liked to install every new release of Ubuntu and Fedora to see how much better my laptops got. 
I still use those same computers which are now old. 
I only install long term releases (LTS, five+ years of support) and keep using it for a long time. 

Well, [Ubuntu 24.04](https://ubuntu.com/download/desktop) has been out for a while now, and I haven't written an updated "getting started with Ubuntu" post for five years--so I thought I better get back to it!

This is (like other posts) notes to myself, since I installed Ubuntu 24.04 on a bunch of Dell XPS 13 laptops.
The Dell laptops are well supported, since they used to sell them with Ubuntu as an option. 
They have only 8 GB ram and were running horribly slow on end of life Windows 10--but work great in Ubuntu 24.04!

## Unencrypt Bitlocker

If you are installing over an old Windows machine which used Bitlocker encryption, first you may want to disable/unencrypt the drive.
This step shouldn't be necessary, however, the Ubuntu installer would NOT let me overwrite the encrypted Windows drive.

- Open Start Menu and search for "manage bitlocker" (or go to Control Panel > System and Security > Bitlocker Drive Encryption)
- Next to each drive it will have a "Turn off Bitlocker" option. Click it. 
- Wait. Unencrypting the drive takes a very long time.
- Once complete, fully shutdown Windows.

## Create Install USB

1. download [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop) 
2. [Burn ISO to a USB stick](https://evanwill.github.io/_drafts/notes/burn-iso.html)
3. Plug in your live USB into computer (while turned off)

## Set up BIOS

This part varies a lot on different computers and isn't always necessary... 

1. Click the power button of you computer
2. Hit the boot interrupt key to enter BIOS menu. This is usually F2, F12, Delete, or Esc, sometimes the key is flashed on the screen as the computer boots along with the manufacturer logo. For Dell XPS hit F2.
3. Enter BIOS: Look for something about "SATA Operation" and select "AHCI" (you need to turn "RAID" mode off because it is not supported by Linux).
4. Save and exit BIOS

## Boot USB

1. Reboot and hit the boot interrupt or boot option menu key. For Dell XPS hit F12. This will get you to a temporary boot menu (alternatively, these options are available in the main BIOS menu of most computers).
2. Choose the first USB boot option
3. After some thought, you may see an Ubuntu boot option menu, select "try and install" to continue. Or it will boot into the Ubuntu live image, where you can choose to test or install. 

## Install Ubuntu

Use the installer to follow through the steps (official [Ubuntu tutorial](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)). 
Suggestions: 

- Connect to wifi to greatly speed getting everything set up.
- Use "Default selection" for apps, rather then the full install, *unless* you want LibreOffice all set up and ready.
- Check the "recommend proprietary software" to simplify set up. 
- On "How do you want to install Ubuntu?" use the "Erase disk" option. Click "Advanced feature" and select "LVM and encryption" option. If you use encryption, you will set a encryption password (separate from your user password) that you will need to use each time your reboot the computer. 

## Get Set Up in Ubuntu

- Update everything with the "Updates" app or in the terminal `sudo apt update` then `sudo apt upgrade`. 
- Open Settings: 
    - Settings > Appearance - set your background and new option to set an accent color.
    - Settings > Ubuntu Desktop - Customize the Desktop icons and Dock. Option to turn off Enhanced Tiling (I'm not used to it, so sort of drives me crazy).
    - Settings > System > Date & Time - use "Time Format" option to change 24hr or AM/PM.
- Install some essentials to customize the desktop: `sudo apt install gnome-tweaks gnome-shell-extension-prefs gnome-shell-extension-manager`
    - gnome-tweaks lets you customize all details of the desktop, for example moving the window buttons from right to left corner.
    - gnome-shell-extension-prefs provides a visual tool to customize the options of gnome extensions.
    - gnome-shell-extension-manager provides a visual tool to install gnome extensions.
- Open "Extension Manager", click Browse, search for "Caffeine", and click install. [Caffeine extension](https://extensions.gnome.org/extension/517/caffeine/) allows you to disable screen lock manually, and shows up in the menu from upper right corner of the menu bar.
- Enable firewall: `sudo ufw enable`
- Development essentials: `sudo apt install build-essential git curl`
- Chromium (browser): `sudo snap install chromium`
- VS Code (editor): `sudo snap install code --classic`
- KeePassXC (password manager): `sudo snap install keepassxc`
- Ruby: [rbenv](https://evanwill.github.io/_drafts/notes/ruby-rbenv.html)

Note: I don't think tlp / advanced laptop power management is necessary any more.
