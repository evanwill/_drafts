---
layout: post
title: Passing Arguments in Shell Script
---

**TL;DR** Just skip to the [good part](#the-good-part)

# Basic Arguments
The other day I started making this shell script program [spotify-now](https://github.com/getmicah/spotify-now), which gets information on the current Spotify song using the dbus message from the media player. When writing this script I wanted to be able to pass in parameters to the script from the command line using arguments.

This is easy as all you have do is use the `${n}` variable to get the parameter (n being the position of the argument). With my script it looked something like this:


    #!/bin/bash
    # spotify-now

    getTitle () {
        ...
    }

    echo "$(getTitle ${1})"

<hr class="codebreak">

    $ ./spotify-now title
    How Much A Dollar Cost

Although this solution is quick and easy, it's also very limiting in the parameters you can pass and made for some messy terminal commands.

<h1 id="the-good-part">Using Strings in Arguments</h1>
When brainstorming for a better way to pass command line arguments I came across the `date` command. This unix program prints out the system's time and date information. What intrigued me about this command is how it took in a date string containing keywords such as the name of the month or what hour it was.

    $ date '+Date: %b %d'
    Date: May 02

I decided to find a way to implement this into my script. Usually, something like this would be done with a language such as C or Python but I was determined to stay with a simple shell script seeing as though it was a small program and I didn't want to over complicate things.

To do this sort of thing in shell script all you have to do is replace the keywords in the string argument with the data you want. You have to do this for each keyword and error checking can be tedious but really not much worse than doing in any other language.

    #!/bin/bash
    # spotify-now

    getArtist () {
        ...
    }
    getTitle () {
        ...
    }

    INFO="${1}"
    INFO="${INFO//"%artist"/$(getArtist)}"
    INFO="${INFO//"%title"/$(getTitle)}"
    echo "$INFO"

<hr class="codebreak">

    $ ./spotify-now "%artist - %title"
    Kendrick Lamar - To Pimp A Butterfly

<br><br>
Of course all this code is on my [Github](https://github.com/getmicah/spotify-now) and please do fork it and make pull requests regarding any issues or improvements you may have with my code.
