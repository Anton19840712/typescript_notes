"use strict";
//explicit types
let character;
let age;
let isLoggedIn;
//so, then we can not do like: age = 'luigi', character = 34
age = 30; // but like this is possible
//arrays:
let ninjas = [];
ninjas.push("antonio");
//union types:
let mixedarray = [];
mixedarray.push("hello"); //ok
mixedarray.push(34); //ok
//mixedarray.push(true) // impossible, because we did not show this in our array, where types.
//dynamic
//key word any:
let ninja;
ninja = { name: "yoshi", age: 25 };
ninja = { name: 25, age: "yoshi" }; //no mistake here...
