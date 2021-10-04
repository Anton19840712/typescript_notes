"use strict";
let greet;
//greet = 'hello' // this is impossible in this script
greet = () => {
    console.log("hello, again");
};
const add = (a, b, c) => {
    //const add = (a: number, b: number, c?: number | string) void => {
    //const add = (a: number, b: number, c: number | string =10 ) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
