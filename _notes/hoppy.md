---
title: Hoppy Alternative Drinks
layout: post
tags: [fun,food]
date: 2023-04-08
---

I love IPA beers mainly just for the incredible hop aroma. 
But one downside (sometimes) to IPAs is that they tend to be high in alcohol. 
Sometimes you just want some delicious hops!

This table relates my experiences exploring non-alcoholic hoppy drinks.
Drinks are rated 1 - 5 on these highly scientific qualities:

- "hoppyness" - overall hop quality
- "aroma" - does it smell wonderfully hoppy?
- "body" - does the beverage have mouth-feel and body? 
- "beeriness" - does it taste like or stand in for a beer? (this isn't necessary for deliciousness, but sometimes you want a beer-like substance)
- "deliciousness" - just how delicious is it overall?

{% assign beers = site.data.hoppy_data %}
{% for b in beers %}
-----

## {{ b.name }} ({{ b.brewer }})

- Hoppyness: {{ b.hoppyness }}
- Aroma: {{ b.aroma }}
- Body: {{ b.body }}
- Beeriness: {{ b.beeriness }}
- Deliciousness: {{ b.deliciousness }}

{{ b.description }}

{% endfor %}
