---
title: Markdown in a Minute
layout: post
tags: [md, tools]
date: 2017-08-01
---
<style> #markdown-frame { border: solid #868e96 1px; padding: 5px; } #source { display: block; } #rendered { display: none; }</style>

You can start writing [Markdown](https://daringfireball.net/projects/markdown/) in one minute!

Check the demo below, then practice Markdown in your browser using [Dillinger](http://dillinger.io/), try the [Markdown Tutorial](http://www.markdowntutorial.com/), or read GitHub's [Mastering Markdown Guide](https://guides.github.com/features/mastering-markdown/)!

Toggle this Markdown: <button id="toggle" class="buttons">Markdown / Rendered</button> 

<div id="markdown-frame">
<div id="source" markdown="1">

```
# Heading One

## Heading Two

### Heading Three, etc.

Any text with no empty lines between will become a paragraph.
Leave an empty line between headings and paragraphs.
Font can be *Italic* or **Bold**.
Code can be highlighted with `backticks`.

Hyperlinks look like this [GitHub Help](https://help.github.com/).
Images look similar:

![alt text here](https://upload.wikimedia.org/wikipedia/commons/4/4b/Focus_ubt.jpeg)

A bullet list is created using `*`, `+`, or `-`, like:

- dog
- cat
- muffin

A numbered list is created using a number + `.`, like:

1. one
2. two
6. three
2. four

> Block quote.

----

```
</div>

<div id="rendered" markdown="1">

# Heading One

## Heading Two

### Heading Three, etc.

Any text with no empty lines between will become a paragraph.
Leave an empty line between headings and paragraphs.
Font can be *Italic* or **Bold**.
Code can be highlighted with `backticks`.

Hyperlinks look like this [GitHub Help](https://help.github.com/).
Images look similar:

![alt text here](https://upload.wikimedia.org/wikipedia/commons/4/4b/Focus_ubt.jpeg)

A bullet list is created using `*`, `+`, or `-`, like:

- dog
- cat
- muffin

A numbered list is created using a number + `.`, like:

1. one
2. two
6. three
2. four

> Block quote.

----
</div>
</div>

Check the tags page for my [other Markdown notes]({{ "/tags/index.html#md" | absolute_url }}).

Online editors:

- [Dillinger](http://dillinger.io/)
- [StackEdit](https://stackedit.io/)
- [HackMD](https://hackmd.io/) (real time collaboration)

<script>
function markdownToggle() {
    document.getElementById("source").style.display = (document.getElementById("source").style.display === "none") ? "block" : "none";
    document.getElementById("rendered").style.display = (document.getElementById("rendered").style.display === "block") ? "none" : "block";
}
document.getElementById("toggle").onclick = function () { markdownToggle(); };
</script>