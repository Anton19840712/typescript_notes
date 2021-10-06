//inheritance
interface Person {
	first: string
	last: string
	[key: string]: any
}

const person: Person = {
	first: "Antonio",
	last: "Gridushko",
}

const person2: Person = {
	first: "Antonio",
	last: "Gridushko",
	fast: true,
}
