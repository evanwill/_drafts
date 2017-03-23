---
title: Install OpenRefine on Mac
layout: post
tags: [openrefine]
date: 2016-05-01
---

Mac seems to have a few issues when trying to install OpenRefine.
The official instructions are on the [OpenRefine wiki](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions#mac-osx), 
but this list brings together resources to trouble shoot some common issues. 

1. Open Refine needs **Java JRE**. 
OS X has a few issues with Java, many are documented at [Oracle Java on Mac OS X](https://java.com/en/download/faq/java_mac.xml). 
Older versions of Java are automatically disabled by OS X. 
Its best to go to the [Java page](https://www.java.com/en/) and just download and install the most up-to-date version for Mac.
If you try the rest of this install process and Refine still doesn't work, you may need the [legacy Java from Apple](https://support.apple.com/kb/DL1572?locale=en_US).

2. **Download** the `.dmg` version of the latest OpenRefine release, `openrefine-mac-2.6-rc.2.dmg`, from  https://github.com/OpenRefine/OpenRefine/releases

3. **Install** by opening the `.dmg` and dragging the OpenRefine icon into the Applications folder icon. 
Older versions of Refine and/or OS X might prompt an error message: "Google Refine is damaged and can't be opened". 
This is due to [OS X Gatekeeper](https://support.apple.com/en-us/HT202491) misidentifying Refine.
You need to change a setting, in Apple menu > System Preferences... > Security & Privacy > General tab > "Allow applications downloaded from:" > change to "Anywhere".

4. **Run** by double clicking on the OpenRefine icon in he Applications folder. 
OpenRefine icon should appear in your dock, and a browser window should automatically open. 
*However*, sometimes a browser window does not automatically open.
Then manually navigate to http://localhost:3333/ or http://127.0.0.1:3333/ to find the Refine interface.

5. **Shutdown** by clicking the OpenRefine icon in the dock and then typing `Command-Q`.
