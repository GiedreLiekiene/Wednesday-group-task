const myFavoritecolor = "blue";

switch (myFavoritecolor) {
    case "red":
        break;
    case "yellow":
        break;
    case "green":
        console.log('My favorite color is ${myFavoritecolor')
        break;
}

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction(a, b) {
    const countA = 0;
    const convertBtoArr = b.split("");
    convertBtoArr.map((letter) => {
        if (letter === a) {
            countA++;
        }
    });

    for (let i = 0; convertBtoArr.length > i; i++) {
        if (convertBtoArr[i] === a) {
            countA++;
        }
    }
    return countA;
}

console.log(
    myFunction("h", "how many times does a character occur in a sentence")
);

//OR

function solve(a, b) {
    const splitByA = b.split(a);
    return b.split(a).length - 1;
}

console.log(
    myFunction("h", "(h) (ow many times does t) (he character occur in this sentence)")
);