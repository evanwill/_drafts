# Use Git locally to collaborate

## Set up shared repository

Create a directory on the shared drive to hold the repository, then `git init --bare`. 
By convention, bare repos are given the extension `.git`.

```
cd /t/
mkdir newRepo.git
cd newRepo.git
git init --bare
```

On your local working drive, create a repository and add the bare repo as remote.

```
cd /c/
mkdir newRepo 
cd newRepo
git init
git add remote origin /t/newRepo.git
echo "init" > README
git add README
git commit -m "init"
git push -u origin --all
```

The bare repo is not like a normal repository. 
It does not have copies of the working files visible, only the full git history. 
Bare repos are only for sharing and collaborating on a repo, not making changes to files. 
You will see the working files when you clone the bare repo to a normal repository locally.

## Collaborate 

Now some else can make a copy of `newRepo` from the shared drive `/t/`.

```
git clone /t/newRepo.git
cd newRepo
```

Make some changes or a new branch. 

```
git branch newFeature
git checkout newFeature
echo "new stuff" > newfile.txt
git add newfile.txt
git commit -m "new file"
git push --set-upstream origin newFeature
```

When you create a new branch you need to push `--set-upstream origin newbranch` to set up the new branch in the bare repo. 

If you already have `newRepo`, update by pulling (this should grab any new branches).

```
cd /c/newRepo
git pull
```

Now when the new branch is ready for prime time, merge it into master.

```
cd /c/newRepo
git pull
git checkout master
git merge newFeature
git push
```




