---
title: Deploy a Jekyll Site with GitHub Actions using Starter Workflow (v3)
layout: post
tags: [github,jekyll]
date: 2023-01-10
---

GitHub Pages' default build process runs an older version of Jekyll and does not support plugins (see [dependency versions](https://pages.github.com/versions/) for details).
However, you *can* set up an alternative build using [GitHub Actions](https://docs.github.com/en/actions).
GitHub has recently made setting up Actions to deploy your site to Pages easier, so this is a great option.
(note, an older more [manual method to set up Actions also works]({{ '/notes/github-actions2.html' | relative_url }}) if you want customize more)

## Prep Project Repository

First, check your "_config.yml" to ensure the `url` and `baseurl` values are set correctly for hosting on GitHub Pages following the pattern `url: https://username.github.io` and `baseurl: /repository-name`. 
If you don't have these set, the Liquid filter `absolute_url` won't work correctly.

Second, make sure your project has a "Gemfile" committed. 
A Gemfile with just this will work: 

```
source 'https://rubygems.org'

gem 'jekyll'

```

*Optional:* Commit your "Gemfile.lock" to ensure the build uses the same setup as you have been using to develop the project. 
I usually .gitignore the "Gemfile.lock", but if you want to keep the dependencies locked, you can commit it.

*Note:* some accounts may have GitHub Actions disabled by default. 
If you do not see the "Actions" tab in your repository's navigation (in between "Discussions" and "Projects"), it will need to be turned on first.
Visit the repository's "Settings", click on "Actions" in the left side nav menu, select "Allow all actions", and click "Save".

## Setup Action YAML using Pages

To add a GitHub Action, you will be adding a YAML file describing the build steps to your project repository--you can do this automatically using GitHub's suggested starter workflows from the Pages settings.

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: click "Pages" in the left side menu.
3. On the "Pages" page: under "Source", click the dropdown and select "GitHub Actions".
4. Below the "Source" dropdown, a box will appear under "Use a suggested workflow" titled "Jekyll". Click the "Configure" button.
5. This will open an editor page creating a new file named ".github/workflows/jekyll.yml" populated with GitHub's [starter Jekyll workflow](https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml). You can ignore the file and other options displayed on the right side, and just click the green "Start commit" button. 
6. Fill in the commit message as usual and click the green "Commit new file" button. 

Committing the action file to your repository will start the build process.
It may take a few minutes for the action to complete.
You can monitor the progress by looking at the status icon displayed next to your most recent commit message or by checking the "Actions" tab of your repository.

Once the action successfully completes a green checkmark will appear and your site will be live. 
To find the URL you can visit "Settings" > "Pages".

Going forward, each time you push or directly commit to the repository, the action will rebuild the site. 

The green checkmark will appear next to the most recent commit that triggered a successful build.
If a red "X" appears next to your commit, the build failed and your updates will not be deployed--the last working version of the site will still be live.
Visit the Actions tab to see detailed information about the error to help debug the issue.
