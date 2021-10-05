"use strict";
const me = {
    name: "antonio",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        //in implementation we need to return something
        console.log("I spent", amount);
        return amount;
    },
    //elements: [] // you can not declare another field out of the previous contract
};
console.log(me);
let someone; //like this we can create the instance of IsPerson
const greetPerson = (person) => {
    console.log("hello", person.name);
};
