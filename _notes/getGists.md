---
title: Download your Gists
layout: post
tags: [github, ruby]
date: 2016-11-01
---

I like [GitHub Gists](https://gist.github.com/) a lot. 
Very handy service! When I start a digital odd job, I like to take notes in Gists, because otherwise I will forget what I did. Gists is a handy memory aid.

However, I realized Gists isn't the easiest place to find things. So this site was born. Random thoughts and notes-to-self about how to do digital odd jobs. Much of it is half baked or wacky work arounds. but it might help you get something done. At the least it helps me remember and acts as a handy personal reference source. 

To start up this blog I wanted to grab all my previous Gists. [GitHub API](https://developer.github.com/v3/) makes this fairly easy for public content. Just choose a language that can download stuff and create files, and you can write up a script. 

In my case, all my Gist are a single Markdown file, so its very easy. I just want to get a list of my Gists, download each one, and create a copy of the `.md` locally. For me it was easiest to modify a Ruby script from [blazeeboy](https://gist.github.com/blazeeboy/9547245). Since my Gist are only a single file, and I wanted them all in single directory to move into a Jekyll project, my version looks like:


```
#!/usr/bin/env ruby
require 'open-uri'
require 'json'

username = evanwill

# get gists
puts 'Downloading gists list'
gists_str = open("https://api.github.com/users/#{username}/gists").read
gists = JSON.parse gists_str

gists.each_with_index do |gist, index|

	puts "#{index+1}/#{gists.length} Downloading #{gist['url']}"
	gist_str = open(gist['url']).read
	gist = JSON.parse gist_str

	gist["files"].each do |file_name, file_value|
		File.open("#{file_name}", 'w') { |f| f.write file_value['content']}
	end

end
```

Save the script as `getGists.rb` in a new directory, then run it by opening the directory in a terminal, and typing `ruby getGists.rb`. All your public Gists will be downloaded into the directory. 
If you want each in its own directory, check the original from [blazeeboy](https://gist.github.com/blazeeboy/9547245). If you need to authenticate to get private gists, there are some other options out there. 
