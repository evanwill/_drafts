---
title: Update GitHub Fork
layout: post
tags: [git, github]
date: 2018-12-04
---

[Forking](https://help.github.com/articles/fork-a-repo/) a repository is a feature unique to GitHub (i.e. it is *not* a Git function).
A fork is a complete copy of a repository that retains a link to the original. 
They are used in a similar way to Git [Branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), allowing you to experiment and make changes independent of the main/master version which can then be merged back into the source.
This supports a workflow where anyone can offer contributions to open projects via [pull requests](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

However, it is often a bit mystifying how to keep your fork up-to-date with the original.
A simple solution is to delete your stale fork and then fork a new one--but there is (of course) a way to update safely. 

*Instructions below use `main` as default branch, if you have an older repository the default may be `master` instead*

##  Sync fork on commandline

To sync your fork from the original repository is two steps:

1. [Setup the upstream remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/) (only have to do this one time)
    - check current config: `git remote -v`
    - add upstream remote (use the clone link from the original repo): `git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`
2. [Sync fork](https://help.github.com/articles/syncing-a-fork/)
    - `git fetch upstream`
    - `git checkout main`
    - `git merge upstream/main`
    - You're up-to-date locally, then update your fork on github, `git push`

## Sync fork on GitHub Desktop

1. Click current branch button in top menu (this should bring up a branch panel)
2. At bottom of the branch panel click "choose branch to merge with main" (this should open a dialog box)
3. Click "upstream/main" (this should be the original repo that you forked)
4. Click "Merge upstream/main" (this will fetch the updates in the original repo and attempt to merge them into your current branch)

## Sync fork on GitHub web interface

There is also a weird work around to do it via the GitHub web interface:

1. Go to the original repository (not your fork).
2. Click on "New pull request"
3. On "compare changes" page, click the little text that says "compare across forks".
4. Select your fork from the "base fork" drop down (this means you are pulling code from the original and sending it to your fork), if all is good it will say "Able to merge"
5. Add a PR message and click green "Create pull request" button.
6. Your fork now has a PR, click "Merge pull request" to complete.
