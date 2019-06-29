---
title: Git notes
layout: post
tags: [git, github]
date: 2017-06-01
---
## Quick fix the last commit

If you just made a commit, and haven't pushed it yet, but suddenly realize you forgot to add something, need to change the message, or tweak a file, use `git commit --amend`.

1. make the changes you need 
2. `git add` any changes (nothing if you are just changing the commit message)
3. `git commit --amend -m "new commit message that replaces the old one"`

This commit will just be combined with the last one into a single new commit as if the first one never happened.

## Undo one file

Checkout the version of the file you want from the history, then commit that file. 
For example, go back a version from one commit back:

```
git checkout HEAD~1 example.txt
git add example.txt
git commit -m "undo example changes"
```

## Undo a whole commit

`git revert <somehash>` will undo a commit you list by creating a new commit reversing those changes. 
It doesn't go back to that point in the history or undo other commits along the way, it just does exactly the opposite of that one commit.
Get the hash for the commit from the GitHub commits page or `git log --oneline` and add it to the end of `git revert`.

## Undo a merge

You can undo a merge commit, which will undo the whole batch of changes created by the merge--the exact opposite of the merge. 

However, when reverting merge commits, you need an extra option, because you need to tell it which side of the history you want to keep, i.e. the parent or the merging branch.
Normally you would keep the parent with option `-m 1`, the command ends up looking like:

`git revert -m 1 <somehash>`

Your history will look wonky (and can potentially have odd effects if you try to merge the same branch again), but it is the best way to avoid problems collaborating on a remote.

## Graph

You can actually reproduce those pretty visualizations of history you see on GitHub in the terminal. 
Try: `git log --graph --abbrev-commit --date=relative`

## Helpful

- [Rebase a Pull Request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)
- [About pull request merges](https://help.github.com/articles/about-pull-request-merges/)
- [Rebase and merge](https://github.com/blog/2243-rebase-and-merge-pull-requests)
- Amusing way to view Git Log, [StarLogs](https://github.com/artemave/StarLogs)

## Git in Classroom

- [GitHub Classroom](https://classroom.github.com/)
- [Why you should use GitHub: Lessons for the classroom and newsroom](http://www.storybench.org/use-github-lessons-classroom-newsroom/)
- [GitHub for Academics](http://www.digitalpedagogylab.com/hybridped/push-pull-fork-github-for-academics/)

## GitHub

- use Emoji in GitHub markdown, see [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
