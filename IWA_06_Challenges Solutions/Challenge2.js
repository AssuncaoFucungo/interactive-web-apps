const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined) {
  if (hourOfDay === 00 && minuteOfDay === 00) {
    const taxPercentage = salary * (parseInt(tax) / 100)
    const expenses = rent + food + transport + taxPercentage
    const balance = salary - expenses
    console.log("R " + balance.toFixed(2))
//   } else {
//     console.log("Balance not calculated due to it not being a new day");
//   }
// } else {
//   console.log("Balance not calculated due to time not being known");
}
}
// if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
// 	const taxAsDecimal = tax / '100'
//   const startingAfterTax = salary * '1' - taxAsDecimal
// 	const balance = starting - transport - food - rent
// }
	
// console.log(balance.toFixed(3))