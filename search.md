---
layout: default
title: search
---

<script src="https://unpkg.com/lunr/lunr.js"></script>

<script>
// create docs
var documents = [
    {
        "id": "https://my.blog/post",
        "title": "Lunr",
        "tags": "ddd",
        "body": "Like Solr, but much smaller, and not as bright."
    }, {
        "name": "React",
        "text": "A JavaScript library for building user interfaces."
    }, {
        "name": "Lodash",
        "text": "A modern JavaScript utility library delivering modularity, performance & extras."
    }
]
// create index
var idx = lunr(function () {
  this.ref('name')
  this.field('text')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

</script>