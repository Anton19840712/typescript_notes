let greet: Function

//greet = 'hello' // this is impossible in this script

greet = () => {
	console.log("hello, again")
}

const add = (a: number, b: number, c?: number | string) => {
	//const add = (a: number, b: number, c?: number | string) void => {
	//const add = (a: number, b: number, c: number | string =10 ) => {
	console.log(a + b)
	console.log(c)
}

add(5, 10)

const minus = (a: number, b: number): number => {
	return a + b
}

let result = minus(10, 7)
