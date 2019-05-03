#!/bin/bash

# add to npm scripts:
# "git": "hooks/git.sh"

echo "add, commit & push - Please input commit message then press [ENTER]"
read commit

query="git add . && git commit -m $commit && git push"

eval "$query"
