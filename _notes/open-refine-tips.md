---
title: Handy OpenRefine Functions to Remember
layout: post
tags: [openrefine, data, tools]
date: 2017-06-01
handy: true
---

This page lists some handy functions to use for data wrangling tasks.

## Combining columns

Combining columns can be tricky because merging a blank cell cell with another value results in an error. 
To avoid issues, first facet by blank and combine only non-empty cells with a transform like: `value + " " + cells["col_2"].value`

## Cross function

Use `cross` to retrieve columns from other OpenRefine projects based on a common column. 

1. Open the two projects you want to join
2. Identify the common column to be used as a key. Ensure that it is a unique identifier, or cross won't work how you expect. You can create a new unique column on both projects by adding an index number an existing common column (on common column > Add column based on this column... > `value + "-" + row.index` ).
3. On the project where you want to import values, go to the key column you identified, and Add column based on this column...
4. In the expression window, put: `cell.cross("name_of_other_project", "name_of_key_column").cells["name_of_column_you_want_to_import"].value[0]`

You should have a new column that has the correct values from the other project.

## String + Array functions

A powerful way to interact with multi-valued text fields (values with a separator in them, e.g. `dogs; muffins; cats; idaho`) or large strings (such as the text of poems or web scrape) is to turn them into arrays, then use array functions to manipulate. 
You might be surprized by how useful it is to break text values into arrays!

Create an array from any string by using the `split(value, expression)` function. 
The expression is the character or pattern you want to split the string up on, often a new line or a deliminator in a list. 

For example, split on semi-colon `value.split(";")` (a classic multi-valued cell list), split on spaces `value.split(" ")` (basic word array), or split on a new line `value.split(/\n/)` (lines of a text).

