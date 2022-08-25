//1. Write a function that takes two numbers (a and b) as Sum a and Return the result

const sum = (a, b) => {
    return a + b;
};

console.log("task1:", sum(4, 5));

//OR

function sum(a, b) {
    return a + b;
}

console.log("task1:", sum(3, 4));

//2.Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
const string = (value) => {
    const last3 = value.slice(-3);
    return last3;
};

console.log("task2:", string("Giedre"));

//OR
function string(value) {
    return value.slice(-3);
};

console.log("task2:", string("Giedre"));

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.
const split = (a) => {
    const digits = Array.from(String(a), Number);
    return digits;
};

console.log("task3:", split(1234567));