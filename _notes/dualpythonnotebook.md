> this assumes you have installed Python 3 via [Anaconda](https://www.continuum.io/downloads) distribution.

# Make Python 2 kernel available to Jupyter Notebook

1. open a terminal and create a new python 2 environment: `conda create -n py27 python=2.7`
2. activate the environment: linux `source activate py27` or windows `activate py27`
3. install the kernel in the env: `conda install notebook ipykernel`
4. install the kernel for outside the env: `ipython kernel install --user`
5. close the env: `source deactivate`

# Add R kernel to Jupyter Notebook

> you can now manage R from anaconda which is kind of nice, and is automatically bundled with notebook kernel

1. install R-essetials: `conda install -c r r-essentials`