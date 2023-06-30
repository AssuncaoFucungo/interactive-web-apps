const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'


let shipping = null
let currency = null

const userLocation = 'RSA'
const customers = 1

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const totalCost = shoes + toys + shirts + batteries + pens 

console.log(totalCost)

if (userLocation === 'RSA') { 
	shipping = 400 
	currency ='R' }

if (userLocation === 'NAM') {
	shipping = 600
	currency = '$' }   

if (userLocation === 'Other') {
	shipping = 800
	currency = '$'
}

if (userLocation === 'NK') {
	console.log(BANNED_WARNING)
}

if (totalCost >= 1000 && userLocation === 'RSA' ) {
	if (customers === 1) {
		shipping = FREE_WARNING
		currency = 'R'
	} else {
		console.log(BANNED_WARNING)
	}	
}

if (totalCost >= 60 && userLocation === 'NAM') {
	if (customers === 1) {
	shipping = FREE_WARNING
	currency = '$'
} else {
	console.log(BANNED_WARNING)
}	
	}
	
console.log(currency + (totalCost + shipping))




