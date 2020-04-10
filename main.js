//alert('Hello World');
//console.log("My first program");
//console.error("Don't load this page");
//console.warn("Hello PubMatic")

/*
document.write(a+ '</br>');
var a=10;
document.write(a);

document.write(b+ '</br>');
let b=20;
document.write(b);



let a=2;
let b=3;
if(a>b)
{
console.log("A is greater number");
}
else
{
    console.log("B is greater number");
}

//Datatypes=======================================================================

let name='Kishor';
let age=24;
let isCool=true;
let rating=4.5;
let x=null;
let y=undefined;
let z;


console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(z);
 
console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`);

// Strings============================================================================

let s='Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,6));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

let a='technology, it, comp, mech';
console.log(a.split(', '));
*/
//====================================================================================
// Arrays

/*
let numbers=new Array(1,2,3,4,5);
console.log(numbers);

let fruits=['Apples','Oranges','Pears',10,true,6];
console.log(fruits);
console.log(fruits[1]);
fruits[3]='grapes';
console.log(fruits);

fruits.push('mangos');
console.log(fruits);
fruits.unshift('straberries');
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('Hello'));
console.log(fruits.indexOf('Oranges'));

console.log(fruits.indexOf('mangos'));
*/

//====================================================================================
// Objects Literal
/*
let person={
    First_name:'Kishor',
    Last_name:'Phawade',
    Age:24,
    hobbies: ['Music','Cricket','Carrom'],
    Address:{
        Street: '20 xyz',
        city:'Latur',
        Pincode: 413520
    }
}
//console.log(person);

console.log(person.hobbies);

console.log(person.hobbies[2]);
person.email='Kishor@gmail.com';
console.log(person.First_name);
console.log(person);

*/

/*
let kishor={
    firstName:'Kishor',
    lastName:'Phawade',
    job:'IT',
    dob:'1996-01-25',
    family: ['Sunil','Kishor','Tanveer']
};
console.log(kishor.firstName);
kishor.job='Computer';
console.log(kishor);

let kishor =new Object();
kishor.firstName='Kishor';
kishor.lastName='Phawade';
kishor.job='Mech';

console.log(kishor);
*/
//=================================================================================
// Array of Objects

/*
let todos=[
    {
        id:1,
        text:'Take out from trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with Manager',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist Appotiment',
        isCompleted:false
    },
    {
        id:4,
        text:'end the day',
        isCompleted:true
    }

];

console.log(todos);
console.log(todos[1])

let todojson= JSON.stringify(todos);
console.log(todojson);


// Loop Statement
for(let i=0; i<todos.length; i++)
{
    console.log(todos[i].text);
}
*/
/*
// For Loop
for(let i=0; i<5; i++)
{
 console.log(`For loop value ${i}`);
}

// While Loop

let j=0;
while(j<10)
{
    console.log(`While loop value ${j}`);
    j++;
}
*/

//Conditional Statement ===================================================
//If else
/*
let a=10;
if(a===10)
{
    console.log("Value of A is " + a);

}
else{
    console.log("X is not 10");
}

let x=4;
let y=10;

if(x<5 || y>10)
{
    console.log("X is less than 5 or 10 y is greater than 10");
}*/
/*
let b=prompt("Enter the value of B");
if(b>10)
{
    console.log("B is greater than 10");

}
else{
    console.log("B is smaller than 10");
}

*/
//=============ternary Operator================
//Switch
/*
let k=10;

let color= 'red'; //k > 10 ? 'Blue' : 'Green';

console.log(color);

switch(color)
{
    case 'Blue':
        console.log("Color is Blue");
        break;
    case 'Green':
        console.log("Color is Green");
        break;
    default:
        console.log("Color is NOT a Blue or Green");
        break;        
}
*/

//============ Function=========================================
/*

let a;
let b;
function add(a,b)
{
    let c=a+b;
    console.log(c);
}
add(3,4);

*/

/*
function calcualteage(birthyear)
{
    return 2019-birthyear;
}

let kishorAge=calcualteage(1996);
let sunilAge=calcualteage(1993);
console.log('Age of Kishor is ' +kishorAge);
console.log("Age of sunil is " +sunilAge);

function retirementAge(year,name)
{
     return 2019-year;
}
let abc=retirementAge(1996, 'Kishor');
console.log(abc);
*/
/*
var count = 0;
		function countVowels(name)
		{
			for (var i=0;i<name.length;i++)
			{
              if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
              count = count + 1;
			}
		document.write("Hello " + name + "!!! Your name has " + count + " vowels.");
		}
   	 	var myName = prompt("Please enter your name");
    	countVowels(myName);
*/

//Function 

/*
function yearofretire(birthyear,firstName)
{
      var ages= 2019-birthyear;
      var year= 65-ages;
      if(year > 0)
      {
    console.log(firstName + " retire in " +year + " years" );
      }
      else{
          console.log(firstName + " is already retired");
      }
}
yearofretire(1996,'Kishor');
yearofretire(1960,'Aniket');
yearofretire(1940,'Avinash');

*/


//Object methods

/*
let person={
    id:1,
    name:'Kishor',
    job:'IT',
    calage: function(birthyear)
    {
        return 2019-birthyear;
    }
};
let x=person.calage(1996);
console.log(x);
*/

//function expression

/*
var whatyourjob=function (first,job)
{ 
    switch(job)
    {
        case 'teacher':
            return first + ' teaches maths to kids '
        case 'IT':
            return first + ' Assign the project to employees'

        case 'designer':
            console.log (first + ' design the websites');

        default:
            return ' do something else than this'


    }
}
    console.log (whatyourjob('Kishor','teacher'));
    console.log (whatyourjob('Aniket','IT'));
    whatyourjob('Avi','designer');
*/
//Execution content/ stack
/*
var name='Kishor';

function first()
{
  var b='Hey';
  second();
  var x=b+name;
  console.log(x);

}

function second()
{
  var c='Hi';
  third();
  var y=c+name;
  console.log(y);
}

function third()
{
  var d='Hello';
  var z=d+name;
  console.log(z);
}

first();
*/


//scope chain
/*
var a='Hello';
first();
function first()
{
    var b='Hi';
    second();
    function second()
    {
        var c='Hey';
        console.log(a + ' ' + b + ' ' +c)
    }
}
*/

//Hoisting      

//function declartion
/*
function first()
{
    console.log("Hi Kishor");
}

first();

first();
function first()
{
    console.log("Hi Kishor");
}
*/
//function expression
/*
var x=function()
{
    console.log("Hello Kishor");
}
x();

x();
var x=function()
{
    console.log("Hello Kishor");
}
*/
// Function expression show the error when call the first to function

// this keyword

//console.log(this);
/*
function cal()
{
    console.log(this);
}
cal();
*/
/*
var person={
name:'Kishor',
age:24,
calage: function()
{
 console.log(this);
// console.log(65-this.age);
}
};
person.calage();

var Aniket={
    age:24,
    lastName:'Kale'

};
//Method borrow
Aniket.calage=person.calage;

Aniket.calage();
*/
//====================================================================================
//Document Object Model

