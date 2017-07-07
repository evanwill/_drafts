---
title: Pandoc for PDFs
layout: post
tags: [dh, tools]
date: 2017-06-05
---

[Pandoc](http://pandoc.org/), the "universal document converter", is a command line utility to convert between countless file types.
I use it in my writing workflow to convert from [Markdown](https://evanwill.github.io/_drafts/notes/writing-markdown.html) to PDF.

Check the docs for full [installation instructions](http://pandoc.org/installing.html), but basically you need to install Pandoc and a [LaTex](https://www.latex-project.org/about/) distribution.
Pandoc converts your Markdown and your Tex / LaTex distribution does the typesetting to create PDFs. 
Here is everything necessary on Ubuntu Linux:

`sudo apt install pandoc texlive texlive-fonts-extra texlive-xetex`

To create a basic PDF, use the `-o` output flag and a file name with `.pdf` extension. 
For example: 

`pandoc -o output.pdf input.md`

You can pass various LaTex variables to Pandoc using the `-V` variable flag (see docs for all [LaTex variable options](http://pandoc.org/MANUAL.html#variables-for-latex)).
If you know LaTex, you can get fancy right away and use existing templates.
However, you can also use a few very simple options to spruce up the defaults.
For example, the default margin is very large, so you might want to use:

`pandoc -V geometry=margin=1.25in -o output.pdf input.md`

This will use the LaTex package `geometry` to set all the margins to 1.25 inch.
You could set each margin individually with geometry options margin-left, margin-right, margin-top, or margin-bottom.

To change the font I usually use the XeLaTex engine, since it can use any normal font installed on your system.
First, you need to figure out the correct names for installed fonts. 
Use this command:

`fc-list : family | cut -f1 -d"," | sort`

The full name listed will be passed as a variable.
Alternatively, open [LibreOffice](https://www.libreoffice.org/) Writer and look through the font names.
However, the variable is picky about the exact name used, so check against the official name as given in `fc-list`.
The command looks like:

`pandoc --latex-engine=xelatex -V geometry=margin=1.25in -V mainfont="Noto Sans" -o output.pdf input.md`

You can also use the pdfLaTex engine, which requires specifically prepared LaTex fonts (usually stored with a `.sty` extension).
Preparing and using the fonts requires a bit of LaTex savvy (in theory you can use lots of cool fonts, [FontCatalogue](http://www.tug.dk/FontCatalogue/)).
However, the `texlive-fonts-extra` package contains a few ready to go options.
The command looks like:

`pandoc --latex-engine=pdflatex -V fontfamily="electrum" -V geometry=margin=1.25in -o output.pdf input.md`

For my basic purposes, that is plenty of control, but of course you can go much further by learning more about LaTex.
Check [danstoner](https://github.com/danstoner/pandoc_samples) for samples of PDF creation, [Practical Typography](http://practicaltypography.com/system-fonts.html) for system font suggestions, and the [Pandoc User Guide](http://pandoc.org/MANUAL.html) for more info.
