---
title: Pandoc for PDFs
layout: post
tags: [dh, md, pdf, tools]
date: 2018-09-05
---

[Pandoc](http://pandoc.org/), the "universal document converter", is a command line utility to convert between countless file types.
I use it in my writing workflow to convert from [Markdown](https://evanwill.github.io/_drafts/notes/writing-markdown.html) to PDF.

Check the docs for full [installation instructions](http://pandoc.org/installing.html), but basically you need to install Pandoc and a [LaTeX](https://www.latex-project.org/about/) distribution.
Pandoc converts your Markdown and your Tex / LaTeX distribution does the typesetting to create PDFs. 
Here is everything necessary on Ubuntu Linux:

```
sudo apt install pandoc texlive texlive-fonts-extra texlive-xetex
```

If you install [MiKTeX](https://miktex.org/) on Windows (your LaTeX distro) plus Pandoc, most of these commands should work--MiKTeX's package manager will pop up asking to install what ever is necessary.

*Note: this was written on Linux using Pandoc 1.19.2.1, it doesn't work quite the same on Pandoc 2+ on Windows. I will update when I get a chance...*

To create a basic PDF, use the `-o` output flag and a file name with `.pdf` extension. 
For example: 

```
pandoc -o output.pdf input.md
```

For writing your content Pandoc supports an extended version of [markdown syntax](http://pandoc.org/MANUAL.html#pandocs-markdown) with many enhancements such as footnotes and tables (similar to GitHub Flavor Markdown). 
If you include a [YAML metadata block](http://pandoc.org/MANUAL.html#extension-yaml_metadata_block) at the top of your file, the standard fields will be translated into LaTeX elements (title, date, author, etc).

To tweak your PDF layout / typesetting, you can pass LaTeX variables to Pandoc using the `-V` variable flag (see docs for all [LaTeX variable options](http://pandoc.org/MANUAL.html#variables-for-latex)).
If you know LaTeX, you can get fancy right away and use existing templates.
However, you can also use a few very simple options to spruce up the defaults.
For example, the default margin is very large, so you might want to use:

```
pandoc -V geometry=margin=1.25in -o output.pdf input.md
```

This will use the LaTeX package `geometry` to set all the margins to 1.25 inch.
You could set each margin individually with geometry options margin-left, margin-right, margin-top, or margin-bottom.

To change the font I usually use the XeLaTeX engine, since it can use any normal font installed on your system.
First, you need to figure out the correct names for installed fonts. 
Use this command:

```
fc-list : family | cut -f1 -d"," | sort
```

The full name listed will be passed as a variable.
Alternatively, open [LibreOffice](https://www.libreoffice.org/) Writer and look through the font names.
However, the variable is picky about the exact name used, so check against the official name as given in `fc-list`.
The command looks like:

```
pandoc --pdf-engine=xelatex -V geometry=margin=1.25in -V mainfont="Noto Sans" -o output.pdf input.md
```

> Note: older versions of Pandoc use `--latex-engine` instead of `--pdf-engine`, which is likely if you installed Pandoc from a distro repository.

You can also use the pdfLaTeX engine, which requires specifically prepared LaTeX fonts (usually stored with a `.sty` extension).
Preparing and using the fonts requires a bit of LaTeX savvy (in theory you can use lots of cool fonts, [FontCatalogue](https://www.tug.org/FontCatalogue/)).
However, the `texlive-fonts-extra` package contains a few ready to go options.
The command looks like:

```
pandoc --latex-engine=pdflatex -V fontfamily="electrum" -V geometry=margin=1.25in -o output.pdf input.md
```

Font size can be controlled using `-V fontsize=12pt`, however, the default template only supports sizes 10, 11, or 12. 
More sizes are supported using the extsize package (8pt, 9pt, 10pt, 11pt, 12pt, 14pt, 17pt, 20pt) which can be used by adding `-V documentclass=extarticle` plus the desired fontsize (if extsize is not installed, your LaTeX distribution should automatically fetch it).

Now we are getting a lot of commandline arguments to keep track of... 
You can simplify by declaring the LaTeX options as YAML metadata at the top of the document instead.
You will still need to use the `--pdf-engine=xelatex` option, but won't need to list out all the `-V` options.
For example: 

```
---
geometry: margin=1in
documentclass: extarticle
mainfont: Noto Sans
fontsize: 14pt
colorlinks: true
---
```

For my basic purposes, that is plenty of control, but of course you can go much further by learning more about LaTeX.
Check [danstoner](https://github.com/danstoner/pandoc_samples) for samples of PDF creation, [Practical Typography](http://practicaltypography.com/system-fonts.html) for system font suggestions, and the [Pandoc User Guide](http://pandoc.org/MANUAL.html) for more info.
