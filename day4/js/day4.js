//Conditions

//if-else
let isRaining = true 
if (isRaining) {
	console.log('Take your umbrella')
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} //The condition was true and the block of code was executed. However, if the condition is false, we won't see any results.

let result = prompt('2 + 5 kaç yapar?', '2 + 5')
if (result === '7') {

	console.log('Doğru cevap')
} else{

	console.log('Yanlış cevap')
}	

//if else if else
let number = 5
if (number === 4) {
	console.log('number is not 4')

} else if (number >= 5) {
	console.log('yes, number is 5')
	
} else if (number > 5) {
	console.log('no, number is not bigger than 5') 
	
}

//switch
let result2 = '7'
switch(result2){
	case '7':
		console.log('True answer. - switch')
	break //cevap 7 ise aşağı okumayacak	
	default:
		console.log('Wrong. - default') 	
}

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

//ternary operators
let isRaining2 = true
isRaining 
  ? console.log('You need a rain coat. - ternary')
  : console.log('No need for a rain coat. - ternary')


