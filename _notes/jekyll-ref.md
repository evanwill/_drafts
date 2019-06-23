---
title: Handy Jekyll Tips
layout: post
tags: [jekyll]
date: 2019-04-19
---

## Add attributes to links

[Kramdown](https://kramdown.gettalong.org/) allows you to add additional attributes to links (called [Inline Attribute Lists](https://kramdown.gettalong.org/syntax.html#inline-attribute-lists).
To create `<a href="https://example.com" target="_blank" rel="noopener">example</a>`, use:

`[example](https://example.com){:target="_blank"}{:rel="noopener"}`.

## Mix HTML with Markdown

In a Markdown file, all HTML is valid Markdown.
However, Markdown inside HTML tags will be ignored.

For example, `<div> # Header One</div>` won't render as an `<h1>`.
However, with Jekyll's kramdown, you can add the attribute `markdown="1"` to an HTML element to tell the converter to render the Markdown inside.
Thus, `<div markdown="1"> # Header One</div>` will render as `<div><h1>Header One</h1></div>`.

## Add YML front matter

Jekyll processes any file that has YML front matter on top. 
Any file that does not have front matter is just copied directly to `_site` as a static asset, thus you can not use any Liquid, etc.
Sometimes you want to copy over HTML or assets from an old project and need to add YML header to each file. 
Use `sed`, like `sed -i '1i---\n# \n---' file.html`. 
For a batch:

`for f in *.html; do sed -i '1i---\n# \n---' "$f"; done`
