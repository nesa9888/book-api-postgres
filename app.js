const express = require('express');
const app = express();

const bookRoutes = require('./src/book/routes');

app.use(express.json());

app.use('/api/books', bookRoutes);

app.listen(3000, () => console.log('Server started at 3000'))