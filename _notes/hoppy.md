---
title: Hoppy Alternative Drinks
layout: post
tags: [food]
date: 2023-04-08
---

I love IPA beers mainly just for the incredible hop aroma. 
But one downside (sometimes) to IPAs is that they tend to be high in alcohol. 
Sometimes you just want some delicious hops!

This table relates my experiences exploring non-alcoholic hoppy drinks.
I purchase the beverages (no sponsors!), pour them into a pint glass (to get the max aroma), and drink them (to probe their tastiness).
Drinks are rated 1 - 5 on these highly scientific qualities:

- **hoppyness** - overall hop quality and quantity.
- **aroma** - does it smell wonderfully hoppy?
- **body** - does the beverage have mouth-feel and body? 
- **beeriness** - does it taste like or stand in for a beer? This isn't necessary for deliciousness, but sometimes you want a beer-like substance.
- **deliciousness** - just how delicious is it overall *as a hoppy alternative beverage*?

## Hoppy Drink List 

<style>
    .stats { margin-left: 1.5rem; }
    .bordered { border: solid 1px #212529; padding: 0 .45rem; }
    .b-green { border-color: green; }
    .b-red { border-color: red; }
    .b-gold { border-color: orange; }
    .b-blue { border-color: blue; }
</style>
<div id="archiveList" class="archive-list">
  <div class="browse">
    <input class="search" placeholder=" Search" type="text" aria-label="Search beverages">
    <button class="buttons sort" data-sort="title">Name</button>
    <button class="buttons sort" data-sort="brewer">Brewer</button>
    <br>
    <strong>Sort by Rating:</strong>
    <button class="buttons sort b-green" data-sort="hop">Hoppyness</button>
    <button class="buttons sort b-red" data-sort="aroma">Aroma</button>
    <button class="buttons sort b-gold" data-sort="beer">Beeriness</button>
    <button class="buttons sort b-blue" data-sort="delic">Deliciousness</button>
  </div>
  <div class="listjs">
    {% for b in site.data.hoppy_data %}
    <div class="archive-list-link">
        <span class="title archive-list-link-title">{{ b.name }},</span>
        <span class="brewer">{{ b.brewer }}</span>
        <br>
        <div class="stats">
            <span class="hop bordered b-green">{{ b.hoppyness }}</span>
            <span class="aroma bordered b-red">{{ b.aroma }}</span>
            <span class="beer bordered b-gold">{{ b.beeriness }}</span>
            <span class="delic bordered b-blue">{{ b.deliciousness }}</span>
            <br>
            <div class="descr">{{ b.description }}</div>
        </div>
    </div>
    {% endfor %}
  </div>
</div>
<!-- add list.js http://www.listjs.com/ @javve -->
<script src="{{ '/js/list.min.js' | relative_url }}"></script>
<script>
    // init list
    var options = {
        valueNames: [ 'title', 'brewer', 'hop', 'aroma', 'beer', 'delic' ],
        listClass: 'listjs'
    };
    var userList = new List('archiveList', options);
</script>