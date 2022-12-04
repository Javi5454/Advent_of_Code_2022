fs = require('fs');


//Function to find a common letter in a 3 given strings
function common_letter(text1, text2, text3) {
    //Looking for the repeated char
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] == text2[j]) {
                for (let k = 0; k < text3.length; k++) {
                    if (text2[j] == text3[k]) {
                        return text3[k];
                    }
                }
            }
        }
    }
}


//Function that calculates the score of a specific char
function letter_score(char) {
    //Checking ASCII value
    var value = char.charCodeAt(0);

    if (value >= 97) { //97 is 'a' so the char is lowercase
        return value % 97 + 1;
    }
    else { //Is uppercase
        return value % 65 + 27; //Uppercase scores starts at 27
    }
}

//Reading file
fs.readFile('./input1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var array = data.toString().split("\n");

    var repetead = new Array(); //Array to store repeated letters

    for (let i = 0; i < array.length; i += 3) {
        repetead.push(common_letter(array[i], array[i + 1], array[i + 2])); //Getting the letters
    }

    //Calculate the scoring
    var result = 0;

    for(i in repetead){
        result += letter_score(repetead[i]);
    }

    console.log(result);
})