---
title: Intro to HTML, SEO, and Analytics
layout: post
tags: [workshop]
date: 2021-11-03
---

> workshop outline for writing for the web

## HTML

Despite the slick interfaces and amazing websites out there today, everything that is displayed in your browser is made up of HTML, CSS, and JS.

(i.e. the same components that made up the web since the beginning: [U of I Library website, Feb 1, 1997](https://web.archive.org/web/19970218140532/https://www.lib.uidaho.edu/))

Yet, if you use a modern [Content Management System](https://en.wikipedia.org/wiki/Content_management_system) such as WordPress, Drupal, SquareSpace, WIX, or Google Sites, you may have created entire sites without ever seeing HTML.

CMS are "dynamic web" applications that provide a web-based administration interface to create and manage a website. 
Under the hood CMS consist of software that runs on a server (server-side processing) and a database to store information. 
When a user visits a web page (i.e. by clicking a link), their browser sends a request to the site server --> the CMS interprets the request, retrieves the correct data and templates, and sends the user a response (i.e. HTML). 

So to better understand how the web works and what your CMS is doing,  it is helpful to dive into the fundamentals of HTML.

Lessons:

- [Intro to Web and URLs](https://github.com/learn-static/foundations-1-html/blob/main/0-web.md)
- [Intro to HTML concepts](https://github.com/learn-static/foundations-1-html/blob/main/1-html.md)
- [HTML Example](https://github.com/learn-static/foundations-1-html/blob/main/1-html.md)

## SEO

[Search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) is a sort of mad science of how to get your site ranked higher in search indexes... 
In early 2000's it was essentially spammy attempts to boost apparent relevance of pages by jamming them full of keywords.
Search engines are some what smarter than that now, but keep the exact details of indexing workflows and algorithms secret to avoid sites trying to game the system.

The basic idea is that search companies use "crawlers" to surf the web following links (since there isn't some central directory of everything!) to collect content to index.
These bots aren't quite like human users and pay a lot more attention to the code than the visual elements we see.

*There is no magic SEO.*
You can only follow the best practices to present your site in the best possible way, so that crawlers can find and correctly understand the content.

The best way to do this is to have a well organized site with well structured pages--which will also benefit your human users!
While many of the technical details should be handled by your CMS, as a web designer and web writer you will still make many choices that impact your SEO.
To learn more details check the [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide) and [Google Webmaster guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines).

Things Google cares about when crawling and indexing:

- Mobile friendliness --> use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to ensure Google considers your pages mobile friendly.
- Page speed --> use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to see what Google crawlers think about your site performance.
- Well formed HTML with descriptive title and headings --> remember those HTML fundamentals and view-source! 
- Sensible link structures and good navigation links. Also sitemap XML can help.
- Structured markup such as [Schema.org](https://schema.org/). Example, view source of pages and items in [Barnard-Stockbridge digital collection](https://www.lib.uidaho.edu/digital/barstock/).
- Other sites link to your content.
- People click on your pages in search results --> use [Google Search Console](https://search.google.com/search-console/about) to see how your site content looks to Google and understand what searchers are pointing people to your site.

## Analytics 

Once you have a site, you often want to know if anyone is visiting it --> or maybe who is using it and how they are using it!
If you make changes to the navigation, features, or content, it can be helpful to have data to understand the impact of your updates.
This is the value of site analytics.

There is a few main types of use data available:

- **Server logs** --> your server records basic information based on requests sent to it. This data can be analysed to provide statistics about usage. The numbers are usually pretty accurate (it is impossible to block, but requests can fake the information). Example: logs in Reclaim host
- **CMS statics** --> most CMS platforms will have some analytics built into the system. This is often analyzing data similar to server logs, but can be more meaningful since the CMS can connect the requests with content. These are much easier to use and interpret since they are built into the CMS admin interface. Example: WordPress stats
- **JS analytics** --> to understand what a user actually does when they visit a page, it is necessary to use JavaScript loaded in their browser. The most widely used platform to do this is [Google Analytics](https://analytics.google.com/analytics/web), which track detailed information about visitors and interactions, providing enriched data about user groups. This type of analytics can be centralized across many related sites, doesn't require access to a server, and can be used to track links from marketing campaigns. The disadvantage is that JS analytics libraries can be blocked by users, so may be becoming less accurate (see [Plausible post](https://plausible.io/blog/google-analytics-adblockers-missing-data)), and they present privacy trade-offs to your users (i.e. handing over user data to Google). Example: Google Analytics

It is important to understand that analytics numbers are *squishy* --> they should be used to understand trends, make comparisons, and evaluate changes, not be taken as exact statistics.

Notes:

- [Get started with Analytics](https://support.google.com/analytics/answer/1008015?hl=en) -- current version is called "GA4". Sign in using your Google account and set up a "property" for your website.
- Some hosted CMS platforms don't allow you to add your own Analytics code when using a "free" tier account. E.g. [WordPress.com requires paid account](https://wordpress.com/support/google-analytics/).
- There are alternatives to Google Analytics! [Matomo](https://matomo.org/) is largest open source full analytics platform that can be self hosted (free but need to maintain yourself) or paid hosting. However, there are many more alternatives popping up, with many focused on user privacy and simplicity (vs. the very complicated and heavy Google Analytics). Consider if you need all that user data at all--for many, stats built into CMS platforms is enough.

## Resources

Learning and reference:

- [w3schools](https://www.w3schools.com/)
- [MDN web docs](https://developer.mozilla.org/en-US/)
- [web.dev](https://web.dev/learn)

Accessibility: 

- [Usability.gov](https://www.usability.gov/what-and-why/accessibility.html)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [Common accessibility problems](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)

Freely licensed images:

- [Unsplash](https://unsplash.com/)
- [Flickr Commons](https://www.flickr.com/commons)
- [PEXELS](https://www.pexels.com/)
- Optimize your images: [Squoosh web app](https://squoosh.app/)

Design tips:

- [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) - famous Nielsen Norman Group article about UX.
- [Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/)
- [Why Your Links Should Never Say "Click Here"](https://www.smashingmagazine.com/2012/06/links-should-never-say-click-here/)
- [don't use link shorteners](https://gcs.civilservice.gov.uk/blog/link-shorteners-the-long-and-short-of-why-you-shouldnt-use-them/)
- [Laws of UX](https://lawsofux.com/)
- [Web Field Manual](https://webfieldmanual.com/)
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Adobe color wheel](https://color.adobe.com/) -- play with color schemes and check accessibility.
- [Coolors](https://coolors.co)
