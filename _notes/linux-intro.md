---
title: Introduction to Linux!
layout: post
tags: [linux, workshop]
date: 2018-11-06
---

> Mini workshop:
>
> Want to get started with Raspberry Pi or Linux on your laptop? This workshop will introduce the most popular operating system in the world! Although most people are more familiar with Windows or Mac, Linux OS runs the vast majority of web servers, super computers, smartphones, TVs, and other electronic devices. You can also use desktop versions for free on your laptop or home computer!

## What is Linux?

Linux ([pronunciation](https://upload.wikimedia.org/wikipedia/commons/0/03/Linus-linux.ogg)) is a family of open source operating systems (OS).
You might hear "Unix-like" or "*nix", since Linux is part of a group of OS descended from the early research computing system [UNIX](https://en.wikipedia.org/wiki/Unix).

An OS is made up of a many components, basically:

- **Bootloader:** starts the low level processes necessary to boot an OS, most linux distributions use [GRUB](https://www.gnu.org/software/grub/).
- **Kernel:** manages the hardware and low level software components, coordinating the complete OS. This is actually "[Linux](https://www.kernel.org/)".
- **Shell:** text-based command line interface.
- **Desktop environment:** graphical interface .
- **Applications:** individual programs run from the desktop or shell.

The core of Linux, the [kernel](https://www.kernel.org/), is developed by the [Linux Foundation](https://www.linuxfoundation.org/about/) and original creator Linus Torvalds, with contributions from thousands of people and corporations around the world.
Linux operating systems are usually shipped as a complete package of components called a distribution, or "distro".
There are hundreds to choose from, each with different philosophies, strengths, and use cases.

## Why Linux?

Linux core is [Free Software](https://www.gnu.org/philosophy/free-sw.en.html), meaning cost-free and freely licensed, giving you **freedom** (as in [freeeeeedoooom](https://youtu.be/n9D7oeM3zd8))!
You can control, inspect, modify, copy, and share the OS. 
But for most users, that is not necessarily the most compelling reason to use Linux. 
Instead they just appreciate a solid, powerful, and user-friendly OS.
Linux provides security, privacy, stability/reliability, customization, and cost benefits, in addition to access to a huge ecosystem of open-source applications and services.

Linux runs the vast majority of web servers (95%+), super computers (all of the top 500), smart phones (80%+), IoT, and single board computers. 
So if you want to use a VM in the cloud, do high performance computing, or tinker with a Raspberry Pi at home, it's helpful to know Linux.
But it also makes a great desktop OS for your personal computer!
Thus, there are many practical *and* ideological reasons to use Free and Open software.

For an indepth introduction, try the free edX course from the Linux Foundation, [Introduction to Linux](https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux).

> Bloatware, adware, viruses, oh my! 
> Many people are sick of the shady commercial practices of Windows, Apple, and PC manufacturers that put user security and privacy at risk.
> Proprietary OS limit your rights and control as a user.
> Linux distros are viable alternatives!

## Distributions

Surf [Distrowatch](https://distrowatch.com/) to browse the latest distro news!
Part of the fun of getting started with Linux is choosing a distro, but there are so many it can also be very overwhelming.
Most distros are a package of technical low-level stuff, plus a desktop and selection of basic applications.
Some are focused on running servers, others on desktop users.

Here are some things to consider:

- **Out-of-the-box experience.** Do you want it to just work or are you willing to spend time customizing? Do you want all the applications pre-installed (openSUSE) or minimalist (Arch)?
- **Community.** Do you want to search online and find hundreds of answers to your questions (Ubuntu), be part of a values driven community (Fedora), or get involved in a smaller forum of deeply invested enthusiasts (Arch)?
- **Repositories.** Some distros have huge repos of applications (Debian), making installing new software secure and easy. Some are more up-to-date than others (Fedora). Others are more DIY (Arch). Some distros package only free and open software that meets their community guidelines (Fedora); others include commonly used, but non-free software, such as MP3 encodings (Ubuntu).
- **Ecosystem.** Do you use a Linux server at work? Choose a distro from the same family to make life easier.
- **Hardware support.** Unlike Windows, with Linux you don't have to install a bunch of drivers to get everything to work. However, some distros support a huge range of legacy hardware, while others have better support for the newest hardware built in. It is often difficult to run high performance graphics cards with out specific distro support. Distros have different versions of the Linux Kernel--the newest have upgraded features and performance baked in, but have less of the kinks worked out.
- **Updates.** Do you want to install an OS that will be supported for a LONG time so that you won't have to upgrade or do you want the latest-and-greatest? Distros typically follow either a rolling or fixed release. *Rolling release* distros have a continuous stream of updates, you always have the latest software and never have to upgrade to a new version. *Fixed release* are more traditional and stable with incremental versions that require a large upgrade every so often. Fixed releases are often broken into latest and LTS (long term support)--if you want to install once, and use the system for years without needed to upgrade, choose an LTS. For example, Ubuntu normal releases are officially supported for nine months, LTS for five years.
- **Installer!** In the past, Linux distros were confusing to install, a major barrier to adoption--Ubuntu really changed that, and some installers are still friendlier than others. 
    - **Secure Boot UEFI**. If you have a newer computer, it will have Secure Boot UEFI which is only supported by the bigger Linux distros (Ubuntu, Fedora, SUSE)--otherwise you will have to tweak your UEFI / BIOS to get the installer to work.
    - **Dual booting.** Do you want to keep windows? Some installers make it easy (Ubuntu).

My easy suggestion: use [Ubuntu](https://www.ubuntu.com/) or an [Ubuntu flavor](https://www.ubuntu.com/download/ubuntu-flavours).
The installer is easy to use (supports easy dual booting with Windows) and hardware support is great.
It also has the largest beginner and intermediate user community, so help is always easily at hand via blogs, wikis, and forums--if you search for Linux help probably 90% of answers are about Ubuntu.

But check out the [Major Distro Families](#major-distro-families) below for MORE suggestions!

## Desktop Environment

Next, you will have to choose your desktop environment (DE)--the graphical interface you will be staring at all day!
Unlike windows, mac, or chrome, with Linux distros you have a choice of desktops.
It is separate from the core of the distro and can be installed independently.

Generally, you will choose a package pre-bundled with a DE, most distros will give you several options.
Things to consider:

- Weight. How graphics heavy is it. If you have an old computer or low spec hardware, go light!
- Configurability. How much do you want to tweak the look and feel? Do you want it to just look good out of the box?
- Unique vs. traditional. Do you want something different or are you nostalgic for the old days?

Major desktops:

- [GNOME](https://www.gnome.org/). modern, minimalist-style, unique "Activities Overview" (no start menu), [extensions](https://extensions.gnome.org/) add functionality, and themes easily change the look.
    - [Budgie](https://budgie-desktop.org/). up-and-coming project (get newest version with [Solus](https://getsol.us/home/)).
    - [Cinnamon](http://developer.linuxmint.com/projects.html). more traditional desktop with start menu (get newest version with [Mint](https://www.linuxmint.com/)).
    - [MATE](https://mate-desktop.org/). traditional, based on an old version of GNOME.
    - ~~Unity~~. Until version 17.10, Ubuntu shipped with a unique desktop. It is still available in old LTS version 16.04, but is unlikely to be further developed. However, Ubuntu's GNOME theme emulates the Unity look.
- [KDE](https://www.kde.org/). very configurable, complex, windows-like (get newest version with [Neon](https://neon.kde.org/)).
- [Xfce](https://www.xfce.org/). lighter weight, traditional linux desktop.
- [LXDE](http://lxde.org/). very light weight, basic features. Also see [LXQt](http://lxqt.org/) variant.
- Tiling window managers, e.g. [xmonad](http://xmonad.org/) or [i3](https://i3wm.org/). For any easy intro, checkout [Regolith Linux](https://regolith-linux.org/) which combines i3-wm with Ubuntu.

> Most desktops support themes which make it easy to change the look and feel. 
> For example check out the themes page at [OMG! Ubuntu!](http://www.omgubuntu.co.uk/category/themes-2).
> You might hear about GTK vs. Qt applications and themes.
> Gnome uses GTK and KDE uses Qt, so applications based on the non-native tool kit won't style correctly.

## 64 or 32

One last choice you might have to make is 64 or 32-bit?
Many distros have started to phase out 32-bit support, but you may still encounter the choice to download "64-bit" / "x86_64" / "AMD64" versus "32-bit" / "i386" / "i586".
If your computer is still running, it is likely new enough to be 64-bit, so I would suggest ignoring 32-bit options unless you know your hardware requires it.
Some distros now also support ARM processors, such as found in Raspberry Pi, so you may encounter an option like "ARMv7".

## Try and Install!

The best way to learn Linux is to try it. 
When you buy a Windows, Chromebook, or Mac computer, the operating system (OS) comes pre-installed. 
However, if you are interested in running Linux or other open OS, you will have to install it yourself.

Most modern Linux distros are released as an ISO disk image, often a "live cd" or "live usb".
This means you can download an ISO, burn it to a USB stick, and then boot up into the desktop without actually installing or changing your hard drive!

Give it a try with these instructions to [burn an ISO](https://evanwill.github.io/_drafts/notes/burn-iso.html) and [boot a live USB](https://evanwill.github.io/_drafts/notes/linux-boot-usb.html).

Once you try it out, install it!
The live session will have an app to permanently install the OS on your machine.
Most installers are graphical and user-friendly.
Here is Ubuntu's official [install tutorial](https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop).

> Alternatively, you can install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) on a computer to try out any distro in a disposable virtual machine.
> The performance will be very limited, but it is an easy way to test something out or see what the install process looks like.

## Basics

If you have ever used a computer, almost everything will be familiar! No big deal.
Here are a few things slightly different from Windows:

- **User accounts and passwords.** You are always logged in as a user and require a password to make any changes to the system (Windows tends to hide this).
- **File system, home directory.** Linux uses a file system that Windows can't read and is presented differently. On Window the root is the drive letter `C:\`. Linux presents all drives as a unified file system, with the root at `/` and your user directory at `/home/username` (Linux doesn't use Windows back slashes `\`).
- **Updates.** Updates are pushed out very regularly by most distros keeping you secure and fixing bugs. The updates cover the OS and all applications installed from a repository. First, the catalog of all software in the distro's repositories is updated, then updates that apply to your installed software are downloaded. There is usually an updater application, but you may need to start it manually.
- **Software center.** Applications can be easily and securely installed from your distro's repository. There is usually an GUI app to find and manage your software.
- **Terminal.** Command line is really handy! See this [mini-workshop](https://evanwill.github.io/_drafts/notes/commandline.html).
- **UIdaho wifi.** Connecting to AirVandalGold requires some extra steps, see [my instructions](https://evanwill.github.io/_drafts/notes/airvandalgold-setup.html).

# Major Distro Families

Below is a basic introduction to the major linux families, with a focus on distros with desktop friendly versions.

### Debian

One of the oldest active linux distros, Debian has extensive stable repositories that are the base of MANY other distros. 
This includes Ubuntu, developed by enterprise software company [Canonical](https://www.canonical.com/) based in the UK.
Uses `apt` configuration and `.deb` packages.

- [Debian](https://www.debian.org/), entirely free software released by the Debian Project. [Debian packages](https://www.debian.org/distrib/packages).
- [Ubuntu](https://www.ubuntu.com/), the most popular desktop linux, beginner friendly. [Ubuntu Packages](https://packages.ubuntu.com/).
    - [Ubuntu flavors](https://www.ubuntu.com/download/ubuntu-flavours), Ubuntu spins featuring alternative desktops.
    - [Linux Mint](https://www.linuxmint.com/), one of the most popular and beginner friendly, featuring the Cinnamon desktop.
    - [Elementary OS](https://elementary.io/), stylish mac replacement, unique Pantheon desktop.
    - [Pop!_os](https://system76.com/pop), customized Gnome desktop, built by computer company [System76](https://system76.com) focused on developers, with good support for NVIDIA cards.
    - [KDE Neon](https://neon.kde.org/), cutting edge KDE on Ubuntu base.
    - [Zorin OS](https://zorinos.com/), polished windows replacement.
    - [Linux Lite](https://www.linuxliteos.com/), focused on easy to use, windows replacement, with Xfce.
    - [Bodhi Linux](https://www.bodhilinux.com/), minimalist, lightweight distro with unique Moksha desktop.
    - [Peppermint](https://peppermintos.com/), ChromeOS-like cloud focused minimal desktop.
    - [GalliumOS](https://galliumos.org/), Xubuntu based replacement for Chromebook hardware.
- [Raspbian](https://www.raspberrypi.org/downloads/raspbian/), Official OS of Raspberry Pi, unique Pixel desktop.
- [Tails](https://tails.boum.org/index.en.html), privacy focused distro.
- [Endless OS](https://endlessos.com/home/), simplified, education focused system designed for offline use, by computer company [Endless](https://endlessos.com/computers/).

### Fedora / RedHat

Based in the USA, [Red Hat](https://www.redhat.com/) is one of the largest open-source enterprise software companies, providing support, development, and Linux OS to major corporations.
It is a good choice to learn if you are interested in working with enterprise environments.
Uses `yum` or `dnf` configuration and `.rpm` packages.

- [Fedora](https://getfedora.org/), open project sponsored by Red Hat with a focus on free-software. Considered fairly cutting edge with two new versions each year, a testing ground for RHEL, yet stable enough for most users. [Fedora Packages](https://apps.fedoraproject.org/packages/).
    - [Fedora Spins](https://spins.fedoraproject.org/), alternative desktops.
    - [Fedora Labs](https://labs.fedoraproject.org/), specialized distros from science to music.
    - [Sugar on a Stick](https://spins.fedoraproject.org/en/soas/), very unique kid focused learning platform, packaged to run on a live USB. Learn more at [Sugar Labs](https://www.sugarlabs.org/).
    - ~~[Korora](https://kororaproject.org/)~~, *(development is stalled, sadly many small distros are disappearing)* nice looking beginner friendly.
- [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux), an industry standard, non-free.
- [CentOS](https://www.centos.org/), free community supported RHEL.
- ~~[Scientific Linux](https://www.scientificlinux.org/)~~, free RHEL-based OS developed by Fermilab for high performance scientific computing environments (is now being phased out in favor of CentOS).

### SUSE

Germany based enterprise FOSS company.
Uses `ZYpp` or `YaST` for configuration and `.rpm` packages.

- [openSUSE](https://www.opensuse.org/), developer focused with a rolling release option, Tumbleweed. *Note: openSUSE default install ISO are not live images and can not be used to try without installing. They provide a separate live image, but it is not complete and cannot be used to install.* [openSUSE Packages](https://software.opensuse.org/find).
    - [GeckoLinux](https://geckolinux.github.io/), openSUSE spin focused on being user friendly.
- [SUSE Linux Enterprise](https://www.suse.com/), commercial distro with focus on mature and stable server environments.

### Arch

An independent, community built family with rolling release following a *K.I.S.S.* and DIY philosophy. 
Not traditionally user friendly.
Uses `pacman` for configuration. [Archlinux packages](https://www.archlinux.org/packages/).

- [Arch](https://www.archlinux.org/)
- [Manjaro](https://manjaro.org/), user friendly Arch for beginners.
- ~~[Antergos](https://antergos.com/)~~, user friendly Arch (sadly [discontinued](https://antergos.com/blog/antergos-linux-project-ends/)).

### Others

**Independent.** Some distros go it alone. For example:

- [Solus](https://getsol.us/home/), up-and-coming independent distro developing Budgie desktop.
- [Mageia](http://www.mageia.org/en/), France based community focused distro.
- [Qubes OS](https://www.qubes-os.org/), personal security focused distro with unique architecture that isolates all software in separate VM-like containers.
- [Alpine Linux](https://www.alpinelinux.org/), minimalistic, security focused distro from Norway, commonly used as basic server image.
- [Linux From Scratch](http://www.linuxfromscratch.org/), build everything yourself, step-by-step DIY!

**Portable.** Some linux distros are specifically designed to be portable, i.e. you always use them from a USB stick and do not install to a hard drive.
This makes them simple, fast, and secure.
For example:

- [Puppy Linux](http://puppylinux.org/)
- [Slax](https://www.slax.org/en/)
- [Porteus](http://www.porteus.org/)

**Android.** Based on Linux, Android is the most popular smart phone OS in the world.

- [Android-x86](http://www.android-x86.org/download), port of Android that can be run on a laptop.

**Entertainment.** There are many specialized minimalist distros that act as entertainment centers, usually run on a Raspberry Pi or similar device.

- music player: [Volumio](https://volumio.org/).
- media center: [OSMC](https://osmc.tv/) or [OpenELEC](http://openelec.tv/).
- gaming: [RetroPie](https://retropie.org.uk/) or [SteamOS](http://store.steampowered.com/steamos/).
- NAS: [FreeNAS](http://www.freenas.org/) or [EasyNAS](http://www.easynas.org/). 

**Utilities.** Some specialized distros are basic utilities used to work on a computer where the main drive or OS maybe corrupted.

- [GParted Live](https://gparted.sourceforge.io/livecd.php), partition and disk utility.
- [Clonezilla](http://www.clonezilla.org/), disk imaging/cloning deployment or recovery.
- [DBAN](https://dban.org/), disk data destroyer.

### Other open OS 

There are other open-source OS out there, Linux is just the most popular.

- BSD: a family of OS descended from [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) Unix. Considered rock-solid stable and secure for servers, with desktop options [FreeBSD](https://www.freebsd.org/) and [TrueOS](https://www.trueos.org/).
- OpenSolaris / illumos / SunOS: a family of Unix-like OS descended from proprietary enterprise systems, currently openly developed by the [openindiana](https://www.openindiana.org/) community.
- [Haiku](https://www.haiku-os.org/), based on BeOS, an early competitor to Mac.
- [KolibriOS](http://kolibrios.org/en/), minimalist, tiny OS.
- [Redox OS](https://www.redox-os.org/), newly developed OS written in [Rust](https://www.rust-lang.org/en-US/) language.

# Resources

- Julia Evans [Drawings](https://drawings.jvns.ca/) and [Zines](https://jvns.ca/zines/) are an approachable and amusing way to learn about advanced linux topics.
