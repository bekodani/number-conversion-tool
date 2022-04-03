 let numberConversion = function(arg) {
    let numArrOne = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numArrTwo = ["", "", "twenty" ,"thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numberInString = arg.toString();
    let number = "";

    const tens = (arr, num) => {
        return arr[num]
    }

    if (numberInString.length == 1 || 
        numberInString.length == 2 && numberInString[0] == 1) {
        number = tens(numArrOne, arg)
    } else if (numberInString.length == 2) {
        if (numberInString[1] == 0) {
            number = tens(numArrTwo, numberInString[0])
        } else {
            number = `${tens(numArrTwo, numberInString[0])}-${tens(numArrOne,numberInString[1])}`
        }
    }

    /* let convertedString = '';

    if (numberInString.length == 3) {
        hundreds(numberInString)
    }

    function hundreds(param) {
        if (param[1] == 0 && param[2] == 0) {
            convertedString = `${numArrOne[param[0]-1]} hundred`
        }

        else if (param[1] == 0) {
            convertedString = `${numArrOne[param[0]-1]} hundred and ${numArrOne[param[2]-1]}`
        }

        else if (param[2] == 0) {
            convertedString = `${numArrOne[param[0]-1]} hundred and ${numArrTwo[param[1]-2]}`
        } 
        
        else if (param[1] == 1){
            let subNum = param[1]+param[2];
            subNum = Number(subNum)
            convertedString = `${numArrOne[param[0]-1]} hundred and ${numArrOne[subNum-1]}`
        } else {
            convertedString = `${numArrOne[param[0]-1]} hundred and ${numArrTwo[param[1]-2]}-${numArrOne[param[2]-1]}`
        }

    }
     convertedString = `three hundred and forty-two thousand two hundred and fifty-one` 
    
     if (numberInString.length == 1 || 
        num == 10 || 
        num == 11 || 
        num == 12 || 
        num == 13 || 
        num == 14 || 
        num == 15 || 
        num == 16 || 
        num == 17 || 
        num == 18 || 
        num == 19) {
        convertedString = `${numArrOne[num-1]}`
    }

    else if (numberInString.length == 2) {
        if (numberInString[1] == 0) {
            convertedString = `${numArrTwo[numberInString[0]-2]}`
        } else {
            convertedString = `${numArrTwo[numberInString[0]-2]}-${numArrOne[numberInString[1]-1]}`
        }
    }

    else if (numberInString.length == 3) {
        if (numberInString[1] == 0 && numberInString[2] == 0) {
            convertedString = `${numArrOne[numberInString[0]-1]} hundred`
        }

        else if (numberInString[1] == 0) {
            convertedString = `${numArrOne[numberInString[0]-1]} hundred and ${numArrOne[numberInString[2]-1]}`
        }

        else if (numberInString[2] == 0) {
            convertedString = `${numArrOne[numberInString[0]-1]} hundred and ${numArrTwo[numberInString[1]-2]}`
        } 
        
        else if (numberInString[1] == 1){
            let subNum = numberInString[1]+numberInString[2];
            subNum = Number(subNum)
            convertedString = `${numArrOne[numberInString[0]-1]} hundred and ${numArrOne[subNum-1]}`
        } else {
            convertedString = `${numArrOne[numberInString[0]-1]} hundred and ${numArrTwo[numberInString[1]-2]}-${numArrOne[numberInString[2]-1]}`
        }
    } */

    return number;
};

console.log(numberConversion(80)) 
