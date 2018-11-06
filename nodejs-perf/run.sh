#!/bin/bash
docker run -it --mount type=bind,source="$(pwd)"/reports,target=/root/reports heou/nodejs-perf:1.0