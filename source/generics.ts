//GENERICS

const addUID = (obj: object) => {
	let uid = Math.floor(Math.random() * 100)
	return { ...obj, uid }
}

let docOne = addUID({ name: "antonio", age: 40 })
console.log(docOne)

//with interfaces
interface Resource<T> {
	uid: number
	resourceName: string
	data: T
}

const docThree: Resource<object> = {
	uid: 1,
	resourceName: "person",
	data: { name: "shaun" }, // it could be different here, because in interface you set T for data field.
}

const docFour: Resource<string[]> = {
	uid: 2,
	resourceName: "shoppingList",
	data: ["bread", "milk", "toilet roll"],
}

console.log(docThree, docFour)
