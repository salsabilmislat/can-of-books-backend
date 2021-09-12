'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const getIndex = require('./controllers/index.controller');

const {getBooks}=require('./controllers/book.controllers');

const seedBook=require('./helper/bookSeed.seed');

// seedBook();

app.get('/', getIndex);

app.get('/books',getBooks);

// app.get('/test', (request, response) => {

//   response.send('test request received')

// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
