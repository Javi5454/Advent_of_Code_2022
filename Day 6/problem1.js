const { readSync } = require("fs");
const { default: test } = require("node:test");

fs = require("fs");

//Returns position of the start-of-packet
function start_of_packet(text) {
    var array = new Array(4);

    var result = 4; //Base result

    for (let i = 0; i < array.length; i++) { //First 4 letters
        array[i] = text[i]
    }

    while (result < text.length) {
        found = false; //Assume this case
        for (let i = 0; i < array.length; i++) { //Looking for duplicates
            for (let j = 0; j < array.length; j++) {
                if (i != j && array[i] == array[j]) {
                    found = true;
                    break
                }
            }

            if (found) { //Found duplicate
                break;
            }
        }

        if (!found) {
            return result;
        }
        else {
            array.shift(); //Remove first element and let scanning
            array.push(text[result]);
            result++;
        }
    }


}

fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err); //Error management
    }

    var text = data.toString();

    var result = start_of_packet(text);

    console.log(result);
})