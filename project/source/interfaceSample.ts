//inheritance
interface Personality {
	first: string
	last: string
	[key: string]: any
}

const person: Personality = {
	first: "Antonio",
	last: "Gridushko",
}

const person2: Personality = {
	first: "Antonio",
	last: "Gridushko",
	fast: true,
}
