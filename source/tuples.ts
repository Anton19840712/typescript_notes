//tuples

let arr = ["antonio", 25, true]
arr[0] = false
arr[1] = "irina"

arr = [30, false, "irina"]

let tup: [string, number, boolean] = ["irina", 25, true]
tup[0] = "ken"
tup[1] = 30

//SAMPLE USAGE
// let values: [string, string, number]
// values = [tofrom.value, details.value, amount.valueAsNumber]

// doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
// doc = new Invoice(...values) -- use tuple here...