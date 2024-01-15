#!/bin/bash


# BRANCH=`git rev-parse --abbrev-ref HEAD`; if [ \"$BRANCH\" = \"main\" ]; then echo \"No direct commit to main. Please push changes to a new branch and create a PR to main.\"; git reset HEAD; exit 1; fi;

echo 'Pre-commit checks like linting'  

npm run lint

exit 0