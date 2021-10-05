"use strict";
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "antonio", age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" }, // it could be different here, because in interface you set T for data field.
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "toilet roll"],
};
console.log(docThree, docFour);
