let reverse = 0;
let number = 7845962;
let lastDigit;

while(number != 0){
	lastDigit = number % 10;
  reverse = reverse * 10 + lastDigit;
  number = Math.floor(number/10);
}
console.log("Reverse number : " + reverse);