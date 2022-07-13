module.exports = function toReadable (number) {

	const Hundreds = {1:'one hundred', 2:'two hundred', 3:'three hundred', 4:'four hundred', 5:'five hundred', 6:'six hundred',
	 7:'seven hundred', 8:'eight hundred', 9:'nine hundred'}
  

	const Tens = {10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen',
	 18:'eighteen', 19:'nineteen'}

	 const RoundTens = {2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'}

	const Ones = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}

	let Snumber = number.toString();

	let result = "";

	if (Snumber.length === 3)
	{
		result += Hundreds[Number(Snumber[0])];
		if (Snumber[1] != "0"){
			for (let tenNum in Tens){
				if (Snumber.substring(1) === tenNum){
					result += " "+Tens[tenNum];
					return result;					
				}		
			}

			for (let rTen in RoundTens){
				if (Snumber[1] === rTen){
					result += " "+RoundTens[rTen];
					break;									
				}		
			}


			if (Snumber[2] != "0"){
				result += " "+Ones[Number(Snumber[2])];
			}
		}
		else{
			if (Snumber[2] != "0"){
				result += " "+Ones[Number(Snumber[2])];
			}
		}
	}
	else if (Snumber.length === 2){

		for (let tenNum in Tens){
				if (Snumber === tenNum){
					result +=Tens[tenNum];
					return result;					
				}		
			}

			for (let rTen in RoundTens){
				if (Snumber[0] === rTen){
					result += RoundTens[rTen];
					break;									
				}		
			}

			if (Snumber[1] != "0"){
				result += " "+Ones[Number(Snumber[1])];
			}
								
	}
	else{
		if (Snumber[0] != "0"){
			result += Ones[Number(Snumber[0])];
		}
		else result += "zero";
	}

	return result;

}
