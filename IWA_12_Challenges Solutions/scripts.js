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

// A GOOD BOOK
const book1 = document.getElementById('book1');
const status1 = book1.querySelector('.status');
const reserve1 = book1.querySelector('.reserve');
const checkout1 = book1.querySelector('.checkout');
const checkIn1 = book1.querySelector('.checkin');

checkIn1.style.color = 'black';

const book1Status = 'overdue';
status1.style.color = STATUS_MAP[book1Status].color;

if (STATUS_MAP[book1Status].canReserve === false) {
    reserve1.disabled = true;
}

if (STATUS_MAP[book1Status].canCheckout === false) {
    checkout1.disabled = true;
}

if (STATUS_MAP[book1Status].canCheckIn === false) {
    checkIn1.disabled = true;
}

// THE BOOK OF BOOK
const book2 = document.getElementById('book2');
const status2 = book2.querySelector('.status');
const reserve2 = book2.querySelector('.reserve');
const checkout2 = book2.querySelector('.checkout');
const checkIn2 = book2.querySelector('.checkin');

checkIn2.style.color = 'black';

const book2Status = 'reserved';
status2.style.color = STATUS_MAP[book2Status].color;

if (STATUS_MAP[book2Status].canReserve === false) {
    reserve2.disabled = true;
}

if (STATUS_MAP[book2Status].canCheckout === false) {
    checkout2.disabled = true;
}

if (STATUS_MAP[book2Status].canCheckIn === false) {
    checkIn2.disabled = true;
}

// ANOTHER BOOK
const book3 = document.getElementById('book3');
const status3 = book3.querySelector('.status');
const reserve3 = book3.querySelector('.reserve');
const checkout3 = book3.querySelector('.checkout');
const checkIn3 = book3.querySelector('.checkin');

checkIn3.style.color = 'black';

const book3Status = 'shelf';
status3.style.color = STATUS_MAP[book3Status].color;

if (STATUS_MAP[book3Status].canReserve === false) {
    reserve3.disabled = true;
}

if (STATUS_MAP[book3Status].canCheckout === false) {
    checkout3.disabled = true;
}

if (STATUS_MAP[book3Status].canCheckIn === false) {
    checkIn3.disabled = true;
}

