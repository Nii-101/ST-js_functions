// Implement a function that calculates the average of a list of numbers.

function listAverage(list) {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    let avg = sum / list.length;


    list.length !== 0 ? console.log(avg) : console.log('List is empty');
}


//Transform the function into an arrow function

const listAverageArrowFunction = (list) => {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    let avg = sum / list.length;


    list.length !== 0 ? console.log(avg) : console.log('List is empty');
}

listAverage([0, 1, 2, 5])
listAverageArrowFunction([0, 10, 4, 6])