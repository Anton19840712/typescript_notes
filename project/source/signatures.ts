// example 1
let greetMe: (a: string, b: string) => void //void means, that nothing would be returned in implementation

greetMe = (name: string, greeting: string) => {
	console.log(`${name} says ${greeting}`)
}

// example 2
let calculateForMe: (a: number, b: number, c: string) => number //means, that we need to return a number and use in parameters numbers, this looks like an interface.
calculateForMe = (numOne: number, numTwo: number, action: string) => {
	if (action === "add") {
		return numOne + numTwo
	} else {
		return numOne - numTwo
	}
}

//example 3
let logDetailsNew: (obj: { name: string; age: number }) => void

type person = { name: string; age: number }

logDetailsNew = (ninja: person) => {
	console.log(`${ninja.name} is ${ninja.age} years old`)
}
