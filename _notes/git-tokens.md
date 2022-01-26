---
title: Git Command-line Tokens
layout: post
tags: [git, github]
date: 2021-12-01
---

Most git repository hosts have changed authentications methods in the last few years to increase account security. 
Rather than using your account password to authenticate for push/pull on the command line, you will need a special token or app password set up. 

## GitHub Tokens

GitHub requires using a ["personal access token"](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) rather than your account password for command-line git commands [since around Aug 2021](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/). 

On GitHub click your profile image in upper right, click Settings > Developer settings > Personal access tokens. 
Generate a new token, check off the "repo" level of access. 
Copy the token to secure password manager (treat it just like a password). 

When you authenticate on command-line, use username as normal, but paste in the token rather than your password.

## Bitbucket App Passwords

Bitbucket requires using an ["app password"](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/) rather than your account password for command-line git commands (see [notice](https://bitbucket.org/blog/deprecating-atlassian-account-password-for-bitbucket-api-and-git-activity)).

On Bitbucket click your profile image in lower left, click "Personal settings", then "App passwords".
Create a new app password with the "Repository" level permissions checked (doesn't need any of the other types of permission).
Copy the password it provides (treat it just like any other password).

When you authenticate on command-line, use username as normal, but paste in the app password rather than your account password.

## Update Credential Manager

Git for Windows comes with git credential manager installed and configured, so your password/token is probably automatically stored (i.e. you don't have to type your password in for every git operation).
On Linux you can also [set up a Git Credential Helper]({{ '/notes/git-credential.html' | relative_url }}).

If you need to **update** your credentials to a new token/password, you will need to delete or update the values stored in your credential manager.

On Windows look in Control Panel > User Accounts > Credential Manager > Windows Credentials.
Then under "Generic Credentials" > Edit, look for the corresponding entry like "git:https://bitbucket.org".

On Linux the easiest method is to use GNOME "Passwords and Keys" (i.e. Seahorse), the GUI to use libsecret. 
Open "Passwords and Keys", then look in Passwords > Login category. 
You should find entries that correspond with the repo platforms (github.com or bitbucket.org etc).
Double click the listing to open the properties. 
Either delete the old one (then provide updated version on next git operation on commandline)--or click in the password box, paste in the new token/password, then close the box (this will ask if you want to save).
