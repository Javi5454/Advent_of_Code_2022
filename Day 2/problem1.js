fs = require('fs');

//Function to return the score
function score(array) {
    switch (array[0]) {
        case 'A':
            if (array[1] == 'Y') {
                return 2 + 6; //You won and chose paper
            }
            else if (array[1] == 'X') {
                return 1 + 3; //Withdraw and chose rock
            }
            else {
                return 3 + 0; //Lost and chose scissors
            }
            break;
        case 'B':
            if(array[1] == 'Y'){
                return 2 + 3; //Withdraw and chose paper
            }
            else if (array[1] == 'X'){
                return 1 + 0; //Lost and chose rock
            }
            else{
                return 3 + 6; //You won and chose scissors
            }
            break;

        case 'C':
            if(array[1] == 'Y'){
                return 2 + 0; //Lost and chose papaer
            }
            else if (array[1] == 'X'){
                return 1 + 6; //Won and chose rock
            }
            else{
                return 3 + 3; //Withdraw and chose scissors
            }
    }
}

//Reading the file
fs.readFile('./input1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    //Starting to solve the problem
    var array = data.toString().split("\n");

    var scoring = 0;

    //Spliting pairs in the array
    for (i in array) {
        array[i] = array[i].split(" ");
        scoring += score(array[i]);
    }

    console.log(scoring);
})