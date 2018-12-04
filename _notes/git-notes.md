---
title: Git notes
layout: post
tags: [git, github]
date: 2017-06-01
---

##  Sync fork

To Sync your fork from the original repository is two steps:

1. [Setup the upstream remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/) (only have to do this one time)
    - check current config: `git remote -v`
    - add upstream remote: `git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`
2. [Sync fork](https://help.github.com/articles/syncing-a-fork/)
    - `git fetch upstream`
    - `git checkout master`
    - `git merge upstream/master`
    - You're up-to-date locally, then update your fork, `git push`

There is also a weird work around to do it via the GitHub web interface:

1. Go to the original repository (not your fork).
2. Click on "New pull request"
3. On "compare changes" page, click the little text that says "compare across forks".
4. Select your fork from the "base fork" drop down (this means you are pulling code from the original and sending it to your fork), if all is good it will say "Able to merge"
5. Add a PR message and click green "Create pull request" button.
6. Your fork now has a PR, click "Merge pull request" to complete.

## Remote branches 

It is a bit confusing that branches are only local by default.
A branch that is connected to a remote repository (GitHub) is called a "tracking branch".
When you `git clone`, the `master` branch is automatically created as a "tracking branch" with the GitHub repository as the "upstream branch".
However, git knows about the other branches, but does not automatically create them locally.
Furthermore, after you create a new branch locally, and you want to push it to GitHub, you will need to add a remote. 

To get information about all your remotes, `git remote show origin` lists everything tracked locally and how it lines up with your remotes.

Use a remote "tracking branch" locally:

- Clone the repo, `git clone https://github.com/user/repository.git`
- Checking `git branch` will display only the local branches, i.e. `*master` if you just cloned it.
- Check `git branch -a` to see all branches, including remotes, i.e. git knows about the other branches, it just didn't create a local version of it yet. The remote branches will be named like `remotes/origin/branch-name`.
- To create a local version of the remote branch, `git checkout -b branch-name origin/branch-name`. Now it is there, you can push and fetch/pull as normal. (note: there is a short cut version: `git checkout --track origin/branch-name`, or even shorter: if you simply `git checkout branch-name` when there is no local branch with that name *and* it exactly matches a remote branch git will automatically create a local "tracking branch")

Create a branch locally, then add to remote:

- Create and switch to a new branch, `git checkout -b branch-name`. (reminder: this is a short cut combo of two commands, `git branch branch-name` and `git checkout branch-name`)
- To add the branch to the remote, `git push origin branch-name` will create the remote branch and set the "upstream" for the local version. (this is a shortcut to `git branch --set-upstream-to origin branch-name` plus `git push`)

## Update branch from master

1. Update your `master` branch, with `git pull`. 
2. Switch to the feature branch that needs updating, `git checkout feature-branch`.
3. Merge `master` into the feature: `git merge master`. 

## Graph

You can actually reproduce those pretty visualizations of history you see on GitHub in the terminal. 
Try: `git log --graph --abbrev-commit --date=relative`

## Helpful

- [Rebase a Pull Request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)
- [About pull request merges](https://help.github.com/articles/about-pull-request-merges/)
- [Rebase and merge](https://github.com/blog/2243-rebase-and-merge-pull-requests)

## Git in Classroom

- [GitHub Classroom](https://classroom.github.com/)
- [Why you should use GitHub: Lessons for the classroom and newsroom](http://www.storybench.org/use-github-lessons-classroom-newsroom/)
- [GitHub for Academics](http://www.digitalpedagogylab.com/hybridped/push-pull-fork-github-for-academics/)

## GitHub

- use Emoji in GitHub markdown, see [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
