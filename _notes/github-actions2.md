---
title: Deploy a Jekyll Site with GitHub Actions (v2)
layout: post
tags: [github,jekyll]
date: 2021-02-05
---

[GitHub Actions](https://github.com/features/actions) are a fairly new feature of the platform that allows you to create / run workflow automation scripts in repositories. 
It functions similar to 3rd party continuous integration tools like [Travis CI](https://travis-ci.org/), but built directly into GitHub.
It is currently being pushed pretty heavily, with the "Actions" tab added to every repository interface. 
Explore the [documentation](https://docs.github.com/en/actions) and [marketplace](https://github.com/marketplace?type=actions) to get the idea of what you can do. 

In my use case, I just want to **build a Jekyll site and deploy on GitHub Pages**.
However, the default Pages build uses an old version of Jekyll and does not allow plugins.
Actions allows us to set up our own build instead.

Jekyll docs provide a [GitHub Actions tutorial](https://jekyllrb.com/docs/continuous-integration/github-actions/). 
However, I assume you already have a Jekyll project set up, and made some tweaks to simplify the process. 

Here are the steps to set up a new Jekyll build Action:

## 1. Gemfile and Gemfile.lock 

First, your Jekyll project repository needs a `Gemfile` and `Gemfile.lock` committed. 
I often .gitignore these since my projects aren't complex, and they tend to confuse others trying to re-use my repos. 
However, you need the Gemfile.lock to tell the build process exactly what Gems to use--this way, if it works on your computer, it will work on the virtual machine. 
(Keep in mind, the VM is Ubuntu, so not sure if that is true if you use Windows...)

You don't need anything fancy.
A Gemfile with just this will work: 

```
source 'https://rubygems.org'

gem 'jekyll'

```

Create the Gemfile, then run `jekyll s` to automatically generate the Gemfile.lock, and commit them both. 

## 2. Action YML

Next, you need to create the YAML Action file in the directory `.github/workflows/`. 
You can name it what ever you want, but I call mine, `.github/workflows/jekyll.yml`. 

Adding this file will automatically set up a `GITHUB_TOKEN` secret, which is nice so you don't need to mess around with personal access tokens.
However, you do need permission to create a "workflow" level token *when committing the file*.
So depending on how your local GitHub authentication is set up, you might not be able to push this file! 
To avoid issues, I create the file using the web interface.

Add this text to your yml action:

```{% raw %}
name: build site with jekyll and deploy on github pages

on:
  push: 
    branches: 
      - main
  pull_request:
    branches: 
      - main

jobs:
  jekyll:
    runs-on: ubuntu-latest
    steps:
      # checkout code
      - uses: actions/checkout@v2

      # Use ruby/setup-ruby to shorten build times
      # https://github.com/ruby/setup-ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.7 # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      # use jekyll-action-ts to build
      # https://github.com/limjh16/jekyll-action-ts
      - uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true
          # don't use prettier https://prettier.io
          format_output: false

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

The `jobs` key gives the list of things to do.
Each `uses` value is a repository on GitHub, so you can go look at the code to see what it is doing, or set up your own version. 
In this workflow: 

- [actions/checkout@v2](https://github.com/actions/checkout) checks out the code from the main branch (from GitHub).
- [ruby/setup-ruby@v1](https://github.com/ruby/setup-ruby) uses a pre-built Ruby and cached gems to speed up built time (when using Ruby, this is apparently preferable to using "actions/cache").
- [limjh16/jekyll-action-ts@v2](https://github.com/limjh16/jekyll-action-ts) runs the `jekyll build` (supposedly faster than "helaili/jekyll-action").
- [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages) takes the output and commits it to the `gh-pages` branch. 

Once set up in the repository, the action will run immediately.
In theory GitHub Pages should activate automatically, however, I found it necessary to active manually.
Go to the repository Settings, scroll down to the GitHub Pages section, select "gh-pages" branch, and save.

The Actions tab of the repository provides detailed progress for your workflow, so if something goes wrong it is a bit easier to debug than default GitHub Pages.

Enjoy your newly built website!
