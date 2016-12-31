#!/bin/bash

activate ()
{
    source venv/bin/activate
}

if [ $# -gt 0 ]; then
    if [ $1 == "venv" ]; then
        echo Creating Virtual Env
        virtualenv -p $(which python3.5) venv && activate && pip install -r requirements.txt
    elif [ $1 == "venv-activate" ]; then
        if [ $(python -c "import sys; print(int(hasattr(sys, 'real_prefix')))") == 0 ]; then
            echo Starting Virtual Env
            activate
        else
            echo Virtual Env already started
        fi
    else
        echo Could not parse arguments. $@
        echo "Usage:"
        echo "    bash run.sh [venv] [venv-activate]"
    fi
else
    echo "Running app."
    npm install && \
    bower install && \
    python project/app.py
fi
