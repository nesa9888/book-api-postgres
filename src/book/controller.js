const pool = require('../../db');
const queries = require('./queries');

module.exports = {
    getBooks: (req, res) => {
        pool.query(queries.getBooks, (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })

    },

    getBookById: (req, res) => {
        const id = parseInt(req.params.id);
        pool.query(queries.getBookById, [id], (error, results) => {
            const noBookFound = !results.rows.length;
            if (noBookFound) {
                return res.json({ msg: 'Book does not exist in the database' });
            }
            pool.query(queries.getBookById, [id], (error, results) => {
                if (error) throw error;
                res.status(201).json(results.rows);
            });
        });

    },

    createBook: (req, res) => {
        const { title, author, release_date } = req.body;
        pool.query(queries.addBook, [title, author, release_date], (error, results) => {
            if (error) throw error;
            res.status(201).json({ msg: 'Book created' });
        })
    },

    deleteBook: (req, res) => {
        const id = parseInt(req.params.id);

        pool.query(queries.getBookById, [id], (error, results) => {
            const noBookFound = !results.rows.length;
            if (noBookFound) {
                return res.json({ msg: 'Book does not exist in the database' });
            }

            pool.query(queries.deleteBook, [id], (error, results) => {
                if (error) throw error;
                return res.status(200).json({ msg: 'Book deleted' });
            });
        });
    },

    updateBook: (req, res) => {
        const id = parseInt(req.params.id);
        const { title, author, release_date } = req.body;

        pool.query(queries.getBookById, [id], (error, results) => {
            const noBookFound = !results.rows.length;
            if (noBookFound) {
                return res.json({ msg: 'Book does not exist in the database' });
            }

            pool.query(queries.updateBook, [title, author, id], (error, results) => {
                if (error) throw error;
                return res.status(200).json({ msg: 'Book updated successfully' });
            });
        });
    }
}