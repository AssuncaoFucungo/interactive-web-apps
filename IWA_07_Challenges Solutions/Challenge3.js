const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owedLeo = parseInt(leoBalance)
const owedSarah = parseFloat(sarahBalance)

const leo = leoName + leoSurname + ' Owed: R' + owedLeo.toFixed(2) + '\n'
const sarah = sarahName + sarahSurname + ' Owed: R' + owedSarah.toFixed(2) + '\n'
const total = '\nTotal amount owed:' + (owedLeo+owedSarah).toFixed(2) + '\n'


const result = leo + sarah + divider + total +  divider

console.log(result)