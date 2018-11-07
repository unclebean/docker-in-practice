## Using [Linux Perf Tool](http://www.brendangregg.com/perf.html) for performance tuning

## Instruction

1. execture **build.sh** to build docker image.
2. executre **run.sh** to run docker container in interactive mode.
3. running sample nodejs app with perf_basic_prof to get PID. 
    ```
    # start application to get PID
    node --perf_basic_prof index.js &
    ```
4. launch apache benchmark
    ```
    ab -k -c 10 -n 2000 "http://localhost:3000/formula?input=2000"
    ```
5. execute perf with node application PID
    ```
    perf record -F 99 -p [PID] -g -- sleep 30
    perf script > perf.stacks
    ```

