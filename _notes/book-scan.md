---
title: ScanTailor Book Scan Image Processing
layout: post
tags: [tools, library]
date: 2025-08-29
---

ScanTailor is a unique piece of software that does its niche job very well--so I wanted to gather some notes about it. 

There was a ton of enthusiasm in 2000 - 2010s for DIY book scanning, where you set up your own library lab style book scanning rig and join Internet Archive in digitizing the worlds print heritage. 
A lot of this is embodied in the [DIY Bookscanner community](https://diybookscanner.org) which contains a lot of information, plans, and documentation.

Once you capture images of a book's pages (either with a rig or flatbed scanner), you need to process them into something useable. 
There is two competing aims of the post-processing:

- Create super clean images for OCR to extract the text for a fully digital edition (the images won't be used for human reading)
- Normalize and clean images for creating a PDF facsimile edition (make something that looks like the original book pages, which limits how much you will process the images. Images become the PDF pages.)

Some commercial scanning rigs have their own proprietary software, and others use Acrobat, Abby Finereader, or Omnipage (which aren't really designed for this task).
The DIY community created a few pieces of software specially suited to the post-processing challenges--resulting in the original [ScanTailor](https://github.com/scantailor/scantailor) (probably don't install this version!).
But in the last decade, community energy has fizzled (even at its height was very tiny and niche)--leaving a everything unmaintained.

Since then ScanTailor has been forked and re-forked dozens of times by a bunch of random people trying to enhance and keep it functioning, leaving a maze of versions that is hard to navigate.

The current most solid option seems to be [ScanTailor-Advanced](https://github.com/ScanTailor-Advanced/scantailor-advanced). 
A couple that seem active, but I haven't personally used are [scantailor-experimental](https://github.com/ImageProcessing-ElectronicPublications/scantailor-experimental) and [scantailor-universal](https://github.com/trufanov-nok/scantailor-universal)).

What ScanTailor does well is providing a mix of automated batch processing with individual review / manual tweaks on each page. 
Through each step of processing it gives you a preview of the results--then when you want to finalize, it runs all steps in one operation to maximize image quality.

It can:

- Split, rotate, and crop pages.
- Deskew.
- Detect page content, so you can select text blocks and illustrations. The text and illustrations will be processed differently (which is pretty hard to do using other tools), and everything else cropped away.
- For text areas, sharpens text and removes the background. 
- With everything selected, create a standardized page size and margin so the output images are all exactly the same.

