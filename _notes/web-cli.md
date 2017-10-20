---
title: Web intro
layout: post
tags: [web, tips]
date: 2017-05-20
---

Idealistic Canadian video: [How Does the Internet Work ?](https://youtu.be/i5oe63pOhLI)

A network is two or more computers connected.
The internet is network of networks.

What's in a URL:
- https://example.com/about?key=value#anchor
- protocol + domain name (or IP, optional port :80) + path + query / parameters + fragment/anchor

Demo IP addresses: 
- `ping www.google.com` 
- `nslookup www.lib.uidaho.edu` 
- traceroute / tracert / tracepath `tracepath www.google.com`

Check content of certificate file:
- `openssl x509 -in libcal_uidaho_edu_cert.cer -noout -text`
