---
title: Markdown on Jekyll
layout: post
tags: [jekyll, md, tools]
date: 2017-04-19
---

Jekyll uses Markdown `.md` to simplify creating the base content for a site.
The original spec is from [Daring Fireball](https://daringfireball.net/projects/markdown/), intended to be simple and intuitive like writing an email.
GitHub added extra features to the Markdown used for comments and writing throughout their site, called [GitHub markdown flavor](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
Their [Mastering Markdown Guide](https://guides.github.com/features/mastering-markdown/) is a good quickie tutorial.

By default, Jekyll uses the Ruby based [kramdown](https://kramdown.gettalong.org/) library to convert Markdown. 
Kramdown supports a few more extras beyond the standard syntax, such as attributes, footnotes, and typographic symbols.
Check the [kramdown syntax](https://kramdown.gettalong.org/syntax.html) for details.

## Tips

### White space 

Although Markdown is simple, it is important to remember that white space, blank lines, and tabs matter.
If you are getting unexpected results when rendering, check your white space.

### Intermix with HTML

All HTML is valid Markdown, but by default Markdown converters ignore Markdown inside HTML tags. 
For example, `<div> # Header One</div>` won't render as an `<h1>`.
However, with Jekyll's kramdown, you can add the attribute `markdown="1"` to an HTML element to tell the converter to render the Markdown inside.
For example, `<div markdown="1"> # Header One</div>` will render as `<div markdown="1"><h1>Header One</h1></div>`.
This is very handy for adding special divs with ids and classes!

### Nesting code blocks

I make lots of step-by-step tutorials.
If you aren't careful with code blocks nested in lists they will end up with extra spaces. 
The code block looks right, but when you copy and paste from the web page, they are all indented two spaces.
The trick to fix this is that the code block has to line up with the first character of the list text, not with the list marker.

E.g., this works:

`````
1. one
	- nest
	- nest
	  
	  ```
	  code
	  block
	  ```
	- more list
2. two
`````

1. one
	- nest
	- nest
	  
	  ```
	  code
	  block
	  ```
	- more list
2. two

but this doesn't:

`````
1. one
	- nest
	- nest
	  
	```
	code
	block
	```
	- more list
2. two
`````

1. one
	- nest
	- nest
	  
	```
	code
	block
	```
	- more list
2. two

