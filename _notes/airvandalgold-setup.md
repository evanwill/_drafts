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

You should now be able to connect!

## VPN 

You can also connect to UI VPN on Linux:

1. Request VPN access by starting an ITS ticket if you aren't already set up with permissions.
2. Download the Cisco AnyConnect VPN software from [ITS software page](https://support.uidaho.edu/TDClient/40/Portal/KB/ArticleDet?ID=231#cac-linux-64).
3. Follow [VPN install instructions](https://support.uidaho.edu/TDClient/40/Portal/KB/ArticleDet?ID=38). Even though it is out of date, the `sh` install script should work, taking just a few seconds.
4. Open Cisco AnyConnect, in the "Connect to:" box add `vpn.uidaho.edu`, then use your UI netid and password. Your Duo two factor id will be prompted to complete the log in. The first time you connect, the client will immediately download and install an update. 

Once connected via VPN, it is like you are connected to the network on campus. 
You can also then connect to the shared drives (although these are being phased out for OneDrive) and remote desktop.

To connect to shared drives, you can use the "Other locations" > "connect to server" option in Files. 
However, this is usually very slow because Ubuntu uses an out-of-date SMB version to retrieve directory information ([see note](https://askubuntu.com/questions/1179576/ubuntu-18-04-problem-to-connect-to-windows-10-smb-share)). 
It is better to manually mount the share, once you have connected via VPN.

Remote desktop works well with the default Remmina remote client:

1. The windows computer must be set up to enable remote desktop (must be admin). 
2. Connect via VPN.
3. Open Remmina and click "create new connection profile".
4. Use the computer name given during windows setup, something like xxxx.uidaho.edu (don't fill in other fields).
5. accept security certificate.
6. use UI netid and password to log in (leave Domain blank).
