// Your code here.
for (var number = 1; number <= 100; number += 1){
  //if divisible by both 3 and 5
  if (number % 3 == 0 && number % 5 == 0)
    console.log("FizzBuzz");
  //if divisible only by 3 but not 5
  else if (number % 3 == 0 && number % 5 != 0)
    console.log("Fizz");
  //if divisible by 5 (but not 3)
  else if (number % 5 == 0)
    console.log("Buzz");
  else
  	console.log(number)
}