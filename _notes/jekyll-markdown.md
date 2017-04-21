---
title: Markdown on Jekyll
layout: post
tags: [jekyll, tools]
date: 2017-04-19
---

Jekyll uses Markdown `.md` to simplify creating the base content for a site.
The original spec is from [Daring Fireball](https://daringfireball.net/projects/markdown/).
GitHub added extra features to the Markdown used for comments and writing throughout their site, called [GitHub markdown flavor](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
Their [Mastering Markdown Guide](https://guides.github.com/features/mastering-markdown/) is a good quickie tutorial.

By default, Jekyll uses the Ruby based [kramdown](https://kramdown.gettalong.org/) library to convert Markdown. 
Kramdown supports a few more extras beyond the standard syntax, such as attributes, footnotes, and typographic symbols.
Check the [kramdown syntax](https://kramdown.gettalong.org/syntax.html) for details.

## Tips

I make lots of step-by-step tutorials.
If you aren't careful with code blocks nested in lists they will end up with extra spaces. 
The code block looks right, but when you copy and paste from the web page, they are all indented two spaces.
The trick to fix this is that the code block has to line up with the first character of the list text, not with the list marker.

E.g., this works:

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

1. one
	- nest
	- nest
	  
	```
	code
	block
	```
	- more list
2. two

