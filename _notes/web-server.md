---
title: Quick Local Static Servers
layout: post
tags: [web, tips]
date: 2020-01-29
---

Three quick local static web server for dev or what ever.

## Python

Use [http.server](https://docs.python.org/3/library/http.server.html) from the standard library: 

`python -m http.server 8000` then surf to `localhost:8000` 

(in python 2: `python -m SimpleHTTPServer`)

## Ruby

Use Ruby WEBrick server with handy command from standard ["un"](https://ruby-doc.org/stdlib-2.7.1/libdoc/un/rdoc/un_rb.html) library:

`ruby -run -e httpd . -p 8080` then surf to `localhost:8080`

(see [Run, Ruby, Run](https://idiosyncratic-ruby.com/6-run-ruby-run.html) for details of this idiosyncratic command)

## Node 

Use [http-server](https://www.npmjs.com/package/http-server) package.
Install `npm install -g http-server`. 
Then: 

`http-server` in the directory to serve
