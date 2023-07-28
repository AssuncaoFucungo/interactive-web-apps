import { html } from "./view.js"; // .js was add to correctly link 

//----------------------- Getting Add Order element button----------------------- // 

const getButton = document.querySelector('[data-add]')

// focus on Add Order 
window.addEventListener('load', () => {
    getButton.focus()
})


// -------------------------? Help overlay function-----------------------------------//

const helpButton = document.querySelector('[data-help]') // Grabbing ? button
const helpOverlay = document.querySelector('[data-help-overlay]') // Grabbing help message 
const helpCloseButton = document.querySelector('[data-help-cancel]') // Grabbing close button

// Function open Help message 
const openHelpOverlay = () => {
    helpOverlay.setAttribute('open', '')
}

// Function close the Help message
const closeHelpOverlay = () => {
    helpOverlay.removeAttribute('open') 
  }
  
  // Open when click ? and close when click "Close"
helpButton.addEventListener('click', openHelpOverlay);
helpCloseButton.addEventListener('click', closeHelpOverlay);

// ---------------------------Add order function------------------------------------//



/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}

