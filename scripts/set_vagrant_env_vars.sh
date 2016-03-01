#!/usr/bin/env bash
#Replace .profile with .bashrc if required
source ~/.bash_profile
if [ -z "$PORT" ]; then # only checks if VAR is set, regardless of its value
    echo "export PORT=8000" >> /home/vagrant/.bash_profile
fi
