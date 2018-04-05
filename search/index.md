---
title: Site Search
layout: page
---

Basic search of *_drafts* notes full text using [Lunr.js](https://lunrjs.com/).
*May take a second to load!* 
(p.s. or you can try [google cse]({{ "/search/google.html" | absolute_url }}))

<script src="{{ "/js/lunr.js" | absolute_url }}"></script>

<input class="search" type="text" size="15" id="lunr-search" placeholder="Search..." aria-label="search">
<input class="buttons" type="button" onclick="lunr_search();" value=" Search ">
<p id="count"></p>
<ul id="search-results"></ul>

> Tips: search fields `title:foo` or `text:foo`, or use wildcards `foo*`.

<script>
// create docs
var notes = [ 
    {% for post in site.notes %}
    {
      "url": {{ post.url | absolute_url | jsonify }},
      "title": {{ post.title | jsonify }},
      "text": {{ post.content | strip_html | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
];
// create index
var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('text')
  for (var item in notes) {
    this.add({
      title: notes[item].title,
      text: notes[item].text,
      id: item
    })
  }
});
// do search
function displayResults(results) {
  var countResults = document.getElementById('count');
  countResults.innerHTML = results.length + ' Result(s) found</p>';
  var searchResults = document.getElementById('search-results');
  if (results.length) {
    var appendString = '';
    for (var item in results) {
      var ref = results[item].ref;
      var searchItem = '<li><a href="' + notes[ref].url + '">' + notes[ref].title + '</a><br>' + notes[ref].text.substring(0,150) + '... </li>';
      appendString += searchItem;
    }
    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}
function lunr_search() {
    var query = document.getElementById("lunr-search").value;
    var results = idx.search(query);
    displayResults(results);
}
</script>