// Write a function that takes a number as input and returns its square
function squareOfNumber(userNum){
    console.log(userNum * userNum)
}

// Arrow function
const squareOfNumberArrowFunction = (userNum) => {
    console.log(userNum * userNum)
}


//TestCases Output: [25, 400]
squareOfNumber(5)
squareOfNumberArrowFunction(20)