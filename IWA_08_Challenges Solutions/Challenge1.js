const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

const leo = {
	name: leoName,
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
    address: {
        street: leoStreet,
        number: leoNumber,
        postal: leoPostal,
    },
}

const sarah = {
	name: (sarahName + sarahSurname),
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
    age: 62,
	address: {
		street: sarahStreet,
        number: sarahNumber,
		postal: sarahPostal,
	},
}

console.log(leo,leo.address)
console.log(sarah,sarah.address)

// Only change below this line

// const addressLeo = {
//     street: leoStreet,
//     number: leoNumber,
//     postal: leoPostal, 
// }

// const addressSarah = {
//     street: sarahStreet,
//     number: sarahNumber,
//     postal: sarahPostal,
// }

// const clients = {
//     Address: {
//         Leo: {
//             street: leoStreet,
//             number: leoNumber,
//             postal: leoPostal,
//         },
//         sarah: {
//             street: sarahStreet,
//             number: sarahNumber,
//             postal: sarahPostal
//         }
//     }




// }
