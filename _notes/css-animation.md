---
title: CSS Animation
layout: post
tags: [web, css, fun]
date: 2017-03-08
---

<style>
@keyframes hori {
    from {left: 0%;}
    to {left: 100%;}
}
@keyframes vert {
    from {top: 0%;}
    to {top: 100%;}
}
.area {
    width: 100%;
    height: 300px;
}
.box {
    display: block;
    position: relative;
    left:0;
    top:0;
    width: 140px;
    font-size: 30px;
}
#v-trigger, #h-trigger { display: none;}
label {
    display: block;
    cursor: pointer;
    width: 50%;
    height:70px;
    text-align: center;
    border: 1px solid grey;
    background: yellow;
}
label[for="v-trigger"] {
    float: left;
}
label[for="h-trigger"] {
    float: right;
}
input#v-trigger:checked ~ .box {
    -webkit-animation: test 5s infinite;
    animation: vert 5s infinite alternate;

}
input#v-trigger:checked ~ .box label[for="v-trigger"] {
    background: green;
}
input#h-trigger:checked ~ .box {
    -webkit-animation: test 5s infinite;
    animation: hori 5s infinite alternate;
}
input#h-trigger:checked ~ .box label[for="h-trigger"] {
    background: green;
}
</style>

<div class="area">
<input type="checkbox" id="v-trigger" />
<input type="checkbox" id="h-trigger" />
<div class="box">
<label for="v-trigger" >&darr;</label>
<label for="h-trigger" >&rarr;</label>
</div>
</div>

Kind of amazing the stuff you can do with CSS with enough selectors...
