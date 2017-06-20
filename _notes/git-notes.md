---
title: Git notes
layout: post
tags: [git, github]
date: 2017-05-01
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
