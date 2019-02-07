---
title: Setup Jupyter with Py 2, 3, and R
layout: post
tags: [python, R]
date: 2019-01-06
---

[Jupyter](http://jupyter.org/) / Jupyter Notebook is a great tool for teaching code and exploratory, iterative coding.

You can quickly demo it online at [Try Jupyter](https://jupyter.org/try)!

Jupyter was originally developed for [Python](https://www.python.org), but it now supports [kernels for many languages](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).
With multiple kernels installed, you will be given a choice to launch notebooks using any of those languages.
Thus, Notebook becomes even more useful with both Python 2 and 3 installed (keep in mind [Python 3 is current, 2 is legacy](https://wiki.python.org/moin/Python2orPython3)). 
And you may as well add [R](https://www.r-project.org/) while you're at it!

## 1. Install Jupyter via Anaconda

First, [Jupyter project](http://jupyter.org/install.html) and I suggest you install Python 3 via the [Anaconda](https://www.anaconda.com/download/) distribution. 
Anaconda gives you a [huge package](https://docs.anaconda.com/anaconda/packages/pkg-docs/) of scientific Python libraries pre-installed, plus `conda`, a very handy management and virtual environment tool (also comes with [Anaconda Navigator](https://docs.anaconda.com/anaconda/navigator/) GUI, which is kind of annoying, and [Spyder IDE](https://www.spyder-ide.org/)). 
Once you install Anaconda Python 3, you automagically have Jupyter with the IPython3 kernel ready to go. 

- Download latest version of [Anaconda Python 3](https://www.anaconda.com/download/) 
- Run [installer](http://docs.anaconda.com/anaconda/install/), but be sure to say yes to "add Anaconda to my PATH".

If you already have Anaconda installed, be sure to update before adding the additional kernels. 
Anaconda can be completely upgraded using `conda update conda`, then `conda update anaconda`.

## 2. Add Python 2 kernel to Jupyter

Second, add the Python 2 kernel using a [virtual environment](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html#managing-envs):

1. open a terminal and create a new Python 2 environment: `conda create -n py27 python=2.7`. This will take a minute to install the Python 2 dependency.
2. activate the environment: linux `source activate py27` or windows `activate py27`
3. install the kernel in the env: `conda install ipykernel`
4. close the env: `source deactivate`

## 3. Add R kernel to Jupyter 

Third, add [R via Conda](https://docs.anaconda.com/anaconda/user-guide/tasks/use-r-language/). 
Conda [R-essentials](https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/) package includes a bunch of popular R packages, including the Notebook IRKernel.

> Note: Anaconda gives you the choice of using [MRO](https://mran.microsoft.com/open) or normal [R](https://www.r-project.org/). Use conda packages `mro-base` or `r` respectively.

If you want R to be generally available, simply open a terminal and install R, R-essentials, and RStudio (optional, [more notes](https://evanwill.github.io/_drafts/notes/r-linux.html)): `conda install -c r r-essentials rstudio`

If you would rather keep R in a environment, open a terminal and create a new R env: `conda create -n mro_env r-essentials mro-base`.
The R installed in this env will be available to Jupyter Notebook.

## Start Notebook

Open a terminal and type: `jupyter notebook`

The Notebook interface will open in your browser (ignore the server back end running in the terminal). 
On the right side of the Notebook, click the "New" button.
You should have the options for Python [default] (i.e. conda py 3), Python 2, and R. 
Pretty handy for teaching and learning!

To shut down Jupyter, close the browser window, then `Ctrl + C` in the terminal host.

## Extensions

Conda has a few other addons available for Jupyter.
Check the [extension documentation](https://docs.anaconda.com/anaconda/user-guide/tasks/use-jupyter-notebook-extensions/) to learn more.

- [BeakerX](http://beakerx.com/) (newish project recently converted into an extension of Jupyter allowing multiple languages in a single notebook and other enhancements. Can be installed via `conda`)

## Sharing on the web

- [nbviewer](https://nbviewer.jupyter.org/) (easy way to share a static rendered version of a notebook from GitHub)
- [binder](https://mybinder.org/) (open a GitHub repo of notebooks in a temporary executable environment, [docs](https://mybinder.readthedocs.io/en/latest/))

## JupyterLab

[JupyterLab](https://jupyterlab.readthedocs.io/en/stable/index.html) is the next generation of Notebook that has been rolling out since about Feb 2018 ([news](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)).
Designed as a more complete IDE-like environment, Lab still fully supports notebooks, but provides more advanced features.
If you installed Anaconda, you already have Lab ready to go, and all your environments will be available.

Open a terminal and type `jupyter lab` to start it up.

> JupyterLab is actually available when you run `jupyter notebook` too, from the base url, something like `http://localhost:8888/tree`, replace the directory with `/lab`.

## Other Notebooks

Notebooks are gaining attention for integrating code and publication, opening possibilities for interactive sharing and visualization. 

- [SageMath](http://www.sagemath.org/) (math focused notebook platform, an "open source alternative to Magma, Maple, Mathematica, and MATLAB". A solid project that has been around fsince 2005, but hasn't gained much popularity.)
- [Apache Zepplin](https://zeppelin.apache.org/) (Java based notebook particularly useful for dashboards and Spark cluster integration, i.e. big data)

Others are running in the cloud to lower barriers to getting started and promote reproducibility:

- [Colaboratory](https://colab.research.google.com/) (Jupyter environment hosted by Google designed to run TensorFlow without installing anything, with your notebooks stored in Google Drive)
- [Observable](https://beta.observablehq.com/) (JavaScript based data visualization for the web)
- [Code Ocean](https://codeocean.com/) (a variety of notebooks and IDE available)
- [COCALC](https://cocalc.com/) (was SageMath Cloud, now has Jupyter Notebook with lots of kernels, a LaTeX editor, and more)
- [Iodide](https://github.com/iodide-project/iodide) (web focused notebook, in alpha development)
- [Stencila](https://stenci.la/) (word processor + spreadsheet + code)
- [Azure Notebooks](https://notebooks.azure.com/)

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
