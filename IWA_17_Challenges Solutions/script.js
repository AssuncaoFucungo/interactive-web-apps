// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

// createArray

const createArray = (length) => {
    const result = []
    for (let i = 0; i < length; i++) {  // Adding i = 0 to start the count on 0 and i++ to count by one
        result.push(i) // Nothing was begin pushed so i was added  
    }
  console.log(result) // now the function works and returns result 
    return result
}
 

// -------------------------- //

// createData 

const createData = () => { // Function arrow wasn't done right added = to complete function//
    const current = new Date() // Added Date function // 
    current.setDate(1) 

    const startDay = current.getDay() // Added Day
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    // const days = ()
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

        for (let dayIndex = 0; dayIndex < 7; dayIndex++ ) {
            const day = dayIndex - startDay + weekIndex * 7 + 1 // add explanation
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            })
        }
    }

    return result
}

// addCell

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

// createHtml 

const createHtml = (data) => {
    let result = ''

    for (const { week, days } of data) { // remove days
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
         for (const { dayOfWeek, value } of days) {  // Adding for to create loop
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7 // completing or || adding 7 for days of the week
            const isAlternate = week % 2 === 0
            
			let classString = 'table__cell'

            if (isToday) classString = `${classString} table__cell_today` // completing css address
            if (isWeekend) classString = `${classString} table__cell_weekend`// completing ccs address 
            if (isAlternate) classString = `${classString} table__cell_alternate`// completing ccs address
            inner = addCell(inner, classString, value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}



// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)