#!/bin/bash
docker run -it --mount type=bind,source="$(pwd)"/reports,target=/root/reports --security-opt seccomp="$(pwd)"/profile.json heou/nodejs-perf:1.0