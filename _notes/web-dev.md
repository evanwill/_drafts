---
title: Handy web dev tools
layout: post
tags: [web, tips]
date: 2019-07-29
handy: true
---

Key shortcuts:

- Paste plain text (get rid of weird formatting): `Ctrl + Shift + V`
- Override a page's custom context menu (so you can access your normal one): `Shift + right click`

Browser support:

- [Can I Use](http://caniuse.com/)
- [CSS font stack](http://www.cssfontstack.com/)

Tests:

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse tests](https://web.dev/measure)
- [Page Speed](https://developers.google.com/speed/pagespeed/insights/)
- [mobile-friendly](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results) (replaces discontinued [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool))
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)
- [webpagetest](http://webpagetest.org/) (test on actual devices and connections)

Web Master utilities:

- [sitemaps](https://www.sitemaps.org/protocol.html)
- [Google Custom Search](https://cse.google.com/cse/)
- [Google Search Console](https://www.google.com/webmasters/tools/home)
- [ascii font generator](ttps://patorjk.com/software/taag/)

Colors:

- [Material Design Color Tool](https://material.io/tools/color/#!/?view.left=0&view.right=0)
- [Adobe color wheel](https://color.adobe.com/)
- [Coolors](https://coolors.co)
- [Picular](https://picular.co/)

Accessibility:

- [Who Can Use (color checker)](https://www.whocanuse.com/)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [ARL web accessibility toolkit](http://accessibility.arl.org/standards-best-practices/)
- [Usability.gov](http://www.usability.gov/what-and-why/accessibility.html)
- Chrome [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [WAVE tool](http://wave.webaim.org/)
- W3C [Easy Checks](https://www.w3.org/WAI/eval/preliminary) documentation
- [Accessibility testing and tools (MDN web docs)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [captioning videos for free](https://www.washington.edu/accessibility/videos/free-captioning/)

Stop using "click here":

- [Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/)
- [Why Your Links Should Never Say "Click Here"](https://www.smashingmagazine.com/2012/06/links-should-never-say-click-here/)

Also, [don't use link shorteners](https://gcs.civilservice.gov.uk/blog/link-shorteners-the-long-and-short-of-why-you-shouldnt-use-them/)

Free images:

- [Unsplash](https://unsplash.com/)
- [Flickr Commons](https://www.flickr.com/commons)
- [PEXELS](https://www.pexels.com/)
- [Old Book Illustrations](https://www.oldbookillustrations.com/)
- [Coverr (free stock video)](https://coverr.co/)
- [Storyset (free illustrations)](https://storyset.com/)

Image optimize:

- For one off, [Page Speed](https://pagespeed.web.dev/) has a little link at the bottom of the analysis to download optimized images, css, and js (see [Optimize Image](https://developers.google.com/speed/docs/insights/OptimizeImages))
- [Essential Image Optimization](https://images.guide/) by Addy Osmani
- [Squoosh web app](https://squoosh.app/)
- [Image Magick](https://imagemagick.org/) ([notes](https://evanwill.github.io/_drafts/notes/imagemagick.html))

Reference:

- [MDN web docs](https://developer.mozilla.org/en-US/)
- [w3schools](https://www.w3schools.com/)
- [web.dev](https://web.dev/learn)

JQuery?

- [You Might Not Need JQuery](http://youmightnotneedjquery.com/)
- [plainjs](https://plainjs.com/)

Design:

- [design examples](https://lookup.design/)
- [Components Gallery](https://component.gallery/components/)
- [Laws of UX](https://lawsofux.com/)
- [Web Field Manual](https://webfieldmanual.com/)
- [Performance Tooling Today](http://www.perf-tooling.today/)
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Planet Friendly Web Guide](https://www.planetfriendlyweb.org/)
- [Open Source Guide](https://opensource.guide/)
- [ac4d Design Library](http://library.ac4d.com/)

Quick local server:

- Python 3: `python -m http.server 8000` then surf to `localhost:8000` (part of python standard library)
- Ruby: `ruby -run -e httpd . -p 8080` then surf to `localhost:8080` (*note* in ruby 3.0+ webrick is removed from the standard library, so you will have to install `webrick` gem)
- Node: install `npm install -g http-server`, run `http-server`

Ultra minimal computing notebook:

- [new-note](https://github.com/jjjjjjjjjjjjjjjjjjjj/new-note/) (see [article](https://boingboing.net/2018/05/08/the-simplest-online-note-takin.html))
- or paste into address bar `data:text/html, <html contenteditable style='padding:10%;'>`, type, then save with `Ctrl+S`.

Minimal hosting: 

- [sdnotes](https://sdnotes.com/faq)

Find good font for your editor:

- [Programming Fonts](https://app.programmingfonts.org/), test out mono fonts in web based editor

Check content of certificate file:

- `openssl x509 -in libcal_uidaho_edu_cert.cer -noout -text`
