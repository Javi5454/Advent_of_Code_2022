const path = require('path');

fs = require('fs');

function calculate_size(array) {
    const sizes = {'/': 0 };
    const paths = ['/'];

    for(let i = 1; i < array.length; i++){
        const [, cmd, dir] = array[i].split(" ");

        if(cmd == "ls"){
            for(i++; i < array.length; i++){
                const parts = array[i].split(' ');

                if(parts[0] == "$"){
                    i--;
                    break;
                }
                else if(parts[0] != 'dir'){
                    for (const path of paths){
                        sizes[path] = (sizes[path] ?? 0) + +parts[0];
                    }
                }
            }
        }
        else{
            if(dir == '..'){
                paths.pop();
            }
            else{
                paths.push(paths.at(-1) + dir + "/")
            }
        }
    }

    return sizes;
}

fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }

    var array = data.toString().split("\n");

    var paths = calculate_size(array);

    var result = Math.min(...Object.values(paths).filter((size) => size >= paths['/'] - 40000000));

    console.log(result);
})