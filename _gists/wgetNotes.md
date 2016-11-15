wget
====

Wget is a handy commandline utility for grabbing stuff off the web. 
It is built into most UNIX systems. 
If you are on windows, install [Git for Windows](https://git-scm.com/) which comes packaged with `Git Bash`, a very handy UNIX terminal emulator
(note: check if Git Bash has wget installed by typing `wget --version`. If it is not installed, check this [Gist](https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)).
Another handy windows option is [MobaXterm](http://mobaxterm.mobatek.net/).

Check all the commands by typing `wget --help` in your terminal.

Download files from a list
--------------------------

Create a plain text list of urls you want to download. 
Use the `-i` option to pass that list to wget.

`wget -i download-file-list.txt`

Download all files of a type from a domain
------------------------------------------

Use the `-r` and `-A` options.
For example, download all PDFs:

`wget -r -A.pdf http://url-to-webpage-with-pdfs/`

limit to file type: `--accept html`


check dead links:

`wget --spider -o test.log -e robots=off -w 5 --random-wait --mirror --page-requisites --no-parent http://www.example.com`