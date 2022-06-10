#!/bin/sh

mkdir rc-tests
cd rc-tests
git clone https://gitlab.com/rc-it/internship/rc-i1
cd rc-i1
npm install

# create a branch
# git checkout -b yourName