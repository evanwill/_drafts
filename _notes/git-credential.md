---
title: Git Credential Helper 
layout: post
tags: [git, github]
date: 2017-06-01
---

Git for Windows comes with git credential manager installed and configured, which makes using git on commandline much easier (i.e. not having to type your password every time). 

On Linux you can set up libsecret as a similar secure credential manager.

Configure Git as usual:

```
git config --global user.name "Evan Will"
git config --global user.email "myemail@gmail.com"
git config --global core.editor "nano -w"
```

Install dependencies:

`sudo apt-get install libsecret-1-0 libsecret-1-dev`

Build the helper:

```
sudo apt-get install libsecret-1-0 libsecret-1-dev
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
```

Configure git to use the helper:

`git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret`

The next time you need a credential (e.g. pushing), it will prompt for username and password as normal, but it will be stored by libsecret and can be used for any future authentication to that site (e.g. github, bitbucket, etc). 

## Update Credentials 

If you need to **update** your credentials, the easiest method is to use GNOME "Passwords and Keys" (i.e. Seahorse), the GUI to use libsecret. 
Open Seahorse, then look in Passwords > Login category. 
You should find an entry such as https://username@github.com/ that corresponds with the credential. 
I usually just delete the old one, then provide the updated version on my next git operation. 

## GitHub Tokens

GitHub will require using an access token rather than your password for commandline git commands [starting in Aug 2021](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/). 
Create a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and paste in just as you would a password.

On GitHub click your profile image in upper right, click Settings > Developer settings > Personal access tokens. 
Generate a new token, check off "repo" level of access. 
Copy the token to secure password manager (treat it just like a password). 

When you authenticate on commandline, use username as normal, but paste in the token rather than your password.

## gnome-keyring

Older versions of Linux might use gnome-keyring rather than libsecret. 
Here is the old version:

```
sudo apt install libgnome-keyring-dev
cd /usr/share/doc/git/contrib/credential/gnome-keyring
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential
```
