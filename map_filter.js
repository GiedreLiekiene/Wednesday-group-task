//string, array and number methods for assessment

//reduce, filter, map is always working with arrays
//all of those can be done with for loops, with react we will be doing only .map, .filter, .reduce
//but advice would be not to use those

//map
import { data } from "./data.js";


function mapData(products) {
    return products.map((product) => {
        return console.log(product);
    });
}
mapData(data);

//for
for (let i = 0; data.length > i; i++) {
    console.log(data[i]);
}

//filter

import { data } from "./data.js";

function filterData(products) {
    const filteredDataByPrice = products.filter((product) => product.price > 500);
    return filteredDataByPrice;
}

console.log(filterData(data));

//OR

import { data } from "./data.js";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterData(products) {
    const filteredDataByPrice = numbers.filter((number) => number % 2 === 0);
    return filteredDataByPrice;
}

console.log(filterData(data));
console.log("rocket ~ numbers", numbers);

//reduce takes a callback

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reduceNumbers(numbers) {
    const reduceNumbers = numbers.reduce((value, array) => value + array, 0);
    return reducedNumbers;
}

console.log(reduceNumbers(data));