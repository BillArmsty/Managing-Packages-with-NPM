//Caesers Cipher
function rot13 (str) 
//create an accumulator
 let accumulator = "";

//loop through the string
 for (let i = 0; i < str.length; i++) {
	 const char = str[i];
	 const isALetter = alphabet.includes(char);
//if the character is not a letter add to accumulator, else, rotate / +or - 13 to accumulator then return accumulator
	 if(isALetter === false){
		 accumulator += char;
	 }else{
		 const charIndex = alphabet.findIndex((c) => c === char) ;
 accumulator += alphabet[charIndex +13] || alphabet [charIndex - 13];
	 }
 }

()

	