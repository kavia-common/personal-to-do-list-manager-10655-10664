#!/bin/bash
cd /home/kavia/workspace/code-generation/personal-to-do-list-manager-10655-10664/todo_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

