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

//Function to count scenic_score
function scenic_score(matrix) {
    var result = []; //To store result

    for (let i = 0; i < matrix.length; i++) {
        var row_to_add = [];
        for (let j = 0; j < matrix[i].length; j++) {
            var up = 0;
            var right = 0;
            var down = 0;
            var left = 0;

            for(let k = i - 1; k >= 0; k--){
                up++;
                if(matrix[i][j] <= matrix[k][j]){
                    break;
                }
            }

            for(let k = i + 1; k < matrix.length; k++){
                down++;
                if(matrix[i][j] <= matrix[k][j]){
                    break;
                }
            }

            for(let k = j - 1; k >= 0; k--){
                left++;
                if(matrix[i][j] <= matrix[i][k]){
                    break;
                }
            }

            for(let k = j + 1; k < matrix[i].length; k++){
                right++;
                if(matrix[i][j] <= matrix[i][k]){
                    break;
                }
            }

            row_to_add.push(up*down*right*left);
        }

        result.push(row_to_add);
    }

    var max = 0;

    for(i in result){
        for(j in result){
            if (result[i][j] > max){
                max = result[i][j];
            }
        }
    }

    return max;
}

fs.readFile('input1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }

    var array = data.toString().split("\n");

    var matrix = generate_matrix(array);

    var result = scenic_score(matrix);

    console.log(result);
})