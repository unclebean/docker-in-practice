#!/bin/bash

docker run -h dev-tools -it --mount type=bind,src=/home/deploy/workplace,dst=/root/workplace hugh1984/dev-tools
