//sends a fetch request to 'https://anapioficeandfire.com/api/books returns it
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  // renders book titles into the DOM(booksFromApi) by passing a JSON object to renderBooks()
   .then(booksFromAPI => booksFromAPI.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
