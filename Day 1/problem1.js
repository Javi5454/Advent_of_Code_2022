fs = require('fs');

//Reading the file
fs.readFile('./input.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var array = data.toString().split("\n"); //Array with data


    var total = new Array();

    var current_sum = 0; //Current sum of an elf

    for (i in array) {
        if (array[i] != '') {
            current_sum += parseInt(array[i]);
        }
        else {
            total.push(current_sum);
            current_sum = 0;
        }
    }

    //Last case
    total.push(current_sum);

    var result = 0;

    for (i in total) {
        if (total[i] > result) {
            result = total[i];
        }
    }

    console.log(result);
})