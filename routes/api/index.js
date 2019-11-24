let router = require("express").Router();
let bookRoutes = require("./books");
let path = require("path");

// Book route

router
    .use("/books", bookRoutes);

// Path to HTML page

router
    .use(function(req, res) {
        res.sendFile(path.join(__dirname, "../../client/build/index.html"));
    });

module.exports = router;