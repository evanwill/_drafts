---
title: Epic Music!
layout: post
tags: [dh, js]
date: 2017-09-02
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet" href="{{ site.url }}/css/abcmusic.css">
<script src="{{ site.url }}/js/abcjs_editor_midi_3.1.2-min.js" type="text/javascript"></script>

<div id="playground">
    <div id="notation" class="abc-rendered"></div>
    <div id="play"></div>
    <div id="warnings" class="abc-warnings"></div>
    <textarea name="abc" id="abc-text" class="abc-text" rows="14"></textarea>
    <button type="button" class="buttons" onclick="loadAbc();">New Epic Music!</button>
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

<p>Epic Music reads Samuel Butler's translations of the Iliad and Odyssey as if it was <a href="https://en.wikipedia.org/wiki/ABC_notation" target="_blank">ABC notation</a>, a simple plain text music format. The editor is created using <a href="https://github.com/paulrosen/abcjs" >abcjs</a>, which renders the ABC in musical notation and generates MIDI sound playback (full functionality only on Chromium / Chrome browser). Click the Edit button to show the ABC notation, and try modifying the Epic Music!</p>

<!--<div id="print-abc"></div>-->

<script src="{{ site.url }}/js/butler-epics.js"></script>
<script type="text/javascript">
    /* create lines array */
    var lines = text.split(/[.!?]/);
    // abcChar = [ abcdefgz,' ];
    // v 1, remove non-abc char
    // encounter k = key change 'K:a' next valid key
    // encounter m = meter change, M: next letter values 
    // v 2, map alphabet to octaves

    /* set soundfonts location */
    window.ABCJS.midi.soundfontUrl = "{{ site.url }}/assets/soundfont/";
    var reel
    var line;
    var abc = [];
    var notesArray = [];
    var leng = "L: 1/4";
    var key = ["K:A", "K:Am", "K:B", "K:Bb", "K:Bm", "K:C", "K:D", "K:Dm", "K:E", "K:Em", "K:F", "K:G", "K:Gm"];
    var meter = [ "M:2/2", "M:2/4", "M:3/4", "M:4/4", "M:6/8"];
    
    /* UI functions */
    function showRef() {
        document.getElementById("quickref").style.display = (document.getElementById("quickref").style.display === "block") ? "none" : "block";
    }
    function showEdit() {
        document.getElementById("abc-text").style.display = (document.getElementById("abc-text").style.display === "block") ? "none" : "block";
    }

    /* create abc */
    function createAbc() {
        var i;
        abc = ["X: 1"];
        /* shuffle data */
        /* select random interval? */
        var l = Math.floor(Math.random() * lines.length);
        line = lines[l];
        /* create title */
        var title = "T: Epic Music " + l.toString();
        abc.push(title);
        /* create source */
        abc.push("S: Epic Music v1, https://evanwill.github.io/_drafts/notes/epic-music.html");
        /* add line, wrap to score size */
        var words = "W:" + line;
        words = words.match(/.{1,75}(\s|$)/g).join('\nW: ');
        abc.push(words);
        /* create meter */
        var m = Math.floor(Math.random() * meter.length);
        abc.push(meter[m]);
        /* create length */
        abc.push(leng);
        /* create key */
        var k = Math.floor(Math.random() * key.length);
        abc.push(key[k]);
        /* create notes */
        var tune = line.match(/[ABCDEFGabcdefgz,']+/g).join(' ').replace(/(\s*,)/g,",");
        while (tune[0] == ",") {
            tune = tune.slice(1);
        }
        abc.push(tune);
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
    /* start up */
    window.addEventListener("load", loadAbc, false);
</script>
