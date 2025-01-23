/*
   javascript is used to intractive youe web page.

   variable
console.log
document.write()
typeof
+ operator 
if-elseif-else
confirm
for
array
function 
class 
object
multi dimensional array and object
forEach


How we can display data in js file.

  console.log() = print data in console tab.
  document.write() = it is display data on browser.


  variable= variable is a one type of storage data.

  How to create variable in java script?
   in java script 3 way to create a variable.
     var variablename = value; -> we can create normal variable using var key word so we can change value using redeclaration process
                        and using some assignment oparetor
     let variablename = value;-> we can change value using any assigment oparetor or increament decreament oparetor but we can't redecler variaable.
  
  
     const variablename = value; -> fix value can not change


     typeof = it is a function to identify type of data
      in java script number of type data available
   number = if we assign numeric value with decimal point or without decimal point it's consider as number type
   string = if you have to assign value using single quate or double quate then it consider as string type.
  boolean = it have only two values true or false.

operators

 how many types of oparetor in js?
   arithamatic operator
   it is used to perfom some calculation operetion.
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation 
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

   comparission operator

   compare two or more same things
           lessthen(<)=f irst value is lessthen second value.
           greaterthen(>) = first value is greater then second value
           equalto(==) = check both value is equal.
           notequalto(!=)= it is use to check differant value.
           greaterthen or equalto(>=) = first value is greatethen or equalto second value.
           lessthen or equalto (<=) = first value is lesserthen second value.

   assigment operator
   =
    +=
     -=
     *=
     /=
     **=
     %=
   
   logical operator
   increament decreament operator
   + operator(concatination operator)
   statement = it is a logical part of program
  if = if we have to perform one process using according to condition then we can use if statement.
    syntex: if(codnitio)
  if...else= if we have 2 process and exicute any one according to condition then we can use if...else.
     syntex: if(condition){
        process of code1
     }else{
       process of code2
     }
 
  if...elseif...else
  
  shwitch = it is depend on variable value and we have to create cases according possible value.
      syntex:
        switch(varaible name){
        case 1:
           process;
           break;
        case 2:
           process2
           break;
        case 3:
           process3;
           break;
           . 
           . 
           . 
         default:
          {
           process
          }        
        } 
          
        
        loop = if you perform same process multiple time then we can use loop.
  How many loop?
    for loop 
      syntex: for(value initialize; condition; process)
              {
                code;
              }
    while loop
      while(codnition){
        code;
        process;
      }
    do while loop
    do{
      code;
      process;
    }while(condition);
    foreach


   function = it is a block of code to perform specific task
How to write function?
     syntex:
         function(){
            process code;
         }
  how to call function?
     syntex:-
         function_name();         

*/



console.log("Hello Good Morning");
document.write('Today We are start to learn about java script');
document.getElementById('p-5').innerHTML = 'Harsh'
var Company_name = 'ThatsEnd';
console.log(Company_name);
var Company_type = 'pvt ltd';
console.log(Company_type);
var Company_name = 'ThatsEnd technology';
console.log(Company_name);
let Company_gst_number = 1645372828;
console.log(Company_gst_number);
//let Company_gst_number = 1631245372828;
Company_gst_number++;
console.log(Company_gst_number);
const Company_CEO = 'NiravRaj';
console.log(Company_CEO);
//const Company_CEO = 'Dileshsinh';
const num = 120;
//num++;
console.log(num);

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
//window.alert(5 + 1);
//window.print();


var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("p01").innerHTML = y;
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("p01").innerHTML = lastName + lastname;

// Create an Object:
const car = { type: "Fiat", model: "500", color: "white" };

// Display Data from the Object:
document.getElementById("p02").innerHTML =
    "The car type is " + car.type
