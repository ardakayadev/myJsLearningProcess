//yazdırma komutu için console.log kullanılır; birden fazla parametre için tırnaktan sonra virgül kullan.
console.log('hi world!')
console.log('param1', 'param2','param3')

/*yorum satırı bu şekilde de yazılabilir*/

//any text line starting with // in JavaScript is a comment, and anything enclosed like this /* */ is also a comment.

console.log('hi world!')
console.log("hi world!")
console.log(`hi world`) //tek, çift, ters tırnak da çalışır.

console.log(2 + 3) // Addition  5
console.log(3 - 2) // Subtraction  1
console.log(2 * 3) // Multiplication  6
console.log(3 / 2) // Division  1,5
console.log(3 % 2) // Modulus - finding remainder  1 kalan bulur.
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3   9

/*data types:
-Numbers
	integers: (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
	float: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
-Strings
	A collection of one or more characters between two single quotes, double quotes, or backticks.
	'Asabeneh'
	'Finland'
	'JavaScript is a beautiful programming language'	
-Booleans
	her karşılaştırma true veya false döner.
	true // if the light is on, the value is true
	false // if the light is off, the value is false		
-Undefined
	In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.
-Null
	empty value
*/

/*checking data types:
	console.log(typeof 'Asabeneh') // string
	console.log(typeof 5) // number
	console.log(typeof true) // boolean
	console.log(typeof null) // object type
	console.log(typeof undefined) // undefined
*/

/*variables
	Variables are containers of data.
	To declare a variable, we use var, let, or const keywords.		
	Daha sonra değişebilecek bir değişken varsa let ile tanımlanır
	Değişmeyecek, sbt değişken varsa "const"
	**var is not recommended**

	değişken, sayı ile başlayamaz
		let name OK
		let 11a  NO
	$ veya _ dışında özel karakter desteklemez
		let $name
	camelCase yazımı önerilir
		getFirstName OK
		getfirstname NO
	boşluk bulunamaz

	geçerli kullanımlar
		firstName
		lastName
		country
		city
		capitalCity
		age
		isMarried

		first_name
		last_name
		is_married
		capital_city

		num1
		num_1
		_num_1
		$num1
		year2020
		year_2020					

	 