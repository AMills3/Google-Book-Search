let axios = require("axios");
let db = require("../models");

// Books returned from the API contain all the neccessary content

module.exports = {
    findAll: function(req, res) {
        let { query: params } = req;
        axios
        .get("https://www.googleapis.com/books/v1/volumes", {
            params
        })
        .then(reults =>
            results.data.itmes.filter(
                result =>
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.author &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
            ))
            .then(apiBooks =>
                db.Book.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
                        )))
                        .then(books => res.json(books))
                        .catch(err => res.status(422).json(err));
    }
};