typeof 'harsh';
console.log(typeof(a));
var num1 = 23.45;
console.log(typeof(num1));
console.log(typeof(Company_CEO));
var strnumber = '4673';
console.log(typeof(strnumber));
var sbc = true;
console.log(typeof(sbc));
var sbc = num1 > num;
console.log(typeof(sbc));
var sbc = 'true';
console.log(typeof(sbc));
var arrdata = [23, 56, 43, 23, 67, 898];
console.log(arrdata);
console.log(typeof(arrdata));
class myclass {
    name = 'bhargav';
    dob = '25/09/2004';
}
var myobj = new myclass();
console.log(myobj);
console.log(typeof(myobj));
/*var a = 4;
var b = 5;
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;
const g = a ** b;
const h = a % b;
const i = a++;
const j = a--;
const ar1 = [c, d, e, f, g, h, i, j]
document.getElementById("p03").innerHTML = ar1;*/
let x3 = 123e-5;
//document.getElementById("p04").innerHTML = x3;
let xy = 5;
let yy = 5;
let zy = 6;

document.getElementById("p04").innerHTML =
    (xy == yy) + "<br>" + (xy == zy);
var a = 340;
var b = 563;
let c = 10;
console.log(a + b);
var sub = b - a;
console.log(sub);
var ex = a ** b;
console.log(4 ** 3);
console.log(18 % 5);
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);
console.log(a == 340);
console.log(a === 340);
console.log(a == '340');
console.log(a === '340');
a += 100;
console.log(a);
console.log(c += 5);
console.log(c -= 5);
console.log(c *= 5);
console.log(c /= 5);
console.log(c **= 5);
console.log(c %= 5);
var a = 340;
var b = 563;
console.log(a + b);
var sub = b - a;
console.log(sub);
console.log(4 ** 3);
console.log(18 % 5);

console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);
console.log(a == 340);
console.log(a === 340); //datatype check
console.log(a == '340');
console.log(a === '340'); //datatype check
a += 100;
console.log(a);
a *= 3;
console.log(a + "");
var n = 4;
n **= 3;
console.log(n);
var k = 89;
console.log(k < 50 && k > 100);
console.log(k > 50);
console.log(k < 100);
console.log(k < 50 && k < 100);
console.log(k < 50);
console.log(k < 50 && k > 100);
console.log(k < 50);
console.log(k > 100);
console.log(k < 50 || k < 100);
console.log(k < 50 || k > 100);
console.log(k < 50 || k > 100);
console.log(k > 100);
console.log(!(k > 100));
var b = 562;
var a = 10;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
console.log(b++);
console.log(b);
console.log(++b);
var s = 123;
var a = 340;
var b = 563;
if (typeof(s) == 'number') {
    s += 15;
    console.log(s);
}
var a = 900;
if (a > b) {
    var sub = a - b;
    console.log(sub + 'If block');
} else {
    var sub = b - a;
    console.log(sub + 'else block');
}
var percentage = 80;
if (percentage >= 90) {
    console.log('A+ grade');
} else if (percentage >= 80 && percentage < 90) {
    console.log('a grade');
} else if (percentage >= 70 && percentage < 80) {
    console.log('b+ grade');
} else if (percentage >= 60 && percentage < 70) {
    console.log('b grade');
} else if (percentage >= 50 && percentage <= 35) {
    console.log('c grade');
} else {
    console.log('F grade');
}
var Actor = 'john';

switch (Actor) {
    case 'srk':
        console.log('its call king khan');
        break;
    case 'salman':
        console.log('body gurd ');
        break;
    case 'ajay':
        console.log('singham');
        break;
    case 'hritik':
        console.log('no1 handsom hero');
        break;
    case 'tiger':
        console.log('strongest actor');
        break;
    default:
        console.log('this actore information is not available');

}
//alert("You are in dnager situation now!");
//confirm("Are you sure you want to contitnue this process?");
//if (confirm("Are you sure you want to contitnue this process?") ==
//true) {
//console.log('grant permission');
//} else {  
//console.log('dosent grant');
//}
for (var i = 0; i <= 100; i += 15) {
    console.log(i);
}
var Year = 2000;
while (Year <= 2024) {
    console.log('leap year = ' + Year);
    Year++;
    Year++;
    Year++;
    Year++;
}
var age = 20;
do {
    console.log(age + ' is eligible to work');
    age++;
} while (age <= 35);

// without peramiter function/static function
function message() {
    alert('you are very inteligent guys');
}
//message();

