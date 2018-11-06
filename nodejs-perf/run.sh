#!/bin/bash
docker run -it --mount type=bind,source="$(pwd)"/reports,target=/root/reports --privileged heou/nodejs-perf:1.0