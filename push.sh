#!/bin/bash

# Get the name of the most recently modified file
file=$(git status --porcelain | head -n 1 | awk '{print $2}')

# Check if a file is detected
if [ -z "$file" ]; then
  echo "No changes detected."
  exit 1
fi

# Use custom commit message if provided, else use default
if [ -n "$1" ]; then
  commit_message="$1"
else
  commit_message="auto commit: Updated $file"
fi

# Add changes, commit with the message, and push
git add .
git commit -m "$commit_message"
git push
