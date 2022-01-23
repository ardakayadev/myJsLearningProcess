/*Booleans:
-true, false
-any comparisons return a boolean value which is either true or false

truthy Values:
-all numbers (positive or negative) are truthy EXCEPT "0"
-all strings except an empty string ("")
-the boolean true

falsy values:
-0, 0n, null, undefined, NaN, false, "", '', `` empty strings.

Operators:
-an equal (=) sign in js is an assignment operator. It uses to assign a variable

+= usage : x += y means x = x + y
-= usage : x -= y means x = x - y
*= usage : x *= y means x = x*y
**= usage: x **=y means x = x**y

so x () y result is stored in x.

Comparison Operators:
x == y : if values are same, returns true
x === y : if values and data types are same, returns ture
	5 == '5' true
	5 === '5' false (integer and string)

x != y : if values are not same, returns true
x !== y : if values or data types are not same, returns true 
	5 != '5' false 
	5 !== '5' true
x > y
x < y

x >= y : greater than or equal to
x <= y : less than or equal to 

Logical Operators:
&& : and
|| : or
!  : negation  (same as mathematical logic in maths.)

true && true -> true
true && false -> false 
false & false -> false 

true || true -> true
true || false -> true
false || false -> false 

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

Increment Operators:
-We use it to increase a value
-The increment could be pre or post increment

-pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

-post-increment
	we use most of time post-increment.
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

Decrement Operators:

-pre-decrement
let count = 0
console.log(--count) // -1
console.log(count)  // -1

-post-decrement
let count = 0
console.log(count--) // 0
console.log(count)   // -1

Ternary Operators: 
-Ternary operator allows to write a condition

Operator Precedence
console.log(3 + 10 * 2);   // logs 23
console.log((3 + 10) * 2); // logs 26


//Window Methods 
-displays an alert box with a specified message and an OK button. 

Window prompt() method:
-display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. 
-The prompt() method takes two arguments. The second argument is optional.

Confirm() method:
-displays a dialog box with a specified message, along with an OK and a Cancel button.
-A confirm box is often used to ask permission from a user to execute something. 
-Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

//Date Object
-.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. 




