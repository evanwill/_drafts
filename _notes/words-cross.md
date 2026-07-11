---
title: Words Cross Game
layout: post
tags: [projects, fun]
date: 2026-07-09
---

[Words Cross](https://evanwill.github.io/words-cross/) is a new game I recently created, officially described as: 
*A quick playing word game of intersecting possibilities!*

[Words Cross](https://evanwill.github.io/words-cross/){:.buttons}

It is a pretty simple and fast playing puzzle game, more about reasoning out the potential combinations than words.
Each round builds a small crossword-style shape and provides a word bank of options to fill it. 
You have to figure out the one possible solution where the words fit the shared letters.

Once you make your selections, the puzzle checks--if you are right, it gives you your time. 
And a Share button that provides the exact puzzle and your time so others can try to beat it!

The project is built using [Next.js](https://nextjs.org/) as a fully static web app with all client side processing.
There is a set word list at the build time that provides the base data. 
The app game engine generates puzzles using the word list, starting with random pools of words that it tries to fit into a crossword arrangement.
It tests the pool to ensure there is only one correct solution and several potential choices for each row. 
It encodes the specific puzzle as a seed so that each can be reproduced exactly for sharing. 

In theory you could customize the word list to give it a bit different theme. 
The current list is supposed to be just interesting vocab words featuring nature or unusual color names. 
The distribution of word lengths and common shared letters is optimized to ensure lots of valid puzzles are possible. 

I have found it to be a pretty fun casual game. 
The challenge is in keeping the potential solution combos in memory without visual confirmation until you guess--and racing against the clock.
