#!/bin/bash

# add to npm scripts:
# "git": "hooks/git.sh"

query="yarn fix"
eval "$query"

echo "add, commit & push - Please input commit message then press [ENTER]"
read commit

query="git add . && git commit -m $commit && git push"
eval "$query"
