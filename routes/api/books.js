let router = require("express").Router();
let booksController = require("../../controllers/booksController");

// API books route

router
    .route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Route by ID

router  
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;