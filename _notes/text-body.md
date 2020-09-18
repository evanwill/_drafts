---
title: Estimating Ideal Text Body Width
layout: post
tags: [tips, web]
date: 2020-08-18
---

Typographers have a variety of stylistic and idealistic reasons for finding an ideal line length for printed text (for example see Bringhurst [*The Elements of Typographic Style*](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style).
On the web, line length is also important for useability--too often web pages present really long lines of text across your screen, making it hard to read.

Setting ideal line lengths can be complicated to translate to the web because of all the variables of text layout.
It seems like you should just be able to say `max-width: 66rem;`, but that doesn't translate correctly and would be much wider than 66 characters.

Butterick [*Practical Typography*](https://practicaltypography.com/line-length.html) says to use "average line length of 45 – 90 characters, including spaces", or "to fit between two and three alphabets on a line".
Butterick's site uses 2.31 alphabets, which in his font + spacing = 652px width for his text block layout.
The idea of alphabets on a line seems like the most practical method to estimate line lengths on a website.

Two alphabets:

`abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz`

2.31 alphabets: 

`abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefgh`

Three alphabets:

`abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz`

## Find Your Ideal Line Length

1. put two or three alphabets in a paragraph your main body text.
2. viewing the page, right click the paragraph and inspect element.
3. using your dev tools inspector, set the paragraph to `display: inline-block;` (this allows you to get the size of just the text, not the full p element)
4. check dev tools Layout Box Model / Computed to find the calculated width in pixels.
5. Adjust your text block width to your ideal width (some where between the pixel length of two or three alphabets).
6. Enjoy your *perfect* typography.

--------------

This site's text block is currently wider than three alphabets...

abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz

I like to think that is because it is mostly about sharing code blocks, which are annoying to look at if too narrow. 
My web book editions, like [aladore-book](https://evanwill.github.io/aladore-book/), use a more ideal width.
