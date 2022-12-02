fs = require('fs');

//Function to return the score
function expected_game(array) {
    switch (array[0]) {
        case 'A':
            if (array[1] == 'Y') { //Need a withdraw
                return 1 + 3; //Rock and withdraw
            }
            else if (array[1] == 'X') {
                return 3 + 0; //Loose and scissors
            }
            else {
                return 2 + 6; //Win and paper
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
                return 3 + 3; //Withdraw and scissors
            }
            else if (array[1] == 'X'){
                return 2 + 0; //Loose and paper
            }
            else{
                return 1 + 6; //Win and rock
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
        scoring += expected_game(array[i]);
    }

    console.log(scoring);
})