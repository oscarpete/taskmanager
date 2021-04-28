const express = require('express'); // this brings all the express to this file
const router = express.Router();

//import the Controller
const projectController = require('../controllers/projectController');

module.exports = function(){
    //this is the routing for the home page, this is the middleware for express routes
    router.get('/', projectController.projectHome);
    router.get('/newProject', projectController.projectForm);
    router.post('/newProject', projectController.newProject);
   
    return router; //to make it available in index
}

