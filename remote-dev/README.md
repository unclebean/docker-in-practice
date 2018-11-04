## Docker for remote development

### Support program language
    1. python3
    2. golang 1.11
    3. nodejs 10.33
    4. elixir

### How to build docker image

    docker build -t [user/feature:version] .

    Also can use build.sh to build docker image


### How to run docker container


    docker run -h hosename --mount type=bind,src=[source dirctory path],dst=[destination path] -it [image name]
    docker ps // to check container ID
    docker rename [container ID] [new name]
    docker start -i [new name] //next time no need to through run to generate a new container
    
    Already push image to docker hub, so can use run.sh to run image(please confirm the src path in run.sh)

### How to change image to add more configuration 
    1. Running docker container from existing image wiht -i, then change something
    
    2. Open another cmd to execute:

       docker commit [container ID/name] [image name]:[version]

### How to use tmux 
    1. Created one session in ~/tmux.session, can use ~/start_tmux.sh to launch tmux with splitted panes
    
    2. Change pane size
    
       ctrl+b alt + left/right arrow

### How to use nvim
    1. change edit file inside nvim
       :edit file path
    
    2. explor files - netrw
       - Switch pane ctrl W w
       - :Explore - opens netrw in the current window
       - :Sexplore - opens netrw in a horizontal split
       - :Vexplore - opens netrw in a vertical split
    
    3. replace text
       :s/foo/bar/g	    Change each 'foo' to 'bar' in the current line.
       :%s/foo/bar/g    Change each 'foo' to 'bar' in all the lines.