'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    email: { type: String }
});

const bookModel = mongoose.model('mybooks', bookSchema);

module.exports = bookModel;
