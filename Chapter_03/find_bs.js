// adding text to test git and kiln. 
// Your code here.function countChar(word, singleChar) {
	var wordString = String(word);
	var numberSingleChars = 0;
  
  for (var count = 0; count < wordString.length; count++) {
    
    if (wordString.charAt(count) == singleChar) {
		numberSingleChars = numberSingleChars + 1;
    }
    
  }

  return numberSingleChars;
}

function countBs(string) {
  return countChar(string, "B");
}
