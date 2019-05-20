---
title: Site Search
layout: page
---

Basic search of *_drafts* notes full text using [Lunr.js](https://lunrjs.com/){:target='_blank'}.
*May take a second to load!* 
(p.s. or you can try [google cse]({{ "/search/google.html" | absolute_url }}))

<input class="search" type="text" size="15" id="lunr-search" placeholder="Search..." aria-label="search">
<input class="buttons" type="button" onclick="lunr_search();" value=" Search ">
<p id="count"></p>
<ul id="search-results"></ul>

> Tips: search fields `title:foo` or `text:foo`, or use wildcards `foo*`.

<script src="{{ '/js/lunr.min.js' | absolute_url }}"></script>
<script src="{{ '/js/lunr-store.js' | absolute_url }}"></script>
<script>
/* initialize lunr index */
var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('text')
  for (var item in store) {
    this.add({
      title: store[item].title,
      text: store[item].text,
      id: item
    })
  }
});
/* search function */
function lunr_search () {
  var resultDiv = document.getElementById('search-results');
  var resultCount = document.getElementById('count');
  var query = document.getElementById('lunr-search').value;
  /* basic search that supports operators */
  var results = idx.search(query); 
  /* display results */
  resultDiv.innerHTML = '';
  resultCount.innerHTML = results.length + ' Result(s) found</p>';
  if (results.length) {
    var appendString = '';
    for (item in results) {
      var ref = results[item].ref;
      var searchItem = '<li><a href="' + store[ref].url + '">' + store[ref].title + '</a><br>' + store[ref].text.substring(0,150) + '... </li>';
      appendString += searchItem;
    }
    resultDiv.innerHTML = appendString;
  } else {
    resultDiv.innerHTML = '<li>No results found</li>';
  }
}
</script>