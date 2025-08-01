---
title: Tea Data
layout: post
tags: [food, data]
date: 2020-03-09
---

This study seeks to find the best flavor black tea at the best value price point for bulk drinking at work in the library.

## Methodology

Two library employees with extensive experience in tea drinking (i.e. drink at least one pot of tea per day) took part in a tasting session featuring seven widely available varieties of black tea.
Each tea was prepared according to the manufacturer instructions printed on the box.
A standard measure of milk was added to each prepared tea after the brew time was complete.

Each tester sampled the tea taking several moments to savor the flavors. 
Testers general impressions were discussed and recorded, as well as an overall rating out of five possible points.
The highest rating awarded by individual testers was four (Red Rose and Taylors Yorkshire), and the lowest was one (Tazo Awake).

Prices of tea brands vary significantly at each grocery chain.
To find a standardized price for comparisons, we chose to use the price at Walmart which carried all brands tested.

## Best Value

In attempt to evaluate the best overall value, we used the equation:

`Mean Rating / Price per Tea Bag`

### Base Value Ratings

{% assign teaValue = site.data.tea-data | sort: "value" | reverse %}
| Tea | Value Rating |
| --- | --- |
{% for t in teaValue %}| {{ t.tea_brand }} | {{ t.value }} |
{% endfor %}

This surfaced two surprising results:

- Best value was the rather unassuming *Red Rose Tea*, which tastes pretty good yet is available very cheap.
- Worst value was the popular *Tazo Awake*, very often served at conferences and hotels, which tastes terrible yet is very expensive.

<!-- (tast weight * rating)/(price weight * price)-->

## Complete Tea Data

<link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" type="text/css">
<table id="teaTable">
</table>
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" type="text/javascript"></script>
<script>
    const data = {
      headings: [
        'Tea',
        '$ Price / Bag',
        'Mean Rating',
        'Comments'
      ],
      data: [
        {% for t in site.data.tea-data %}
        [
          '{{ t.tea_brand }}',
          {{ t.walmart_price | divided_by: t.bags_per_box | round: 3 }},
          {{ t.tester1 | plus: t.tester2 | divided_by: 2 | round: 3 }},
          '{{ t.comments }}'
        ]{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ]
    };
    const teaTable = document.querySelector("#teaTable");
    const config = {
      data,
      columns: [{ select: 2, sort: 'desc' }]
    };
    const dt = new simpleDatatables.DataTable(teaTable, config);
</script>

<small>table powered by <a href="https://github.com/fiduswriter/Simple-DataTables">simple-datatables</a></small>
