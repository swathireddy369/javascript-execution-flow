#!/bin/bash

# Get the name of the most recently modified file
file=$(git status --porcelain | head -n 1 | awk '{print $2}')

# Check if a file is detected
if [ -z "$file" ]; then
  echo "No changes detected."
  exit 1
fi

# Create a dynamic commit message with the file name
commit_message="auto commit:Updated $file"

# Add changes, commit with the dynamic message, and push
git add .
git commit -m "$commit_message"
git push
