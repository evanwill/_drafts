---
title: Leaflet and Image Annotation Template
layout: post
tags: [projects]
date: 2026-03-05
---

Someone asked me if there was a tool to add hotspot annotations to an image for a presentation where she wanted to label some features.
I could swear I knew some methods to do this, like [H5P Image Hotspots](https://h5p.org/image-hotspots), [StoryMapJS gigapixel option](https://storymap.knightlab.com/advanced/), or some IIIF thing... but I couldn't find something simple. 

A long time ago I played around with [Leaflet CRS](https://leafletjs.com/examples/crs-simple/crs-simple.html) to create [something similar](https://evanwill.github.io/antirubbersheet-test/), but the antirubbersheeter "geocoding" app I used to get the coordinates has gone away.
So I decided to quickly build a replacement!

This lead to two new template projects:

- [image-annotate-template](https://github.com/evanwill/image-annotate-template){:.buttons} - image annotation with [Annotorious](https://annotorious.dev/). Add custom sized rectangle markers and display a modal or popover on click.

- [leaflet-annotate-template](https://github.com/evanwill/leaflet-annotate-template){:.buttons} - image and map annotation with [Leaflet](https://leafletjs.com/). Uses Leaflet CRS to display an image with markers + popups or a conventional map.

The concept is that the websites contains a page for interactively creating annotations which can then be exported as JSON, which in turn is put back into the project to publish/host annotated images embedded in content pages. 

Each is designed as a template project --> you make a copy for yourself to create a fully self-contained static website project that can be easily hosted on github pages or similar.
The repositories contain all the assets with no external dependencies.
This means you can create a copy, do your thing, and then just leave it--and it won't break. 

## Developing with Claude

I am targeted in how I use LLMs in my work so I wanted to outline how I used Claude in this case to very quickly develop these mini projects:

- I started from the base of [bootstrap5-template](https://github.com/thecdil/bootstrap5-template) which provides a sort of boiler plate Jekyll project with all the self contained assets. I like to start with a limited environment that I understand.
- Next I add in the libraries I want to use, again not using a CDN or npm, just actual copies of the files to ensure it stays self contained. I don't let the LLM decide which libraries to use or install random stuff, I find they are pretty maximalist throwing in all sorts of extra junk.
- Then I set up the placeholder files in the template, this way I control the organization and ensure it makes sense for future users of the template.
- I start drafting in the placeholder files, adding the asset links and script tags. 
- Inside the script tags I start writing comments detailing what I want. I add variables containing the data and options that I want available. I know better than the LLM where the data is in the template. In this context, I am using Liquid to pull in data from other files or Jekyll.
- In the comments I add links to the library documentation, and sometimes to specific features of the libraries I want it to use. 
- I create some same JSON files demonstrating the output I want, in the location in the template where they will be.
- Then I open the VS Code Copilot Chat. I provide all the related files as context and ask the LLM to finish writing one specific script. With this much structure and context the results are usually pretty good right away. 

I have access to GitHub Copilot via a free educator account--I have no idea about subscriptions or tokens etc. 
I turn off all the auto suggestions and distractions in the editor, so that I can just use it by clicking the Copilot Chat or asking for inline chat.
In this case I used Claude Sonnet 4.6 in "Agent" mode (check the [Copilot model comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison) for reference). 

--------------

## bootstrap5-template

[bootstrap5-template](https://github.com/thecdil/bootstrap-template) is a basic template repository to create a [Bootstrap 5](https://getbootstrap.com/) site using Jekyll on GitHub Pages (or where every you want to host it). 
The layout is based on the [Bootstrap starter template example](https://getbootstrap.com/docs/5.3/examples/) with a navbar, search box (using lunr.js), and footer.
It is intended as a quick starting point for creating new web projects.

[Demo](https://thecdil.github.io/bootstrap5-template/)

---------------

## Image Annotate Template

[image-annotate-template](https://github.com/evanwill/image-annotate-template) is a simple website template for creating a presentation with annotated images.
It uses [Jekyll](https://jekyllrb.com/) static site generation, [Bootstrap 5](https://getbootstrap.com/), and [Annotorious](https://annotorious.dev/).
This makes it easy to host on GitHub Pages or anywhere else.

[Demo](https://evanwill.github.io/image-annotate-template/)

---------------

## Leaflet Annotate Template

[leaflet-annotate-template](https://github.com/evanwill/leaflet-annotate-template) is a simple website template for creating a presentation with annotated images and maps.
It uses Jekyll static site generation, Bootstrap 5, and [Leaflet.js](https://leafletjs.com/).
This makes it easy to host on GitHub Pages or anywhere else.

[Demo](https://evanwill.github.io/leaflet-annotate-template/)
