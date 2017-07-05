---
title: Epic Episode
layout: post
tags: [dh,js,poem]
date: 2017-07-05
---

<div id="epic"></div>
<br>
<button id="new" class="buttons">new episode</button>

> Epic Episode remixes Samuel Butler's translations of the Iliad and Odyssey.

<script src="{{ site.url }}/js/butler-epics.txt"></script>
<script>
    var poem = document.getElementById("epic");

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

    function randomInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }    
    /*
    // version 1
    var lines = text.split(/[.!?;]/);
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
    */
    
    /*
    // version 2
    var lines = text.split(/[.!?;]/);
    function comaSort(x) {
        if ( x.includes(",") ) { 
            clines.push(x); 
        } else { 
            nclines.push(x); 
        }
    }    
    function comaSplit(x) {
        var parts = x.split(",");
        ends.push(parts.pop());
        fronts.push(parts[0]);
        parts.slice(1).forEach(function(y) { middles.push(y); });
    }
    var clines = [];
    var nclines = [];
    var fronts = [];
    var middles = [];
    var ends = [];
    lines.forEach(comaSort);
    clines.forEach(comaSplit);
    */    
    /*
    function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); }function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
    */
    /*
    // version 3
    var lines = text.split(/[.!?;,]/);
    function makeEpic(array) {
        var i;
        var epicLength = randomInterval(4,10);
        var epicEpisode = [];
        shuffle(array);
        while (poem.hasChildNodes()) {
            poem.removeChild(poem.lastChild);
        }
        for (i = 0; i < epicLength; i++) {
            var line = [];
            var lineLength = randomInterval(1,5);
            for (l = 0; l < lineLength; l++) {
                line.push(array.pop());
            }
            epicEpisode.push( line.join(", ") + "." );
        }
        poem.innerHTML = epicEpisode.join("<br>");
    } 
    makeEpic(lines);
    */
    var lines = text.split(/[.!?]/);
    var fronts = [];
    var ends = [];
    function typeSort(x) {
        var parts = x.split(/[,;]/);
        fronts.push(parts[0]);
        parts.slice(1).forEach(function(y) { ends.push(y); });
    }
    lines.forEach(typeSort);
    shuffle(fronts);
    shuffle(ends);

    function makeEpic() {
        var i;
        var chapter = randomInterval(1,fronts.length/5);
        var epicLength = randomInterval(3,10);
        var epicEpisode = [];
        while (poem.hasChildNodes()) {
            poem.removeChild(poem.lastChild);
        }
        for (i = 0; i < epicLength; i++) {
            var line = [];
            var lineLength = randomInterval(0,5);
            line.push(fronts.pop());
            for (l = 0; l < lineLength; l++) {
                line.push(ends.pop());
            }
            epicEpisode.push( line.join(", ") + "." );
        }
        poem.innerHTML = "<h2>Chapter " + chapter + "</h2> <p>" + epicEpisode.join("<br>") + "</p>";
    }
    
    makeEpic();
    document.getElementById("new").onclick = function () { makeEpic(); };
</script>
    