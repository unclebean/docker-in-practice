#!/bin/bash

docker run -h dev-tools -it --mount type=bind,source="$(pwd)"/workplace,target=/root/workplace hugh1984/dev-tools
