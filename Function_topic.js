//Pass the function as the argument to other function:

function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 // Pass `sayHello` as an argument to `greeting` function
 greeting(sayHello, "JavaScript!");

 //===============================================================================
//First class Function


