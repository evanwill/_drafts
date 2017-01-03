# Pi Py Poetry: Pi Day Remix 

Its 3:14 on 3/14 (2016)! Time for some Vandal Poem of the Day ([VPOD](http://poetry.lib.uidaho.edu/index.php/about/)) poetry remix using OpenRefine and Python. 

First, I grabbed all of the poems from VPOD at http://poetry.lib.uidaho.edu/

Then I parsed it all using OpenRefine. 

I Refined it down to a table with these columns: title, author, poem, words, length. 
Each row represents one line from a poem in the corpus. 
The line is in the 'poem' column.
The 'words' column is a count of words in the line, created in OpenRefine with new column based on 'poem' > length(value.ngram(1)).
The 'length' column is character count of the line, created in OpenRefine with new column based on 'poem' > length(value).
The 'title' and 'length' are not used in this example.
To simplify I sorted on 'words' and used only 1 through 9, since these will match the Pi digits.

Then I went into Jupyter Notebook to get started generating poems with Python:

```
# import stuff 
import pandas as pd
import random

# create pandas dataframe from the poem CSV
poemDF = pd.read_csv('VPODpoemLines1-9.csv')
# create list with digits of Pi
piDigits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4]
```
This gave me a dataframe with 3344 rows (i.e. lines of poetry. I should have brought it down to 3,141!), representing lines of from 155 poems by 18 VPOD authors. Find that info with:

```
len(poemDF['author'].unique())
```

```
len(poemDF['title'].unique())
```

Okay, now we can make some new remix Pi Py Poems:

```
# create a random poem based on digits of Pi
# first decide number of lines in the poem, 
# I based this on the approximate range observed in the corpus
poemLength = random.randrange(5,60)

# create a poem of that random length
# the digits of Pi are the number of words per line
for i in range(poemLength):
    if piDigits[i] == 0:
        print("\n")
    else: 
        newLine = poemDF[poemDF['words'] == piDigits[i]].sample().values[0][2]
        print(newLine)
```

## Some Pi Py Poems:

```
Then more lights
undefeated,
as a train speeding
prose
Her curling makes me shiver
how to open the airway of a fellow passenger
it's lying
and I marry you each day.
Because my heart could not
what they were
like the residue of beets
I can do so only for a moment.
barrel, she broke him. She gave the worst smile:
has approved all your plans, so you
I could never deny it, or disown my desire
No, he said.
    the feet
black bird hunched
But it's a reassuring logic that rivers freeze
Now I remember something
```

```
Because of breathing.
*
and the snow outside
*
and burning whatever is there.
We'd rut a ditch by a river in nights
everyone with
violet towers. We scour the earth
If you write “ironic detachment”
we couldn't hear
breaker of others' bones, parachuter,
The one called Chukwu? Just one word: God.
with a plastic teapot for my sister's tea party.
a child's Christmas miracle that I let
Can I come back up now? asks the chair
my worldly nature
Or burn
are spelling someone's
but more and more it seems it won't.
It looks like smoke
the mustached man with his shoulders
to disappear
when it is opened or closed.
affix their wintry incubus,
our scarves, shrink
and life, less
Enter a room as though it is strange.
holding a jar
Glass skins
the wonder of them, good or bad,
I know you… the skin graft on your cheek,
to dream up only this.


emitted light
a new home, maybe you'll search and petition
But it's a reassuring logic that rivers freeze
like some plastic beads
Yes.
maybe you no longer haul those wounds with you
```

```
off the closets
they're
and trained it stranger
Delivered
some type of old-fashioned candy
Think of the flesh on an angel's hips, pinched
in our
to do-- an aperture, a slur-- 
And blown between adjacent bridges
the giant translucent
light. And after the light,
I eat what's put in front of me,
my fear of needles, my cravings for salty food,
with empty wine jugs at our heels.
of the space movie we all stood in line
she came over
in our
a phoenix preening
    to empty your bright dress onto the floor,
fringe on brown pain
Even if I have convinced you,
fair, alone.
a world flashes by, and opposite,
certain spells to protect
in the morning
of not remembering
with a dark beer or hand out leaflets
Washed in salt
The current
then finger, forearm and elbow. Curl yourself
No I am not afraid of the eye chart:
there are experts among us


The current
made a circus of it. Asthma, weeping, elephants,
and through my reading to a deafening applause.
and hope it's clear.
alive
to own anything with and without blood. Cash rules
On the shore, the line of unannointed
undefeated,
Consume me and find me worthy.
You knock and knock at a door, it won't
to live. Mother,
feel silly in your grief. And still you'll sit
by the heat in the tips of her fingers.
even on holidays.
the silhouette of a single red-mouthed bell;
```

Good Fun!

# Add Authors 

Next I wanted to add authors to the Pi Py Poems. I modified the poem-creating loop like this:

```
poemLength = random.randrange(5,60)
author = 'Pi Py Poetry'
# create a poem of that random length
# the digits of Pi are the number of words per line
for i in range(poemLength):
    if piDigits[i] == 0:
        print("\n")
    else: 
        newLine = poemDF[poemDF['words'] == piDigits[i]].sample()
        author += ', ' + newLine.values[0][1]
        line = newLine.values[0][2]
        print(line)
print('\nBy '+author)
```

The New poems result in a crazy looking author list, but you can track down the original lines by author (potentially). More examples are below. 

# More Pi Py Poetry from VPOD

```
in another room
rereading
in magic cochineal pants.
Shifting
snaps free. Sunflash, stereo store,
The sage and tomato plants tanning on the veranda.
The current
    and pretend we are lying there
which said he was born
I once read
and you're never getting out.
places to disappear but it was fooling itself,
they are stuffed in every corner of a house
all this silence and emptiness and rust
for the certainty of home, for mills and reservoirs
Every question, conversation
beneath the
I do remember
I close the shop at six. Welcome wind,
this time of year
to step from the wrought-iron compartment,
She's alive
only a dream is so lucky.
dressed like a rabbit
think they're alone.
Resurrection and crucifixion.
Whatever you say sounds better with your thigh
I float bestowing
without knowing
I'll admit, she's earned her orchestra seats
    they attempt to pull the survivor from its flood
there remains more to learn.


how often.
Not like what they told us at all
in a field, two and a half days.
But I'm dry now,
rereading
The pay toilets where we sat without paper. Rain.
There is a dawn between my legs,
embarrassing
covers from romance novels, their heroines
And a call to joy-- a landscape, a face-- 
then thrown away
to love the dark. I love it so much
you feel sick in ways you thought not possible.
sip false peace
who are dead now laugh and laugh.
grow especially talkative at night,
senseless.

By Pi Py Poetry, Laura Kasischke, C.D. Wright, Natalie Diaz, Laura Kasischke, James Arthur, Roger Reeves, Kerry James Evans, Natalie Diaz, Matthew Zapruder, Matthew Zapruder, Mark Bibbins, Dean Young, Valzhyna Mort, Laura Kasischke, James Arthur, Dean Young, Michael Dickman, Matthew Zapruder, C.D. Wright, Brenda Shaughnessy, C.D. Wright, Michael Dickman, Brenda Shaughnessy, Matthew Zapruder, Brenda Shaughnessy, Chris Abani, Mark Bibbins, Matthew Zapruder, Matthew Zapruder, Erin Belieu, Sherwin Bitsui, Lisa Olstein, Brenda Shaughnessy, Michael Dickman, Lisa Olstein, Kerry James Evans, C.D. Wright, C.D. Wright, Natalie Diaz, Brenda Shaughnessy, Erin Belieu, Sarah Lindsay, Valzhyna Mort, Lisa Olstein, Chris Abani, Matthew Zapruder, Laura Kasischke, C.D. Wright, Brenda Shaughnessy
```

```
but there's still
being
Tunisia of desert silence
6
tell us his tired children
Coupling beneath my feet. I want the body's burden,
could theoretically
should I wish to review them.
contain you, it refused sympathy,
Cigarette in hand.
while you sleep? Sleeping is
trapped in the bill of a circling bird,
and I don't bruise easily, that I am yours
so two sets of passengers come eye-to-eye
because your hemisphere has rolled away from the sun,
turns into breath
and senses
a phoenix preening
it's my leg lifted over my man's body.
Consumers will pay more
belled purple cluster, I'd rather plump-girl-
books die
As always I can do nothing.
have forgotten fear, apparently
a phoenix preening
traveling toward us
I stomp down a refinery, trail a scat
Not your name
if stars
a blood orange swelling like a breast-- 
for slavers. In the lake, red dye bubbles up
    to be mauled by wolves


heaven, like
that will eventually like me into the earth
wiping his greasy hands on a greasier rag,
a bright green snake
created
and every house carries a legend of a captain
In the oven, something breathing. Rising. Melting.
hair.
my brother's leg destroyed after detonation;
of a neighborhood pool floats up on the heat.
from the '70s
a rent check or explains anything to one's family.
My fear of uniforms is an old habit, comfortable.
960 antitank mines

By Py Pi Poem, Michael Dickman, Laura Kasischke, Matthew Zapruder, Natalie Diaz, Matthew Zapruder, Roger Reeves, Matthew Zapruder, Lisa Olstein, Lisa Olstein, Laura Kasischke, Lisa Olstein, Erin Belieu, Brenda Shaughnessy, James Arthur, James Arthur, Brenda Shaughnessy, Valzhyna Mort, Natalie Diaz, Valzhyna Mort, Lisa Olstein, Erin Belieu, Valzhyna Mort, Matthew Zapruder, Sarah Lindsay, Natalie Diaz, Laura Kasischke, James Arthur, Michael Dickman, James Arthur, Natalie Diaz, Chris Abani, Sherwin Bitsui, Laura Kasischke, Matthew Zapruder, Dean Young, Lisa Olstein, Michael Dickman, Valzhyna Mort, Laura Kasischke, Laura Kasischke, Kerry James Evans, Erin Belieu, Matthew Zapruder, Erin Belieu, Chris Abani, Kerry James Evans
```

```
in the home.
waistless,
be there, get it?
•
Already you're in the air
even lightning can go wrong but when the smoke
having pressed
not blue-veined, but full of flesh,
that weren't fenced or watered.
a phoenix preening
only in the exit wounds,
to sip at the lachrymal glands of chaos,
floating through the candled dark in shiny black slacks
then I wake up. Did you know
a Vespa in the second person, want it to
pleasuring your feet,
You know
your own shadow,
register key. And yet, how fine it feels,
my dreams mostly water.
There are bulls between my legs,
They stand
white votives shivered in red glass
on a report card.
into the ocean
Smoking a cigarette
that he would give his life for you.
into the sky
diamond after
then left in the shade to multiply.
with a hollow pen, how to wrestle an alligator,
some type of old-fashioned candy


another ambulance
The one called Chukwu? Just one word: God.
I've never bothered with the names of flowers,
that's the mortal art.
*
a Vespa in the second person, want it to
and without your permission. O dummies dancing
reading
Heretics banged at the double door.

By Pi Py Poetry, Brenda Shaughnessy, Brenda Shaughnessy, Brenda Shaughnessy, Michael Dickman, Dean Young, Dean Young, Matthew Zapruder, Roger Reeves, C.D. Wright, Natalie Diaz, Brenda Shaughnessy, Dean Young, Michael Dickman, Lisa Olstein, Mark Bibbins, Erin Belieu, Michael Dickman, Brenda Shaughnessy, Erin Belieu, Dean Young, Natalie Diaz, Valzhyna Mort, Natalie Diaz, Valzhyna Mort, Michael Dickman, Michael Dickman, Chris Abani, Michael Dickman, Michael Dickman, Laura Kasischke, Lisa Olstein, Laura Kasischke, Natalie Diaz, Chris Abani, Erin Belieu, James Arthur, Michael Dickman, Mark Bibbins, Roger Reeves, C.D. Wright, Natalie Diaz
```

```
We said despair
Both
Or am I alone?
Imperceptible
that veins blued through it
Blue gourds glow and rattle like a two-man band:
believe, too.
puffballs tenderly bunched in my armpits.
all-y, all-y, all come free
with exacting coordinates
I was never your Intended,
whose ruby shoes throb on shelves in closets,
bark the tips of its leaves with cracked amber-- 
are gone now; we never held them
to the left of the graveyard, where the trees
The throb lingering
harmlessly decompose
```

```
in Peru 14%
    Noisier
Maybe they used to
dead
from the one who loves,
walk around in the yard not making a plan.
waist-high, elbow-deep-- 
particular I didn't come to know:
I'd thank it for making
it is quiet
is good enough advice. [Move
Four more angels to drag through the streets
A foot chalking a valley black and bright beneath
has approved all your plans, so you
For years I could count on waking to plenty,
eat another apple
but forgot
who must sense
to sip at the lachrymal glands of chaos,
aglow with determination, pursuing
of shame dissolving in my throat;
Can't matter
it's garbage night. The moon agrees,
of plastic pop-up targets
The fire glowing
The final arbitration.
But the plain ones are patient, aren't they?
And follows itself
The foghorns
and quickly became symbolic, bound to occur
    they attempt to pull the survivor from its flood
in the grass the bodies


believe, too.
The first cell felt no call to divide.
since Cousin Bobby told her about a comma
Love. Hunger. Other alchemies.
*
were starting to cover the land and someday everyone
was a thing of incomparable curvaceous length;
today
and i am on my knees
to love the dark. I love it so much
turns into breath
Like a sharpshooter who knows to pull the trigger
of the space movie we all stood in line
    on both sides,
their mother invited next to the fire,
a nursery for new stars.

By Pi Py Poetry, Matthew Zapruder, C.D. Wright, Michael Dickman, Michael Dickman, Brenda Shaughnessy, C.D. Wright, Lisa Olstein, Erin Belieu, Mark Bibbins, Matthew Zapruder, Mark Bibbins, Roger Reeves, Roger Reeves, Laura Kasischke, Sarah Lindsay, Natalie Diaz, Matthew Zapruder, Brenda Shaughnessy, Dean Young, Sarah Lindsay, Erin Belieu, Brenda Shaughnessy, Mark Bibbins, Kerry James Evans, Laura Kasischke, Chris Abani, Erin Belieu, Brenda Shaughnessy, Michael Dickman, Sarah Lindsay, Sherwin Bitsui, Natalie Diaz, Brenda Shaughnessy, Sarah Lindsay, Sarah Lindsay, Laura Kasischke, Michael Dickman, Matthew Zapruder, Sarah Lindsay, Michael Dickman, Valzhyna Mort, Lisa Olstein, Brenda Shaughnessy, Lisa Olstein, Matthew Zapruder, Kerry James Evans, Erin Belieu, C.D. Wright
```

## And Remember: Read real poems daily at [Vandal Poem of the Day](http://poetry.lib.uidaho.edu/)