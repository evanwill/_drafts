---
title: Choose Your Own CSV
layout: post
tags: [projects]
date: 2026-06-01
---

[choose-your-own-csv](https://github.com/evanwill/choose-your-own-csv) is my new random project that allows you to create, read, and share interactive branching narratives (Choose Your Own Adventure stories!) from spreadsheets.

[Choose Your Own CSV](https://evanwill.github.io/choose-your-own-csv/){:.buttons}

It has been a lot of fun with kids--teaching them spreadsheet skills so they can create stories. Super motivated to learn data management practices!
When you add a CSV link using the home page form, it adds that story to your local catalog (on your browser only), so kids collect other stories too.

It's like an ultra minimal version of [Twine](https://twinery.org/)--much simpler set up, editing, and outputs.
Writing in a spreadsheet is simple once you understand the conventions.
Sharing and saving stories is made easy from the main instance, or you could create a copy of the template to customize for your particular use case.

## Tech

choose-your-own-csv is a minimal static web template built using Astro.
When a user visits a story, javascript downloads the CSV from the web, parses it using the Papa Parse library, and uses the data to present the "story pages". Once the CSV is downloaded, the javascript stores it in the browser's session storage so that the data can be re-used with out downloading again as you navigate the story pages.

You create story content and "choices" (links) in a spreadsheet following the "story-csv" conventions. Each row of your spreadsheet will become a "story page" that presents a title and body text, followed by a set of "choices". The optional "choices" are hyperlinks to other story pages, creating interlinking narratives, like flipping the pages of a paper Choose Your Own Adventure book.
