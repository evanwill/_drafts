---
title: Regex tips
layout: post
tags: [tips,tools]
date: 2016-12-10
---

[Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression) are incredibly handy when processing text files, giving you find & replace super powers.
Exactly how they are implemented depends on the tool you are using, both in how you enter the expressions and which functions are available. 
Learn, practice, and test expressions using [RegExr](http://regexr.com/), but keep in mind that it uses JavaScript which doesn't implement all methods. 

Here is list of random expressions I don't want to forget:
- [Digital Aladore discussion](https://digitalaladore.wordpress.com/2015/01/18/aladore-regex/)
- find blank lines, `(?<![\d\w\S])\n`
