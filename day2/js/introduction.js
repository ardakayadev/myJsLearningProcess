let world = 'javascript' //world değişkeninin value'su javascript oldu. string

world[0] = 'Y' //world değişkeninin 0. harfini Y olarak değiştirmek istedik fakat primitive data type olduğu için değişmeyecek.

//primitive veri türleri karşılaştırılabilir.

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) //burada true, false dönmesi gerek. eşitse true dönecek.

let js = 'javascript'
let py = 'python'

console.log(js == py) //false dönecek.

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) //false döner.

//array (not-primitive)

let nums = [1, 2, 3] //bunun 0.elemanı 1'dir 

nums[0] //1
nums[1] //2
nums[2] //3

console.log(nums)

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log(nums1 == nums2) //false döner. içteki değerler aynı olsa da bunlar farklı array'ler

let user1 = {

	name:'arda',
	surname:'kaya'

}

let user2 = {

	name:'arda',
	surname:'kaya'

}

console.log(user1 == user2) //false döner.

console.log( [1, 2, 3] == [1, 2, 3] ) //false döner.

/*
-we don't compare non-primitive data-types.
-do not compare arrays, functs or objects.
-they're being compared by references instead of "value"
-iki obje sadece aynı temel nesneyi referans alıyorsa eşit çıkar. */

let nums5 = [1, 2, 3]

let nums6 = nums5 

console.log(nums5 == nums6) //bu sefer true dönecek çünkü referans noktaları aynı.


let age = 35
const gravity = 9.81 //we use const for non-changing values.
let mass = 72 

console.log(age, gravity, mass)

const PI = Math.PI //Math, js'den gelen default bir metod
console.log(PI)

Math.round('5.49') //Sayıyı, yakın olduğu sayıya yuvarlar
Math.ceil('5.49') //Sayıyı, yakın olan üst sayıya yuvarlar
Math.floor('5.49') //Sayıyı, yakın olan alt sayıya yuvarlar
Math.min(3, 5, 20, -5) //Dizideki en küçük sayıyı alır
Math.max(3, 5, 20, -5) //Dizideki en büyük sayıyı alır
Math.random() //Her seferinde 0 ile 0.9999 arasında random sayılar üretir
Math.random() * 11 //0 ile 10 arasında random sayı istiyorsak +1 fazlası ile çarpımı yazılır.
Math.floor( Math.random()*11 ) //0 ile 10 arasında tam sayı değeri verir.
Math.abs(-10) //absoulet (mutlak) değerini verir
Math.pow(3, 2) //üs verir: 3 üssü 2
3 ** 2 //üs verir: 3 üssü 2

//string concatenation
let myName = 'Arda'
let mySurname = 'Kaya'

let fullName = myName + mySurname //It's an old way to use + during concatenation.
let fullNameVer2 = `${myName} ${mySurname}` //birleştirmenin modern kullanımı budur. ters tırnak-dolar-süslü parantez.

console.log(fullName)
console.log(fullNameVer2)

let firstNum = 5
let secNum = 3

let totalNum = firstNum + secNum

console.log(totalNum)

let numA = 12
let numB = 8

let totalNum2 = `${numA} + ${numB} = ${numA + numB}`

console.log(totalNum2)

//example
let myCity = 'Ankara'
let myBirth = '2001'
let myAge = '20'

let personInfo = `Hi, I am ${myName} ${mySurname}. I was born in ${myBirth} and I am ${myAge} years old. I'm living in ${myCity} now.`
console.log(personInfo)


//If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reac"
console.log(paragraph)

/*In JavaScript and other programming languages \ followed by some characters is an escape sequence
	\n: new line
	\t: Tab, means 8 spaces
	\\: Back slash
	\': Single quote (')
	\": Double quote (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
console.log('Days\tTopics\tExercises')
console.log('This is a backslash  symbol (\\)')  // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`) //2>3 olmadığı için false döner.

//string methods

let computer = 'lenovo'
console.log(computer.length) //length kelime uzunluğunu belirtir.

let firstLetter = computer[0]
console.log(firstLetter) //computer değişkeninde tanımlı string'in 0.elemanını verir

console.log( computer.toUpperCase() ) //harfleri büyük yapar. toLowerCase küçük yapar

console.log(computer.substr(2,4)) //2. harf ile başlar sonraki 4 harfi de alır : novo
console.log(computer.substring(2,4)) //2den başlayıp 4 dahil olmayacak şekilde alır : no

let isim = 'Arda Kaya'
console.log(isim.split(' ')) //iki kelimeyi iki ayrı stringe dönüştürür, dizi yaratır. ('') tek boşluk olursa her harfi alır.

let trimExample = '   30 days of js   '
console.log(trimExample.trim('')) //sağ ve sol boşlukları keser.

console.log(trimExample.includes('days')) //içerip içermediğini kontrol eder; true, fals döner. Büyük küçük harf önemli

console.log(trimExample.trim('').replace('30', '15')) //replace yer değiştirir.

console.log(trimExample.indexOf('d')) //d'nin başladığı konumu belirtir.
console.log(trimExample.indexOf('Days')) //days küçük yazıldığı için -1 döner
console.log(trimExample.indexOf('days'))   

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love')) //birden fazla love varsa sondaki love'ın başlangıç konumunu belirtir.

console.log(string.startsWith('I')) //parantez içinde cümlenin başladığı harf, kelime doğruysa true döner.
console.log(string.startsWith('JavaScript'))

console.log(string.endsWith('love')) //son kelime, harf.

console.log(string.match('love')) 
console.log(string.match(/love/gi)) //g-means to search in the whole text, i - case insensitive:büyük küçük duyarsız
 
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

let txt2 = 'love'
console.log(txt2.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

//Changing Data-Types

//String to Integer
let change = '10'
let numInt = parseInt(change)
console.log(numInt) // 10

let change2 = '10'
let numInt2 = Number(change2)
console.log(numInt2) // 10

let change3 = '10'
let numInt3 = +change3
console.log(numInt3) // 10

//String to Float
let change4 = '9.81'
let numFloat = parseFloat(change4)
console.log(numFloat) // 9.81

let change5 = '9.81'
let numFloat2 = Number(change5)
console.log(numFloat2) // 9.81

let change6 = '9.81'
let numFloat3 = +change6
console.log(numFloat3) // 9.81

//Float to Integer
let change7 = 9.81
let numInt4 = parseInt(change7)
console.log(numInt4) // 9