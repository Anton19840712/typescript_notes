//-------------------------------------------
import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice("antonio", "web work", 250)
docTwo = new Payment("irina", "plumbing work", 200)

let docs: HasFormatter[] = []
docs.push(docOne)

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
const type = document.querySelector("#type") as HTMLSelectElement // take a look: we have HTMLSelectElement or HTMLInputElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
	// here we listen to if our button was pushed.
	e.preventDefault()

	let doc: HasFormatter
	if (type.value === "invoice") {
		doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
	} else {
		doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
	}
	console.log(doc)
})
