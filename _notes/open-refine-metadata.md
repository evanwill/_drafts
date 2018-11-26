---
title: OpenRefine for Metadata
layout: post
tags: [openrefine, library]
date: 2018-11-26
---

Outline:

- Import metadata:
    - character encoding
    - import options (separator, batches)
- Explore metadata:
    - facets (from column menu)
    - text filter (from column menu)
- Clean up metadata:
    - editing facets / cells (hover on value)
    - trim whitespace (from column menu)
    - Star / Flag, and facet (all column menu)
    - remove rows (all column menu)
    - reorder columns (all column menu)
    - split into multiple columns (from column menu)
- Clean up multi-valued cells (e.g. Subjects):
    - split multi-valued cells (from column menu)
    - trim (from column menu)
    - cluster (from column menu)
    - join multi-valued cells (from column menu)
- Transform using GREL:
    - add text, `value + " something new"`
    - find & replace, `value.replace("old","new")`
    - get values from other cells, `cells['column_name'].value`
    - dates: [GREL dates](https://github.com/OpenRefine/OpenRefine/wiki/GREL-Date-Functions), `value.toDate().toString('yyyy-MM-dd')`
- Export metadata:
    - CSV export
    - templating

Reference:

- [GREL](https://github.com/OpenRefine/OpenRefine/wiki/General-Refine-Expression-Language)
- [Clean Your Data](https://evanwill.github.io/clean-your-data/) workshop
- [Fetching and Parsing Data from the Web with OpenRefine](https://programminghistorian.org/en/lessons/fetch-and-parse-data-with-openrefine) tutorial
- [Handy OpenRefine Functions to Remember](https://evanwill.github.io/_drafts/notes/open-refine-tips.html)
