---
title: Epic Episode
layout: post
tags: [dh,js,poem]
date: 2017-06-23
---

<div id="epic"></div>
<br>
<button id="new" class="buttons">new episode</button>

> Epic Episode remixes Samuel Butler's translation of the Iliad and Odyssey.

<script src="{{ site.url }}/js/butler-epics.txt"></script>
<script>
    var poem = document.getElementById("epic");
    var lines = text.split(/[.!?;]/);
    /* var halves = [];
    lines.forEach(function(line) {
        var words = line.split(" ");
        var len = Math.round(words.length/2);
        var first = words.slice(0,len).join(" ");
        var last = words.slice(len).join(" ");
        halves.push(first,last);
    }); */

    /* Fisher-Yates shuffle https://bost.ocks.org/mike/shuffle/ */
    function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
    }
    function makeEpic(array) {
        var i;
        var line;
        shuffle(array);
        while (poem.hasChildNodes()) {
            poem.removeChild(poem.lastChild);
        }
        for (i = 0; i < 5; i++) {
            line = array[i] + ".<br>";
            poem.innerHTML += line;
        }
    }
    makeEpic(lines);
    document.getElementById("new").onclick = function () { makeEpic(lines); };
</script>
    