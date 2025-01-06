---
title: Git Credential Manager
layout: post
tags: [git, github, linux]
date: 2024-12-30
---

Git for Windows comes bundled with Git Credential Manager (gcm) which makes using git on command-line much easier, automatically opening up authentication in a GUI window or web browser and storing the results.
On linux things are not quite so simple--however, you can *now* install [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) manually.

(alternatively, you can use [Git Credential Helper](https://evanwill.github.io/_drafts/notes/git-credential.html) if you have authentication tokens set up already) 

## Install git-credential-manager

Follow the instructions for your OS [documented at the gcm github repository](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md).
Here a the summary for Ubuntu:

- download latest ".deb" package [release](https://github.com/git-ecosystem/git-credential-manager/releases)
- install the deb `sudo dpkg -i <path-to-package>`
- run `git-credential-manager configure`
- [configure a credential store](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/credstores.md). I use the secretservice option which is built in to Ubuntu: `git config --global credential.credentialStore secretservice`
- Restart your system! (otherwise you will get weird errors)

Next time you clone or pull from a private repository (or push), gcm will pop open a little window to handle authentication for the platform. 
The credentials will be stored for future re-use.

If you need to **update** your credentials, the easiest method is to use "Passwords and Keys" / Seahorse app:
Look in Passwords > Login category. 
You should find an entry such as "git:https://github.com/" that corresponds with the credential. 
I usually just delete the old one, then provide the updated version on my next git operation. 
