---
title: RStudio on Linux
layout: post
tags: [R, linux]
date: 2018-04-03
---

Installing RStudio is a surprisingly complex on Linux, or at least much more work than expected. 
However, there is one easy way if you use Anaconda Python distribution. 
This note describes both methods. 

# RStudio and R with Conda

[Anaconda](https://www.anaconda.com/what-is-anaconda/) is a major Python distribution that comes packaged with a huge number of scientific Python tools, including Jupyter Notebook and several difficult to install SciPy packages. 
Futhermore, it provides the `conda` package and environment management tool that simplifies installing, updating, and managing everything.
Overall, it is very handy and powerful, simplifying the initial set up of a data science / SciPy environment.

Conda can also install and manage R on your system, which is nice since it makes keeping everything up-to-date easier.

1. [Download Anaconda](https://www.anaconda.com/download/#linux).
2. Install using the downloaded script ([full instructions](https://docs.anaconda.com/anaconda/install/linux)), `bash ~/Downloads/Anaconda3-5.1.0-Linux-x86_64.sh`.
3. Install R and RStudio: `conda install -c r r-essentials rstudio`.

You can now start RStudio by typing `rstudio` in the terminal (it will not show up in your applications), or start an R prompt by typing `R`. 
As a bonus, `r-essentials` automatically installs the IRKernel is that can be used in Jupyter Notebook. 
When you start Jupyter (`jupyter notebook`), R is available in the options to create a new notebook.

**Note:**
When installing on Fedora I have run into issues where some applications no longer work because they are trying to use Anaconda rather than the default system Python (I haven't had this happen on Ubuntu).
The installer adds a line to your `.bashrc` in order to make Anaconda available on your path.
Open `sudo nano ~/.bashrc`, and look for a line like:

```
# added by Anaconda3 installer
export PATH="/home/username/anaconda3/bin:$PATH"
```

One quick fix is to flip PATH and Anaconda, so your system Python will be found first by default. 
Change the `.bashrc` line above to `export PATH="$PATH:/home/edog/anaconda3/bin"`, then reboot. 
Your applications will correctly find the system Python, but you can still easily access Anaconda's `conda`, `ipython`, and `jupyter`. 
Keep in mind, if you type `python` in the terminal, it will be the system Python, not Anaconda. 

> I am conflicted about Anaconda. 
> It is undeniably useful and powerful, simplifying getting started with advanced Python and scientific computing. 
> It is great for teaching, thus has been adopted by organizations such as Software Carpentry. 
> However, as it grows, it is a for-profit enterprise company and building "partnerships" with huge tech companies. 
> This has led to questionable activities, such as adding a prompt to install Microsoft Code Editor to the Anaconda installer. 
> I am actually a Code user, but it seems like classic shady software marketing technique that makes me uncomfortable.
> The good part of these "partnerships" is sustainable funding and development from the biggest drivers of data science industry. 
> However, it also reduces the community driven spirit and values of open source software.

# Traditional Install

To get RStudio running first you need [R](https://cran.r-project.org/). 
R is available in some distro repositories, but is often out-of-date. 
Specific information on the best way to install can be found from CRAN in the Readme files in the [bin/linux](https://cran.r-project.org/bin/linux/) directory (not exactly the most user-friendly way to provide information, but the readmes are comprehensive).

On Fedora, the repository version is good, just use the metapackage: `sudo dnf install R`.

On Ubuntu things are a bit more complicated: 

1. Choose your closest mirror from the [CRAN mirror list](https://cran.r-project.org/mirrors.html), for example `https://cran.cnr.berkeley.edu/`.
2. Open your apt sources: `sudo nano /etc/apt/sources.list`
3. At the bottom, on a new line add the CRAN source, following the pattern `deb` + `<mirror url>` + `/bin/linux/ubuntu` + `<ubuntu version name>/`, for example: `deb https://cran.rstudio.com/bin/linux/ubuntu artful/`, then save (Ctrl+X, then Y).
4. Add the secure key from CRAN, `sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E084DAB9`
5. Update `sudo apt update`
6. Install R: `sudo apt install r-base r-base-dev r-recommended`
7. Install dependencies necessary to build R packages: `sudo apt install libxml2-dev libssl-dev libcurl4-openssl-dev libopenblas-dev`

Next, install RStudio:

1. Download the package from [RStudio](https://www.rstudio.com/products/rstudio/download/#download).
2. Double click the package to install using the Software center.

# R Resources

- [R for Data Science](http://r4ds.had.co.nz/), Grolemund and Wickham.
- [Text Mining with R](https://www.tidytextmining.com/), Silge and Robinson.
- SWC [Programming with R](http://swcarpentry.github.io/r-novice-inflammation/) or [R for Reproducible Scientific Analysis](http://swcarpentry.github.io/r-novice-gapminder/).
