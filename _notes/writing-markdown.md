---
title: Writing in Markdown
layout: post
tags: [dh, md, tools]
date: 2016-05-20
---

Markdown is a quick and simple way to write formatted documents in plaintext.
It is intuitive and easy to read, but is designed to convert to HTML for easy web publishing.
Writing in plaintext rather than [proprietary](https://www.gnu.org/proprietary/proprietary.en.html) formats such as Word has many advantages:

- simple - don't waste time in complex and frustrating formatting in Word that will be deleted by publishers anyway. This keeps your distractions to a minimum.
- sharable - any device can open and read plaintext, no special software needed, unlike Word.
- preservable - markdown is plaintext which is easy for digital preservation, unlike Word.
- version controllable - you can use the full power of Git or other version control systems, unlike Word.

## GitHub Markdown 

Markdown was originally developed by [Daring Fireball](https://daringfireball.net/projects/markdown/).
However, other "flavors" of md have developed. 
The most popular is [GitHub markdown flavor](https://help.github.com/articles/basic-writing-and-formatting-syntax/), since it can be used anywhere on GitHub.

Here are some tutorials:

- GitHub [Mastering Markdown Guide](https://guides.github.com/features/mastering-markdown/)
- [Markdown Tutorial](http://www.markdowntutorial.com/)
- [Markdown Guide](https://www.markdownguide.org/)

## Markdown editors

Markdown is [plain text](https://en.wikipedia.org/wiki/Plain_text), it's sort of like source code for your document. 
You can write it in any application that supports plain text, i.e. a text editor.
When working with code you should have a good text editor. 
 
For basic editing, Windows [Notepad++](https://notepad-plus-plus.org/), Mac TextEdit, or Linux Gedit are sufficient (*note:* you can use Windows Notepad, but it does not handle UTF-8 encoding or UNIX line endings that are standard for most cross platform applications).
However, more advanced code editors often have plugins or features to make it easier with previews of your document.
Checkout [Visual Studio Code](https://code.visualstudio.com/) (use shortcut `Ctrl+Shift+V` to preview) or [Atom](https://atom.io/).

If you want a more fully featured visual writing environment, there are also applications devoted specifically to writing in Markdown. 
These apps will have previews, GUI controls, and automatic export options. 
Check out:
 
- [Remarkable](https://remarkableapp.github.io/index.html) - code / preview split screen.
- [Dillinger](http://dillinger.io/) - in browser, nothing to install.
- [Typora](https://www.typora.io/) - live preview writing focused slick new app.

## Rendering Markdown

Markdown is human readable as plain text--it is intuitive like writing an email. 
However, it is designed to render as HTML. 
Markdown compilers are built in to many applications to generate formatted versions such as HTML, .docx, or PDF.

One option is [Pandoc](http://pandoc.org/), a command line utility to translate between many formats and generate new output versions, such as PDFs (via [LaTex](https://www.latex-project.org/about/)). 
Check my note [Pandoc for PDFs](https://evanwill.github.io/_drafts/notes/pandoc.html) or the [Sustainable Authorship in Plain Text](http://programminghistorian.org/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown) tutorial.
