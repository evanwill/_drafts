---
title: Web intro
layout: post
tags: [web, tips]
date: 2018-05-20
---

Idealistic Canadian video: [How Does the Internet Work ?](https://youtu.be/i5oe63pOhLI)

A network is two or more computers connected.
URLs are stand ins for [Internet Protocol addresses (IP)](https://en.wikipedia.org/wiki/IP_address), which are numerical identifiers for devices connected to a network.

*The internet is network of networks that connects devices.*

Demo IP addresses: 

- [Find your IP](https://support.google.com/websearch/answer/1696588)
- Check another IP: `ping www.google.com` or `nslookup www.uidaho.edu` 
- Follow your traffic: traceroute / tracert / tracepath `tracepath www.google.com` or `mtr --report google.com`
- Make a request: `curl www.google.com`

For an in-depth, but fun intro, checkout Julia Evan's [Networking Zine](https://wizardzines.com/zines/networking/).

## What's in a URL

`https://example.com/about?key=value#anchor`

protocol `://` domain `.` top-level domain (optional port :80) `/` path and filename `?` query with parameters `#` fragment or anchor

- **Protocol:** there is actually more than 100 defined Internet Protocols, however with URLs the most common are [Hypertext Transfer Protocol (HTTP)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) or [File Transfer Protocol (FTP)](https://en.wikipedia.org/wiki/File_Transfer_Protocol).
- **Domain:** the [Domain Name System (DNS)](https://en.wikipedia.org/wiki/Domain_Name_System) is often described as a "phone book" that translates easy to understand web addresses into the appropriate [IP addresses](https://en.wikipedia.org/wiki/IP_address) of servers with the desired information. A subdomain can be added in front of the main domain. For example, in `lib.uidaho.edu` > `lib` is a subdomain of `uidaho`, which is a subdomain of the top-level domain `edu`. Occasionally, you may see a port number at the end of the domain which refer to specific communication endpoints that the server is listening on. For the web the standard ports are `:80` (http) and `:443` (https).
- **Path and filename:** these can be imagined like folders and files on the server (and actually are in static web sites). For example, `/about/index.html`, is the index file in the "about" folder. If no filename is given, by default the server provides the file named `index`.
- **Query string:** is added to the end of an URL following a `?` and is given in key value pairs. Multiple pairs can be separated by `&`. The characters must be URL encoded / escaped, since some characters such as space are not allowed in URLs. The queries are processed by the server or javascript, so what exactly they do depends on the page. For example, `/index.php?title=Query_string&action=edit` might return a wiki article in edit mode.
- **Anchor:** are added to the end of a URL following a `#`. They traditionally correspond to specific `id` on an html page, but are often used by javascript to add other functionality. For example, `/index.html#Chapter1` might jump to a chapter heading in the web page.
