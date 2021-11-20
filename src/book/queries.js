const getBooks = 'SELECT * FROM books';
const getBookById = 'SELECT * FROM books WHERE id = $1';
const addBook = 'INSERT INTO books (title, author, release_date) VALUES ($1, $2, $3)';
const deleteBook = 'DELETE FROM books WHERE id = $1';
const updateBook = 'UPDATE books SET title = $1, author = $2 WHERE id = $3';

module.exports = {
    getBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}