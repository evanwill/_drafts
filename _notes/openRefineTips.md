---
title: Handy OpenRefine Functions to Remember
layout: post
tags: OpenRefine, data, tools
date: 2016-06-01
---

## OpenRefine Cross function

Use `cross` to retrieve columns from other OpenRefine projects based on a common column. 

1. Open the two projects you want to join
2. Identify the common column to be used as a key. Ensure that it is a unique identifier, or cross won't work how you expect. You can create a new unique column on both projects by adding an index number an existing common column (on common column > Add column based on this column... > `value + "-" + row.index` ).
3. On the project where you want to import values, go to the key column you identified, and Add column based on this column...
4. In the expression window, put: `cell.cross("name_of_other_project", "name_of_key_column").cells["name_of_column_you_want_to_import"].value[0]`

You should have a new column that has the correct values from the other project.

## Parse JSON

It is common to get JSON data when fetching from APIs using Refine. It's easy to grab specific dictionary values out of JSON cells using the built in JSON parse function. From the column with JSON, create a new column and transform with `value.parseJson().get('key')`, where 'key' is the dictionary key you want to extract. 

For example, if the cell contained
`{ "type" : "dog", "color" : "brown", "size" : "large" }`, 
and your transform was`value.parseJson().get('color')`, 
you would get the value "brown" in your new column. (*note*: if your key does not have spaces, you can use the shorter version like `value.parseJson().color`)

To get multiple values from the same key, combine with `forEach()`.
For example, to extract all the keywords from a cell with the JSON
`{'language': 'en', 'keywords': [{'text': 'dogs', 'relevance': 0.979292}, {'text': 'muffins', 'relevance': 0.977987}, {'text': 'cats', 'relevance': 0.969001}, {'text': 'idaho', 'relevance': 0.967973}] }`,
transform with `forEach(value.parseJson().keywords,v,v.text).join("; ")`, resulting in the new cell value of `dogs; muffins; cats; idaho`.

