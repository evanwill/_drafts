---
# create lunr store 
---
var store = [ 
{% for post in site.notes %}{ "url": {{ post.url | relative_url | jsonify }}, "title": {{ post.title | jsonify }}, "text": {{ post.content | strip_html | normalize_whitespace | jsonify }} }{% unless forloop.last %},{% endunless %}
{% endfor %}
];