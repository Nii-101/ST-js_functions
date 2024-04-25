// Write a function that calculates the area of a rectangle given its length and width as parameters. Refactor this function using an arrow function.


//Main Function
function areaOfRectangle(p1, p2){
    let area
    p2 === undefined ? area = p1 * p1 : area = p2 * p1
    console.log(`The area of the rectangle is ${area}`)
}


//Arrow Function
const areaOfRectangleArrowFunction = (p1, p2) => {
    let area
    p2 === undefined ? area = p1 * p1 : area = p2 * p1
    console.log(`The area of the rectangle is ${area}`)
}

//TestCases Output = [25, 42]
areaOfRectangle(5)
areaOfRectangleArrowFunction(7, 6)