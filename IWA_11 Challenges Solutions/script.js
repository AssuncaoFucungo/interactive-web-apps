// script.js

const biscuits = document.getElementsByClassName('biscuits')
console.log(biscuits)

const count = document.getElementsByClassName('count')
console.log(count)


const order = document.querySelector('[data-key="order1"]')
console.log(order)

const order1biscuits = document.querySelector('.biscuits .count');
console.log(order1biscuits)

const load = document.querySelector('.biscuits .count').innerText 
console.log(load)

// Order 1

const order1 = document.querySelector('[data-key="order1"]')
const order1Biscuits = order1.querySelector('.biscuits .count')
const order1Donuts = order1.querySelector('.donuts .count')
const order1Pancakes = order1.querySelector('.pancakes .count')
const order1Status = order1.querySelector('.status dd')

order1Biscuits.innerText = order1.getAttribute('data-biscuits')
order1Donuts.innerText = order1.getAttribute('data-donuts')
order1Pancakes.innerText = order1.getAttribute('data-pancakes')
order1Status.innerText = order1.getAttribute('data-delivered')

if (order1.getAttribute('data-delivered') === 'true') {
    order1Status.innerText = 'Delivered'
} else {
    order1Status.innerText = 'Pending'
}

// Order 2

const order2 = document.querySelector('[data-key="order2"]')
const order2Biscuits = order2.querySelector('.biscuits .count')
const order2Donuts = order2.querySelector('.donuts .count')
const order2Pancakes = order2.querySelector('.pancakes .count')
const order2Status = order2.querySelector('.status dd')

order2Biscuits.innerText = order2.getAttribute('data-biscuits')
order2Donuts.innerText = order2.getAttribute('data-donuts')
order2Pancakes.innerText = order2.getAttribute('data-pancakes')
order2Status.innerText = order2.getAttribute('data-delivered')

if (order2.getAttribute('data-delivered') === 'true') {
    order2Status.innerText = 'Delivered'
} else {
    order2Status.innerText = 'Pending'
}

// Order 3

const order3 = document.querySelector('[data-key="order3"]')
const order3Biscuits = order3.querySelector('.biscuits .count')
const order3Donuts = order3.querySelector('.donuts .count')
const order3Pancakes = order3.querySelector('.pancakes .count')
const order3Status = order3.querySelector('.status dd')

order3Biscuits.innerText = order3.getAttribute('data-biscuits')
order3Donuts.innerText = order3.getAttribute('data-donuts')
order3Pancakes.innerText = order3.getAttribute('data-pancakes')
order3Status.innerText = order3.getAttribute('data-delivered')

if (order3.getAttribute('data-delivered') === 'true') {
    order3Status.innerText = 'Delivered'
} else {
    order3Status.innerText = 'Pending'
}
