---
title: Detect Website Platform
layout: post
tags: [web, data]
date: 2020-02-03
---

In January 2020 I completed a quick scan of university library websites to include in a paper I was writing. 
The data and method are shared as a repository, [library_websites_scan](https://github.com/evanwill/library_websites_scan), or on Zenodo [doi:10.5281/zenodo.3653184](https://doi.org/10.5281/zenodo.3653184). 

I wanted to share part of the method here, since it is basically just tips on how to inspect a web page and determine the platform used to build it. 

## Platform signatures

To determine the platform, use "View Page Source" and "Inspect" developer tools to look at the base HTML code.
Check the HTML for platform signatures.
Occasionally, the main index page has more customization and added features than other content pages, thus is harder to determine the platform--in that case, visit a less busy page to view the code.

**Drupal** based sites:

- usually include the generator meta tag with the major version number, 
    - `<meta name="Generator" content="Drupal 8 (https://www.drupal.org)" />`
    - `<meta name="generator" content="Drupal 7 (https://www.drupal.org)" />`
- older sites usually load CSS as a huge series of import statements, with the file paths including "/modules/", e.g. `@import url("https://example.edu/modules/system/system.base.css?q4zjuk");`
- newer sites usually load CSS as a smaller series of CSS files, with the file paths including "/files/", and filenames with a bunch of random characters, e.g. ` <link rel="stylesheet" media="all" href="/files/css/css_m7u_1cZUfQut08KzfMvXKdCtsaNcW8FRd5XXUI_Z_cU.css?q55bom" />`
- usually have a JS file, JS object, and element attributes that include "drupal", e.g. `data-drupal-selector="drupal-settings-json"`
- often use links/src that contain "/node/"

**WordPress** based sites:

- usually include the generator meta tag with version number,
    - `<meta name="generator" content="WordPress 4.9.10" />`
    - `<meta name="generator" content="WordPress 5.3.2" />`
- usually contain the short link "s.w.org" (which resolves to wordpress.org), e.g. `<link rel='dns-prefetch' href='//s.w.org' />`
- usually use asset paths that contain "wp-", e.g. `href='//example.edu/wp-content/themes/eu-2014/style.css?ver=3.6'`

**ASP.NET** based sites: 

- usually include classes that include `aspNet`, e.g. `class="aspNetHidden"`. 
- usually contain "viewstate" variables such as `<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="0DhWp/KtK1Wf-some-crazy-string" />` and other ids with "__" in front of the name.
- usually contain links/src ending in `.aspx` or `.axd`
- may contain a generator meta tag giving a specific CMS platform, e.g. `<meta name="Generator" content="Sitefinity 11.2.6900.0 PE" />`
- may use asset paths that include a specific CMS name, e.g. `src="https://example.azureedge.net/sitefinity-production/images/example-icon.png?sfvrsn=11106867"`

**PHP** based sites:

- contain links/src ending in `.php`
