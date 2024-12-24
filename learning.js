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