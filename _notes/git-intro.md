---
title: Git Intro
layout: post
tags: [git, github, workshop]
date: 2019-06-27
---

> Introduce using Git and GitHub for collaborating (workshop outline)

1. Finish [Prep](https://evanwill.github.io/get-git/0-prep.html){:target='_blank'} (git + github account)
2. Take [Survey](https://docs.google.com/forms/d/e/1FAIpQLSeC0XH3vHOAOU9gSMmkdTGrND8PN0AAIo6f5PL5WOAXRWMjNg/viewform?usp=sf_link){:target='_blank'}

## Why use Git and GitHub?

[Git](https://git-scm.com/){:target='_blank'} is a [free](https://www.gnu.org/philosophy/free-sw.en.html){:target='_blank'}, [distributed](https://en.wikipedia.org/wiki/Distributed_version_control){:target='_blank'} version control system originally developed for coordinating huge software development projects (i.e. the [Linux Kernel](https://www.kernel.org/){:target='_blank'} led by [Linux Foundation](https://www.linuxfoundation.org/about){:target='_blank'}). 

However, Git paired with GitHub is also great for academic and personal uses, such as collaborating over code for your research project, drafting articles, or creating lab websites.

**Intro to version control:**

- [notFinal.doc](http://www.phdcomics.com/comics/archive.php?comicid=1531){:target='_blank'}
- [A story told in file names](http://phdcomics.com/comics/archive.php?comicid=1323){:target='_blank'}
- [xkcd: Git](https://xkcd.com/1597/){:target='_blank'}
- Get Git, [Why](https://uidaholib.github.io/get-git/1why.html){:target='_blank'}

**Git for science:**

- Reproducibility: records all steps and participants, ability to share complete history.
- Backup: it is very difficult to delete history--if you commit it, Git stores it with integrity.
- Collaborate: manage complicated work in parallel with multiple people/computers.
- Experiment: branching makes you feel brave and free to explore!

**GitHub:**

- Project management features
- [Organizations](https://evanwill.github.io/_drafts/notes/github-org.html)
- Community (find code, connect)
- Sharing (DOIs for citable code / data)

## Basic Workflow

Git is best learned hands-on. 
Intro is via command line to give a clear step-by-step overview of how it works--in the future you may use a GUI tool or functions built into your IDE.

- [Setup Git](https://evanwill.github.io/get-git/2-setup.html){:target='_blank'}
- [Basic Git Workflow](https://evanwill.github.io/get-git/3-workflow.html){:target='_blank'}
- [History](https://evanwill.github.io/get-git/4-history.html){:target='_blank'}
- [Cheatsheet](https://evanwill.github.io/get-git/cheatsheet.html){:target='_blank'}

Keep in your heart that Git keeps track of Everything! 
Have peace of mind that you can't loose your history once committed to a Git repo, unless you try really hard.

Be sure to `.gitignore` cache files and temporary outputs--just commit the source code, data, and notes.

## Basic GitHub Collaborating Workflows 

There is two basic workflows to collaborate on a GitHub repository:

1. Add collaborators to repo (simple, typical of smaller projects)
    - On GitHub, click the "Settings" tab of your repository.
    - On the left menu, click "Collaborators".
    - Add collaborators via email or GitHub name.
    - Collaborator will need to accept the invite.
    - Clone the repo to your local machine.
    - Now you all have equal control over the repo content: `push`, `pull`, `merge`, etc. 
    - Using feature [branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell){:target='_blank'} may be helpful to organize your work--create a branch, do some work, push the new branch to GitHub, then create a Pull Request to discuss with your team.
2. Fork and Pull Request (more complex, centralized control, typical of bigger projects)
    - Navigate to your partner's repo on GitHub.
    - Click "Fork" in upper right.
    - Make changes in your personal fork of the repo.
    - On your personal fork, click "New pull request" button.
    - Check the changes, click "Create pull request" button.
    - Create a message saying exactly what changes you made and why.
    - The original repo will now have a PR that collaborators can view and comment on. Only the owner can accept the request and merge it.

See GitHub Help [Fork a Repo](https://help.github.com/articles/fork-a-repo/){:target='_blank'}, [About Pull requests](https://help.github.com/articles/about-pull-requests/){:target='_blank'}, and [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/){:target='_blank'} for more info.
Also, check out Atlassian's [Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows){:target='_blank'} or GitHub [About collaborative development models](https://help.github.com/en/articles/about-collaborative-development-models){:target='_blank'} for more options.

## Collaborating Practice

Add collaborators:

- create a new repository with README
- clone to your local machine 
- add partner as collaborator
- accept partner's invite (check [notifications](https://github.com/notifications){:target='_blank'}) 
- clone partner's repo 
- make change locally to partner's repo README and push

Auto merge:

- make change locally in your repo, creating a new file `test.txt`
- try to push
- pull (auto merge message)
- push

Conflicts:

- pull your partner's repo
- make a change to `test.txt` locally in your partner's repo
- push
- make a change to `test.txt` locally in your repo
- try to push
- pull, enter merging state
- fix conflicts
- commit
- push

*Art of the commit:* it is best to create small, targeted commits when collaborating.
Each commit should do one specific thing making it easier for others to understand your work and navigate the history if necessary.

## RStudio Integration

RStudio has builtin integration with Git, allowing you do complete the basic commands with the interface.
Basically, an RStudio "Project" will equal a Git repo. 
You can directly `clone` a repo from GitHub using *File > New Project > Version Control > Git*.
When you open a Project that is a git repo, you should see the "Git" menu on the interface giving access to the git commands.

- RStudio support, [Version Control with Git and SVN](https://support.rstudio.com/hc/en-us/articles/200532077-Version-Control-with-Git-and-SVN){:target='_blank'}
- SWC, [Using Git from RStudio](https://swcarpentry.github.io/git-novice/14-supplemental-rstudio/index.html){:target='_blank'}
- [Happy Git and GitHub for the useR](https://happygitwithr.com/){:target='_blank'}

## Project management features

GitHub adds many handy web-based features to manage your projects / Git repositories:

- Issues. Create an issue to discuss and track ideas, bugs, projects, requests, etc. Can be assigned to people, tagged, and more. Also allows people outside of the project report problems with your code. Be sure to create checklists in the first comment box (`- [ ] step`)--they become click-able and show progress in the Issue view.
- Projects. Create Trello board like lists to organize work.
- Wiki. Simple wiki-style documentation that can be edited by your collaborators (note: written in Markdown not wikitext).

To make the most of these features, you will want to learn [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/){:target='_blank'} because it's a [great way to write](https://evanwill.github.io/_drafts/notes/writing-markdown.html){:target='_blank'} and is used everywhere on GitHub.
Issues, PR, and commits can be mentioned in any GitHub comment and will be replaced by [reference shortlinks](https://help.github.com/articles/autolinked-references-and-urls/){:target='_blank'}. 
GitHub users can be mentioned using `@` and will be notified of your comment.

## gh-pages

GitHub also offers free web hosting for your project, organization, or personal profile.
Check workshop [Go-go gh-pages!](https://evanwill.github.io/go-go-ghpages/){:target='_blank'}

Also, use [GitHub Gist](https://gist.github.com/){:target='_blank'} to instantly share simple notes, outlines, snippets, etc.

## Citable Code 

GitHub repos can be integrated with Zenodo to issue a DOI. 
DOI are a persistent identifier used in academic writing to cite articles and other works. 
Having a DOI for your code makes it easier to track citations and impact. 
Learn how at [Making Your Code Citable](https://guides.github.com/activities/citable-code/){:target='_blank'}.

## Resources

- Software Carpentry, [Version Control with Git](https://swcarpentry.github.io/git-novice/){:target='_blank'}
- [Data Carpentry](https://www.datacarpentry.org/lessons/){:target='_blank'} for discipline specific data lessons
- [Git Book](https://git-scm.com/book){:target='_blank'}
- [Git for Teams](http://gitforteams.com/){:target='_blank'}
- [Safari Books Online](http://ida.lib.uidaho.edu:2048/login?url=https://www.oreilly.com/library/view/temporary-access/){:target='_blank'}
