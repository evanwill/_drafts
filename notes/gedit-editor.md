# Gedit tips

[Gedit](https://wiki.gnome.org/Apps/Gedit) is the default text editor for Gnome and Ubuntu (where its called "Text Editor"). 
When you first use it, it seems a very basic and not very interesting or useful editor, basically like classic Notepad. 
However, dig a little deeper, and its a great and powerful text editor. 
Here is some tips to set it up with everything you expect from a good code editor:

1. Default look: open `Edit` > `Preferences`. 
	- On the View tab, check "Display line numbers", "Highlight Current Line", and "Highlight matching brackets". 
	- On the Editor tab, check "Enable automatic indentation". 
	- On Font & Colours tab check "Kate" theme. 
	- These and other view options are of course totally up to your personal preferences, but the above options are default on most code oriented editors. Note: the line view options can quickly be changed by clicking the Ln, Col information at the bottom of the document. 
2. Spell check: click `Tools` > "Highlight misspelled words". Works like a charm! Very handy for markdown or HTML content. 
3. File browser: click `View` > `Side panel`, then from the drop down menu above the side panel, select "File Browser". Toggle with `F9`. This is very handy when working on a project that is a series of files in a directory. 
4. More plugins: Gedit ships with a series of [standard plugins](https://wiki.gnome.org/Apps/Gedit/ShippedPlugins) that extend functionality. However, its easy to get a few more from your software repository. On Ubuntu, install some extras with `sudo apt-get install gedit-plugins`. Then head to `Edit` > `Preferences` > Plugins tab to see the new functionality you can enable. Personally, in addition to the standards I enable "Bracket Completion", "Find in Files", "Git", "Join/Split Lines", "Smart Spaces", and "Text Size".

This will get Gedit the functionality you might expect from a code focused editor, while still remaining a lean, easy-to-use, handy app. 

