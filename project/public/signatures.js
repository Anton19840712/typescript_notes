"use strict";
// example 1
let greetMe; //void means, that nothing would be returned in implementation
greetMe = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calculateForMe; //means, that we need to return a number and use in parameters numbers, this looks like an interface.
calculateForMe = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetailsNew;
logDetailsNew = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
