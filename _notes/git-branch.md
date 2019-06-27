---
title: Git Branch Notes
layout: post
tags: [git, github]
date: 2018-06-01
---

[Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell){:target="_blank"} is a Git fundamental that allows you to test out ideas in parallel to your main repository without disrupting the master copy. 
Notes about confusing things:

## Remote branches 

It is a bit confusing that branches are only local by default, e.g. when you `git checkout -b example` on your laptop, the new `example` branch is only on your machine and will not automatically be pushed to GitHub.
Likewise, a new branch on GitHub will not automatically appear on your local machine when you use `git branch` to list branches.

A branch that is connected to a remote repository (GitHub) is called a "tracking branch".
When you `git clone`, the `master` branch is automatically created as a "tracking branch" with the GitHub repository as the "upstream branch".
However, git knows about the other remote branches, but does not automatically create them locally.
Furthermore, after you create a new branch locally, and you want to push it to GitHub, you will need to add a remote. 

To get information about all your remotes, `git remote show origin` lists everything tracked locally and how it lines up with your remotes.

Use a remote "tracking branch" locally:

- Clone the repo, `git clone https://github.com/user/repository.git`
- Checking `git branch` will display only the local branches, i.e. `*master` if you just cloned it.
- Check `git branch -a` to see all branches, including remotes, i.e. git knows about the other branches, it just didn't create a local version of it yet. The remote branches will be named like `remotes/origin/branch-name`.
- To create a local version of a remote branch, use `git checkout branch-name` (when there is no local branch with that name *and* it exactly matches a remote branch, git will automatically create a local "tracking branch"). This is the short cut to `git checkout -b branch-name origin/branch-name`. Now with the branch there locally, you can push and fetch/pull as normal. 

Create a branch locally, then add to remote:

- Create and switch to a new branch, `git checkout -b branch-name`. (reminder: this is a short cut combo of two commands, `git branch branch-name` and `git checkout branch-name`)
- To add the branch to the remote, `git push origin branch-name` will create the remote branch and set the "upstream" for the local version. (this is a shortcut to `git branch --set-upstream-to origin branch-name` plus `git push`)

## Update branch from master

In most workflows you might not actually want to do this to avoid weird histories, but...

1. Update your `master` branch, with `git pull`. 
2. Switch to the feature branch that needs updating, `git checkout feature-branch`.
3. Merge `master` into the feature: `git merge master`. 
