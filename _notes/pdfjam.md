---
title: pdfjam is Handy
layout: post
tags: [pdf, tools]
date: 2020-07-05
---

[pdfjam](https://github.com/DavidFirth/pdfjam) is a handy package for using the pdf utilities in LaTeX.
I use it to quickly combine a batch of image files into a standard PDF.
It can be installed as part of the TeX Live LaTeX distribution on Ubuntu:

`sudo apt install texlive-extra-utils`

(if you don't have TeX Live installed, add `texlive texlive-fonts-extra` as well)

Once installed, you can check the full options: `pdfjam --help`

Now you can easily combine separate PDFs or images into a single PDF. 
The basic command is put together like `pdfjam --options filenames page-selections`.

For example, if I have a folder of JPG images I want to combine into a standard PDF:

`pdfjam --letterpaper *.jpg`

Let's say I have three PDFs where I want to combine only some of the pages:

`pdfjam --letterpaper example1.pdf 1-3 example2.pdf - example3.pdf 4-5`

This will output a single PDF including pages 1 - 3 of example1, all pages of example2, and pages 4 - 5 of example3. 

You can use any of these standard LaTeX paper sizes:

```
a0paper, a1paper, a2paper, a3paper, a4paper, a5paper, a6paper, b0paper, b1paper, b2paper, b3paper, b4paper, b5paper, b6paper, c0paper, c1paper, c2paper, c3paper, c4paper, c5paper, c6paper, b0j, b1j, b2j, b3j, b4j, b5j, b6j, ansiapaper, ansibpaper, ansicpaper, ansidpaper, ansiepaper, letterpaper, executivepaper, legalpaper
```

Or create a custom size using the option `--papersize '{WIDTH,HEIGHT}'`.

You can also add embedded metadata using options like `--pdftitle STRING` and `--pdfauthor STRING`.

Handy!

*Note:* in theory you can install it on Windows if you use MiKTeX via the MiKTeX console by searching the in the packages.
However, it might be easier to get it to work using [Ubuntu WSL](https://evanwill.github.io/_drafts/notes/wsl.html) instead.
