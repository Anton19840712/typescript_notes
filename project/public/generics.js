"use strict";
//GENERICS
const arrayOfNumbers = [1, 2, 2, 2, 3, 4, 45, 6, 6];
const arrayOfStrings = ["Antonio", "Banderos"];
function reverse(array) {
    //we can see here, that method can take different types of array and can return different types of array
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
//==================================
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
//==================================
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};
let docOne = addUID({ name: "antonio", age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" }, // field data could be different, because in interface you set T for data field.
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "toilet roll"],
};
console.log(docThree, docFour);
