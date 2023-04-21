---
title: RAWGraphs and browser-based apps
layout: post
tags: [workshop]
date: 2022-11-29
---

> Data Hub Tool Talk: RAWGraphs is a browser-based app for quick data visualization. With extensive help built in, this is a great tool for teaching, learning, and experimenting with charts. This session will introduce the tool, along with tips for working with data on the web and other browser-based apps. [talk recording](https://youtu.be/A1iQb00FjUU)

## RAWGraphs intro

<https://www.rawgraphs.io/>

RAWGraphs is a free, [open source](https://github.com/rawgraphs/rawgraphs-app), browser-based data visualization app.

There are a lot of *free-ish* web-based data viz tools, e.g. 

- [Google Charts](https://developers.google.com/chart) (integrated with Sheets)
- [Florish](https://flourish.studio/) (data storytelling)
- [Datawrapper](https://www.datawrapper.de/) (embeddable visualizations)
- [Tableau Public](https://public.tableau.com/app/discover) (free hosted version of famous business analytics software)

However, each of these tools are proprietary and server-based services.
You need to send your data to their servers where the processing is done and your visualizations are hosted. 

RAWGraphs is different --> it is a client-side JavaScript app, meaning that all the processing is done on your computer, in your browser. 
It works on any computer without installing anything.
You don't send any data to their server. 
They also don't host your data or visualizations. 

Instead RAWGraphs focuses in on being a pragmatic visual tool to efficiently move from a spreadsheet to a vector graphic visualization.
Most often you would do some data wrangling (with Sheets, Excel, LibreOffice, [OpenRefine](https://openrefine.org/)) before using RAWGraphs, and maybe some vector editing after exporting your visualization (with [Inkscape](https://inkscape.org/)). 

Early versions built on the svg visualization library [D3.js](https://d3js.org/). 
Part of what was cool about D3 was there was a gallery of examples with the code directly available to edit, copy, and repurpose with your own data (now closely integrated with [Observable](https://observablehq.com/), JS browser-based code notebooks; for example of older style, see [NVD3 live code](https://nvd3.org/livecode/index.html)). 
These examples make a clear connection of learning by experimenting and re-using templates.
However, D3 has a steep learning curve, and you can't just smoothly explore your data via a variety of visualizations.

As a code free alternative, RAWGraphs uses the power of JS to provide a simple-ish visual interface to create and configure data visualizations in the browser. 
The goal is to get you to a solid SVG export that can then be tweaked for publication and sharing. 

It is a great tool for prototyping, quick exploration, and teaching/learning.
For example, provide your students a link to RAWGraphs plus a link to a CSV, and have them learn about steps to a visualization--without installing anything or leaving the browser. 
Each chart type has a description and related tutorial, so there is a ton of learning built directly into the interface.

Walkthrough [RAWGraphs app](https://app.rawgraphs.io/):

1. "Try our data samples" > Iris flowers. Check parsing options and [stacking transformation utility](https://www.rawgraphs.io/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter).
2. select "Convex hull" (check description and tutorial)
3. map length to X, width to Y, Species to Groups
4. customize
5. Export as SVG

## Data on the web

When trying to load data from the web you may encounter [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors.
Browsers will not directly load files from a different domain than the page's home domain for security reasons. 
However, servers can implement a CORS-enabled policy that allows cross-domain sharing--so you will have to put your data somewhere that is configured for sharing!

Here is some good options: 

- Publish a Google Sheet as CSV --> On the Sheet, go to File > Publish to the Web. On the popup modal, use the dropdowns in "Link" tab to select the sheet name of your metadata (usually "Sheet 1") and "Comma-separated values (.csv)" options, then click "Publish" button. Copy the link that is provided.
- Publish on GitHub --> put your data in a repository, then use the "raw" link provided. It follows the pattern: "https://raw.githubusercontent.com/username/repositoryname/branchname/filename"
- Publish on GitHub Gist --> create a new Gist, paste or drag your data in, make sure you provide a correct filename. Use the "raw" link. It follows the pattern: "https://gist.githubusercontent.com/username/hash/raw/hash/filename"
- Handy note: GitHub will preview render geojson on a map!

## Other client-side apps

- [Kepler.gl](https://kepler.gl/) (geospatial tool that can export a static web app)
- [mapshaper](https://mapshaper.org/) (utility for manipulating geospatial data, helpful for transforming geojason. [mapshaper source code](https://github.com/mbloch/mapshaper))
- [Datasette-lite](https://lite.datasette.io/) (data exploration tool [Datasette](https://datasette.io/) running in locally in your browser using webassembly)
- [Koia](https://www.koia.io/intro/index.html) (more complicated viz tool)
- [Vega](https://vega.github.io/) language ecosystem with online tools [Lyra](https://idl.cs.washington.edu/projects/lyra/app/) and [Voyager](https://vega.github.io/voyager) (steeper learning curve)
- [Starboard](https://starboard.gg/) (beta in-browser static/server-less notebook. Can also run Python Jupyter notebooks using [Pyodide](https://github.com/pyodide/pyodide), demo [python REPL](https://pyodide.org/en/stable/console.html))
- [flowchart creator](https://flowchart.fun/)
- [jsonvisio](https://jsonvisio.com/) (visual json editor)
- [Dillinger](https://dillinger.io/) (markdown editor)
- [Squoosh](https://squoosh.app/) (image optimizer utility)
- [Photopea](https://www.photopea.com/) (full image editor, plus basic vector editing)
- Weird text utilities: [Plain Text Format](https://plaintextformat.com/), [CyberChef](https://gchq.github.io/CyberChef/), [Word-cleaning](https://jhy.io/tools/convert-word-to-plain-text)

## Data viz resources

- [From Data to Viz](https://www.data-to-viz.com/)
- [R Graph Gallery](https://r-graph-gallery.com/index.html)
- [Python Graph Gallery](https://www.python-graph-gallery.com/)
- [Data Viz Catalogue](https://datavizcatalogue.com/)
- [bad data guide](https://github.com/Quartz/bad-data-guide)
- [viz palette](http://projects.susielu.com/viz-palette) ([article](https://medium.com/@Elijah_Meeks/viz-palette-for-data-visualization-color-8e678d996077))
