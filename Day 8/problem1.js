fs = require('fs');

//Function to generate matrix
function generate_matrix(array) {
    var matrix = [];

    for (i in array) {
        var row_to_add = [];
        for (j in array[i]) {
            row_to_add.push(parseInt(array[i].at(j)));
        }

        matrix.push(row_to_add);
    }

    return matrix;
}

//Function to count visible trees
function visible_trees(matrix) {
    var result = matrix.length * 2 + matrix[0].length * 2 - 4; //-4 for not counting corners twice

    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
            var visible = true;
            for (let k = 0; k < j; k++) {
                if (matrix[i][j] <= matrix[i][k]) {
                    visible = false;
                    break;
                }
            }

            if(!visible){
                visible = true;
                for(let k = j + 1; k < matrix[j].length; k++){
                    if(matrix[i][j] <= matrix[i][k]){
                        visible = false;
                        break;
                    }
                }
            }

            if (!visible) {
                visible = true;
                for (let k = 0; k < i; k++) {
                    if (matrix[i][j] <= matrix[k][j]) {
                        visible = false;
                        break;
                    }
                }
            }

            if(!visible){
                visible = true;
                for(let k = i + 1; k < matrix.length; k++){
                    if(matrix[i][j] <= matrix[k][j]){
                        visible = false;
                        break;
                    }
                }
            }

            if (visible) {
                result++;
            }
            else {
                visible = true;
            }
        }
    }

    return result;
}

fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }

    var array = data.toString().split("\n");

    var matrix = generate_matrix(array);

    var result = visible_trees(matrix);

    console.log(result);
})