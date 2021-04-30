const express = require('express');
const routes = require('./routes');
const path = require('path'); //this read the files 
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//helpers with some functions
const helpers = require('./helpers');

//create data base connection
const db = require('./config/db');

//import the model
require('./models/Projects');

db.sync()
    .then(() => console.log('conectado al servidor'))
    .catch(error => console.log(error));


//this will create an express app
const app = express(); // this will allow to create a server

//here is where the static files will be loaded
app.use(express.static('public'));



//here we will enable PUG
app.set('view engine', 'pug');

//here we will add the VIEW folder
app.set('views', path.join(__dirname, './views'));

//pass the vardumb to the app
app.use((req, res, next ) => {
    res.locals.vardump = helpers.vardump; // res.locals allow us to use the variable in any place inside the project
    next();
});

//enable bodyparser to read form data
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/', routes());


//this is the port where it will run the server
app.listen(3000);