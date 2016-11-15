# Connect to AirVandalGold wifi on Linux

There is no automatic set up utility or documentation for University of Idaho's AirVandalGold wifi network for Linux users. 

I got it to work using these steps on Ubuntu:

1. Go to [ITS Tools page](http://www.uidaho.edu/infrastructure/its/services/software/its-tools), click on 'AirVandalGold Certificates for Linux' and 'Download Now' (or try this [link](https://downloads.uidaho.edu/Support/AVGCert.zip)). Note: you will have to log in with your UIdaho account.

2. Extract the certificate zip file to a permanent location in your home directory.

3. From wifi menu, choose 'Edit Connections', then click 'Add'
    - Choose connection type 'Wi-Fi', click 'Create'
    
    - Give it a connection name (this is for your own use), AirVandalGold.
    
    - Under Wi-Fi tab add SSID: AirVandalGold
    
    - Under Wi-Fi Security tab select/add these options:
      - Security: WPA & WPA2 Enterprise
      - Authentication: Protected EAP (PEAP)
      - CA Certificate: AddTrustExternalCARoot.cer (click the directory icon, navigate to the location of the certificates you unzipped, and select AddTrustExternalCARoot.cer. Adding the other is not necessary)
      - PEAP version: Automatic
      - Inner authentication: MSCHAPv2
      - Username: [your vandal web id]
      - Password: [your vandal web password]
    
    - Click save.

4. You should now be able to connect!