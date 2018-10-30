---
title: Commandline thoughts
layout: post
tags: [shell, linux]
date: 2018-10-30
---

Just some general notes to remember helpful things on the command line... 

## Variable remove pattern 

In a bash loop you often want to replace a part of a filename with something else. 
There is two easy functions to remove filename/variable parts: 

- Remove from front: `${var#pattern}`
- Remove from back: `${var%pattern}`

For example, lets say you have a bunch of files with following the pattern `front-[id number]-back.txt` (front-10-back.txt, front-192-back.txt, etc.).

To rename while removing the front: `for f in *.txt; do mv "$f" "${f#front-}"; done`

To rename while removing the back and changing the file extension: `for f in *.txt; do mv "$f" "${f%-back.txt}.md"; done`

However, you can't use both a front and back remove at the same time. 
To get around that, use an extra variable. 
To combine the other two commands: 

`for f in *.txt; do NAME="${f#front-}"; mv "$f" "${NAME%-back.txt}.md"; done`
