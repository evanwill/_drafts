---
title: Install OpenRefine on Mac
layout: post
tags: [openrefine]
date: 2017-03-01
---

Mac seems to have issues when trying to install OpenRefine--and each version of OS X / macOS has different problems!
The official instructions are on the [OpenRefine wiki](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions#mac-osx), 
but this list brings together resources to trouble shoot some common issues during install. 

1. Open Refine needs **Java JRE**. Go to the [Java page](https://www.java.com/en/), download and install the most up-to-date version for Mac.
    - OS X has a few issues with Java, many are documented at [Oracle Java on Mac OS X](https://java.com/en/download/faq/java_mac.xml). Older versions of Java are automatically disabled by OS X, so make sure yours is up-to-date. If you try the rest of this install process and Refine still doesn't work, you may need the [legacy Java from Apple](https://support.apple.com/kb/DL1572?locale=en_US).

2. **Download** the latest OpenRefine `.dmg` version (as of this post `openrefine-mac-2.7.dmg`) from the [Releases page](https://github.com/OpenRefine/OpenRefine/releases).

3. **Install** by opening the `.dmg` and dragging the OpenRefine icon into the Applications folder icon. 
    - Older versions of OS X might prompt an error message: "Google Refine is damaged and can't be opened". This is due to [OS X Gatekeeper](https://support.apple.com/en-us/HT202491) misidentifying Refine. If you encounter this error, you need to change a setting, in Apple menu > *System Preferences* > *Security & Privacy* > *General* tab > *Allow applications downloaded from:* > change to *Anywhere*.

4. **Run** by double clicking on the OpenRefine icon in he Applications folder. 
    - Recent versions of macOS amy give you a warning at this point saying "OpenRefine is blocked from opening because it is not from an identified developer". Go to *System Preferences* > *Security & Privacy* > *General* tab, and look under *Allow apps downloaded from*. It should say something about "OpenRefine" was blocked, click the *Open Anyway* button.
    - OpenRefine icon should appear in your dock, and a browser window should automatically open. *However*, sometimes a browser window does not automatically open. Then manually navigate to <http://localhost:3333/> or <http://127.0.0.1:3333/> to find the Refine interface.

5. **Shutdown** by clicking the OpenRefine icon in the dock and then typing `Command-Q`.
