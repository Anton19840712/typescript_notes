//-------------------------------------------
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docOne;
let docTwo;
docOne = new Invoice("antonio", "web work", 250);
docTwo = new Payment("irina", "plumbing work", 200);
let docs = [];
docs.push(docOne);
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
const type = document.querySelector("#type"); // take a look: we have HTMLSelectElement or HTMLInputElement
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list tamplate instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    // here we listen to if our button was pushed.
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        //doc = new Invoice(...values) // we can use tuples here like this:
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end"); //here we ask browser to render a part of UI.
});
