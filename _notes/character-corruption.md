---
title: Character Corruption Issues in CSVs
layout: post
tags: [text, library, tips]
date: 2025-08-30
---

CSVs are [plain text files](https://en.wikipedia.org/wiki/Plain_text), which means all the bytes in the file are a series of character codes, each representing some text character (`a`, `1`, `<`, etc) or control characters (like tabs and line breaks).
The characters in a plain text file are encoded at the byte level following various standards, such as [UTF-8](https://en.wikipedia.org/wiki/UTF-8) (which is the standard encoding on the web).
The computer reads the bytes then uses the encoding standard to select which visual character to display.

Unfortunately, character encoding is complicated!

For example, a text file containing one encoding can get a character from a different standard saved into it.
A text file written in one encoding can be opened with the wrong encoding.
These cases can end up with the characters in the file being incorrectly displayed or fully corrupted (saved incorrectly into the file).

When that happens, usually what is displayed is the [replacement characters](https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character):

```
���

�
```

Or nonsense like:

```
Singaporeâ€™s
```

(This nonsense is called [Mojibake](https://en.wikipedia.org/wiki/Mojibake). A slightly different issue is when a specific font does not have the character to display, which is called ["tofu"](https://fonts.google.com/knowledge/glossary/tofu)--an issue with the font, not necessarily encoding.)

Avoiding character corruption issues requires careful handling and attention to CSVs.

The main forms of corrupt characters are from two sources: 

1. Opening UTF-8 CSV in Excel (or opening it in wrong character encoding in another program)
    - This situation can be avoided by NEVER opening or saving a CSV with Excel! Only open and save XLSX files with Excel. 
    - If you accidentally double click on a CSV and it opens in Excel, the characters are potentially corrupted (via the replacement character issue).
2. Ambiguous characters saved in UTF-8 later opened by a spreadsheet program (ambiguous characters converted into replacement characters)
    - This situation usually comes from pasting text from MS Word or other document editor into a textfile, CSV, or Sheet. At first it will appear correct, but when re-imported into Sheets all ambiguous character will be corrupted into replacement characters.

## Ambiguous characters

Ambiguous characters are generally special fancy looking punctuation marks that are supported by specific editing programs, but not necessarily UTF-8 itself. 
The main examples are smart quotes, smart apostrophes, emdashes, and ellipsis:

```
”
“
–
—
’ 
…
```

For example, when writing in MS Word or other editors, typing a pair of quotes `"` are automatically replaced with smart quotes, `“example”`.
These have specific meaning in Word, but not in UTF-8.

The source of these characters in our metadata is most likely from pasting text from another program, such as MS Word.

These ambiguous characters normally display fine in VS Code (they are usually highlighted with a gold box indicating an ambiguous character), and can be built into the website without any issues. 
They can go through OpenRefine without issues. 

However, when importing into Google Sheets, they will become corrupted (i.e. the ambiguous character byte sequence will be replaced with the replacement character code in UTF-8). 
Once corrupted they will display as tofu `���`, and since the byte code has been replaced, it is impossible to translate back to the original.

It is often very difficult to notice this corruption as it might only impact a few random values in a large spreadsheet.

If a CSV has ambiguous characters, it is best to try to clean them up. 
Work in VS Code or OpenRefine, do not import into Sheets to do this work!

- Use the regular expression `[^\x00-\x7f]` to find problem characters.
- Use find & replace to replace the ambiguous character with a correct UTF-8 version
- In OpenRefine, use All column > Edit all columns > Replace smart quotes with ASCII...

## Special characters

Metadata often contains accented characters or diacritics, such as: 

```
à, á, â, ä, å, æ, ç, è, é, ê, ë, ì, í, î, ï, ñ, ò, ó, ô, ö, ø, ù, ú, û, ü, ý
```

These can commonly become corrupted by incorrectly handling UTF-8 or pasting from non-UTF-8 sources.
Diacritics are the most commonly corrupted character type when opening a CSV in Excel.

Pay close attention to diacritics in metadata to ensure they do not become corrupted--once corrupted it is difficult to recover the correct content. 

## Numbers converted to decimals

Another form of corruption can happen when importing CSVs into spreadsheet programs if the option to "Convert text to numbers, dates, and formulas" is NOT UNCHECKED. 
In columns that have numbers, sometimes spreadsheet program will interpret the column as a number rather than text.
In that case it can add a decimal (e.g. `1` to `1.0`) or round off as if it was a decimal (e.g. id `1.10` to `1.1`). 

This often comes up in identifier columns that use chapter or folder numbers like `1.1`, `1.2`.
You will end up with several `1.1` values as `1.1`, `1.10`, `1.100` will all be converted to the same number.

## Escaped unicode

In some applications, uncommon characters (anything unicode outside of basic ASCII) can be replaced with "escaped unicode".
This is more common in JSON.
To handle correctly, the software will need to unescape the unicode converting it into a normal UTF-8 character (which is not typically done with spreadsheet CSVs).

For example, Montréal Canada: 

```
"value": "Montr\u00e9al Canada"
```

In this case the UTF-8 character `é` has been replaced by the unicode `\u00e9` (with the escape `\` character in front).

Escaped unicode can be corrupt as well.
For example:

```
`Singapore\u00e2\u0080\u0099s`
```

In this case, the original unicode for apostrophe has been corrupted into a nonsense three character sequence.
