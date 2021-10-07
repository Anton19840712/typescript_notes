let userInput; //it is better to use 'unknown'
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
//never value
function generateError(message, code) {
    //never means there is no return type
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
