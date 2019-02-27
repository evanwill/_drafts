---
title: Handy web dev tools
layout: post
tags: [web, tips]
date: 2018-05-29
---

Quick local server:

- Python 3: `python -m http.server 8000` then surf to `localhost:8000`
- Node: install `npm install -g http-server`, run `http-server`
- Ruby: `ruby -run -e httpd . -p 8080` then surf to `localhost:8080`

Browser support:

- [Can I Use](http://caniuse.com/)
- [CSS font stack](http://www.cssfontstack.com/)

Tests:

- [Page Speed](https://developers.google.com/speed/pagespeed/insights/)
- [mobile-friendly](https://search.google.com/test/mobile-friendly)
- [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)

Web Master utilities:

- [sitemaps](https://www.sitemaps.org/protocol.html)
- [Google Custom Search](https://cse.google.com/cse/)
- [Google Search Console](https://www.google.com/webmasters/tools/home)

Colors:

- [Material Design Color Tool](https://material.io/tools/color/#!/?view.left=0&view.right=0)
- [Adobe color wheel](https://color.adobe.com/)
- [Coolors](https://coolors.co)
- [Picular](https://picular.co/)

Accessibility:

- [ARL web accessibility toolkit](http://accessibility.arl.org/standards-best-practices/)
- [Usability.gov](http://www.usability.gov/what-and-why/accessibility.html)
- Chrome [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [WAVE tool](http://wave.webaim.org/)
- W3C [Easy Checks](https://www.w3.org/WAI/eval/preliminary) documentation

Free images:

- [Unsplash](https://unsplash.com/)
- [Flickr Commons](https://www.flickr.com/commons)
- [PEXELS](https://www.pexels.com/)

Image optimize:

- For one off, [Page Speed](https://developers.google.com/speed/pagespeed/insights/) has a little link at the bottom of the analysis to download optimized images, css, and js (see [Optimize Image](https://developers.google.com/speed/docs/insights/OptimizeImages))
- Image Magick [convert](https://www.imagemagick.org/script/convert.php)

JQuery?

- [You Might Not Need JQuery](http://youmightnotneedjquery.com/)
- [plainjs](https://plainjs.com/)

Design:

- [Laws of UX](https://lawsofux.com/)
- [Web Field Manual](https://webfieldmanual.com/)
- [Performance Tooling Today](http://www.perf-tooling.today/)
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Planet Friendly Web Guide](https://www.planetfriendlyweb.org/)
- [Open Source Guide](https://opensource.guide/)

Ultra minimal computing notebook:

- [new-note](https://github.com/jjjjjjjjjjjjjjjjjjjj/new-note/) (see [article](https://boingboing.net/2018/05/08/the-simplest-online-note-takin.html))
- or paste into address bar `data:text/html, <html contenteditable style='padding:10%;'>`, type, then save with `Ctrl+S`.

Check content of certificate file:

- `openssl x509 -in libcal_uidaho_edu_cert.cer -noout -text`
