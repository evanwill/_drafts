---
title: Commandline notes
layout: post
tags: [shell, linux]
date: 2018-10-30
handy: true
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

If you have spaces in the pattern, escape them. 
E.g. `name with space` use something like `${f#name\ with\ space}`.

You can also use the syntax `${var/pattern/replacementstring}` to replace things in the filename. 
If the "pattern" chunk starts with an extra `/`, then it replaces all matches (not just the first).
This way you could remove all spaces from filenames in a directory and replace them with underscore like: 
`for f in *\ *; do mv "$f" "${f// /_}"; done`

## Change String Case

Bash has a built in feature to convert the case of strings:

- `^` convert 1st character to uppercase
- `^^` convert whole string to uppercase
- `,` convert 1st character to lowercase
- `,,` convert whole string to lowercase

This can be helpful for renaming all files with lowercase filenames and extensions.
To do the renaming by copying to a new folder "renamed":

`for f in *.*; do cp "$f" "renamed/${f,,}"; done`

This could also be done using the older `tr` utility using a much more complicated command:

`for f in *.*; do cp "$f" "renamed/$( tr '[:upper:]' '[:lower:]' <<<"$f" )"; done`

## Combine CSVs

Remove headers and combine all files into one:

`tail -n +1 *.csv > all.csv`

Then, each file will be separated by `==> filename <==`.
Open in OpenRefine, use separator `==>`, then use `<==` to create filename column.

Or use a loop:

`for f in *.txt; do cat $f; echo "separator"; done > combo.txt`

## Count files of a specific type 

Sometimes you need a count of how many files of a specific type are in a folder including sub-folders.
A quick method is to use find and wc to get a count.
In the directory you want to count:

`find . -name "*.pdf" -type f | wc -l`

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

## Get list of files meeting criteria 

I often have a folder of text files and need a list of which one contain some specific string. 
Easy using `grep` with the `-l` flag for listing filename only (not the matching lines):

`grep -l "string" * > list.txt`

Or the opposite, files without the phrase, using `-L` for filenames with no match:

`grep -L "string" * > list.txt`

## Compare two text files

To compare two text files you can use `diff` or `comm`.
I often use this to find the difference between two folders or lists of files (`ls > filelist.txt`).

Diff will show a report something like a git diff:

`diff list1.txt list2.txt`

Comm will output a list comparing the lines in the two files, grouping them by lines only in file 1, only in file 2, and in both.
Add the options `-1`, `-2`, or `-3` to not view one of those groupings.
Generally, I just want the differences, so use `-3` to NOT see the lines that are the same in both. 

`comm -3 list1.txt list2.txt > comparison.txt`

## Copy a list of files

I often have a folder of binary files, like images, where I need to sort out a small group to upload or move somewhere else. 
Often the list of files that need to move comes from some other source, such as a spreadsheet. 
To do it as a batch, I export a list of the filenames that need to move, one filename per line (just like if you did `ls > list.txt`), then use a bash loop like this:

`for f in $(cat list.txt); do cp $f ../upload/; done`

In this example, we use `cat list.txt` to print out the file contents to provide the variables for the loop to iterate over--this can be handy for a lot of pragmatic solutions!

## Don't store in history

If you add a space at the beginning of the line, then the command won't be recorded in your history. 
This is important if you are manually adding some passwords or secrets in the command.

## Use command output in another command

Sometimes you can't pipe output into a command, you need the output inside the command instead (i.e. "command substitution").
Use `$(command)` in place. 
E.g. `JUPYTER=$(which jupyter) julia` (gives julia-lang location of Jupyter Notebook). 

## Handy Ref

- [Bash scripting cheatsheet](https://devhints.io/bash)
- [SS64](https://ss64.com/bash/)
- [mdn web docs Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [Ubuntu commandline fore beginners](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
