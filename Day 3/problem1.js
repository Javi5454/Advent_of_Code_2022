fs = require('fs');

//Function to find a common letter in a two part splited given text
function common_letter(text){
    var longitud = text.length / 2; 

    var expresion = ".{1," + longitud + "}"; //Regular expresion to split the string in two
    var re = new RegExp(expresion,"g");

    var splited_text = text.match(re); //Spliting the text

    //Looking for the repeated char
    for(let i = 0; i < longitud; i++){
        for(let j = 0; j < longitud; j++){
            if(splited_text[0][i] == splited_text[1][j]){
                return splited_text[1][j]; //Returns the letter
            }
        }
    }

}

//Function that calculates the score of a specific char
function letter_score(char){
    //Checking ASCII value
    var value = char.charCodeAt(0);

    if(value >= 97){ //97 is 'a' so the char is lowercase
        return value % 97 + 1;
    }
    else{ //Is uppercase
        return value % 65 + 27; //Uppercase scores starts at 27
    }
}

//Reading file
fs.readFile('./input1.txt','utf-8', function(err,data){
    if(err){
        return console.log(err);
    }

    var array = data.toString().split("\n");

    var repetead = new Array(); //Array to store repeated letters

    for (i in array){
        repetead.push(common_letter(array[i])); //Getting the letters
    }

    var result = 0; //Result of the sum

    for (i in repetead){
        result += letter_score(repetead[i]);
    }

    console.log(result);
})