let names = ["luigi", "mario", "yoshi"] //here we declared one-typed array/as a specific typed array
// and if we declare one-typed variables once, then we can not change them in future...
names.push("toad")
//names.push(3) //compiler underlines error of type, because this is typescript, man...

//==============================

let mixed = ["ken", 4, "chun-li"]

//but here we can do it, because we declared array mentioned above as a poly-typed...:
mixed.push(34)
mixed.push("antonio")

//==============================

let antonio = {
	name: "antonio",
	age: 35,
	master: true,
}

//antonio.age = '44' // you cannot do it like this, but antonio.age = 44 -- is possible.

// you can overrid like this:
antonio = {
	name: "antonio",
	age: 35,
	master: true,
}

// you can not overrid like this: because see the structure where let antonio
// antonio = {
// 	name: "antonio",
// 	age: 35
// }
