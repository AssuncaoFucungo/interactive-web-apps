// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
// console.log(document.getElementById('book1'))
// console.log(document.getElementsByClassName('status'))
// console.log(document.getElementsByClassName('reserve'))
// console.log(document.getElementsByClassName('checkout'))
// console.log(document.getElementsByClassName('checkin'))
// console.log(STATUS_MAP.overdue.canReserve)

// A GOOD BOOK

const book1 = document.getElementById('book1')
const status1 = book1.querySelector('.status')
const reserve1 = book1.querySelector('.reserve')
const checkout1 = book1.querySelector('.checkout')
const checkIn1 = book1.querySelector('.checkin')

checkIn1.style.color = 'black'

status1.style.color = STATUS_MAP.overdue.color

// THE BOOK OF BOOK

const book2 = document.getElementById('book2')
const status2 = book2.querySelector('.status')
const reserve2 = book2.querySelector('.reserve')
const checkout2 = book2.querySelector('.checkout')
const checkIn2 = book2.querySelector('.checkin')

checkIn2.style.color = 'black'

status2.style.color = STATUS_MAP.reserved.color

// ANOTHER BOOK

const book3 = document.getElementById('book3')
const status3 = book3.querySelector('.status')
const reserve3 = book3.querySelector('.reserve')
const checkout3 = book3.querySelector('.checkout')
const checkIn3 = book3.querySelector('.checkin')

checkIn3.style.color = 'black'

status3.style.color = STATUS_MAP.shelf.color
