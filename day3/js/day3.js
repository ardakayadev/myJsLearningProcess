let isLightOn = true 
let isMarried = false 
let trueValue = 4 > 3
let falseValue = 4 < 3 

/*
let firstName
console.log(firstname) //undefined */

let empty = null
console.log(empty) //null

console.log(3 > 2) //true
console.log(3 >= 2) //true
console.log(3 == 2) //false
console.log(3 == '3') //true
console.log(0 == false) //true
console.log(3 != 3) //false
console.log(0 === false) //false
console.log(0 == '') //true            
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(NaN == NaN) //false
console.log(NaN === NaN) //false 
console.log(typeof NaN) //number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

//Logical Operators
let check = 4 > 3           // true
let check2 = !(4 > 3)        //  false
let isLightOn2 = true
let isLightOff = !isLightOn2 // false
let isMarried2 = !false      // true

//Increment Operators

//pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
//post-increment
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

//pre-decrement
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1

//post-decrement
let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

//Ternary Operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.') //You need a rain coat.

isRaining = false
isRaining
  ? console.log('You need a rain coat.') //No need for a rain coat.
  : console.log('No need for a rain coat.')

let result = 5 > 4 
? console.log('evet 5 büyüktür dörtten') 
: console.log('matematik hocanı seveyim')

//Operator Precedence
console.log(3 + 10 * 2);   // logs 23
console.log((3 + 10) * 2); // logs 26

let x = 5
let y = 10

console.log( (x > 4 && x < 10) && (y >= 10) ) 

//Window Methods

alert('hello')

//prompt method
prompt('bir sayı gir', 'sayı yalnızca pozitif olmalı') //2. default value.

let number = prompt('write a number')
let results = number * 2 
console.log(results)  //prompt'a yazılan sayı 2 ile çarpılıp konsolda gösterilecek.

//confirm method
confirm('are u sure')

let isDelete = confirm('Are you sure?')
console.log(isDelete ? 'Deleted' : 'Cancelled')

//Date Objects
const date = new Date() //object, non-primitive
console.log(date)

date.getHours()
date.getMinutes()
date.getDay() //day of week 0:sunday 6:saturday

const date2 = new Date()

let year = date2.getFullYear()
	month = date2.getMonth()
	day = date2.getDay()
	hour = date2.getHours()
	minute = date2.getMinutes()
	second = date2.getSeconds()
	dayNumber = date2.getDay()  

let months = [

	'Ocak',
	'Şubat',
	'Mart',
	'Nisan',
	'Mayıs',
	'Haziran',
	'Temmuz',
	'Ağustos',
	'Eylül',
	'Ekim',
	'Kasım',
	'Aralık'

]	

let days = [

	'Pazar',
	'Pazartesi',
	'Salı',
	'Çarşamba',
	'Perşembe',
	'Cuma',
	'Cumartesi'

]

let humanReadableDate = `${days[day]} ${months[month]} ${year}, ${days[dayNumber]} ${hour} ${minute} ${second}`
 
console.log(humanReadableDate)









