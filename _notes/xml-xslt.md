---
title: Process Document with XML + XSL
layout: post
tags: [xml, tools]
date: 2020-07-06
---

People who work a lot with XML tend to use [Oxygen XML Editor](https://www.oxygenxml.com/).
Unfortunately, the XML ecosystem seems fairly stagnant outside of Oxygen.
XSLT has version 1, 2, and 3 (draft)--but only [Saxon](http://www.saxonica.com/welcome/welcome.xml) has fully implemented versions 2 and 3.

I don't work with XML a lot, so I don't want to pay for Oxygen nor learn how to use it, but occasionally I have to process some XML using XSLT.
So here are some options...
(p.s. my favorite is to avoid the XSLT by parsing the XML with Ruby, then just outputting using Ruby instead)

## xsltproc

For a quick and easy utility, install:

`sudo apt install xsltproc`

Then use the v.1 processor like:

`xsltproc --output out.html stylesheet.xsl example.xml`

## Saxon

Saxon provides an open source and commercial version of their v.2 processor implemented in Java. 
If you install from a Linux repository, you will get a relatively old version--which in this case is actually good. 
Apparently more recent "open" versions from Saxonica have limited advanced features.

Be sure you have Java installed (`default-jre`), then install:

`sudo apt install libsaxonb-java`

Use is via a Java command like:

`java net.sf.saxon.Transform -o:output.html -s:example.xml -xsl:test.xslt`

Or via the commandline wrapper ([man page](http://manpages.ubuntu.com/manpages/trusty/man1/saxonb-xslt.1.html)):

`saxonb-xslt -s:example.xml -xsl:stylesheet.xsl -o:output.html`

If you run with a v1 stylesheet you may get a warning, but it still works fine. 
You will also get a warning for "unsafe extensions" for commands such as `xsl:result-document`. 
To ignore the warning, add `-ext:on`, like:

`saxonb-xslt -s:example.xml -xsl:test.xsl -ext:on`

## Ruby Nokogiri

[Nokogiri](https://nokogiri.org/) is a popular Ruby Gem for parsing HTML and XML documents. 
It implements v.1 features. 
It is fairly easy to set up a `.rb` file or Rake task to process batches of XML.

First, ensure you have a complete, up-to-date version of Ruby installed on your system. 
Then `gem install nokogiri`.

Using it looks something like: 

```
require 'nokogiri'
document = Nokogiri::XML(File.read('example.xml'))
template = Nokogiri::XSLT(File.read('test.xsl'))
transformed_document = template.transform(document)
File.write('output.html', transformed_document)
```

i.e. open the XML; open the XSL; apply the XSLT; write the output to a file. 
See [Nokogiri stylesheet docs](https://nokogiri.org/rdoc/Nokogiri/XSLT/Stylesheet.html). 

Alternatively, rather than writing/applying an XSL, I have found it easier to just parse values out of the XML using selectors, then write the new document using Ruby instead. 

In fact, I think I will do my best to avoid XML if possible...
