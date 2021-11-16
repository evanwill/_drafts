---
title: Copy a Git Repo (Don't Fork)
layout: post
tags: [git, github]
date: 2021-05-20
---

"Fork" is a cool concept on GitHub, but a bit misunderstood--if you want to start your own repository (not contribute back to the project), it is **not** the best way to make a copy of the code.

## Forks

"Fork" is a GitHub feature (not part of Git), designed for a workflow similar to using git branches to collaborate with people who do not have direct access to a repository ([fork docs](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks)).

Clicking the fork button on a repo creates your own "fork"--a full copy of the repository code and history with a link configured back to the original, with the same name as the original.
It is intended to be used to contribute changes back to the original via Pull Requests, thus the "fork" repository will **not** have the full features of normal repositories. 

If you want a copy of a repository to do your own thing or to start a new project, forks are not the best solution.

## Copy a Repository 

If you want to make an exact copy of another project you can:

- **GitHub Import:** On GitHub click the plus icon in upper right, select "import repository", then paste in the clone link from the repo you want to copy. The new repo will have the full code and full history of the old one--but will not be configured as a fork and will have no link to the original. It will be a fully featured repository.
- **Copy files:** Always keep in mind a GitHub repository is just a folder of files... Create a new empty repository in your account. Add all the files from the other repository. The new repo will have the full code, but not the history of the old one. Add contents via:
    - on old repository, click "Code" button and select "download zip". Extract the zip and copy the files to your new repo (note: the download zip will **not** have files such as .gitignore or other workflow files that you might want!).
    - clone old repository, make sure you have "view hidden files" enabled, then copy all the files except​ ".git" from the old repo folder and paste into the new one. 
- **GitHub Template:** if a repository is configured as a "template", you can simply click the green "Use this template" button near the "Code" button. This will start a create a new repository with the full code of the main branch, without the full history. The new repo will display a "generated from..." link on its homepage, but there is no direct link configured between the repositories.This is the best way to copy a repository if it is configured.
    - if you own a repository you want to repeatedly use a model/template for others or yourself, look in the "Settings" tab towards the top for the check box "Template repository". Check the box.
