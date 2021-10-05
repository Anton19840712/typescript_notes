//interfaces:
interface IsPerson {
	//in typescript this is contract: you need to implement all fields and methods of the interface in
	name: string
	age: number
	speak(a: string): void //nothing to return
	spend(a: number): number //returns a number of amount
}
const me: IsPerson = {
	name: "antonio", //in implementaion we concretize our values
	age: 30,
	speak(text: string): void {
		console.log(text)
	},
	spend(amount: number): number {
		//in implementation we need to return something
		console.log("I spent", amount)
		return amount
	},
	//elements: [] // you can not declare another field out of the previous contract
}

console.log(me)

let someone: IsPerson //like this we can create the instance of IsPerson

const greetPerson = (person: IsPerson) => {
	console.log("hello", person.name)
}
