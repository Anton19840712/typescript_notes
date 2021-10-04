import { Invoice } from "./classes/Invoice.js" //need js here

const invOne = new Invoice("mario", "works on the mario website", 250)
const invTwo = new Invoice("luigi", "works on the luigi website", 300)

//let invoices: string[] = [] //only strings could be pushed inside this array

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invTwo.amount = 567
console.log(invOne, invTwo)

invoices.forEach((inv) => {
	console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement

//inputs//you can find them where id in html
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement
const details = document.querySelector("#details") as HTMLSelectElement
const amount = document.querySelector("#amount") as HTMLSelectElement

form.addEventListener("submit", (e: Event) => {
	e.preventDefault()
	console.log(type.value, tofrom.value, details.value, amount.value)
})
