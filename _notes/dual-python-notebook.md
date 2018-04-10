---
title: Setup Jupyter with Py 2, 3, and R
layout: post
tags: [python, R]
date: 2017-04-06
---

[Jupyter Notebook](http://jupyter.org/) is a great tool for teaching code and exploratory, iterative coding.
It was originally developed for [Python](www.python.org), but it now supports a variety of [kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels). 
Notebook becomes even more useful with both Python 2 and 3 installed (keep in mind [Python 3 is current, 2 is legacy](https://wiki.python.org/moin/Python2orPython3)). 
And you may as well add [R](https://www.r-project.org/) while you're at it!

## 1. Install Jupyter via Anaconda

First, [Jupyter project](http://jupyter.org/install.html) and I suggest you install Python 3 via the [Anaconda](https://www.continuum.io/downloads) distribution. 
Conda gives you a huge package of scientific Python libraries pre-installed, plus some very handy management and virtual environment tools. 
Once you install [Anaconda Python 3](https://www.continuum.io/downloads), you automagically have Jupyter with the IPython3 kernel ready to go. 

If you already have Anaconda installed, be sure to update before adding the additional kernels, using `conda update conda`.

## 2. Add Python 2 kernel to Jupyter

Second, add the Python 2 kernel using a [virtual environment](https://conda.io/docs/using/envs.html):

1. open a terminal and create a new Python 2 environment: `conda create -n py27 python=2.7`
2. activate the environment: linux `source activate py27` or windows `activate py27`
3. install the kernel in the env: `conda install notebook ipykernel`
4. install the kernel for outside the env: `ipython kernel install --user`
5. close the env: `source deactivate`

## 3. Add R kernel to Jupyter 

Third, we add [R via Conda](https://docs.continuum.io/anaconda/r_language). 
Conda R-essentials includes a bunch of popular R packages, including the Notebook IRKernel.

Simply open a terminal and install R and R-essentials: `conda install -c r r-essentials`

## Start Notebook

Open a terminal and type: `jupyter notebook`

The Notebook interface will open in your browser (ignore the server back end running in the terminal). 
On the right side of the Notebook, click the "New" button.
You should have the options for Python [default] (i.e. conda py 3), Python 2, and R. 
Pretty handy for teaching and learning!

To shut down Jupyter, close the browser window, then `Ctrl + C` in the terminal host.

## Add more Jupyter stuff

Conda has a few other addons available for Jupyter.
Check the [documentation](https://docs.continuum.io/anaconda/jupyter-notebook-extensions) to learn more.

## Other notebooks

Notebooks are gaining attention for integrating code and publication, opening possibilities for interactive sharing and visualization. 

- [SageMath](http://www.sagemath.org/) (math focused notebook platform, an "open source alternative to Magma, Maple, Mathematica, and MATLAB". A solid project that has been around for awhile, but hasn't gained much popularity.)
- [Apache Zepplin](https://zeppelin.apache.org/) (Java based notebook particularly useful for dashboards and Spark cluster integration, i.e. big data)
- [Beaker notebook](http://beakernotebook.com/) (newish project, multiple languages in a single notebook)

## Issues on Linux

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
