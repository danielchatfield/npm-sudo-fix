#!/usr/bin/env node
'use strict';

if(process.platform == 'win32') {
    console.log("This seems to windows, you mad man.");
    process.exit();
}

var spawny = require("spawny");

var username = process.env.USER;

spawny("sudo chown -R " + username + " /usr/local/lib/node_modules");

spawny("sudo chown -R " + username + " " + process.env.HOME + "/.npm");
