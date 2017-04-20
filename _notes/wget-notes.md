---
title: wget notes
layout: post
tags: [tools, web]
date: 2016-01-15
---

Wget is a handy commandline utility for grabbing stuff off the web. 
It is built into most UNIX systems. 
If you are on windows, install [Git for Windows](https://git-scm.com/) which comes packaged with `Git Bash`, a very handy UNIX terminal emulator
(note: check if Git Bash has wget installed by typing `wget --version`. If it is not installed, check this [note](https://evanwill.github.io/_drafts/notes/gitbash-windows.html)).
Other windows options are [Cygwin](https://evanwill.github.io/_drafts/notes/cygwin.html), [MobaXterm](http://mobaxterm.mobatek.net/), or [Bash on Windows Subsystem](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide).

See all the commands by typing `wget --help` in your terminal or visiting the [man page](http://www.gnu.org/software/wget/manual/wget.html).

## Download files from a list

Create a plain text list of urls you want to download, one per line. 
Use the `-i` option to pass that list to wget.

`wget -i download-file-list.txt`

## Download all files of a type from a domain

Use the `-r` (recursive) and `-A` (accept) options.
For example, download all PDFs:

`wget -r -A.pdf http://page-with-pdfs.com/`

limit to file type: `--accept html`

## Check dead links

`wget --spider -o test.log -e robots=off -w 5 --random-wait --mirror --page-requisites --no-parent http://www.example.com`

## Fully mirror a site 

Download everything you need to have an exact copy of a full site locally:

`wget --mirror --convert-links --adjust-extension --page-requisites --wait=2 --random-wait http://example.org`

If you only want files from a specific set of domains use `--domains=LIST` with a comma separated list.
If you just want to crawl part of a domain use `--no-parent` flag.
If the site has redirects to send you to an authorative version of a page, you might want to use `--trust-server-names`, which will name the files based on the file URL rather than the original URL (before redirects).

## WARC web archive options

[WARC](https://www.loc.gov/preservation/digital/formats/fdd/fdd000236.shtml) is a web archive format that stores page content, response headers, and metadata for a group of web pages. 
One WARC can contain all the pages gathered during a web harvest.
In addition to HTML documents, it can contain binary content such as images. 

To create a WARC for any wget crawl, simply add the `--warc-file="filename"` flag to the command. 
Wget will harvest the site assets as normal, but additionally create a WARC compressed as a `.gz` file.
For larger sites it's a good idea to add `--warc-max-size=1G` to limit the max size of each WARC so they don't get too big. 

Combined with a mirror, it might look like:

`wget --mirror --wait=2 --random-wait --warc-file="example.org-archive" http://example.org`

If necessary you can also send a different user agent if the server refuses to give content to wget's default one, like `--user-agent=Mozilla`.
Occasionally it might be necessary to ignore robot.txt for archival purposes, add `-e robots=off` to the command.

If you want to view your WARC later, use [Webrecorder Player](https://github.com/webrecorder/webrecorderplayer-electron).

