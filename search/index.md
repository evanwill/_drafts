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

<ul id="search-results"></ul>

<script>
// create docs
var documents = { 
    {% for post in site.notes %}
    "{{ post.slug }}": 
    { 
      "id": "{{ post.slug }}",
      "url": "{{ post.url | absolute_url | xml_escape }}",
      "title": "{{ post.title | xml_escape }}",
      "text": {{ post.content | strip_html | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
};
// create index
var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('text')
  for (var key in documents) {
    this.add(documents[key])
  }
});
// do search
function displayResults(results) {
  var searchResults = document.getElementById('search-results');
  if (results.length) { // Are there any results?
    var appendString = '';
    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var link = documents[results[i].ref].url; //results[i].ref;
      var title = documents[results[i].ref].title;
      var preview = documents[results[i].ref].text.substring(0,150);
      appendString += '<li><a href="' + link + '">' + title + '</a><br>' + preview + '... </li>';
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