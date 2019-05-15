---
title: File types notes
layout: post
tags: [text]
date: 2019-01-06
---

> notes clarifying plain text which is often mentions in other notes...

# Bits and Bytes

*Bit* = binary digit, i.e. `0` or `1`. 
*Byte* = a grouping of 8 bits (normally) that are used together, which was historically just the right amount of data to encode text characters.

*Hex* = a convenient way to represent bytes as two [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) digits, i.e. if you have groups of 4 bits, there is 16 possible combos from `0000` to `1111`, represented in hexadecimal from `0` to `F`.
Files can be opened in a "hex editor" to view the raw bytes represented as pairs of hexadecimal digits. 
For example, in [UTF-8](https://en.wikipedia.org/wiki/UTF-8) `A` is `41` in hex, `B` is `42`, `Z` is `5A`, etc.

## Text vs. Binary

Generally, there is a distinction between two broad types of computer files: text or binary.

**Text files** contain a series of bytes intended to represent text characters organized in lines (e.g. `a`, `B`, space, tab, line breaks, etc.).
It can be opened with a text editor to see the characters. 

**Binary files** contain bytes that are NOT character codes, data that is meant to be interpreted as something other than characters.
It will require software (other than a text editor) that can correctly interpret the bytes. 
For example, a JPG image, MP3 sound file, or a ZIP compressed folder.
A binary file can be represented in a text file by [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) standards, such as Base64, where the bytes are represented by text characters.
The text will be gibberish of course, but can be converted back into the binary format to retrieve the original data.

Usually, when talking about text files, we mean **plain text**.
It is defined by [Unicode standard](https://www.unicode.org/) as:

> "Plain text is a pure sequence of character codes; plain Unicode-encoded text is therefore a sequence of Unicode character codes."

Plain text files are text files, i.e. contain only characters like `a`, `1`, `<`, `!`, etc. 
Some characters might be "hidden" control characters, such as tabs and line breaks. 

In some contexts you will hear a distinction between plain text and rich text, i.e. just the characters/words vs. text with information about the style/presentation (fonts, colors, sizing, etc).
However, "rich text" is often written in plain text, e.g. HTML, LaTeX, Markdown, or XML. 
So in this distinction, `hello world` is plain text, but `<h1>hello world</h1>` is rich text written in plain text.
On this blog I call text files "plain text", and don't use the distinction with "rich text" in this way.

## Raster vs. Vector

There is a broad distinction between two types of image file types:

**Raster image** files contain data that describes the individual pixels that make up the image.
This are often captured by a digital camera or scanner. 
Common formats include JPEG, PNG, TIFF, etc. 

**Vector image** files contain data that describes the geometry/geometric features that makes up the image.
Since digital screens are made up of pixels, vector images are rendered into a raster image when viewing--however, because the vector image is made of points, lines, curves, etc. it can be scaled to any size without loss of quality.
Common formats include [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics), which is written in XML.

## Demos

Open these all with a text editor:

- text file (text)
- html file (text. with markup)
- docx file (binary. A zipped folder of XML components)
- unzipped docx (use `unzip` or right-click to extract contents which are plain text files)

Open this "dogtest" image in various formats with a viewer and text editor:

- [png]({{ '/assets/testimage/dogtest.png' | relative_url }}) (raster, binary, lossless compression)
- [jpg]({{ '/assets/testimage/dogtest.jpg' | relative_url }}) (raster, binary, lossy compression)
- [svg]({{ '/assets/testimage/dogtest.svg' | relative_url }}) (vector, text. Open with a text editor to view the XML, edit the numbers to change the image)
- [pbm]({{ '/assets/testimage/dogtest.pbm' | relative_url }}) (raster, text. Open with a text editor to see black and white pixels represented as `1` and `0`, edit to change the image)
