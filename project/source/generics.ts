//GENERICS
const arrayOfNumbers: Array<number> = [1, 2, 2, 2, 3, 4, 45, 6, 6]
const arrayOfStrings: Array<string> = ["Antonio", "Banderos"]

function reverse<T>(array: T[]): T[] {
	//we can see here, that method can take different types of array and can return different types of array
	return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

//==================================
class Observable<T> {
	constructor(public value: T) {}
}

let x: Observable<number>
let y: Observable<Personality>
let z = new Observable(23)

//==================================

const addUID = (obj: object) => {
	let uid = Math.floor(Math.random() * 100)
	return { ...obj, uid }
}

let docOne = addUID({ name: "antonio", age: 40 })
console.log(docOne)

//GENERICS in interfaces
interface Resource<T> {
	uid: number
	resourceName: string
	data: T
}

const docThree: Resource<object> = {
	uid: 1,
	resourceName: "person",
	data: { name: "shaun" }, // field data could be different, because in interface you set T for data field.
}

const docFour: Resource<string[]> = {
	uid: 2,
	resourceName: "shoppingList",
	data: ["bread", "milk", "toilet roll"],
}

console.log(docThree, docFour)
