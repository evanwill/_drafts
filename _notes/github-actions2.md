---
title: Deploy a Jekyll Site with GitHub Actions (v2)
layout: post
tags: [github,jekyll]
date: 2021-02-05
---

> This page describes manually creating an Action and was updated in 2023 to fix issues that broke with updates at GitHub. 
> Recent updates allow you to easily use a default starter template--check [Deploy a Jekyll Site with GitHub Actions using Starter Workflow]({{ '/notes/github-actions3.html' | relative_url }}) for details!

[GitHub Actions](https://github.com/features/actions) are a newish feature of the platform that allows you to create / run workflow automation scripts in repositories. 
It functions similar to 3rd party continuous integration tools like [Travis CI](https://travis-ci.org/), but built directly into GitHub.
Explore the [documentation](https://docs.github.com/en/actions) and [marketplace](https://github.com/marketplace?type=actions) to get the idea of what you can do. 

In my use case, I just want to **build a Jekyll site and deploy on GitHub Pages**.
However, the default Pages build uses an old version of Jekyll and does not allow plugins (see [dependency versions](https://pages.github.com/versions/) for details).
Actions allows us to set up our own build instead.

Jekyll docs provide a [GitHub Actions tutorial](https://jekyllrb.com/docs/continuous-integration/github-actions/) that is a bit out of date. 
I assume you already have a Jekyll project set up and are ready to deploy it on GitHub Pages. 

Here are the steps to set up a new Jekyll build Action:

## url and baseurl

If you use the Liquid filter `absolute_url` ensure your "_config.yml" has the `url` and `baseurl` values set correctly for hosting on GitHub Pages following the pattern `url: https://username.github.io` and `baseurl: /repository-name`. 

## Gemfile and Gemfile.lock 

Your Jekyll project repository needs a "Gemfile" committed. 
I often .gitignore these since my projects aren't complex, and they tend to confuse others trying to re-use my repos. 
You don't need anything fancy.
A Gemfile with just this will work: 

```
source 'https://rubygems.org'

gem 'jekyll'

```

*Optionally*, you can also commit your "Gemfile.lock" to reproduce the environment exactly as you use it on your local computer (*in theory*).

## Add Action YAML

Next, you need to create the YAML Action file in the directory ".github/workflows/".
You can name it what ever you want, but I call mine, ".github/workflows/jekyll.yml". 

Adding this file will automatically set up a `GITHUB_TOKEN` secret, which is nice so you don't need to mess around with personal access tokens.
However, **you do need permission to create a "workflow" level token when committing the file**.
So depending on how your local GitHub authentication is set up, you might not be able to push this file or if you are editing an existing one your action might end up with permissions errors! 

To avoid issues, I create and edit the file *only* using the web interface.
On the repository home page, click "Add file" > "Create new file".
In the filename field start typing `.github/workflows/jekyll.yml`.
This will create a folder ".github" (with a period in front!), with "workflows" folder inside, with a file "jekyll.yml" inside.

Add this text to your yml action:

```{% raw %}
name: build site with jekyll and deploy on github pages

# runs when you push or merge PR to main branch
on:
  push: 
    branches: 
      - main
  pull_request:
    branches: 
      - main

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  jekyll:
    runs-on: ubuntu-latest 
    steps:
      # checkout code
      - uses: actions/checkout@v3

      # Use ruby/setup-ruby to shorten build times
      # https://github.com/ruby/setup-ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1 # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      # use jekyll-action-ts to build
      # https://github.com/limjh16/jekyll-action-ts
      - uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true

      # use actions-gh-pages to deploy
      # https://github.com/peaceiris/actions-gh-pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # GITHUB_TOKEN secret is set up automatically
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site

```{% endraw %}

The `on` key says to build on any push or PR to the main branch (you could switch it to what ever branch works for you, just don't try to use gh-pages branch).

The `permissions` key sets the access for the GITHUB_TOKEN necessary to add changes to your repository.

The `jobs` key gives the list of things to do.

Each `uses` value is a repository on GitHub, so you can go look at the code to see what it is doing, or set up your own version. 
In this workflow: 

- [actions/checkout@v3](https://github.com/actions/checkout) checks out the code from the main branch (from GitHub).
- [ruby/setup-ruby@v1](https://github.com/ruby/setup-ruby) uses a pre-built Ruby and cached gems to speed up built time (when using Ruby, this is apparently preferable to using "actions/cache").
- [limjh16/jekyll-action-ts@v2](https://github.com/limjh16/jekyll-action-ts) runs the `jekyll build` (supposedly faster than "helaili/jekyll-action").
- [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages) takes the output and commits it to the `gh-pages` branch. 

Once committed, the action will run each time you push a new commit or merge a pull request.

However, the first time you have to manually activate GitHub Pages.
Go to the repository Settings, click "Pages" in the side nav.
In the "Source" dropdown select "Deploy from a branch", and in "Branch" dropdown select "gh-pages", and save.
After Pages is activated, you may need to create another new commit to finally get the web site live.

*Note*, in the "Pages" settings do *NOT* use the "GitHub Actions" option under "Source". 
This older style Action commits the output of your build to the gh-pages branch, rather than delivering it directly to Pages. 
So although you are using an Action, Pages is still "Deploy from a branch"!

The Actions tab of the repository provides detailed progress (and error messages) for your workflow, so if something goes wrong it is easier to debug than default GitHub Pages.
