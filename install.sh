#!/bin/bash

for d in */ ; do
  cd $d
  echo "Installing dependencies of $d ..."
  npm install
  echo "Building $d ..."
  npm run build
  cd ..
done
