---
title: Epic Tweets
layout: post
tags: [dh,js,poem]
date: 2017-08-02
---
<style>
#tweet-box { border: 1px solid #e6ecf0; padding: 5px; } #profile-img { border-radius: 100%; vertical-align: middle; float: left; } #tweet { margin-left: 60px; } #name { color: #14171a; font-weight: bold; } #handle { color: #657786; }
</style>
<div id="tweet-box">
<img id="profile-img" src="{{ "/assets/Bust_Homer_BM.jpg" | absolute_url }}" >
<div id="tweet">
<span id="name">Homer </span> <span id="handle">@realEpicAuthor</span>
<div id="epic" ></div>
</div>
</div>
<br>
<button id="new" class="buttons">new epic tweet</button>

> Epic Tweets remixes Samuel Butler's translations of the Iliad and Odyssey into 140 character outbursts.

<script src="{{ "/js/butler-epics.js" | absolute_url }}"></script>
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

    function makeTweet() {
        var i;
        var epicTweet = [];
        var next = [];
        while (poem.hasChildNodes()) {
            poem.removeChild(poem.lastChild);
        }
        epicTweet.push(fronts.pop());
        for (i = 0; i < 5; i++) {
            var line = ends.pop();
            if ( epicTweet.join(" ").length + line.length < 140) {
                epicTweet.push(line);
            }
        }
        poem.innerHTML = epicTweet.join("<br>").toUpperCase() + "!</p>";
    }
    
    makeTweet();
    document.getElementById("new").onclick = function () { makeTweet(); };
</script>