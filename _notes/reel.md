---
title: Brand New Reel!
layout: post
tags: [dh, js]
date: 2017-08-24
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet" href="{{ site.url }}/css/abcmusic.css">
<script src="{{ site.url }}/js/abcjs_editor_midi_3.1.2-min.js" type="text/javascript"></script>

<div id="playground">
    <div id="notation" class="abc-rendered"></div>
    <div id="play"></div>
    <div id="warnings" class="abc-warnings"></div>
    <textarea name="abc" id="abc-text" class="abc-text" rows="14"></textarea>
    <button type="button" class="buttons" onclick="loadAbc();">Brand New Reel!</button>
    <button type="button" class="buttons" onclick="showEdit();">Edit</button>
    <!--<button type="button" onclick="printAbc();">Print</button>-->
    <button type="button" class="buttons" id="ref" onclick="showRef();">ABC Ref</button>
    <button type="button" class="buttons" id="midi-download"></button>
    <br>
    <div id="quickref">
        <p><a href="https://en.wikipedia.org/wiki/ABC_notation" target="_blank">ABC notation</a> is a shorthand standard for representing music, commonly used to record and share traditional folk tunes. Each tune has a header and some notes.</p>
        <p>Common header elements:</p>
        <ul>
        <li><code class="highlighter-rouge">X:</code> index number, required in some software [e.g. <code class="highlighter-rouge">X:1</code>]</li>
        <li><code class="highlighter-rouge">T:</code> title [e.g <code class="highlighter-rouge">T: Happy Birthday</code>]</li>
        <li><code class="highlighter-rouge">M:</code> meter, required [e.g. <code class="highlighter-rouge">M:C</code>, <code class="highlighter-rouge">M:4/4</code>, <code class="highlighter-rouge">M:3/4</code>]</li>
        <li><code class="highlighter-rouge">L:</code> default note length [e.g. <code class="highlighter-rouge">L:1/2</code>, <code class="highlighter-rouge">L:1/4</code>, <code class="highlighter-rouge">L:1/8</code>]</li>
        <li><code class="highlighter-rouge">Q:</code> tempo [e.g. <code class="highlighter-rouge">Q:120</code>, <code class="highlighter-rouge">Q:1/8=120</code>, <code class="highlighter-rouge">Q:1/4=60</code>]</li>
        <li><code class="highlighter-rouge">K:</code> key signature, required [e.g. <code class="highlighter-rouge">K:G</code>, <code class="highlighter-rouge">K:Gm</code>]</li>
        <li><code class="highlighter-rouge">V:</code> voice, can set the clef [e.g. <code class="highlighter-rouge">V:1 name=Violin</code>, <code class="highlighter-rouge">V:2 name=Cello clef=bass</code>]</li>
        </ul>
        <p>Common notation elements:</p>
        <ul>
        <li>bottom octave <code class="highlighter-rouge">CDEFGAB</code>, top octave <code class="highlighter-rouge">cdefgab</code> [e.g. <code class="highlighter-rouge">C</code> = middle C]</li>
        <li><code class="highlighter-rouge">z</code> rest</li>
        <li><code class="highlighter-rouge">,</code> down an octave, <code class="highlighter-rouge">'</code> up an octave [e.g. <code class="highlighter-rouge">C,</code> or <code class="highlighter-rouge">c'</code>]</li>
        <li><code class="highlighter-rouge">^</code> sharps, <code class="highlighter-rouge">_</code> flats [e.g. <code class="highlighter-rouge">^c</code> or <code class="highlighter-rouge">_c</code>]</li>
        <li>make note longer by multiplying number, or shorter by a <code class="highlighter-rouge">/</code> dividing number [e.g. <code class="highlighter-rouge">a2</code> or <code class="highlighter-rouge">a/2</code>]</li>
        <li>notes separated by spaces will not have beams, those together will [e.g. <code class="highlighter-rouge">a b c</code> versus <code class="highlighter-rouge">abc</code>]</li>
        <li><code class="highlighter-rouge">|</code> barline, <code class="highlighter-rouge">|]</code> double bar, <code class="highlighter-rouge">|:</code> repeats <code class="highlighter-rouge">:|</code></li>
        </ul>
    </div>
