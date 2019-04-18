---
title: "Python JupyterLab and Kernels"
layout: post
tags: [workshop, python]
date: 2019-04-18
---

> Mini workshop.

1. Intro
2. Survey 
3. Discuss 

## Conda 

Package + environment management for Python (but can be used for other languages), [conda docs](https://conda.io/en/latest/).

Version and updates: 

- `conda --version` / `conda info`
- `conda update conda` 
- `conda update --all` / `conda update anaconda`

Packages: 

- `conda install [package]`
- `conda remove [package]`
- `conda list` (all current packages + versions)

Keep in mind if you install something without using `conda` (i.e. pip), conda can't update it.

## Environments 

- `conda create -n testenv`
- `conda env list`
- `conda activate testenv`
- `conda deactivate`
- `conda env remove -n testenv`

Share:

- `conda env export --name myenv > myenv.yml`
- `conda env create --file myenv.yml`

## Installing kernels

Python 2:

- `conda create -n py27 python=2.7`
- `conda activate py27`
- `conda install ipykernel`
- `source deactivate`

R: 

- `conda create -n mro_env r-essentials mro-base`

Julia:

- [Download Julia](http://julialang.org/downloads/) and install
- `which jupyter`
- `JUPYTER=$(which jupyter) julia`
- `using Pkg`
- `Pkg.add("IJulia")`

[Kernels list](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)

## Navigator 

Anaconda Navigator is a GUI app to manage conda and install stuff...

- [Navigator docs](https://docs.anaconda.com/anaconda/navigator/)
- start on Linux: `anaconda-navigator`
- create / manage / switch environments
- manage packages, check versions
- links to learning resources 
- launch apps in the correct environment

## JupyterLab 

- It's the future and it's ready, [news](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906), [blog](https://towardsdatascience.com/jupyter-lab-evolution-of-the-jupyter-notebook-5297cacde6b)
- If you have an up-to-date Anaconda install, it's already installed
- [JupyterLab docs](https://jupyterlab.readthedocs.io/en/stable/index.html)
- fully backwards compatible ("Classic" Notebooks runs from the same server)
- more IDE like (tabs and panes)
- updated notebook features (drag & drop cells, collapse, context menu)
- updated framework (built on JS)
- more extensible
- `conda install nb_conda`
- `jupyter lab`

## Sharing notebooks 

- [nbviewer](https://nbviewer.jupyter.org/) (easy way to share a static rendered version of a notebook from GitHub)
- [binder](https://mybinder.org/) (open a GitHub repo of notebooks in a temporary executable environment, [docs](https://mybinder.readthedocs.io/en/latest/))
