---
title: Ruby rbenv on Ubuntu
layout: post
tags: [ruby, ubuntu, install]
date: 2024-12-05
---

For a long time I used [RVM](https://rvm.io/) as version manager to install [Ruby](https://www.ruby-lang.org/en/) on Linux ([note](https://evanwill.github.io/_drafts/notes/ruby-notes.html)). 
However, while teaching workshops Mac users seem to run into endless issues trying to install RVM. 
For Mac, using [brew](https://brew.sh/) to install [rbenv](https://github.com/rbenv/rbenv) seems a better alternative.
Also, some folks don't like how RVM handles it's Ruby version switching magic (e.g. basically it is too heavy and hacks the `cd` command, see [summary](https://dev.to/krtb/why-and-how-i-replaced-rvm-with-rbenv-23ad)).
So eventually I switched to rbenv on Linux as well.

*Unfortunately, rbenv documentation is poor and seems focused on Mac users--thus this note to remember what I did on Ubuntu...*

There are a few things to keep in mind:

- If you have RVM currently installed, you will have to fully remove it which isn't very easy (I switched to rbenv only when I did a fresh install). 
- Unlike RVM, rbenv only switches Ruby versions, it doesn't install/build them. This is not obvious for Mac users since installing rbenv via brew automatically installs [ruby-build](https://github.com/rbenv/ruby-build) at the same time (without mentioning it...). So you will want to install ruby-build as well.
- Using rbenv has changed a bit since earlier versions (easier now), so looking at old suggestions / instructions is probably a wild goose chase.
- You will have to keep rbenv and ruby-build up-to-date manually, which is a bit of a pain, but sort of refreshingly simple... 
- You can automate install using [rbenv-installer](https://github.com/rbenv/rbenv-installer), which is basically a script just like brew recipes (I did not try this).

**Note:** there is an Ubuntu package to install, so you can use `sudo apt install rbenv ruby-build`.
Unfortunately the `ruby-build` package is *super* out of date, so it will only list very out-of-date versions of Ruby to install.
This is not a good install method!

## Install rbenv and ruby-build

**First**, install build dependencies. 
Honestly, I am not sure about these, but this is the [suggested build environment](https://github.com/rbenv/ruby-build/wiki#suggested-build-environment) from ruby-build, which I updated a bit for recent Ubuntu since some of the listed packages are out-of-date:

```
sudo apt install autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev
```

Finish the install, close your terminal and open a new one.

**Second**, clone rbenv into your home directory:

`git clone https://github.com/rbenv/rbenv.git ~/.rbenv`

**Third**, run the init function to set it up:

```
~/.rbenv/bin/rbenv init
```

Close terminal and open a new one.

**Fourth**, clone ruby-build into the rbenv plugins directory:

`git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build`

## Install a Ruby 

Check the [Ruby download page](https://www.ruby-lang.org/en/downloads/) to find the latest stable version or your project requirements to find your desired Ruby version number.
Check `rbenv install -l` to get a list of available versions.

Use `rbenv install` + version number, e.g.:

`rbenv install 3.4.1`

This can take awhile since ruby-build will download and build from source. 

Once complete, set the version you want to use:

`rbenv global 3.4.1`

Now, `ruby -v` should report what you just set.
If you need a different version for a specific project, run `rbenv local <version number>` in the directory (which creates a file called `.ruby-version` to keep track).

*Note:* Gems you install will be specific to the currently used version (global or local). When you install a new gem that includes commands (e.g. Jekyll) rbenv shims have to be rebuilt. 
This is done automatically (assuming you followed the `rbenv init` instructions), or can be manually triggered with command `rbenv rehash`. 

## Switching Rubies

`rbenv versions` lists installed versions with `*` next to current global version

`rbenv global <version number>` will switch global version. 
Once you switch, just remember that your installed gems are specific to a version, so you won't have the same set of gems available!

## Update rbenv and ruby-build

Since you installed the tools using git, to update rbenv and ruby-build you simply `git pull` the most recent master branch code.

```
cd ~/.rbenv && git pull
cd "$(rbenv root)"/plugins/ruby-build && git pull
```

**Note:** the list of available Ruby versions (`rbenv install -l`) is **NOT automatically updated**.
So you should periodically update ruby-build following the git pull method above (i.e. `cd ~/.rbenv/plugins/ruby-build && git pull`).
