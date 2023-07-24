// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// console.log([data.lists[0][1]])
// // console.log([data.lists[1][1]])
// // console.log([data.lists[2][1]])


// // const first = [data.lists[0][1]]
// // const second = [data.lists[1][1]]
// // const third = [data.lists[2][1]


const result = [];

const extractBiggest = () => {
  const firstLast = data.lists[0][1][data.lists[0][1].length - 1];
  const secondLast = data.lists[1][1][data.lists[1][1].length - 1];
  const thirdLast = data.lists[2][1][data.lists[2][1].length - 1];

  if (firstLast >= secondLast && firstLast >= thirdLast) {
    return data.lists[0][1].pop();
  } else if (secondLast >= firstLast && secondLast >= thirdLast) {
    return data.lists[1][1].pop();
  } else {
    return data.lists[2][1].pop();
  }
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)



// const result = []

// for ([,array] of data.lists) {
//     const lastNumber = array[array.length - 1]
//     console.log(lastNumber)
//     // console.log(array)
// }

// console.log(data.lists)
// console.log(data.lists.map((sublist) => sublist[1]))

// //Combination of all values into single array called result

// const result = data.lists.map((sublist) => sublist[1]).flat();
// console.log(result)