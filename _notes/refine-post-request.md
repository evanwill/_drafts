---
title: OpenRefine POST request with Jython
layout: post
tags: [refine, python]
date: 2017-04-10
---

It is easy to fetch links with [OpenRefine](http://openrefine.org/) using the *Add column by fetching urls* transformation. 
However, many APIs use HTTP POST to send information to the server for processing. 
Refine's fetch can only HTTP GET.

To make a POST request from Refine you can use [Jython](http://www.jython.org/) in the expression window instead of GREL. 
Jython is included with Refine as a `.jar` file in the `openrefine/webapp/jython/` directory.
The current version is Jython 2.7 based on Python 2.7.

Jython in the Refine expression window requires a `return` statement to fill the new cells in the transformation. 
For example, the standard GREL `value` would be `return value` in Jython. 
The basic GREL variables use brackets instead of periods in Jython, for example GREL `cells.column_2.value` would be Jython `cells['column_2']['value']`.

To create a POST request use the standard libraries [urllib2](http://www.jython.org/docs/library/urllib2.html) and urllib. 
First, get your data into the correct format using `urllib.urlencode()`.
Then, construct a request with `urllib2.Request(url[, data][, headers])` and open it with `urllib2.urlopen(req)`.
Use `read()` to convert the object to usable data.
If the `data` parameter is used in your request it will be a POST. 

A basic GET request for a list of URLs in a column would be:

```
import urllib2
f = urllib2.urlopen(value)
return f.read()
```

To do a POST, construct the request first. 
For example, to get the sentiment of a line of text in each cell in a column: 

```
import urllib2, urllib
url = 'http://text-processing.com/api/sentiment/'
data = urllib.urlencode({'text': value})
req = urllib2.Request(url,data)
post = urllib2.urlopen(req)
return post.read()
```

In most cases urlencode is not necessary, and in the tiny Refine expression window it is more pragmatic to write it in a compressed form:

```
import urllib2
url = 'http://text-processing.com/api/sentiment/'
return urllib2.urlopen(url,"text="+value).read()
```

If the API returns errors, try using GREL trim whitespace, GREL `escape()` / `unescape()`, or Jython `encode("utf-8")`
And write a script that has error handling, like:

```
import urllib2, urllib
url = "http://text-processing.com/api/sentiment/"
data = urllib.urlencode({"text": value.encode("utf-8")})
req = urllib2.Request(url,data)
try:
    post = urllib2.urlopen(req)
except urllib2.URLError as e:
    if hasattr(e, "reason"):
        return "Failed: ", e.reason
    elif hasattr(e, "code"):
        return "Error code: ", e.code
else:
    response = post.read()
    return response
```

The official [Refine Jython documentation](https://github.com/OpenRefine/OpenRefine/wiki/Jython) is pretty sparse.
Refine Jython includes the standard libraries, but others can be adding using a [work around](https://github.com/OpenRefine/OpenRefine/wiki/Extending-Jython-with-pypi-modules).
