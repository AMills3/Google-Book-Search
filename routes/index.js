let path = require("path");
let router = require("express").Router();
let apiRoutes = require("./api");

// Here is the API route

router.use("/api", apiRoutes);

// Send the react app

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;