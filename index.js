//1. Write a function that takes two numbers (a and b) as Sum a and Return the result

const sum = (a, b) => {
    return a + b;
};

console.log("task1:", sum(4, 5));

//OR

function sum_(a, b) {
    return a + b;
}

console.log("task1:", sum_(3, 4));

//2.Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
const extractLast3 = (value) => {
    const last3 = value.slice(-3);
    return last3;
};

console.log("task2:", extractLast3("Giedre"));
console.log("task2:", extractLast3(""));
console.log("task2:", extractLast3("ab"));

//OR
function extractLast3_(value) {
    return value.slice(-3);
};

console.log("task2:", extractLast3_("Giedre"));

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.
const split = (a) => {
    const positiveA = Math.abs(a);
    const digits = Array.from(String(positiveA), Number);
    return digits;
};

console.log("task3:", split(0));
console.log("task3:", split(000));
console.log("task3:", split(0001));
console.log("task3:", split(567115));
console.log("task3:", split(1234567));
console.log("task3:", split(-1234567));

//OR 

function split_(a) {
    a = Math.abs(a);
    const digits = Array.from(String(a), Number);
    return digits;
};

//OR
function split__(a) {
    if (a == 0) {
        return [0];
    }

    a = Math.abs(a);
    let result = [];
    for (; a > 0; a = Math.floor(a / 10)) {
        result.unshift(a % 10)
    }
    return result;
};

console.log("task3:", split__(0));
console.log("task3:", split__(000));
console.log("task3:", split__(0001));
console.log("task3:", split__(567115));
console.log("task3:", split__(1234567));
console.log("task3:", split__(-1234567));