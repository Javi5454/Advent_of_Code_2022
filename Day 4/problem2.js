fs = require('fs');

//Function that determines if a pair is overlaping in the other
function pair_overlaped(array) {
    var pairs = array.split(",");

    for (i in pairs) {
        pairs[i] = pairs[i].split("-").map(Number); //Obtaining each pair
    }

    if (pairs[0][0] <= pairs[1][0] && pairs[1][0] <= pairs[0][1]) {
        return 1;
    }
    else if (pairs[1][0] <= pairs[0][0] && pairs[0][0] <= pairs[1][1]){
        return 1;
    }
    else{
        return 0;
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
        result += pair_overlaped(array[i]);
    }

    console.log(result);
})