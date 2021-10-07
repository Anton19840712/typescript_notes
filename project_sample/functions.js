//1
function add(n1, n2) {
    return n1 + n2;
}
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
//2
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
