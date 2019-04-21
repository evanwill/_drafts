---
title: Data Visualization Resources 
layout: post
tags: [viz]
date: 2018-05-06
---

> Resources from "[Data Viz 101: Concepts and Tools](http://www.lib.uidaho.edu/services/workshops/resources/UIdaho_DataViz101_workshop.pdf)" workshop 2015-10-14

# Background

![Charles Joseph Minard’s Map (1869)](https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png)

Charles Joseph Minard’s Map (1869), [from wikimedia](https://commons.wikimedia.org/wiki/File:Minard.png).
[Edward Tufte](http://www.edwardtufte.com/tufte/posters) says it's "probably the best statistical graphic ever drawn".

Different areas:

- Data Visualization
- Information Visualization
- Visual Analytics 

Books:

- Matthew Ward, Georges G. Grinstein, and Daniel Keim. *Interactive data visualization : foundations, techniques, and applications*, Second edition (Boca Raton : CRC Press, 2015).
- Colin Ware, *Visual thinking for design* (Burlington, MA : Morgan Kaufmann, 2008).
- Colin Ware, *Information Visualization Perception for Design*, 3rd ed (Burlington : Elsevier Science, 2012).

# Visual Analytics

> "Visualization allows people to offload cognition to the perceptual system, using carefully designed images as a form of external memory. 
> The human visual system is a very high-bandwidth channel to the brain, with a significant amount of processing occurring in parallel and at the pre-conscious level. 
> We can thus use external images as a substitute for keeping track of things inside our own heads."
 
Tamara Munzner, "Visualization," in *Fundamentals of Computer Graphics* (3rd edition), ed. Peter Shirley, Michael Ashikhmin, and Steve Marschner (Natick, MA: A K Peters, 2009).

> "Visual analytics solutions provide technology that combines the strengths of human and electronic data processing. 
> Visualization becomes the medium of a semi-automated analytical process, where humans and machines cooperate using their respective distinct capabilities for the most effective results."

Daniel Keim, Gennady Andrienko, Jean-Daniel Fekete, Carsten Görg, Jörn Kohlhammer, and Guy Melan, "Visual Analytics: Definition, Process, and Challenges", in *Information Visualization - Human-Centered Issues and Perspectives*, LNCS, ed. Andreas Kerren, et al. (Springer, 2008), 154-175. Available at http://hal-lirmm.ccsd.cnrs.fr/lirmm-00272779/document

# Shneiderman

**Visual Information Seeking Mantra**:

- Overview first, zoom and filter, then details-on-demand.

**Type by Task Taxonomy (TTT)**

- Seven data types: 
    1-, 2-, 3-dimensional data, temporal and multi-dimensional data, and tree and network data
- Seven tasks: 
    overview, zoom, filter, details-on-demand, relate, history, extract

> Ben Shneiderman, "The  Eyes Have  It: A  Task by Data Type Taxonomy for Information Visualizations", *Proceedings of the 1996 IEEE Symposium on Visual Languages* (1996): 336. Available at http://www.interactiondesign.us/courses/2011_AD690/PDFs/Shneiderman_1996.pdf

# Preattentive Features

Visualizations and Viz tools need to be designed with human visual abilities in mind. 
For example, check out this research about "Preattentive Features and Tasks" [(on youtube)](https://youtu.be/wnvoZxe95bo):

<iframe width="560" height="315" src="https://www.youtube.com/embed/wnvoZxe95bo" frameborder="0" allowfullscreen></iframe>

> Christopher G. Healey, "Perception in Visualization", http://www.csc.ncsu.edu/faculty/healey/PP/

# Visualization Examples

The best way to get ideas of good ways to visualize data is to look at lots of examples.
Try some of these catalogs:

- [The Data Visualisation Catalogue](http://www.datavizcatalogue.com/)
- [Period Table of Visualization Methods](http://www.visual-literacy.org/periodic_table/periodic_table.html)
- [Grapic Continuum](http://visual.ly/graphic-continuum)
- [TimeViz Browser](http://survey.timeviz.net/)
- [A Visual Bibliography of Tree Visualization 2.0](http://vcg.informatik.uni-rostock.de/~hs162/treeposter/poster.html)

Negative Examples:

- [WTF Visualizations](http://viz.wtf/)
- [Spurious Correlations](http://www.tylervigen.com/spurious-correlations)

# Viz Resources

- [Flowingdata](http://flowingdata.com/)
- [Infovis Wiki](http://www.infovis-wiki.net/)
- [visualising data](http://www.visualisingdata.com/)
- [Gapminder](http://www.gapminder.org/)
- [Viz-Palette](https://projects.susielu.com/viz-palette) (helps you choose accessible color palettes)
- [The Pudding](https://pudding.cool/) (visual essays)

# Simple Web Based Tools

- [Google Charts](https://developers.google.com/chart/)
- [Raw Graphs](https://rawgraphs.io/) (based on D3.js)
- [Data Wrapper](https://datawrapper.de/)
- [Charted](http://www.charted.co/)
- [Vega Voyager](https://github.com/vega/voyager) (open alternative to Tableau in development)
- [Highcharts Cloud](https://cloud.highcharts.com/) (free web editor version of popular commercial js library)
- [Flourish](https://flourish.studio/) (free version with public data)

# Libraries 

- HTML+JS: [D3](http://d3js.org/) (Alternatively, checkout [C3.js](http://c3js.org/), [dygraphs](http://dygraphs.com/), [TauCharts](https://www.taucharts.com/), [chartjs](http://www.chartjs.org/), or [Vega](https://vega.github.io/vega/))
- Python: [matplotlib](https://matplotlib.org/) (you will probably want to use it along with [Pandas](https://pandas.pydata.org/) to manipulate the data. Alternatively, checkout [Bokeh](http://bokeh.pydata.org/), [seaborn](http://seaborn.pydata.org/index.html), [plotly](https://plot.ly/python/), or [ggplot](http://ggplot.yhathq.com/))
- R: [ggplot](http://ggplot2.org/) (usually used in conjunction with other [Tidyverse](https://www.tidyverse.org/) packages. Alternatively, checkout [ggvis](http://ggvis.rstudio.com/), [Shiny](http://ggvis.rstudio.com/))

# Code Notebooks

Code notebooks such as [Jupyter](http://jupyter.org/) are becoming an essential tool in data science. 
They combine code blocks with text and visualizations into a shareable document.
Many notebooks now have cloud hosted versions to lower barriers to getting started and promote reproducibility:

- [Try Jupyter](https://jupyter.org/try), or share Jupyter notebooks with [nbviewer](https://nbviewer.jupyter.org/) or [binder](https://mybinder.org/)
- [Colaboratory](https://colab.research.google.com/) (Jupyter environment hosted by Google designed to run TensorFlow without installing anything, with your notebooks stored in Google Drive)
- [Observable](https://observablehq.com/) (JavaScript based data visualization for the web)
- [Code Ocean](https://codeocean.com/) (a variety of notebooks and IDE available)
- [COCALC](https://cocalc.com/) (was SageMath Cloud, now has Jupyter Notebook with lots of kernels, a LaTeX editor, and more)
- [Iodide](https://github.com/iodide-project/iodide) and [Pyodide](https://github.com/iodide-project/pyodide/) (web focused notebooks implemented in browser, in alpha development)
- [Stencila](https://stenci.la/) (word processor + spreadsheet + code)
- [Azure Notebooks](https://notebooks.azure.com/)

# Tableau

I rarely recommend non-opensource tools, but Tableau is fairly unique tool for visually exploring data in a flexible, powerful sandbox.  
It is commonly used in enterprise settings, however, they provide free licenses for academic learning use.
If your data can be shared publicly, [Tableau Public](https://public.tableau.com/) is a good option.
Also, checkout their [Iron Viz](https://www.tableau.com/about/blog/2017/10/explore-viz-reigned-supreme-iron-viz-2017-77497) competition for interesting examples.

[Academic program](http://www.tableau.com/academic):

- Free for students and teachers 
- Not free for administration, see [higher-ed solutions](http://www.tableau.com/solutions/higher-ed)

[Tableau Public](https://public.tableau.com/)

Tutorials:

- [training videos](https://www.tableau.com/learn/tutorials/on-demand/getting-started)
- [short course](https://www.tableau.com/learn/starter-kit)
- [gallery examples](http://www.tableau.com/learn/gallery)
- [reference](http://www.dataplusscience.com/TableauReferenceGuide/index.htm)
