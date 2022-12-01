fs = require('fs');

//Reading the file
fs.readFile('./input1.txt', 'utf-8', function (err, data) {
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

    total = total.sort(function (a, b) { return b - a }); //Sorting the numbers in a decreasing order

    console.log(total[0] + total[1] + total[2]); //Showing the sum of the 3 first
})