const form = document.querySelector(".new-item-form") as HTMLFormElement

//inputs://you can find them as ids inside div in html page.
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement
const details = document.querySelector("#details") as HTMLSelectElement
const amount = document.querySelector("#amount") as HTMLSelectElement

//

form.addEventListener("submit", (e: Event) => {
	e.preventDefault()
	console.log(type.value, tofrom.value, details.value, amount.value)
})
