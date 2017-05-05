---
title: Quick Git for Collaboration Intro
layout: post
tags: [git, workshop]
date: 2017-05-05
---

> Introduce using Git and GitHub for collaborating on code, writing, and websites.

## Why

[Git](https://git-scm.com/) is a [free](https://www.gnu.org/philosophy/free-sw.en.html), [distributed](https://en.wikipedia.org/wiki/Distributed_version_control) version control system originally developed for coordinating huge software development projects (i.e. the [Linux Kernel](https://www.kernel.org/) led by [Linux Foundation](https://www.linuxfoundation.org/about)). 
However, Git is also great for personal uses such as organizing the code for your research project or the drafts and notes for writing an article. 
Pair Git with free hosting from [Github](https://github.com/) and you have a powerful platform for managing your code and writing while collaborating and sharing with others.

If you are working with code or collaborating, version control WILL make your life better!

See: 
- Get Git, [Why](https://uidaholib.github.io/get-git/1why.html)
- Software Carpentry, [Version Control with Git](http://swcarpentry.github.io/git-novice/)
- also check out [Data Carpentry](http://www.datacarpentry.org/lessons/) for discipline specific data lessons

## Basic Workflow

I want to introduce collaboration aspects of GitHub, but it's easiest to explain by using it! 
Git seems pretty wierd until you do it... 

Follow the first time [Setup](https://uidaholib.github.io/get-git/2setup.html) and [Workflow](https://uidaholib.github.io/get-git/3workflow.html) from Get Git.

Skip the [History](https://uidaholib.github.io/get-git/4history.html) section for now, but just keep in your heart that Git keeps track of Everything! 
Have peace of mind that you can't loose your history once committed to a Git repo, unless you try really hard.

## Collaborating via GitHub

Putting your project on GitHub adds powerful options for user management, project management, and sharing.

There is two basic workflows to collaborate on a GitHub repository:

1. Add collaborators (simple, typical of smaller projects)
    - On GitHub, click the "Settings" tab of your repository.
    - On the left menu, click "Collaborators".
    - Add collaborators via email or GitHub name.
    - Collaborator will need to accept the invite.
    - Clone the repo to your local machine.
    - Now you all have equal control over the repo content: `push`, `pull`, `merge`, etc.
2. Fork and Pull Request (more complex, centralized control, typical of bigger projects)
    - Navigate to your partner's repo on GitHub.
    - Click "Fork" in upper right.
    - Make changes in your personal fork of the repo.
    - On your personal fork, click "New pull request" button.
    - Check the changes, click "Create pull request" button.
    - Create a message saying exactly what changes you made and why.
    - The original repo will now have a PR that collaborators can view and comment on. Only the owner can accept the request and merge it.

Note: it is best to create small, targeted commits when collaborating.
Each commit should do one specific thing making it easier for others to understand your work and navigate the history if necessary.
PR's should include only one change so they can be merged in as a module--don't combine several unrelated commits since the owner may not want to merge all of them. 

Also check out the project management features:
- Issues. Create an issue to discuss and track ideas, bugs, projects, requests, etc. Can be assigned to people, tagged, and more. Allows people outside of the project report problems with your code. 
- Projects. Create Trello board like lists to organize work.
- Wiki. Simple wiki-style documentation that can be edited by your collaborators (note: written Markdown not wikitext).

Tips: 
- learn [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/) because it's a [great way to write](https://evanwill.github.io/_drafts/notes/writing-markdown.html) and is used everywhere on GitHub.
- Issues, PR, and commits can be mentioned in any GitHub comment and will be replaced by [reference shortlinks](https://help.github.com/articles/autolinked-references-and-urls/). 
- GitHub users can be mentioned using `@` and will be notified of your comment.

## gh-pages

GitHub also offers free web hosting for your project, organization, or personal profile!

Check [Go-go gh-pages!](https://evanwill.github.io/go-go-ghpages/)

Also, use GitHub [Gist](https://gist.github.com/) to instantly share simple notes, outlines, snippets, etc.
