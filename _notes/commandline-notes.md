---
title: Commandline notes
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

## Combine CSVs

Remove headers and combine all files into one:

`tail -n +1 *.csv > all.csv`

Then, each file will be separated by `==> filename <==`.
Open in OpenRefine, use separator `==>`, then use `<==` to create filename column.

Or use a loop:

`for f in *.txt; do cat $f; echo "separator"; done > combo.txt`

## Extract text from PDF

Use `poppler-utils` package command `pdftotext` (which is probably already installed on linux, can be installed with [Xpdf tools](https://www.xpdfreader.com/download.html) on windows):

`pdftotext filename outputname` 

`for f in *.pdf; do pdftotext "$f"; done`

## Add something to each line

Use sed:

`sed 's/^/stuff in front/; s/$/stuff at end/' "input.txt" > output.txt`

In batch: 

`for f in *.txt; do sed 's/^/front/; s/$/back/' "$f" > output/"$f"; done`

See [Sed: an introduction](https://www.grymoire.com/Unix/Sed.html) for extensive tips. 
