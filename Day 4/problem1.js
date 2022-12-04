fs = require('fs');

//Function that determines if a pair is contained in the other
function pair_contained(array) {
    var pairs = array.split(",");

    for (i in pairs) {
        pairs[i] = pairs[i].split("-").map(Number); //Obtaining each pair
    }

    if (pairs[0][0] > pairs[1][0]) {
        if (pairs[0][1] <= pairs[1][1]) {
            return 1; //First is contained in the second
        }
        else {
            return 0; //Not contained
        }
    }
    else if (pairs[0][0] < pairs[1][0]) {
        if (pairs[0][1] >= pairs[1][1]) {
            return 1; //Second is contained in the first
        }
        else {
            return 0;
        }
    }
    else{
        return 1; //One of two are contained 
    }
}

//Reading file
fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var array = data.toString().split("\n");
    var result = 0;

    for (i in array) {
        result += pair_contained(array[i]);
    }

    console.log(result);
})