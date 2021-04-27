const express = require('express');
const routes = require('./routes');
const path = require('path'); //this read the files 

//this will create an express app
const app = express(); // this will allow to create a server

//here is where the static files will be loaded
app.use(express.static('public'));



//here we will enable PUG
app.set('view engine', 'pug');

//here we will add the VIEW folder
app.set('views', path.join(__dirname, './views'));


app.use('/', routes());


//this is the port where it will run the server
app.listen(3000);