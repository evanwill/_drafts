---
title: Use Jekyll Deploy command
layout: post
tags: [jekyll]
date: 2016-11-05
---

[`jekyll-deploy`](https://github.com/vwochnik/jekyll-deploy) adds a new jekyll command, accessed on the command line as `jekyll deploy`. 
It allows you to add a custom config to quickly deploy the site after build to a different destination. 

## install

Create a file in root project directory called `Gemfile` that contains:

```
source "https://rubygems.org"

gem 'jekyll', '3.2.1'

group :jekyll_plugins do
  gem 'jekyll-deploy'
end
```

Open a terminal in the project directory and type command `bundle install`. This will download and install the plugin. 

## configure

Open the project's `_config.yml`. Add deploy command to the end of the config, for example:

```
# deploy commands 
deploy:
- rsync -r ./ ../../test/
```

Deploy commands run from the `_site` directory and can be any command line phrase. 

## use 

First, build your project using `jekyll build` or `jekyll serve`.
Then type command `jekyll deploy`. This will activate the command you set in the config.
