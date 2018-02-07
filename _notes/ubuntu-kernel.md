---
title: Alternative Kernels on Ubuntu
layout: post
tags: [linux]
date: 2018-02-01
---

I encountered an amazingly annoying [keyboard and touchpad bug](https://askubuntu.com/questions/995819/touchpad-gestures-and-holding-keys-does-not-work) in early 2018 with the linux kernel that ships with Ubuntu 17.10. 
This led me to switch to a newer mainline kernel where the bug is fixed.
At first it sounds complicated to re-install the most basic parts of your operating system, but in fact it is pretty easy! 

## Check Current Kernel Version

The command `uname -r` will list your current kernel version.

## Boot with an Older Kernel

As you install regular updates, Ubuntu will add new versions of the kernel.
Unless you `sudo apt autoremove`, these older versions will be available on your system in case you need to roll back.
When you hit the GRUB menu during system start up, arrow down and select "Advanced options for Ubuntu".
This will give you a list of installed kernels. 
Simply select one of the older ones to boot up and see if the bug goes away.

## Add New Kernels

To get Ubuntu packages for the new kernels, visit the [Ubuntu kernel ppa](http://kernel.ubuntu.com/~kernel-ppa/mainline/?C=M;O=D).
The kernel versions are numbered like `v4.15.1` and fall into several [categories](https://www.kernel.org/category/releases.html) (RC, Mainline, Stable, or Longterm).
Mainline is the newest version line (e.g. `4.15`), and is continuously updated with new Stable subversions (e.g. `4.15.1`).
The newest Mainline kernel has the most up-to-date fixes and performance improvements, but also has the most *unknown* bugs. 
Older Stable and Longterm kernels are regularly updated with patches from the Mainline, thus may have issues, but most are *known* bugs that have documented fixes.
There is a trade off between the most up-to-date and more stable kernels (see ["Which kernel version is stable"](https://www.linux.com/blog/learn/2018/2/which-linux-kernel-version-stable) for a good discussion), thus most distros maintain a LTS version with their releases.

From the the [Ubuntu kernel ppa](http://kernel.ubuntu.com/~kernel-ppa/mainline/?C=M;O=D), click on the newer version you want to install.
Scroll down to the "build" section for your computer's architecture, most likely "amd64" and "generic" for a 64-bit laptop.
Download the three `.deb` packages for the new kernel (the version number is replaced with "..." in the list below):
- `linux-headers-... _all.deb`
- `linux-headers-... _amd64.deb`
- `linux-image-... -generic... _amd64.deb`

Next, to simplify install, I create a new folder and add the three downloaded `.deb` packages.
In the new folder containing *only* the three kernel packages, run `sudo dpkg -i *.deb` (it is best to install all at once, since they are dependencies of each other).
Once the install has finished, restart and you will be using the new kernel. 
If you encounter an issue with the new kernel, rollback to the older version using the GRUB menu. 

Keep in mind that the manually installed kernel will not be updated or automatically removed. 
Once your distro adds a newer kernel version, automatic updates will kick in again and install the newest version. 
Thus, if you want to keep on the regular updates, it is best not to jump a major version ahead if possible, since your distro may not ever catch up.

To remove manually installed kernels, it is easiest to use `synaptic` package manager (note: does not run in a Wayland session).
Search for "linux-image", mark the versions "for Complete Removal", then click Apply. 
Just be sure not to remove ALL your kernels, or you will have nothing to boot!
