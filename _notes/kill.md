---
title: Kill Unresponsive Apps using Terminal 
layout: post
tags: [linux]
date: 2017-05-30
---

Lately on Ubuntu Firefox has been going unresponsive, then makes System Monitor go unresponsive when trying to kill it. 
Very frustrating, and I always wish I remembered how to kill processes on the command line. 

Well, it's not very hard, so hopefully I will really remember if I write it down here (since I can't access my notes if Firefox is freezing everything)...

Basically, you need to know the process ID of the application, then send a `kill` command for that PID.

1. Find the PID, use one of these methods depending on what you know:
    - `top`, simply type it into the terminal to get a visual display of the running processes and system resources, similar to System Monitor. 
    The PID is the first column, and the offending unresponsive app is often at the top, using up 100% of one CPU core.
    - `ps x`, will give a static list of all your processes (or `ps aux` for all users). You can sort through this using grep, like `ps aux | grep firefox`.
    - `pgrep`, if you are in a hurry and know the offending app by name, try `pgrep firefox` to return a single PID. 
2. Kill the process:
    - first, try `kill` plus the PID, like `kill 10705`. This sends a polite message to the process to shutdown. If the app is unresponsive, it probably won't work.
    - then, force the kill by using the SIGKILL flag (`-9` or `-KILL`), which directly tells the kernel to kill the process, rather than asking the app first. For example, `kill -KILL 10705`

Don't forget, `kill -KILL`!
