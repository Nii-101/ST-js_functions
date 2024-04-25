//Create a function that checks if a number is even or odd and returns "even" or "odd" accordingly. Then, rewrite it using an arrow function.

// Main Function
function checkIfEvenOrOdd(num){
    num % 2 === 0 ? console.log('even') : console.log('odd');
}

//Arrow Function
const checkIfEvenOrOddArrowFunc= (num) => {
    num % 2 === 0 ? console.log('even') : console.log('odd');
}


// TestCases Output: [odd, even, even, odd]
checkIfEvenOrOdd(25)
checkIfEvenOrOdd(100)
checkIfEvenOrOddArrowFunc(30)
checkIfEvenOrOddArrowFunc(1)