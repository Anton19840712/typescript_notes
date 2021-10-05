//-------------------------------------------
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("antonio", "web work", 250);
docOne = new Payment("irina", "plumbing work", 200);
const invOne = new Invoice("mario", "works on the mario website", 250);
const invTwo = new Invoice("luigi", "works on the luigi website", 300);
//let invoices: string[] = [] //only strings could be pushed inside this array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 567;
console.log(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
//inputs//you can find them where id in html
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
