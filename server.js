'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const getIndex = require('./controllers/index.controller');

const {
    getBooks,
    creatBooks,
    deleteBook,
    updateBook
} = require('./controllers/book.controllers');

const seedBook = require('./helper/bookSeed.seed');

// seedBook();

app.get('/', getIndex);

app.get('/books', getBooks);

app.post('/books', creatBooks);

app.delete('/books/:book_id', deleteBook);

app.put('/books/:book_id',updateBook);

// app.get('/test', (request, response) => {

//   response.send('test request received')

// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
