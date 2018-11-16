---
title: Dates in Excel
layout: post
tags: [data, windows]
date: 2017-09-05
---

Excel will mess up your dates.
Assuming you want to use your data outside of Excel, it is best to avoid allowing it to convert them to it's built in format, so import as "text" and set the column type to "text" to avoid issues. 

Excel uses the 1900 date system (sometimes called numeric dates, serial dates, or 1900 system). 
It simply counts the number of days since 1900. 
Thus, 1900-01-01 = 1, 1900-01-02 = 2, and so on.
This allows dates to be more easily used in calculations.
However, MS has several historical bugs built into Excel which they have never fixed for compatibility reasons:

- Some versions of Excel on Mac [used 1904 date system](https://support.microsoft.com/en-us/help/180162/xl-the-1900-date-system-vs--the-1904-date-system)
- Excel [assumes 1900 is a leap year](https://support.microsoft.com/en-us/help/214326/excel-incorrectly-assumes-that-the-year-1900-is-a-leap-year-1900-is-a-leap-year), which is false.

So sometimes you will see plain text data, such as a CSV, exported from Excel that has dates that look like `42291` and you need to convert that serial date back into a real one. 
Unfortunately, unless you know what version of Excel it was exported from, you can not be sure if the serial date number is off by one day or potentially more (1904 system).
But you can do you best to convert it back using OpenRefine GREL like: 

`"1900-01-01".toDate().inc(value.toNumber()-2,'day').toString('yyyy-MM-dd')`

Start at Excel's starting point, "1900-01-01" and convert to a date.
Then use `inc` function to add the number of days in Excel's serial date, but add -1 day because our date "1900-01-01" is actually 1 (i.e. we are not starting at zero), and then -1 again for the 1900 leap year bug.
I add the cell value to the express with `value.toNumber()` if the column is currently a text column, but if it was already a number column, you could just use `value`.
Finally, convert the date format into a preferred text format using `toString()`.

Ugly.
