#!/usr/bin/env node
'use strict';

var spawny = require("spawny");

var username = process.env['USER'];

spawny("sudo chown -R " + username + " /usr/local/lib/node_modules");

