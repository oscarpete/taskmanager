const express = require('express'); // this brings all the express to this file
const router = express.Router();

//import express validator
const { body } = require('express-validator/check');

//import the Controller
const projectController = require('../controllers/projectController');

module.exports = function(){
    //this is the routing for the home page, this is the middleware for express routes
    router.get('/', projectController.projectHome);
    router.get('/newProject', projectController.projectForm);
    router.post('/newProject',
        body('name').not().isEmpty().trim().escape(),
        projectController.newProject
    );
   //project listing
    router.get('/projects/:url', projectController.projectByUrl);

    //to UPDATE the project
    router.get('/project/edit/:id', projectController.editForm);

    return router; //to make it available in index
}

