---
title: Handy OpenRefine Functions to Remember
layout: post
tags: [openrefine, data, tools]
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

## String + Array functions

A powerful way to interact with large strings (such as the text of poems or web scrape) is to turn them into arrays, then use array functions to manipulate. 
Create an array from any string by using the `split(value, expression)` function. The expression is the character or pattern you want to split the string up on, often a new line or a deliminator in a list. For example:

`split(value, /\n/)`

Once the cell is an array, it can be rearranged and sliced in many ways with [array functions]((https://github.com/OpenRefine/OpenRefine/wiki/GREL-Array-Functions). Next, reconstitute the string by using `join()` on the array. For example, if we had a list of tags like "dogs; cats; muffins" we could put them in alphabetic order:

`sort(split(value, "; ")).join("; ")`

Remove the first line of a poem:

`slice(split(value, /\n/),1).join("\n")`

Remove the last two lines:

`slice(split(value, /\n/),-2).join("\n")`

Or trim the white space for each value:

`forEach(split(value, /\n/),e,e.trim()).join("\n")`

