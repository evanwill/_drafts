---
title: Setup Jupyter with Py 2, 3, and R
layout: post
tags: [python, R]
date: 2017-04-06
---

[Jupyter Notebook](http://jupyter.org/) is a great tool for teaching code and exploratory, iterative coding.
It was originally developed for Python, but it now supports a variety of [kernels](https://github.com/ipython/ipython/wiki/IPython-kernels-for-other-languages). 
Notebook becomes even more useful with both Python 2 and 3 installed (in case you ever have to run some legacy code). And you may as well add R while you're at it!

First, Jupyter and I suggest you install Python 3 via [Anaconda](https://www.continuum.io/downloads). Conda gives you a huge package of scientific Python libraries pre-installed (including Jupyter), plus some very handy management and virtual environment tools. 
Once you install Anaconda Python 3, you already have Jupyter with the IPython3 kernel. 

If you already have Anaconda installed, be sure to update before adding the additional kernels, using `conda update conda`.

> *Note:* I occasionally have problems using `conda` in Git Bash on Windows. If you are on Windows, you might want to use CMD rather than Git Bash for this install process.  

## Add Python 2 kernel to Jupyter

Second, we add the Python 2 kernel:

1. open a terminal and create a new python 2 environment: `conda create -n py27 python=2.7`
2. activate the environment: linux `source activate py27` or windows `activate py27`
3. install the kernel in the env: `conda install notebook ipykernel`
4. install the kernel for outside the env: `ipython kernel install --user`
5. close the env: `source deactivate`

## Add R kernel to Jupyter 

Third, we add R via Conda, with is automatically bundled with the Notebook kernel:

1. open a terminal and install R-essetials: `conda install -c r r-essentials`

## Start Notebook

Open a terminal and type `jupyter notebook`. 
Once Notebook opens in your browser, click the "New" button on the right side. You should have the options for Python [default] (i.e. conda py 3), Python 2, and R. 
Pretty handy for teaching and learning!
