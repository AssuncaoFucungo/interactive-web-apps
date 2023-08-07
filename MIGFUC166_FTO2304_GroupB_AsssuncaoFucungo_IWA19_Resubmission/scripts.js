// Search Button
const searchOverlay = document.querySelector("[data-search-overlay]");
document.querySelector("[data-header-search]").addEventListener("click", () => {
  searchOverlay.showModal()
})

document.querySelector("[data-search-cancel]").addEventListener("click", () => {
  searchOverlay.close()
})

// Create Option
const createOption = (selectElement, value, text) => {
  const option = document.createElement("option")
  option.value = value
  option.textContent = text
  selectElement.appendChild(option)
};

// Populate Dropdown
const populateDropdown = (selectElement, data, changeCallback) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      createOption(selectElement, key, data[key])
    }
  }
  selectElement.addEventListener("change", changeCallback)
}

const genresSelect = document.querySelector("[data-search-genres]")
populateDropdown(genresSelect, genres, () => {
  const selectedGenreId = genresSelect.value
  console.log("Selected genre ID:", selectedGenreId)
});

const authorsSelect = document.querySelector("[data-search-authors]")
populateDropdown(authorsSelect, authors, () => {
  const selectedAuthorId = authorsSelect.value
  console.log("Selected author ID:", selectedAuthorId)
});

// Settings Button
const settingsOverlay = document.querySelector("[data-settings-overlay]")
document.querySelector("[data-header-settings]").addEventListener("click", () => {
  settingsOverlay.showModal()
});

document.querySelector("[data-settings-cancel]").addEventListener("click", () => {
  settingsOverlay.close()
})

// Books Preview
document.addEventListener("DOMContentLoaded", () => {
  const itemsPerPage = 37
  let currentPage = 1

  const bookList = document.querySelector("[data-list-items]")
  const showMoreButton = document.querySelector("[data-list-button]")
  const totalBooks = books.length
  const totalPages = Math.ceil(totalBooks / itemsPerPage)

  function displayBooks(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalBooks);

    for (let i = startIndex; i < endIndex; i++) {
      const book = books[i]
      const preview = `
        <div class="preview">
          <img class="preview__image" src="${book.image}">
          <div class="preview__info">
            <div class="preview__title">${book.title}</div>
            <div class="preview__author">${authors[book.author]}</div>
          </div>
        </div>
      `

      bookList.insertAdjacentHTML("beforeend", preview)
    }
  }

  function showMoreBooks() {
    if (currentPage < totalPages) {
      currentPage++;
      displayBooks(currentPage)
      updateShowMoreButtonLabel()
    }
  }

  function updateShowMoreButtonLabel() {
    const remainingBooks = totalBooks - (currentPage - 1) * itemsPerPage;
    showMoreButton.textContent = `Show More (${remainingBooks} books)`;
  }

  showMoreButton.addEventListener("click", showMoreBooks);

  displayBooks(currentPage);


  // Book Overlay
  function openOverlay(book) {
    const overlay = document.querySelector("[data-list-active]");
    const overlayBlur = overlay.querySelector("[data-list-blur]");
    const overlayImage = overlay.querySelector("[data-list-image]");
    const overlayTitle = overlay.querySelector("[data-list-title]");
    const overlaySubtitle = overlay.querySelector("[data-list-subtitle]");
    const overlayDescription = overlay.querySelector("[data-list-description]");
    const overlayCloseButton = overlay.querySelector("[data-list-close]");

    overlayBlur.src = book.image
    overlayImage.src = book.image
    overlayTitle.textContent = book.title
    overlaySubtitle.textContent = `${authors[book.author]} (${book.published.slice(0, 4)})`
    overlayDescription.textContent = book.description;

    overlay.showModal()

    overlayCloseButton.addEventListener("click", () => {
      overlay.close()
    });
  }

  bookList.addEventListener("click", (event) => {
    if (event.target.classList.contains("preview")) {
      const index = Array.from(bookList.querySelectorAll(".preview")).indexOf(event.target)
      openOverlay(books[index])
    }
  })
})

//-------------Theme---------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const css = {
    day: { dark: '10, 10, 20', light: '255, 255, 255' },
    night: { dark: '255, 255, 255', light: '10, 10, 20' },
  }

  const themeSelect = document.querySelector("[data-settings-theme]")
  const root = document.documentElement

  function setTheme(theme) {
    root.style.setProperty('--color-dark', css[theme].dark)
    root.style.setProperty('--color-light', css[theme].light)
  }

  themeSelect.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme)
  });

  const savedTheme = localStorage.getItem("selectedTheme")
  if (savedTheme) {
    setTheme(savedTheme);
    themeSelect.value = savedTheme;
  }
});

