fs = require('fs');

//Function that parses input
function parse_input(data) {
    var array = data.toString().split("\n");

    var moves = new Array();
    var puzzle = new Array();

    middle = false;

    for (i in array) { //Separating puzzle and moves
        if (!middle) {
            if (array[i] != '') {
                puzzle.push(array[i])
            }
            else {
                middle = true;
            }
        }
        else {
            moves.push(array[i]);
        }
    }

    //Parsing puzzle to a matrix
    puzzle.pop(); //Deleting number row
    matrix = new Array();

    for (i in puzzle) {
        row_to_add = new Array();
        puzzle[i] = puzzle[i].replace(/\s/g, '.');
        puzzle[i] = puzzle[i].replace(/\.{4}/g, '.').split(".");

        for (j in puzzle[i]) {
            row_to_add.push(puzzle[i][j][1]); //Selecting the letter
        }

        matrix.push(row_to_add);
    }

    for(i in matrix){
        for(j in matrix[i]){
            if(matrix[i][j] == undefined){
                matrix[i][j] = ''; //Easy to debug
            }
        }
    }

    //Parsing moves to ints
    for (i in moves) {
        moves[i] = moves[i].replace("move ", '');
        moves[i] = moves[i].replace(" from ", " ");
        moves[i] = moves[i].replace(" to ", " ");
        moves[i] = moves[i].split(" ").map(Number);
    }


    return [matrix, moves];
}

//Function that makes moves
function make_move(matrix, move) {
    //Looking for the top of our column
    var top = matrix.length - 1; //Def value
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][move[1]-1] != ''){
            top = i;
            break;
        }
    }

    //Taking carters
    var containers = new Array();
    for (let i = 0; i < move[0]; i++) { //Amount of moves to do
        containers.push(matrix[top][move[1] - 1]);
        matrix[top][move[1] - 1] = '';
        top++;
    }

    //Looking for top of destination
    top = matrix.length - 1; //Def value
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][move[2]-1] != ''){
            top = i - 1;
            break;
        }
    }

    for(let i = containers.length - 1; i >= 0; i--){
        if(top == -1){
            matrix.unshift([]);
            for(j in matrix[1]){
                matrix[0].push('');
            }
            matrix[0][move[2] - 1] = containers[i];
            top = -1;
        }
        else{
            matrix[top][move[2] - 1] = containers[i];
            top--;
        }
    }
}

//Function to read top of the columns
function read_result(matrix){
    var result = "";

    for(let j = 0; j < matrix[0].length; j++){
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][j] != ''){
                result += matrix[i][j];
                break;
            }
        }
    }

    return result;
}

fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }

    var array = parse_input(data);

    for (i in array[1]) {
        make_move(matrix, array[1][i]);
    }

    var result = read_result(array[0]);
    console.log(result);
})