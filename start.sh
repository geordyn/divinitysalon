#!/usr/bin/env bash

mkdir db ; mongod --dbpath=db/ --fork --nojournal --syslog & node server & node index &

