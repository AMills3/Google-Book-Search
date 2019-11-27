let express = require("express");
let cors = require("cors");
let app = express();
let routes = require("./routes");

app.use(cors());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Connecting to Mongodb
let mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
};

// Adding routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
{
    useCreateIndex: true,
    useNewUrlParser: true
}
);


// Starting the server
let PORT = process.env.PORT || 3001

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});