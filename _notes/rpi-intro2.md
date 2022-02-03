---
title: Getting Started with Raspberry Pi
layout: post
tags: [rpi, workshop]
date: 2022-02-03
---

> Curious about Raspberry Pi and other single board computers? This session will introduce everything you need to know to get started, from burning an SD card to Linux basics. Single board computers can be used to power research projects, host a local media server, or just play video games--so join us to learn about all the interesting things you can do with a Pi!

## What is Raspberry Pi?

Raspberry Pi is a *very* popular family of single board computers (SBCs) designed to be simple, flexible, affordable, and educational.
Basically, it is just a minimal computer with everything contained on a small circuit board.

It isn't much different than the insides of your laptop:

- Single board computer: 64-bit CPU, 512MB - 4GB RAM, graphics card
- Connect: USB, Ethernet, Wifi, Bluetooth
- Output: Video (HDMI), audio (HDMI, 3.5mm jack), [GPIO pins](https://www.raspberrypi.com/documentation/computers/os.html#gpio-and-the-40-pin-header)

However, this minimal form factor, and modular input and output options (such as GPIO pins) invite us to interact with it very differently from a standard laptop. 
Raspberry Pi is ready to act like a typical computer, or to power anything you can dream up!
It is commonly used in education, prototyping new hardware, controlling unique science experiments, and powering hobbyist computing projects. 

There are other SBCs on the market, but Raspberry Pi has remained the most popular.
Here are some reasons why:

- High **quality build** with stable form factor and specs. Wide adoption and stability improves the sustainability and interoperability of your projects.
- Large **ecosystem** of compatible "hats", "bonnets", and add ons. There are tons of vendors out there making things that work with Pi, which makes it easier to build your project!
- Well supported and maintained **software** and Linux operating system. Many SBCs rely on community builds for software, which can be frustrating and unsustainable. An official Raspberry Pi OS is maintained by the foundation, and many Linux projects distribute official builds as well, providing a solid and reliable base for your project.
- Excellent **documentation**, both official and community projects. If something goes wrong or you need to figure out how to do something, there is usually help readily available.
- Extensive **learning materials** available, including many tutorials, courses, and teacher guides. Pi started as an educational initiative and retains that spirit. There is curriculum around learning the hardware, as well as learning more generalized concepts about computing, coding, linux, inventing, making, and more. 

> [Raspberry Pi .com](https://www.raspberrypi.com/) is where you can shop for hardware, download software, find [forums](https://forums.raspberrypi.com/) and read [documentation](https://www.raspberrypi.com/documentation/).
> The educational foundation maintains a separate site at [Raspberry Pi .org](https://www.raspberrypi.org/) where you can find teaching and learning resources (not all Pi based), and research.

## Raspberry Pi vs. Arduino 

Raspberry Pi is the most popular **SBC**, Arduino is the most popular **microcontroller**.
Both are very flexible, with great documentation and community.
Which one you need depends on your project!

Arduino: 

- Microcontroller board, 8-bit processor, tiny memory.
- Very simple, solid, reliable.
- Very low power consumption.
- Doesn't have an operating system, it just runs your code, i.e. it does one thing really well!
- Generally programmed in C/C++ (not the easiest to learn), and require code to be compiled for flashing to the board.

Raspberry Pi:

- Single board computer with full operating system.
- Having an operating system means you can do lots more stuff, like outputting to a monitor, running software, and using high-level programming languages (mainly Python).
- Relatively simple and reliable, but OS requires updates, might need restarting, etc.
- Consumes much more power than a microcontroller and requires steady power supply to avoid issues.

> A new ecosystem of microcontroller boards powered by [MicroPython](https://micropython.org/) / [CircuitPython](https://circuitpython.org/) is emerging which removes some of the barriers of the traditional Arduino programming.
> These are worth checking out if you want to use Python, or need a board slightly more powerful than Arduino but don't need a full computer!

## What Can You Do with Raspberry Pi?

- Use it as a [personal computer](https://www.raspberrypi.com/products/raspberry-pi-400/) running Linux.
- Set up a [media center](https://libreelec.tv/) connected to your TV.
- Build a high end [audio player](https://volumio.com/en/get-started/) controllable by your phone.
- Play games on dedicated [emulator system](https://retropie.org.uk/), [cabinet](https://www.adafruit.com/product/4334), or [handheld](https://www.adafruit.com/product/3160).
- [Print poems](https://github.com/evanwill/poemBot)?

To get an idea of the range of projects out there, browse 
[adafruit tutorials](https://learn.adafruit.com/category/raspberry-pi),
[Raspberry Pi Projects](https://projects.raspberrypi.org/en/projects?hardware%5B%5D=raspberry-pi), or [Hackaday](https://hackaday.io/list/3424-raspberry-pi-projects).

--------------------

# Getting Started 

## Hardware: Raspberry Pi Starter Kit

What you need:

- [**Pi SBC**](https://www.raspberrypi.com/products/) (see [spec chart](https://en.wikipedia.org/wiki/Raspberry_Pi#Specifications)). Most common models:
    - Raspberry Pi 3 Model B+ - the standard for projects for awhile.
    - Raspberry Pi Zero 2 W - basically a Pi 3 in tiny form factor (and cheap price)! This is great if you need to fit your project into a small space. For general prototyping, Pi 3 might be easier to work with.
    - Raspberry Pi 4 Model B - newest, most advanced and powerful option, but also uses more power, creates more heat, and costs more! You can get it with up to 8GB ram, making it very viable as a desktop computer.
    - Although the specs vary, the models are mostly interchangeable, so the best choice may simply be the one that you have readily available.
- **Power supply.** Most Pi run off a micro USB charger, but you need a decent one! A rainbow icon shows up on screen if power goes low.
- **Micro SD card.** This will be your Pi's hard drive. Try to get decent quality, high read/write speed, "SDHC, Class 10 / UHS 3", min 8GB. Low quality SDs are a common source of issues.

You might want: 

- HDMI cable to attach to monitor or TV.
- USB [Keyboard](https://www.logitech.com/en-us/products/keyboards/k400-plus-touchpad-keyboard.920-007119.html), mouse, or other input devices. Bluetooth also works once you get everything set up.
- [Console cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/overview) can be used for headless setup and prototyping.
- [Ribbon cable](https://www.adafruit.com/product/1988) + breadboard for circuit prototyping.

## Software: Getting an Operating System

Many people take operating systems for granted since they come pre-installed on Windows and Apple computers--you don't get any choices with these proprietary systems!
Raspberry Pi does not come with an operating system or even a "hard drive" for it to load from. 
If you just plug it in, it can't do anything--first you have to choose and install an operating system.

Pi's are designed for Linux, a family of open source operating systems used to run all kinds of computers, from servers to super computers.
Check the [Try Linux workshop](https://evanwill.github.io/try-linux/) for a general introduction and resources.

Linux OS are usually provided as a downloadable disk image (sometimes called ISO), that can be burned onto a SD card.
The basic steps for Pi:

- Choose and download an OS image.
- Burn the image onto a SD card. (Keep in mind this is **not** the same as copying the files over!)
- Insert SD into Pi.
- Plug in the Pi to boot up! (Pi's don't have power buttons...)

The easiest way to complete these steps is using the "Raspberry Pi Imager" app.
Imager will download select OS images, burn SDs, and provide other helpful utilities (such as reformating SDs). 
Visit the [Raspberry Pi Software page](https://www.raspberrypi.com/software/), download Imager for your computer, and install. 

For detailed instructions see [Pi Getting Started](https://www.raspberrypi.com/documentation/computers/getting-started.html), for the [official step-by-step guide](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up) for a visual walk through.

> You don't have to use Imager!
> The [official images](https://www.raspberrypi.com/software/operating-systems/) or other ISOs can be downloaded manually, then burnt the SD using any disk imaging software, such as [Etcher](https://www.balena.io/etcher/).
> Check [burn ISO note](https://evanwill.github.io/_drafts/notes/burn-iso.html) for details.

### Choosing an OS

Which operating system you choose depends on your use case. 
For the officially supported Pi OS you have two main choices:

- "Raspberry Pi OS with desktop" - is the generally recommended version. It is compatible with all Pi versions. The "desktop" is the visual interface you are familiar with on Windows or Mac. This is the default choice on Imager.
- "Raspberry Pi OS Lite" - does not come with a desktop. This is a good option for *headless* projects or servers where you don't need to use a visual interface. 

Each version also comes in 32-bit or 64-bit editions. 
The 32-bit versions are compatible with all Pi models and are the default. 
On Pi 4, the 64-bit version may provide better performance and compatibility with newer software.

In addition to the official Pi OS, many other Linux distributions provide images built for Raspberry Pi. 
Some of these are specialty OS, such as media servers or game consoles.
Others are general purpose OS or servers from popular distros.
Popular options include:

- [Ubuntu](https://ubuntu.com/download/raspberry-pi), one of the most popular Linux distributions for desktop and servers, so may simplify some projects or be familiar. Desktop version only runs on Pi 4. 
- [LibreElec](https://libreelec.tv/), a minimal OS designed to run as a media center on your TV.
- [RetroPie](https://retropie.org.uk/), a minimal OS designed to run game emulators on your TV.

> The confusingly named "Raspberry Pi Desktop for PC and Mac" is simply an image of the OS built for normal laptop architecture. 
> This gives you the option to run "Raspberry Pi OS" on a non-Pi computer--but you might want to check out other [distros](https://evanwill.github.io/try-linux/content/5-resources.html#major-distro-families)!
> Raspberry Pi OS is based on [Debian Linux](https://www.debian.org/).

## Boot Up!

Once you SD is burnt: 

- Insert SD into your Pi.
- Plug in any peripherals, such as HDMI to a monitor/tv and a USB keyboard.
- Plug in your Pi power supply.
- Wait for it to boot!

You will see a bunch of text flash past on the screen--that is okay and normal.
Eventually you will get to the desktop and you can start using your new Linux computer!

Check the [official OS docs](https://www.raspberrypi.com/documentation/computers/os.html) for lots of details.

Even for headless projects, it is often easiest to start with your Pi plugged into a monitor for initial set up. 
If your OS does not come with a desktop, you will see the text terminal interface.
Alternatively, you can use a [console cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/overview) or SSH into your Pi for [remote access](https://www.raspberrypi.com/documentation/computers/remote-access.html#introduction-to-remote-access).