function static_count() {
    var a1 = 45;
    var a2 = 67;
    var res = a1 + a2;
    return res;
}
console.log(static_count());
//with parameter/dynamic functionfunction SimpleIntrest(p,r,n){
function SimpleIntrest(p, r, n) {
    var Sitrest = (p * r * n) / 100;
    return Sitrest;
}
console.log('simple intrest:- ' + SimpleIntrest(20000, 6.4, 5));
//default value arguement 
function Simple_intrest(p, r, n = 3) {
    var Sitrest = (p * r * n) / 100;
    return Sitrest;
}
console.log('simple intrest:- ' + Simple_intrest(20000, 6.4, 7));
console.log('simple intrest:- ' + Simple_intrest(20000, 6.4));


var fruits = ['Apple', 'Orange', 'Mango'];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = 'Mango';
console.log(fruits[1]);
console.log(fruits.length);
fruits.push('xyz');
console.log(fruits);

//fruits.remove("Apple");
fruits.pop();
fruits.shift();


let numbers = [1, 2, 3, 4, 5];
console.log(numbers)

let flags = [true, false, true, false, true];
console.log(flags)

let mixed = [1, "two", true, null, undefined];
console.log(mixed)

let users = [
    { name: "HarSH", age: 21 },
    { name: "Hxz", age: 30 },
    { name: "Shp", age: 20 }
];
console.log(users)


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix)


let dates = [new Date(2023, 0, 1), new Date(2023, 11, 31)];
console.log(dates)

let nulls = [null, null, null];
console.log(null)

let undefineds = [undefined, undefined, undefined];
console.log(undefineds)


let regexes = [/abc/, /def/, /ghi/];
console.log(regexes)
let symbols = [Symbol("a"), Symbol("b"), Symbol("c")];
console.log(symbols)
let bigInts = [BigInt(12345678901234567890), BigInt(98765432109876543210)];

console.log(bigInts)


let sets = [new Set(), new Set([1, 2, 3])];
console.log(sets)
console.log(fruits.length)
    //toString() Array at() Array join() Array pop() Array push()
    //two dimentional array

// row 1: [1, 2, 3]
// row 2: [4, 5, 6]
// row 3: [7, 8, 9]
var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array);
console.log(array[1][2]);
console.log(array.lenth);
var array1 = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ],
    [
        [13, 14, 15],
        [16, 17, 18]
    ]
];
console.log(array1);


var objFruit = {};
var fruit = [];
objFruit['Name'] = 'Harsh';
objFruit['website'] = 'domain.com';
objFruit['age'] = 22;
console.log(objFruit['Name']);


const alien1 = {
    name: "HarSH",
    species: "alien",
    phrase: () => console.log("I'm HarsSH the alien!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
console.log(alien1)
alien1.fly();
alien1.phrase();
var harsh = [33, 56, 78, 54];
array.forEach(function(item) {

});

harsh.forEach(function(item) {
    console.log(item)
});
harsh.forEach(number => {
    console.log(number);
});
var a = ['Hello shiv!', 'Hello Harsh', 'Hello Parth '];
a.forEach(number => {
    console.log(number);
});
var FrndName = ['Shiv', 'HArsh', 'PArth'];

FrndName.forEach(function(item) {
    console.log('Hello ' + item + ' how wre you!');
});
let sum = 0;
var nums = [10, 20, 30, 40];

function addition(item) {
    sum += item;
}

nums.forEach(addition);
console.log(sum);

//Create an array of 5 numbers and write a loop that sums up all the numbers in the array. Print the total sum.
var array = [1, 2, 3, 4, 5];
var sum1 = 0;
for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}

console.log(sum1);
// const numbers = [1, 2, 3, 4, 5];
// let totalSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     totalSum += numbers[i];
// }

// console.log(totalSum);
let fruitsa = ['Apple', 'Banana', 'Cherry'];

fruitsa.forEach(function(item, index, fruitsa) {
    console.log('value-' + item);
    console.log('index-' + index);
    console.log('fruitsa-' + fruitsa);
});
//oops concepts
//object 
// class
// constructor
//  inheritance 
//  encapsulation 
// polymorphism
//abstraction