---
title: Connect to AirVandalGold wifi on Linux
layout: post
tags: [linux, wifi, uidaho]
date: 2018-04-01
---

There is no automatic set up utility or documentation for University of Idaho's AirVandalGold wifi network for Linux users. 

I got it to work using these steps on Ubuntu and Fedora:

1. Go to [ITS Tools page](https://support.uidaho.edu/TDClient/KB/ArticleDet?ID=230), click on 'AirVandalGold Certificates for Linux' and 'Download' (or try this [link](https://downloads.uidaho.edu/Support/AVGCert-2016-10-27.zip)). Note: you may have to log in with your UIdaho account.

2. Extract the certificate zip file to a permanent location in your home directory. The folder will contain two files, `Root-USERTrust.crt` and `wireless.uidaho.edu.crt`.

3. On Gnome, open Settings > Wifi. Click on AirVandal Gold, which should pop up the full manual settings. (On Unity or other desktops, from the Wifi menu, choose 'Edit Connections', then click 'Add'. Choose connection type 'Wi-Fi', click 'Create'. Give it a connection name (this is for your own use), AirVandalGold. Under Wi-Fi tab add SSID: AirVandalGold.)

  - Under Wi-Fi Security tab select/add these options:
    - Security: WPA & WPA2 Enterprise
    - Authentication: Protected EAP (PEAP)
    - CA Certificate: Root-USERTrust.crt (click the directory icon, navigate to the location of the certificates you unzipped, and select `Root-USERTrust.crt`. Adding the other is not necessary)
    - PEAP version: Automatic
    - Inner authentication: MSCHAPv2
    - Username: [your vandal web id]
    - Password: [your vandal web password]

4. You should now be able to connect!
