---
title: Introduction to Linux!
layout: post
tags: [linux, workshop]
date: 2017-04-13
---

> MILL-Mini workshop:
>
> Want to get started with Raspberry Pi or Linux on your laptop? This workshop will introduce the most popular operating system in the world! Although most people are more familiar with Windows or Mac, Linux OS runs the vast majority of web servers, super computers, smartphones (Android), TVs, and other electronic devices. You can also use desktop versions for free on your laptop or home computer!
> Come get an introduction to free and open source operating systems, and see desktop versions of Linux in action on Raspberry Pi and laptops. We will get oriented to the basics of the desktop and learn how to install it on a computer.

## What is Linux?

Linux ([pronunciation](https://upload.wikimedia.org/wikipedia/commons/0/03/Linus-linux.ogg)) is a family of open source operating systems (OS).
An OS is made up of a many components, basically:
- Bootloader: starts the low level processes necessary to boot an OS, usually for [GRUB](https://www.gnu.org/software/grub/)
- Kernel: manages the hardware and low level software components, this is actually [Linux](https://www.kernel.org/)
- Shell: text-based command line interface
- Desktop environment: graphical interface 
- Applications: individual programs run from the desktop or shell

Linux is usually shipped as a complete package of components called a distribution (distro).
There are thousands to choose from, each with different philosophies, strengths, and use cases.

## Why Linux?

Linux core is [Free Software](https://www.gnu.org/philosophy/free-sw.en.html), meaning cost-free and freely licensed, giving you **freedom** (as in [freeeeeedoooom](https://youtu.be/n9D7oeM3zd8))!
You can control, inspect, modify, copy, and share the OS. 
But for most users, that is not necessarily the most compelling reason to use Linux. 
Instead they just appreciate a solid, powerful, and user-friendly OS.
Linux provides security, privacy, stability/reliability, customization, and cost benefits, in addition to access to a vast ecosystem of open-source applications and services. 
Linux runs most web servers, super computers, and single board computers. 
So if you want to use a VM in the cloud, do high performance computing, or tinker with a Raspberry Pi at home, it's helpful to know Linux.
But it also makes a great desktop OS for your personal computer!
Thus, there are many practical *and* ideological reasons to use Free and Open software.

> Bloatware, adware, viruses, oh my! 
> Many people are sick of the shady commercial practices of Windows, Apple, and PC manufacturers that put user security and privacy at risk.
> Propriety OS limit your rights and control as a user.
> Linux distros are viable alternatives!

## Distributions

Surf [Distrowatch](https://distrowatch.com/) to browse the latest distro news!
Part of the fun of getting started with Linux is choosing a distro, but there are so many it can also be very overwhelming.
Most distros are a package of technical low-level stuff, plus a desktop and selection of basic applications.
Many are focused on running servers, others on desktop users.
Here are some things to consider:

- Out-of-the-box experience. Do you want it to just work or are you willing to spend time customizing it? Do you want all the applications pre-installed or minimalist (Arch)?
- Installer! In the past, Linux distros were hard to install--Ubuntu really changed that, but some installers are still friendlier than others.
- Dual booting options. Do you want to keep windows? Some installers make it easy (Ubuntu).
- Repositories. Some distros have huge repos of applications (Debian), making installing new software secure and easy. Some are more up-to-date than others. Others are more DIY (Arch).
- Hardware support. Some distros support a huge range of legacy hardware. Others have better support for the newest hardware (look for newest kernel version).
- Current vs LTS (long term support). Do you want to install an OS that will be supported for a LONG time so that you won't have to upgrade or do you want the latest-and-greatest?
- Rolling release vs. fixed release. Rolling release distros have a continuos stream of updates, you always have the latest software and never have to upgrade to a new version. Fixed release are more traditional and stable with incremental versions that require a large upgrade every so often.
- Ecosystem. Do you use a Linux server at work? Choose a distro from the same family to make life easier.

My easy suggestion: use [Ubuntu](https://www.ubuntu.com/) or an [Ubuntu flavor](https://www.ubuntu.com/download/ubuntu-flavours).
The installer is easy to use (supports easy dual booting with Windows) and hardware support is great.
But check out the Appendix at the bottom for MORE suggestions!

## Desktop Environment

The desktop environment (DE) is the graphical interface you will be staring at all day.
Unlike windows, mac, or chrome, with Linux you have a choice of desktops.
It is separate from the core of the distro and can be installed independently.
In fact you can [install more than one](https://www.linux.com/news/5-linux-desktop-environments-rise-2017)!
Things to consider:
- Weight. How graphics heavy is it. If you have an old computer or low spec hardware, go light!
- Configurability. How much do you want to tweak the look and feel? Do you want it to just look good out of the box?
- Unique vs. traditional. Do you want something different or are you nostalgic for the old days?

Major desktops:
- [GNOME](https://www.gnome.org/). modern, minimalistic, no start menu, [extensions](https://extensions.gnome.org/) add functionality, themes easily change the look.
    - [Budgie](https://budgie-desktop.org/). up-and-coming project (get newest version with [Solus](https://solus-project.com/))
    - [Cinnamon](http://developer.linuxmint.com/projects.html). more traditional desktop with start menu (get newest version with [Mint](https://www.linuxmint.com/))
    - [MATE](https://mate-desktop.org/). traditional, based on an old version of GNOME
    - ~~Unity~~. Until version 17.10, Ubuntu shipped with a unique desktop. It is still available in LTS version 16.04, but the future is uncertain.
- [KDE](https://www.kde.org/). very configurable, complex, windows-like (get newest version with [Neon](https://neon.kde.org/))
- [Xfce](https://www.xfce.org/). lighter weight, traditional linux desktop
- [LXDE](http://lxde.org/). very light weight, basic features. Also see [LXQt](http://lxqt.org/) variant.
- Tiling window managers, e.g. [xmonad](http://xmonad.org/)

> Most desktops support themes which make it easy to change the look and feel. 
> For example check out the themes page at [OMG! Ubuntu!](http://www.omgubuntu.co.uk/category/themes-2).
> You might hear about GTK vs. Qt applications and themes.
> Gnome uses GTK and KDE uses Qt, so applications based on the non-native tool kit won't style correctly.

## Try and Install!

The best way to learn Linux is to try it. 
When you buy a Windows, Chromebook, or Mac computer, the operating system (OS) comes pre-installed. 
However, if you are interested in running Linux or other open OS, you will have to install it yourself.
Modern Linux distros are released as an ISO disk image, often called a "live cd" or "live usb".
This means you can download an ISO, burn it to a USB stick, and then boot up into the desktop without actually installing or changing your hard drive!
Give it a try, with these [instructions](https://evanwill.github.io/_drafts/notes/burn-iso.html).

Or you can install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) on a computer to try out any distro in a disposable virtual machine.
The performance will be very limited, but it is an easy way to test something out or see what the install process looks like.

Once you try it out, install it!
Most installers are graphical and friendly.

## Basics

If you have ever used a computer, almost everything will be familiar! No big deal.
Here are a few things slightly different from Windows:

- User accounts and passwords. You are always logged in as a user and require a password to make any changes to the system (Windows tends to hide this).
- File system, home directory. Linux uses a different file system that Windows can't read and is presented differently. On Window the root is the drive letter `C:\`. Linux presents all drives as a unified file system, with the root at `/` and your user directory at `/home/username` (Linux doesn't use Windows back slashes `\`).
- Updates. Updates are pushed out very regularly by most distros keeping you secure and fixing bugs. The updates cover the OS and all installed applications. First the catalog of all software in the distro's repositories is updated, then updates that apply to your installed software are downloaded. There is usually an updater application, you may need to start it manually.
- Software center. Applications can be easily and securely installed from your distro's repository. There is usually an GUI app to find and manage your software.
- Terminal. Command line is really handy! See this [mini-workshop](https://evanwill.github.io/_drafts/notes/commandline.html).
- UIdaho wifi. Connecting to AirVandalGold requires some extra steps, see [my instructions](https://evanwill.github.io/_drafts/notes/airvandalgold-setup.html).

# Appendix

## Major distro families

[Debian](https://www.debian.org/) boring, stable distro with extensive repositories that is the base of MANY other distros. Uses `apt` configuration and `.deb` packages.
- [Ubuntu](https://www.ubuntu.com/) developed by Canonical based in the UK, it is the most popular desktop linux, very beginner friendly
    - [Ubuntu flavors](https://www.ubuntu.com/download/ubuntu-flavours), Ubuntu spins featuring alternative desktops
    - [KDE Neon](https://neon.kde.org/) cutting edge KDE on Ubuntu base
    - [Linux Mint](https://www.linuxmint.com/) one of the most popular and beginner friendly, featuring the Cinnamon desktop
    - [Elementary OS](https://elementary.io/) mac replacement, unique Pantheon desktop
    - [Zorin OS](https://zorinos.com/) windows replacement
    - [Pop!_os](https://system76.com/pop) Gnome desktop, built by computer company [System76](https://system76.com)
- [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) Official OS of Raspberry Pi, unique Pixel desktop
- [Tails](https://tails.boum.org/index.en.html) privacy focused distro

[Fedora](https://getfedora.org/). Uses `yum` configuration and `.rpm` packages.
- [RedHat](https://www.redhat.com/) USA based non-free enterprise Linux
    - [CentOS](https://www.centos.org/) free RedHat
- [Fedora Spins](https://spins.fedoraproject.org/)
    - [Korora](https://kororaproject.org/) fairly new, nice looking distro
    - [Sugar](http://wiki.sugarlabs.org/go/Sugar_on_a_Stick/Installation) unique kid focused distro originally developed for One Laptop per Child project
- [Fedora Labs](https://labs.fedoraproject.org/) specialized distros from science to games

[openSUSE](https://www.opensuse.org/). Uses `ZYpp` or `YaST` for configuration and `.rpm` packages.
- [SUSE Enterprise](https://www.suse.com/) Germany based enterprise Linux

[Arch](https://www.archlinux.org/) *K.I.S.S.* DIY, not traditionally user friendly, uses `pacman` for configuration, usually rolling release.
- [Manjaro](https://manjaro.org/) user friendly Arch for beginners
- [Antergos](https://antergos.com/) user friendly Arch

[Solus](https://solus-project.com/) up-and-coming independent distro developing Budgie desktop

[Android](https://source.android.com/)
- [RemixOS](http://www.jide.com/remixos) open android for desktop
- [Android-x86](http://www.android-x86.org/download)

**Portable.** Some linux distros are specifically designed to be portable, i.e. you always use them from a USB stick and do not install to a hard drive.
This makes them simple, fast, and secure.
For example:
- [Puppy Linux](http://puppylinux.org/)
- [Slax](https://www.slax.org/en/)
- [Porteus](http://www.porteus.org/)

**Entertainment.** There are many specialized minimalist distros that act as entertainment centers, usually run on a Raspberry Pi or similar device.
- music player: [Volumio](https://volumio.org/)
- media center: [OSMC](https://osmc.tv/), [OpenELEC](http://openelec.tv/)
- gaming: [RetroPie](https://retropie.org.uk/)

**Utilities.** Some specialized distros are basic utilities used to work on a computer where the main drive or OS maybe corrupted.
- [GParted Live](https://gparted.sourceforge.io/livecd.php), partition and disk utility
- [Clonezilla](http://www.clonezilla.org/), disk imaging/cloning deployment or recovery
- [DBAN](https://dban.org/), disk data destroyer

**Other open OS.** There are other open-source OS out there, Linux is just the most popular.
- BSD. Considered rock-solid stable and secure for servers, with desktop options [FreeBSD](https://www.freebsd.org/) and [TrueOS](https://www.trueos.org/)
- [Haiku](https://www.haiku-os.org/)
- [KolibriOS](http://kolibrios.org/en/). Minimalist, tiny OS
