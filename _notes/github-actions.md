---
title: Deploy a Jekyll Site with GitHub Actions
layout: post
tags: [github,jekyll]
date: 2020-08-05
---

[GitHub Actions](https://github.com/features/actions) are a fairly new feature of the platform that allows you to create / run workflow automation scripts in repositories. 
It functions similar to 3rd party continuous integration tools like [Travis CI](https://travis-ci.org/), but built directly into GitHub.
It is currently being pushed pretty heavily, with the new "Actions" tab added to every repository interface. 
Explore the [documentation](https://docs.github.com/en/actions) and [marketplace](https://github.com/marketplace?type=actions) to get the idea of what you can do. 

In my use case, I just want to **build a Jekyll site and deploy on GitHub Pages**.
However, the default Pages build uses an old version of Jekyll and does not allow plugins.
Actions allows us to set up our own build instead.

Jekyll docs provide a [GitHub Actions tutorial](https://jekyllrb.com/docs/continuous-integration/github-actions/). 
However, I assume you already have a Jekyll project set up, and I made a few tweaks to their set up. 

Here are the steps to set up a new Jekyll build Action:

## 1. Gemfile and Gemfile.lock 

First, your Jekyll project repository needs a `Gemfile` and `Gemfile.lock` committed. 
I often .gitignore these since my projects aren't complex, and they tend to confuse others trying to re-use my repos. 
However, you need the Gemfile.lock to tell the build process exactly what Gems to use--this way, if it works on your computer, it will work on the virtual machine. 
(Keep in mind, the VM is Ubuntu, so not sure if that is true if you use Windows...)

## 2. Action YML

Next, you need to create the YAML Action file in the directory `.github/workflows/`. 
You can name it what ever you want, but I call mine, `.github/workflows/jekyll.yml`, and added this text:

```{% raw %}
name: build with jekyll and deploy on github pages

on:
  push: 
    branches: 
      - master
  pull_request:
    branches: 
      - master

jobs:
  jekyll:
    runs-on: ubuntu-latest
    steps:
      # checkout code
      - uses: actions/checkout@v2

      # Use GitHub Actions' cache to shorten build times and decrease load on servers
      - uses: actions/cache@v1
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
          restore-keys: |
            ${{ runner.os }}-gems-

      # use jekyll action from jekyll docs example
      - uses:  helaili/jekyll-action@2.0.2
        env:
          JEKYLL_PAT: ${{ secrets.JEKYLL_PAT }}
```{% endraw %}

The `on` key says to build on any push or PR to the master branch (you could switch it to what ever branch works for you, just don't try to use gh-pages branch).

The `jobs` key gives the list of things to do.
Each `uses` value is a repository on GitHub, so you can go look at the code to see what it is doing, or set up your own version. 
In this workflow: 

- `actions/checkout@v2` checks out the code from the master branch (from GitHub).
- `actions/cache@v1` checks to see if the gems listed in your Gemfile.lock are already cached (from GitHub).
- `helaili/jekyll-action@2.0.2` basically runs `bundle exec jekyll build`, then commits the output into the `gh-pages` branch, using the secret called "JEKYLL_PAT".

Commit your Action in your project repository. 

## 3. Access Token and Secret

To allow the Action to do stuff to your repository, you need to set up a personal access token and secret for it to use.

First, create a new personal access token: <https://github.com/settings/tokens>

I make mine specific to the project so I can easily revoke them when messing around. 
If you are using a public repo, you only have to give it access to `public_repo`, and probably don't want to give any more. 
Copy the key, since you can only see it once. 

Next, go to your project repository > Settings > Secrets. 
Click "New secret", name it exactly `JEKYLL_PAT`, and paste in your key. 
(note: "JEKYLL_PAT" is set in the `jekyll.yml` workflow, so if you really wanted you could name it something else if you edit it there).

## 4. Commit / PR

With everything set up, the Acton should run on your next commit or PR to master. 
You do not need to activate GitHub Pages in settings, it will happen automatically. 

The Actions tab provides detailed progress for your workflow, so if something goes wrong it is a bit easier to debug than default GitHub Pages.

Just enjoy your newly build website!
