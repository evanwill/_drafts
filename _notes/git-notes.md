---
title: Git notes
layout: post
tags: [git, github]
date: 2017-06-01
handy: true
---

## Quick fix the last commit

If you just made a commit, *and haven't pushed it yet*, but suddenly realize you forgot to add something, need to change the message, or tweak a file, use `git commit --amend`.

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

Your history will look wonky (and can potentially have odd effects if you try to merge the same branch again), but it is usually the best way to avoid problems collaborating on a remote.

## Graph

You can actually reproduce those pretty visualizations of history you see on GitHub in the terminal. 
Try: `git log --graph --abbrev-commit --date=relative`

## file naming for collaboration!

Be *extra careful* of file naming case sensitivity when working with people across Linux, Mac, and Windows.

Git is developed and designed for Linux. 
In Linux file systems, filenames are case sensitive. 
So files like "README.md", "readme.md", and "ReadMe.md" are three totally different files, and can be tracked and committed by Git. 
GitHub and other web services run on Linux so also allow case sensitive file naming.

However, Windows and Mac file systems are by default case insensitive.
On Window and Mac files like "README.md", "readme.md", and "ReadMe.md" can not exist at the same time, and all refer to a single file.

This can lead to nasty Git errors if a Linux user commits files that would be the same if case insensitive. 
E.g. Linux user commits "README.md" and "readme.md" in the same directory, if Windows and Mac users pull the update they end up with fatal errors and a lot of confusion.
It can't be gracefully fixed on Windows or Mac, so it is best to clean it up on GitHub or Linux, then do a fresh clone (see [xkcd git](https://xkcd.com/1597/)).

## Git Merge Error Message

Recent Git installations (late 2023+) do not have a default behavior set for git pull, so the first time you encounter a conflict and merge, you will get a big error message asking which approach you want to use (merge or rebase). 
It looks like:

```
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
```

To avoid this error, you can set the old default behavior in your config, which is: 

`git config --global pull.rebase false.`

## Helpful

- [Rebase a Pull Request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)
- [About pull request merges](https://help.github.com/articles/about-pull-request-merges/)
- [Rebase and merge](https://github.com/blog/2243-rebase-and-merge-pull-requests)
- Amusing way to view Git Log, [StarLogs](https://github.com/artemave/StarLogs)
- [gitignore.io](https://www.gitignore.io/) (ready made ignore templates for various project types)

## Git in Classroom

- [GitHub Classroom](https://classroom.github.com/)
- [Why you should use GitHub: Lessons for the classroom and newsroom](http://www.storybench.org/use-github-lessons-classroom-newsroom/)
- [GitHub for Academics](http://www.digitalpedagogylab.com/hybridped/push-pull-fork-github-for-academics/)
- [git for librarians reading list](https://gist.github.com/chrisdaaz/1e894dc5af2e2c9cf0cc75d057fcf79f)

## GitHub

- use Emoji in GitHub markdown, see [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
