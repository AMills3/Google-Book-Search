let router = require("express").Router();
let bookController = require("../../controllers/bookController");

router.route("/").get(bookController.findAll);

module.exports = router;