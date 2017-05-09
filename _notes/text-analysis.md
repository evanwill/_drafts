---
title: Text Analysis Notes
layout: post
tags: [DH, tools]
date: 2016-02-18
---

> Collection of Text Analysis resources from various workshops and presentations.

## Text Analysis?
   
= a messy term that encompasses many interconnected processes such as text data collection, cleaning, parsing, summary, visualization. 
Also known as [text mining](https://en.wikipedia.org/wiki/Text_mining). 

Examples: Text Annotation, [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing), [Sentiment Analysis](https://en.wikipedia.org/wiki/Sentiment_analysis)

## Explore a Text

> remember: Your Data == Text

Juxta (digital text collation. NINES.)
- [Juxtacommons](http://juxtacommons.org/) (online version, great for sharing)
- [desktop](http://www.juxtasoftware.org/) (legacy desktop version)
- My [Digital Aladore example](https://digitalaladore.wordpress.com/2014/12/29/using-juxta/)

Voyant Tools (suite of online text visualization tools. Stéfan Sinclair & Geoffrey Rockwell)
- [Voyant web app](http://voyant-tools.org/)
- [Voyant docs](http://docs.voyant-tools.org/)

TokenX ("a text visualization, analysis, and play tool". Brian Pytlik Zillig, U of Nebraska Libraries)
- [TokenX web app](http://tokenx.unl.edu/tokenx/index.html)

WordTree (Jason Davies)
- [Word tree web app](https://www.jasondavies.com/wordtree/ )
- [academic explanation of word tree](http://hint.fm/projects/wordtree/)

NLP 
- [Stanford NLP Group](http://nlp.stanford.edu/software/) (a library of Java apps, e.g. [named entity tagging demo](http://nlp.stanford.edu:8080/ner/)
- [Open Calais](http://www.opencalais.com/) (API trained on web and newspaper text)
- Watson [Natural Language Understanding](https://www.ibm.com/watson/developercloud/natural-language-understanding.html) (API trained on web content)

## Explore a Corpus

Topic Modeling
- Megan R. Brett, ["Topic Modeling: A Basic Introduction" (2012)](http://journalofdigitalhumanities.org/2-1/topic-modeling-a-basic-introduction-by-megan-r-brett/)
- [MALLET (MAchine Learning for LanguagE Toolkit)](http://mallet.cs.umass.edu/) (Programming Historian [MALLET lesson](http://programminghistorian.org/lessons/topic-modeling-and-mallet))
- [Topic Modeling Tool](https://code.google.com/archive/p/topic-modeling-tool/)  (simple visual way to use part of MALLET)
    - example classroom projects: Sherlock Holmes's London [prep](https://sherlockholmeslondondh.wordpress.com/2015/03/23/topic-modeling-assignment/) and [analysis](https://sherlockholmeslondondh.wordpress.com/2015/03/27/topic-modeling-part-2-graphing-the-results/); Posner [basic strategies](http://miriamposner.com/blog/very-basic-strategies-for-interpreting-results-from-the-topic-modeling-tool/).

Overview Docs (online tool designed for journalists to sort through huge data sets)
- [Overview web app](https://www.overviewdocs.com/)
- Good [help docs](https://blog.overviewdocs.com/help/)

Jigsaw ("Visual Analytics for Exploring and Understanding Document Collections")
- [desktop app](http://www.cc.gatech.edu/gvu/ii/jigsaw/)
- [WebJigsaw](http://www.iilabgt.org/webjigsaw)

Concordancers
- [AntConc](http://www.laurenceanthony.net/software/antconc/) (lots of software and publications from Laurence Anthony)
- [CasualConc](https://sites.google.com/site/casualconc/Home) (R package)
- [TextSTAT](http://neon.niederlandistik.fu-berlin.de/en/textstat/)

## Explore a Huge Corpus

> Think about Big Data 3 V’s (volume, variety and velocity).

Ngrams
- [Bookworm](http://bookworm.culturomics.org/)
- Google Books [Ngram Viewer](https://books.google.com/ngrams) (see [TED talk](https://www.ted.com/talks/what_we_learned_from_5_million_books?language=en))

Hathi Trust [Research Center Portal](https://sharc.hathitrust.org/) (big text data)

Twitter analysis
- Healey & Ramaswamy, "Visualizing Twitter Sentiment" (2013), http://www.csc.ncsu.edu/faculty/healey/tweet_viz/ 
- Clement Levallois, "Umigon: sentiment analysis on Tweets based on terms lists and heuristics" (2013), http://www.umigon.com/ 
- now everyone is doing it! [Twitter interactive](https://interactive.twitter.com/)

## Explore Text with Programming

Python
- Distribution: [Anaconda](https://www.continuum.io/downloads) (get Python 3, 64-bit)
- Tool Kit: [NLTK](http://www.nltk.org/) (install via `conda install nltk` or `pip install nltk`)
- Learn: [NLTK Book](http://www.nltk.org/book/) (Steven Bird, Ewan Klein, and Edward Loperm, designed to teach text analysis)

R
- Distribution: R, https://cran.rstudio.com/ 
- IDE: RStudio,https://www.rstudio.com/products/rstudio-desktop/ 
- Learn: [Text analysis with R for students of literature](http://www.matthewjockers.net/text-analysis-with-r-for-students-of-literature/), Matthew L Jockers (New York : Springer-Verlag, 2014).

Bash Shell 
- The command line has lots of great functions for manipulating text files!
- Programming Historian, [Introduction to the Bash Commandline](http://programminghistorian.org/lessons/intro-to-bash)
- SWC, [Unix Shell](http://swcarpentry.github.io/shell-novice/)

## Tool Catalogs / Directories

- [DIRT](http://dirtdirectory.org/) (Digital Research Tools)
- [TAPoR3](http://tapor-test.artsrn.ualberta.ca/home) ("Discover research tools for studying text")
- [DH Commons](http://dhcommons.org/) (good place to find example projects)

> **Caution**:
> Due to the nature of academic funding cycles, there is a lot of dead tools/projects out there, and a lot of tutorials for dead tools. 
> Many of these tools still work, but without active maintenance they may not for long.
> Due to the technical and statistical nature of these tools, descriptions of what they do and how they work may be Difficult reading... Don’t be intimidated! 
> However, it is good to be aware of the academic literature explaining the tools and algorithms since you may need to cite them to validate the techniques in your own work.

## Helpful DH Resources

- [Programming Historian](http://programminghistorian.org/)
- [Stanford Litlab Pamphlets](http://litlab.stanford.edu/pamphlets/)
- Miriam Posner [DH 101](http://miriamposner.com/dh101f15/index.php/tutorials-and-resources/suggested-tools/) and [blog](http://miriamposner.com/blog/).
