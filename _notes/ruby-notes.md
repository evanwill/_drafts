---
title: Ruby Notes
layout: post
tags: [ruby, ubuntu]
date: 2018-05-02
---

[Ruby](https://www.ruby-lang.org/en/) is an interesting language, but can be a bit frustrating with the many versions and incompatibilities.
My main use is for working with [Jekyll](https://jekyllrb.com/) or [Ruby on Rails](http://rubyonrails.org/).

On Windows I always use [RubyInstaller](https://rubyinstaller.org/), which seems to work well. 

On Linux, I have often used the version in the distro repositories (Ubuntu: `ruby-full`), but this is usually fairly out-of-date and can cause some headaches (such as requiring `sudo` to install gems).

Recently, I have switched to using [RVM](https://rvm.io/).
However, there can be some barriers because the way RVM functions isn't compatible with the default set up of Gnome terminal--either you can reconfigure, or do a little workaround by setting up a second terminal. 

## Set up RVM on Ubuntu

Install curl and build-essential if you don't have them (`sudo apt install curl build-essential`).

Set up Tilix: 

- Install Tilix terminal emulator (`sudo apt install tilix`)
- Open Tilix
- Click on the user name above the terminal window, select Profiles > Edit Profile.
- Click on Command tab, check "Run command as a login shell"
- Close Tilix

Open Tilix and install RVM using the [official instructions](https://rvm.io/rvm/install).

Install a Ruby version, probably the most recent stable (listed on [Ruby downloads](https://www.ruby-lang.org/en/downloads/)), for example: 
`rvm install 2.5.1`. 
This will download all the dependencies and build the Ruby version, which might take awhile... 

When it completes, check your Ruby, `ruby -v`.
If this is your first version, it will become the default, or you can select one, `rvm use 2.5.1`.
If you want to generate the documentation, run `rvm docs generate-ri`.

Now you can install Jekyll: `gem install bundler jekyll`

Once you restart your system, Gnome terminal will recognize your current Ruby version. 
Use RVM from Tilix.

Intros:

- [Ruby in Twenty Minutes](https://www.ruby-lang.org/en/documentation/quickstart/)
- [Rails for Zombies](http://railsforzombies.org/)
