let greet: Function

//greet = 'hello' // this is impossible in this script

greet = () => {
	console.log("hello, again")
}

const addNums = (a: number, b: number, c?: number | string) => {
	//const add = (a: number, b: number, c?: number | string) void => {
	//const add = (a: number, b: number, c: number | string =10 ) => {
	console.log(a + b)
	console.log(c)
}

addNums(5, 10)

const minus = (a: number, b: number): number => {
	return a + b
}

let result = minus(10, 7)


//another, more clear sample:
//in - numbers, out - string 
function pow(x:number, y:number):string{
	return Math.pow(x,y).toString();
}

pow(5,10)