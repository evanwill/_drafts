---
layout: post
title: Making a Web App in 2016
---

**TL;DR** I'm making a web app using Node.js, Express 4, and MongoDB. All the code is on my Github: [Frontend](https://github.com/getmicah/myapp-app) [Server](https://github.com/getmicah/myapp-api).

# Introduction
For the past couple weeks I have been taking my first steps in "full-stack" web development. Though there has been the usual road blocks when learning a new concept I have been impressed by just how simple it is to get a basic web app up and running.

This will be a three part guide where I go in depth about what I did to make a web app in 2016. This is intended for people like me when I started who have zero prior experience in building web applications.

## What is a "Web App"?
This question has managed to puzzle the internet (even [Stackoverflow](http://stackoverflow.com/questions/8694922/whats-the-difference-between-a-web-site-and-a-web-application)). In my opinion a web app differentiates itself from a website if it has at least one of the following:

* Allows the user to interact with it
* Talks to a database or server
* Costs a lot more to build

I wanted to build a social network which would have a frontend sever that would talk to a backend server (api) through GET and POST requests. That backend server would take in request and store it in a database that way not everything is being done on one server, saving me system resources and making for cleaner code.


# The Backend
In my search for a server side scripting language I found that there were a lot of options. Ruby on Rails seemed like a good option at first but I hadn't any experience in Ruby and I didn't care for the file structure. The Python alternative, Flask, was very cool and more what I was looking for but Python's less verbose nature felt awkward for web development so I decided to look elsewhere. I then decided to look at the technology behind all those "npm install"s I do.

Node.js was a pleasant first experience seeing as though it was the same code I was writing in the frontend. It also didn't require much work to get running, just a simple `node server.js` and I was off to the races. The plethora of packages available through the node package manager is what really made me go with Node.js, especially once I found Express. With Express I was easilly able to get a simple API with routing and models with very little work.

This would also be my first working with a true database. Before I would just use a simple json file to store data, but this was in small Python projects and didn't seem like a viable option for the web. I decided to go with MongoDB, mainly because MySQL was pain to install and SQLite had an unappealing name. Not suprisingly there was also an excellent Node.js package called mongoose (I'm a sucker for good names). With mongoose I was able to connect my Node.js server to a Mongo database with ease.

# The Frontend
Once I had a solid backend api it was time for the frontend. Now I could just use basic HTML and use basic xmlhttprequest with client-side Javascript, but I had really enjoyed working with Node.js and Express in the backend so I decided to give it a go on the frontend server. The npm had lots of awesome templating engines, such as [express-handlebars](https://github.com/ericf/express-handlebars), which allowed me to easily render data in my Express routes.

At the moment I won't be using any sort of Javascript library but I will more than likely use React at some point. The frontend mainly consists of handlebar templates rendering as html and good old [modular Javascript](https://www.youtube.com/watch?v=HkFlM73G-hk&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) for any user interaction that can't be done through Express routing. I plan to include some sort of Sass plugin for the templates but that shouldn't be a problem.

For authentication, [passport](http://passportjs.org/) in the frontend and [bcrypt](https://github.com/ncb000gt/node.bcrypt.js/) in the backend was the way to go. Passport made local and social logins very easy because of its login "Strategies", all of which are easily accessible through npm. Though when using this setup you really need to have SSL encryption between the two servers and a proper firewall setup.

# Recap
Now that I have explained in detail all of the technologies I will be using to construct a web application I wanted to give a quick over view of what we will be running on both the server and client machines. 

You may notice that this is very similair to a [MEAN](http://mean.io/) stack but I recomend that you just install whatever you need to as you go instead of being stuck with a "stack". You might want to use a different database or even use a different routing framework such as [Koa](http://koajs.com).

*Server*:

* Node.js - main scripting language
* Express - routing http requests
* MongoDB - document database
* Mongoose - mongodb modeling for node
* bcrypt - password hashing and authentication

*Client*:

* Node.js - main scripting language
* Express - routing users based on url
* Passport - local and social authentication
* request.js - simple http requests to server
* Handlebars - rendering data from express

All the code is on my Github.

Server: [https://github.com/getmicah/myapp-api](https://github.com/getmicah/myapp-api)

Client: [https://github.com/getmicah/myapp-app](https://github.com/getmicah/myapp-app)
