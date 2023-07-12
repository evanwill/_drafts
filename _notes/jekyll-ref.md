---
title: Handy Jekyll Tips
layout: post
tags: [jekyll]
date: 2019-04-19
handy: true
---

> random notes about Jekyll quirks

## Add attributes to elements

[Kramdown](https://kramdown.gettalong.org/) allows you to add additional attributes to elements with a basic syntax called [Attribute Lists](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions).
Directly proceeding or following the block or inline element (as written in Markdown), add a `{:` the attributes, and close `}`.
Multiple attributes can be added inside the brackets.

For example, to create `<p id="example" class="red">Stuff</p>`, use:

```
Stuff
{: #example .red }
```

To create `<a href="https://example.com" target="_blank" rel="noopener">example</a>`, use:

```
[example](https://example.com){:target="_blank" rel="noopener"}
```

## Mix HTML with Markdown

In a Markdown file, all HTML is valid Markdown.
However, Markdown inside HTML tags will be ignored.

For example, `<div> # Header One</div>` won't render as an `<h1>`.
However, with Jekyll's kramdown, you can add the attribute `markdown="1"` to an HTML element to tell the converter to render the Markdown inside.
Thus, `<div markdown="1"> # Header One</div>` will render as `<div><h1>Header One</h1></div>`.

## Use variables to write Liquid expressions

Jekyll's version of Liquid tweaks some of the functions to provide additional features.
Sometimes it is handy to use a variable to actually write/modify a Liquid expression. 
For example, a page or site variable can be used to set up an include, basically Liquid *inside* a Liquid expression:

`{% raw %}{% include {{ page.variable }} %}{% endraw %}`

## Add YML front matter

Jekyll processes any file that has YML front matter on top. 
Any file that does not have front matter is just copied directly to `_site` as a static asset, thus you can not use any Liquid, etc.
Sometimes you want to copy over HTML or assets from an old project and need to add YML header to each file. 
Use `sed`, like `sed -i '1i---\n# \n---' file.html`. 
For a batch:

`for f in *.html; do sed -i '1i---\n# \n---' "$f"; done`

## Grab key / value when iterating over hash

If you have a YML hash like:

```
example: 
    key1: value1
    key2: value2
    key3: value3
```

You can iterate over the hash, in the loop access the key with `[0]` and value at `[1]`, like:

```{% raw %}
{% for e in site.data.file.example %}
key: {{ e[0] }}
value: {{ e[1] }}
{% endfor %}
{% endraw %}
```

(see old [Liquid wiki docs](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#allowed-collection-types))
