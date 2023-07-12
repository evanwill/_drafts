---
title: How to setup Etherpad on a cloud VM
layout: post
tags: [install]
date: 2016-06-01
hide: true
---

Set up an Ubuntu server, then follow these directions to get an instance of Etherpad up and running!
For full documentation check out the [Etherpad-lite wiki](https://github.com/ether/etherpad-lite/wiki).

## Install dependencies

```
sudo apt-get install gzip git-core curl python libssl-dev pkg-config build-essential apache2
```

## Install nodejs

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Create a non-root user

add a user to install etherpad, and give it a password:

```
sudo useradd -m ether-user
sudo passwd ether-user
```

## Get Etherpad

As ether-user (`sudo su - ether-user`), grab Etherpad from the repository:

`git clone https://github.com/ether/etherpad-lite.git`

At this point you can start it with the default set up:

```
cd etherpad-lite
bin/run.sh
```

It will be running at server.ip.address:9001. 
You will have to open port 9001 in your network rules to make it available to users.
But we should go a bit further to set up a [proper database](https://github.com/ether/etherpad-lite/wiki/How-to-use-Etherpad-Lite-with-MySQL).

# Set up DB 

Install MySQL `sudo apt-get install mysql-server` and set a strong password.
Start up MySQL with `mysql -u root -p`
then create a database and give your user access with a strong password: 

```
create database etherpadlite;
grant CREATE,ALTER,SELECT,INSERT,UPDATE,DELETE on etherpadlite.* to ether-user@localhost identified by 'goodpassword';
FLUSH PRIVILEGES;
exit
```

Next, edit the `settings.json` file for your Etherpad instance to add the correct details about your new database.
First, look for the database setting in the file, and comment out the settings for dirtyDB like this:
```
/* "dbType" : "dirty",
  //the database specific settings
  "dbSettings" : {
                   "filename" : "var/dirty.db"
                 },
*/
```

Next, uncomment and edit the example given the dirty set up:
```
  // An Example of MySQL Configuration
   "dbType" : "mysql",
   "dbSettings" : {
                    "user"    : "ether-user",
                    "host"    : "localhost",
                    "password": "goodpassword",
                    "database": "etherpadlite",
                    "charset" : "utf8mb4"
                  },
```

## Set up a proxy to make your URLs nicer

The [wiki](https://github.com/ether/etherpad-lite/wiki/How-to-put-Etherpad-Lite-behind-a-reverse-Proxy) gives directions for setting up proxies depending on your server. 
We will use a simple Apache proxy.
Go to the Apache2 settings `cd /etc/apache2/sites-enabled/`.
Edit the config file inside, `nano default.config`.
Add the basic proxy described by the wiki:

```
<VirtualHost *:80>
  LoadModule  proxy_module         /usr/lib/apache2/modules/mod_proxy.so
  LoadModule  proxy_http_module    /usr/lib/apache2/modules/mod_proxy_http.so
  LoadModule  headers_module       /usr/lib/apache2/modules/mod_headers.so
  LoadModule  deflate_module       /usr/lib/apache2/modules/mod_deflate.so
  ProxyVia On
  ProxyRequests Off
  ProxyPass / http://localhost:9001/
  ProxyPassReverse / http://localhost:9001/
  ProxyPreserveHost on
  <Proxy *>
    Options FollowSymLinks MultiViews
    AllowOverride All
    Order allow,deny
    allow from all
  </Proxy>
</VirtualHost>
```

If you want to have your own index, it is easiest to change `ProxyPass / http://localhost:9001/` to one level deeper, 
such as `ProxyPass /pad/ http://localhost:9001/`.
Then you can use the root level `/` for your own pages, in the default Apache directory `/var/www/html/`.

## Run with screen

If you just want to get Etherpad up and running without monkeying around with start up,
you can run it using `screen` and detach from your terminal.

```
screen
sudo su - ether-user
cd etherpad-lite
bin/run.sh
```

Then type `ctrl+a` and `d`. The process will detach from your terminal and continue running. 
Basic Etherpad is ready!

