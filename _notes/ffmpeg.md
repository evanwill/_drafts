---
title: Convert Videos with FFmpeg
layout: post
tags: [videos, tools]
date: 2021-05-01
---

FFmpeg is a powerful command line tool to work with video files. 
Video formats are complex--they involve combinations of video encoding, audio encoding, and containers--it all gets really confusing fast...
But FFmpeg will help you deal with conversions pretty quickly.

## Install FFmpeg

- Windows install with downloaded installer: <https://www.ffmpeg.org/>
- Mac install using Homebrew: `brew install ffmpeg`
- Ubuntu install from repository: `sudo apt install ffmpeg`

FFmpeg is a command line application, so to use it: 

- open your terminal and navigate to the directory containing your videos (or open the terminal in that folder!)
- type your FFmpeg commands, starting with `ffmpeg`

For full information check [FFmpeg docs](https://www.ffmpeg.org/ffmpeg.html).

## Convert AVI to MP4

To losslessly copy your AVI video into the MP4 container (i.e. *without* re-encoding the video stream), use the command:

```
ffmpeg -i input-video.avi -c:v copy -c:a copy -y output-video.mp4
```

This command uses the options `-c:v copy` and `-c:a copy` to copy the video and audio streams without changing the encoding into the new MP4 container.

If you want to do a whole folder of AVI videos, you can use a Bash loop, like:

```
for f in *.avi; do ffmpeg -i "$f" -c:v copy -c:a copy -y "${f%.avi}".mp4; done
```

This loop goes through all AVI files in the current folder (`*.avi`), copies each one to a new MP4 file, and names it using the same base filename swapping out the extension (`"${f%.avi}".mp4` removes ".avi" and adds ".mp4" to the filename). 

If you get an error using the `copy` method, it probably means your AVI contains encodings that are not compatible with MP4. 
To just get it to work with the default options, just remove the `-c` flags, using just:

```
ffmpeg -i input-video.avi -y output-video.mp4
```

This might not be the optimal conversion, but it should work!

If you want to take more care, use `ffprobe -i input-video.avi` to learn more about the video and audio encodings embedded in your AVI. 
Then use specific encodings in the `-c` flags to control your output file.
