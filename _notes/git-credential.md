---
title: Git Credential Helper 
layout: post
tags: [git, github, linux]
date: 2021-06-01
---

Git for Windows comes with git credential manager installed and configured, which makes using git on command-line much easier (i.e. not having to type your password every time). 

On Linux you can set up libsecret as a similar secure credential manager.

Configure Git as usual:

```
git config --global user.name "Evan Will"
git config --global user.email "myemail@gmail.com"
git config --global core.editor "nano -w"
```

Install dependencies:

`sudo apt-get install libsecret-1-0 libsecret-1-dev`

Build the helper (included with git):

```
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
```

Configure git to use the helper:

`git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret`

The next time you need a credential (e.g. pushing), it will prompt for username and [password/token]({{ '/notes/git-tokens.html | relative_url }}) as normal, but it will be stored by libsecret and can be used for any future authentication to that site (e.g. github, bitbucket, etc). 

## Update Credentials 

If you need to **update** your credentials, the easiest method is to use GNOME "Passwords and Keys" (i.e. Seahorse), the GUI to use libsecret. 
Open Seahorse, then look in Passwords > Login category. 
You should find an entry such as https://username@github.com/ that corresponds with the credential. 
I usually just delete the old one, then provide the updated version on my next git operation. 

-------------

## Older version: gnome-keyring

Older versions of Linux might use gnome-keyring rather than libsecret. 
Here is the old version:

```
sudo apt install libgnome-keyring-dev
cd /usr/share/doc/git/contrib/credential/gnome-keyring
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential
```
