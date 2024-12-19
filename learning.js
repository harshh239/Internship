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
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation 
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

   comparission operator
   assigment operator
   logical operator
   increament decreament operator
   + operator(concatination operator)
   
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
var a = 4;
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
document.getElementById("p03").innerHTML = ar1;
let x3 = 123e-5;
//document.getElementById("p04").innerHTML = x3;
let xy = 5;
let yy = 5;
let zy = 6;

document.getElementById("p04").innerHTML =
    (xy == yy) + "<br>" + (xy == zy);