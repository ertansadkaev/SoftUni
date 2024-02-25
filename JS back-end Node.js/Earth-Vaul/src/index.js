const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { PORT, DB_URL } = require("./constants");
const mongoose = require("mongoose");
const routes = require('./router');
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');

// Local Variabels
const app = express();

//Express Configuration
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(auth);

//Handlebars Configuration
app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Data base configuration
async function dbConnect() {
    await mongoose.connect(DB_URL);
}
dbConnect()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch (err => console.log(`Error while connecting Database, Error: ${err}`));

// Configure routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));