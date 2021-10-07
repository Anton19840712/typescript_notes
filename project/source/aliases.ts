type StringOrNum3 = string | number
type objWithName3 = { name: string; uid: StringOrNum }

// const logDetails = (uid: string | number, item: string) => {
// 	console.log(`${item} has a uid of ${uid}`)
// }

const logDetails = (uid: StringOrNum3, item: string) => {
	console.log(`${item} has a uid of ${uid}`)
}

const greetAgain = (user: objWithName3) => {
	console.log(`${user.name} says hello`)
}
