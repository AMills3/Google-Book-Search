let db = require("../models");

// Methods for the controller

module.exports = {
    findAll: function(req, res) {
    db.Book.find(req.query)
    .then(dbBook => resizeBy.json(dbBook))
    .cath(err => resizeBy.status(422).json(err));
},

findById: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbBook => res.json(dbBook))
    .cath(err => res.status(422).json(err));
},

create: function(req, res) {
    db.Book.create(req.body)
    .then(dbBody => res.json(dbBook))
    .catch(err => res.status(422).json(err));
},

remove: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbBook => dbBook.remove())
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
},

update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
}
};