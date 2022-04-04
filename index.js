let numberConversion = function(arg) {
	let numArrOne = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let numArrTwo = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	let numberInString = arg.toString();
	let convertedNumber;

    if (numberInString == 0) {
        return "zero";
    } else if (numberInString.length > 1 && numberInString[0] == 0) {
        numberInString = Number(numberInString).toString();
    }

	const tens = (num) => {
		if (num.length == 1 ||
			num.length == 2 && num[0] == 1) {
			return numArrOne[num]
		} else if (num[1] == 0) {
			return numArrTwo[num[0]]
		} else {
			return `${numArrTwo[num[0]]}-${numArrOne[num[1]]}`
		}
	}

	const hundreds = (num) => {
		if (num[1] == 0 && num[2] == 0) {
			return `${numArrOne[num[0]]} hundred`
		} else if (num[1] == 0) {
			return `${numArrOne[num[0]]} hundred and ${numArrOne[num[2]]}`
		} else if (num[1] == 1) {
			let subNum = num[1] + num[2];
			subNum = Number(subNum);
			return `${numArrOne[num[0]]} hundred and ${numArrOne[subNum]}`
		} else if (num[2] == 0) {
			return `${numArrOne[num[0]]} hundred and ${numArrTwo[num[1]]}`
		} else {
			return `${numArrOne[num[0]]} hundred and ${numArrTwo[num[1]]}-${numArrOne[num[2]]}`
		}
	}

	const thousands = (num) => {
		let thousand;
		let restNum;
		if (num.length == 4) {
			thousand = num[0]
		} else if (num.length == 5) {
			thousand = num[0] + num[1]
		} else if (num.length == 6) {
			thousand = num[0] + num[1] + num[2]
		}

		let number = num.replace(thousand, "")
		let thousandInString;

		if (thousand.length < 3) {
			thousandInString = tens(thousand)
		} else if (thousand.length == 3) {
			thousandInString = `${hundreds(thousand)}`
		}
		restNum = Number(number).toString();
		if (restNum == 0) {
            return `${thousandInString} thousand`;
        } else if (restNum.length == 3) {
			return `${thousandInString} thousand ${hundreds(restNum)}`
		} else if (restNum.length == 2) {
			return `${thousandInString} thousand and ${tens(restNum)}`
		} else if (restNum.length == 1) {
			return `${thousandInString} thousand and ${tens(restNum)}`
		}
	}

	const millions = (num) => {
		let millions;
		let restNum;
		if (num.length == 7) {
			millions = num[0]
		} else if (num.length == 8) {
			millions = num[0] + num[1]
		} else if (num.length == 9) {
			millions = num[0] + num[1] + num[2]
		}

		let number = num.replace(millions, "")
		let millionInString;

		restNum = Number(number).toString();

		if (millions.length < 3) {
			millionInString = tens(millions)
		} else if (millions.length == 3) {
			millionInString = `${hundreds(millions)}`
		}

		if (restNum.length >= 4) {
			return `${millionInString} million ${thousands(restNum)}`
		} else if (restNum.length < 3) {
			return `${millionInString} million ${tens(restNum)}`
		} else if (restNum.length == 3) {
			return `${millionInString} million ${hundreds(restNum)}`
		}

	}

	// tens
	if (numberInString.length < 3) {
		convertedNumber = tens(numberInString)
	}

	// hundreds

	if (numberInString.length == 3) {
		convertedNumber = hundreds(numberInString)
	}

	// thousands 

	if (numberInString.length >= 4 && numberInString.length < 7) {
		convertedNumber = thousands(numberInString)
	}

	// millions

	if (numberInString.length >= 7) {
		convertedNumber = millions(numberInString)
	}

	return convertedNumber;
};


const input = document.querySelector("#input");
const result = document.querySelector("#result");

const inputHandler = (e) => {
    if (!e.target.value) {
        result.innerHTML = null;
    } else {
      result.innerHTML = numberConversion(e.target.value)  
    }
}

input.addEventListener("input", inputHandler)  