var ranger = function(lowEnd, highEnd) {

var numberSequence = [ ];

  for (var i = lowEnd; i <= highEnd; i++) {
 	numberSequence.push(i);
	}
	return numberSequence;
}



function sum(numberSequence) {
  var total = 0;
  for (var i = 0; i < numberSequence.length; i++)
    total += numberSequence[i];
  return total;
}


console.log(sum(ranger(1,20)));

console.log(ranger(1,20));