Once the cell is an array, it can be rearranged and sliced in many ways with [array functions](https://openrefine.org/docs/manual/grelfunctions#array-functions).
Finally, reconstitute the string by using `join()` on the array (usually using the same deliminator that you used to split!). 

For example, if we had a column with lists of tags like "dogs;cats;muffins" as cell values, we could put each cell in alphabetic order using:

`value.split(";").sort().join(";")`

Remove the first item in the list:

`value.split(";").slice(1).join(";")`

Remove the last item in the list:

`value.split(";").slice(0,-1).join(";")`

Remove duplicate values in the list:

`value.split(";").uniques().join(";")`

Or trim the white space for each value:

`forEach(value.split(";"),e,e.trim()).join(";")`

If you had lines of a poem or text as a cell value you could do the same types of operations.
For example, remove the first line of a poem:

`value.split(/\n/).slice(1).join("\n")`

Remove the last two lines:

`value.split(/\n/).slice(0,-2).join("\n")`

Or trim the white space around each line:

`forEach(value.split(/\n/),e,e.trim()).join("\n")`

## De-dupe Rows

Deduplicate rows using the values in a key column: 

- On the key column to deduplicate, click "Sort", and choose sort method.
- Next to the show rows selection above the table, click on the "Sort" menu (this menu only shows up once you add a Sort). Select "Reorder row permanently" (if you do not do this step, sort is just visual and did not transform the data).
- On the key column, select "Edit cells" > "Blank down".
- On the key column, facet on blank, select true (the blank values), and remove all matching rows.

## Compare two columns

Create new "equal" column using expression:
`if(cells["column1"].value == cells["column2"].value, "True", "False")`

## Add leading zeros 

If the column has numbers that should have leading zeros, add the number of zeros it should have in total digits, sliced by value length. 
For example, if you had "12345", "123456", "1234567", and wanted them all to be 8 digits with leading zeros, transform using: 

`"00000000"[0,8-length(value)] + value`

You can also create a new row identifier with leading zeros using the `row.index` variable. 
For example,

`"row_id_" + "0000"[0,4-length(row.index +1)] + (row.index +1)`

## Remove leading or trailing character

In regex `^` is start of string and `$` means end of string, which can be used in a `replace` statement.

Remove "T" from front of string:

`value.replace(/^T/,"")`

Remove trailing period, "." at end of string:
 
`value.replace(/\.$/,"")`

(note the "." needs to be escaped with `\` since it has a meaning in regex)

## Facet by facet count

Sometimes you have a column with many repeating values, that you might explore using a text facet. 
In the text facet pane you can sort by facet count, but you would have to manually select each if you wanted a subset based on the facet count.
To select a group of rows based on the facet count of a value in a column: 

First, if you just need all the values with > 1 count, you can use the built in Facet > Customized facets > Duplicates facet. 
This returns "true" for rows with > 1 count, false if the value is unique.

Second, if you need a subset based on the count, create a new column using the `facetCount` function.
On the column you want a count for, Edit column > Add column based on this column, and use:

`value.facetCount("value","name_of_the_column")`

The result will be a number (same as the "count" given in facet pane), which you can then filter with a numeric facet.
Note in this context facetCount seems a bit non-intuitive since you have provide "value" and the name of the column again--facetCount is set up with flexibility to do some more complicated operations by adding an expression to the value or matching values in a different column (but weirdly requires quotes around the expression which isn't typical of other functions).

The "name_of_column" could be a different column than the one the cell is in. 
If you are using the current column, you can use the builtin variable `columnName` instead, like `value.facetCount("value",columnName)`.

If you want to add transformations to the value first, apply the same to the value feeding in as the first argument.

`value.fingerprint().facetCount("value.fingerprint()",columnName)`

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

## Parsing CONTENTdm TSV export 

CONTENTdm and some other platforms export metadata in TSV format which often end up with parsing errors on import. 
When starting a project:

- make sure you select the correct encoding (for CONTENTdm = "UTF-8")
- uncheck the option `Use character " to enclose cells containing column separators`
- parsing issues are often not immediately apparent, so carefully check the number of records you expect and view the last rows of your data 

## Local server to input data from files

A goofy approach to get a bunch of text data into a spreadsheet from individual files is to serve the directory of files up on a local server then grab them using Refine's fetch.
This avoids many limitations of working with conventional spreadsheets, and lets you parse the files into data using Refine methods such as parseHtml, split columns, or split multivalued cells.

For example, imagine I have a folder of hundreds of HTML files that I want to parse into data:

- create a list of the files on commandline with `ls > list.txt`
- create Refine project using `list.txt` so each row will equal one of the files
- [start a local server]({{ '/notes/web-server.html' | relative_url }}) in the folder of files and note where it is served (e.g. `localhost:8080`)
- Add column based on the filenames with the local url, e.g. `"http://localhost:8080/" + value`
- Add column by fetching urls

Now you have a spreadsheet with a giant amount of text data!

## Common HTML parsing

Combining "Create new column by fetching from URL" and the `parseHtml()` GREL function is a powerful and flexible method to harvest data from the web or scrape sites. 
Always remember to use `.toString()` or `.join("|")` at the end of your parsing statements or you will end up with empty cells even through your html parsing is correct!

I often use these GREL statements to extract stuff out of HTML:

- get all image src out: `forEach(value.parseHtml().select('img'),i,i.htmlAttr('src')).join("; ")`
- get all links out: `forEach(value.parseHtml().select('a'),i,i.htmlAttr('href')).join("; ")`

## Info on using more memory

<https://docs.openrefine.org/manual/installing/#increasing-memory-allocation>

## Linux issue with Java version not found (V<3.0)

If you have an up-to-date version of Java installed on linux (`openjdk-11-jre`), starting Refine V<3.0 with `./refine` will throw an error saying you don't have Java installed or need to set `$JAVA_HOME`.
The message is false (no matter how much you mess with `$JAVA_HOME` it won't work!), there is a bug in `./refine` where it checks for older versions of Java as "up-to-date" and was not future proofed. 

To fix the bug, you can try a newer version of Refine (it is fixed in 3.0+), or just grab the updated `./refine` file and manually replace your faulty one: 

- in your openrefine directory (e.g. `openrefine-2.8/`), delete `refine`.
- Go to this [updated version](https://github.com/OpenRefine/OpenRefine/blob/5f9777ffae1568165da8df006e5d7465d91f4b78/refine), click "Raw", save as "refine" in the openrefine directory.
- Done!
