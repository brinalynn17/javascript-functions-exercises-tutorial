let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///

// Convert dollars to euros using dollarToEuro
let euroAmount = dollarToEuro(137);

// Convert euros to yen using euroToYen
let yenAmount = euroToYen(euroAmount);

// Print the result
console.log(`137 dollars is equal to ${yenAmount} yen.`);
console.log(`${dollarAmount} dollars is equal to ${yenAmount} yen.`);