</div>

<p>Brand New Reel remixes the titles and tunes of about 460 traditional reels. The music data is derived from the <a href="http://abc.sourceforge.net/NMD/" target="_blank">ABC version of the Nottingham Music Database</a>. Because <a href="https://en.wikipedia.org/wiki/ABC_notation" target="_blank">ABC notation</a> is a simple plain text format, it is ideal for sharing music on the web--and for manipulating with code. The editor is created using <a href="https://github.com/paulrosen/abcjs" >abcjs</a>, which renders the ABC in musical notation and generates MIDI sound playback (full functionality only on Chromium / Chrome browser). Click the Edit button to show the ABC notation, and try modifying the Brand New Reel!</p>

<!--<div id="print-abc"></div>-->

<script src="{{ site.url }}/js/reels-data.js"></script>
<script type="text/javascript">
    /* set soundfonts location */
    window.ABCJS.midi.soundfontUrl = "{{ site.url }}/assets/soundfont/";
    var reel;
    var abc = [];
    var notesArray = [];
    var titleArray = [];
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
    function mixData() {
        notesArray = notes.split("|");
        titleArray = titles.split(" ");
        shuffle(notesArray);
        shuffle(titleArray);
    }
    function showRef() {
        document.getElementById("quickref").style.display = (document.getElementById("quickref").style.display === "block") ? "none" : "block";
    }
    function showEdit() {
        document.getElementById("abc-text").style.display = (document.getElementById("abc-text").style.display === "block") ? "none" : "block";
    }    
    function createAbc() {
        var i;
        abc = ["X: 1"];
        /* shuffle data */
        if (notesArray.length == 0 || titleArray.length == 0) {
            mixData();
        }
        /* create title */
        var t = Math.floor(Math.random() * 5) + 1;
        var title = ["T:"];
        for (i = 0; i < t; i++) {
            title.push(titleArray.pop());
        }
        abc.push(title.join(" "));
        /* create source */
        abc.push("S: Brand New Reel, https://evanwill.github.io/_drafts/notes/reel.html")
        /* create meter */
        var m = Math.floor(Math.random() * meter.length);
        abc.push(meter[m]);
        /* create length */
        abc.push(leng);
        /* create key */
        var k = Math.floor(Math.random() * key.length);
        abc.push(key[k]);
        /* create notes */
        var bars = (Math.floor(Math.random() * 2) + 4);
        var z;
        for (i=0; i < 4; i++) {
            var tune = [];
            for (z = 0; z < bars; z++) {
                tune.push(notesArray.pop());
            }
            tune.push("");
            abc.push(tune.join("|"));
        }
        abc[abc.length-1] = abc[abc.length-1] + "|";
        reel = abc.join("\n");
    }
    function initEditor() {
        new ABCJS.Editor("abc-text", { paper_id: "notation",
            generate_midi: true,
            midi_id:"play",
            midi_download_id: "midi-download",
            generate_warnings: true,
            warnings_id:"warnings",
            midi_options: {
            generateDownload: true
            }
        });
    }
    /*
    function printAbc() {
        var currentAbc = document.getElementById('abc-text').value;
        new ABCJS.renderAbc("print-abc", currentAbc);
        document.getElementById("no-print").style.display = "none";
        window.print();
        document.getElementById("no-print").style.display = "block";
        document.getElementById("print-abc").innerHTML = '';
    } */
    function loadAbc() {
        createAbc();
        document.getElementById("abc-text").value = reel;
        initEditor();
    }
    window.addEventListener("load", loadAbc, false);
</script>
