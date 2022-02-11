---
title: Paged.js for HTML to PDF
layout: post
tags: [dh, md, pdf, tools]
date: 2022-02-05
---

[Paged.js](https://pagedjs.org/) is a javascript library to create high quality print layouts from your HTML content.
It is designed to be part of a new content to print workflow that cuts out all the messing around with clunky word processors, layout design, and desktop publishing software.
There are some [amazing examples](https://pagedjs.org/made-with-paged.js.html) of print books created using it.
Also check out this demo using [Aurorae](https://s3.amazonaws.com/pagedmedia/pagedjs/examples/polyfill.html) (text from Project Gutenberg).

I think this has a lot of potential for creating open educational resources in static web workflows.

OER tools often want to use Markdown content to output both a website and PDF version.
Currently, that generally involves using [Pandoc plus LaTeX to create PDFs](https://evanwill.github.io/_drafts/notes/pandoc.html) at some point. 
This is limiting because controlling the layout of HTML processed through Pandoc is difficult, as well as adding extra software for users to install.

To use paged.js integrated into a static web workflow we don't need to install anything else. 
We simply gather all the content on one HTML page, add the library and some custom print CSS, and then view the output in the browser.
You can use dev tools to tweak the CSS to get instant feedback on your changes.
Then print using the browser's native print functionality.

> *Note:* the fully features only seem supported in Chrome browser, and Chrome's builtin PDF printing seems a bit better.
> Paged.js calls the library a "polyfill" because it is implementing the CSS "Paged Media" standards that aren't currently supported by browsers.

## Aladore Test

To play around with the possibilities, I created a print version of Aladore on my `aladore-book` project. 
`aladore-book` is an edited version of a public domain novel, with each chapter contained in a Markdown stub, that is generated into a website using Jekyll. 
Using Liquid in Jekyll, I also set up a variety of data derivatives and text outputs made available on the [Aladore Data page](https://evanwill.github.io/aladore-book/data/). 

Starting from the [minimal HTML full text version](https://evanwill.github.io/aladore-book/data/newbolt_aladore_1914.html), I added the full CSS used by the main website version, the ["preview" CSS provided by pagedjs](https://gitlab.coko.foundation/pagedjs/pagedjs/-/blob/main/examples/assets/styles/preview.css), plus a handful of custom print styles:

```
<link rel="stylesheet" href="/aladore-book/assets/css/main.css">
<link rel="stylesheet" href="/aladore-book/assets/pagedjs/preview.css">
<style>
    /* page basics */
    @page {
        size: letter;
        margin: 1.5in 1.5in;
    }
    /* chapter page set up */
    @page chapter {
        /* add page number at bottom */
        @bottom-center {
            content: counter(page);
        }
        /* add title header */
        @top-center {
            content: "Aladore";
        }
    }
    /* start page numbers from first chapter */
    #chapter01 { counter-reset: page 1; }
    /* set up page breaks */
    .frontmatter-pages {
        break-before: right;
    }
    .chapter-pages {
        page: chapter;
        break-before: page;
        margin-top: 8em; 
    }
    /* keep figures on page alone */
    figure {
        max-width: 100%;
        max-height: 100%;
        break-before: page;
        break-after: page;
    }

</style>
```

> *Note:* using inline comments `//` seemed to mess up Paged.js parsing.

At the bottom of the page, we add the [paged.js "polyfill"](https://unpkg.com/pagedjs/dist/paged.polyfill.js):

```
<script src="/aladore-book/assets/pagedjs/paged.polyfill.js"></script>
```

This gets us to the [Aladore full text for print version](https://evanwill.github.io/aladore-book/data/newbolt_aladore_1914_print.html).
Open the page in Chrome browser, use the browser "print" option, and "save as PDF".
