'use strict';

const { request, response } = require('express');
// const { request, response } = require('express');
const bookModel = require('../models/book.model');

const getBooks = (request, response) => {
  try {
    bookModel.find((error, booksData) => {
      if (error) {
        response.send(error);
      }
      response.json(booksData)
    });
  } catch (error) {
    response.send(error);
  }

};
const creatBooks = (request, response) => {
  try {
    const { title, description, status, email } = request.body;
    const newBook = new bookModel({
      title, description, status, email
    })
    newBook.save()
    response.json(newBook)
  } catch (error) {

    response.send(error)
  }
};

const deleteBook = (request, response) => {

  const bookId = request.params.book_id
  bookModel.deleteOne({ _id: bookId }, (error, deletedData) => {
    if (error) {

      response.send(error)
    }
    response.json(deletedData)
    console.log(request.params)
  })
};

const updateBook = (request, response) => {

  const { title, description, status, email } = request.body;

  const bookId = request.params.book_id;

  bookModel.findByIdAndUpdate({ _id: bookId }, { title, description, status, email }, { new: true }, (error, updatedBookData) => {

    response.json(updatedBookData);

  });
}

module.exports = {
  getBooks,
  creatBooks,
  deleteBook,
  updateBook
}