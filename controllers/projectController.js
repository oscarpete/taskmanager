const Projects = require('../models/Projects');


exports.projectHome = async (req, res) => {
        const projects = await Projects.findAll(); //this does the same work as SELECT * from

        res.render('index', {
            pageName : 'Projects',
            projects
        });
    }

exports.projectForm = async (req, res) => {
        const projects = await Projects.findAll();
        res.render('newProject', {
            pageName : 'New Project',
            projects
        });
}

exports.newProject = async (req, res) => {
    const projects = await Projects.findAll();
    //res.send('You have send a new Form')
    //console.log(req.body);

    //** this will validate the inputs */
    const name  = req.body.name;

    let errors = [];

    if (!name) {
        errors.push({'text': 'Add a name to the Project'})
    }

    //if there are errors
    if (errors.length > 0) {
        res.render('newProject', {
            pageName : 'New Project',
            errors,
            projects
        })
    } else {
        //if no errors insert into DB the following

        const Project = await Projects.create({ name });
        res.redirect('/');
    }
}

exports.projectByUrl = async (req, res, next) => {
    const projects = await Projects.findAll();

    const project = await Projects.findOne({
        where: {
            url: req.params.url
        }
    });

    if(!project) return next();

    //this will give the render VIEW
    res.render('tasks', {
        pageName : 'Project Tasks',
        project,
        projects
    });
}

exports.editForm = async (req, res) => {

    const projectsPromise = Projects.findAll();

    const projectPromise = Projects.findOne({
        where: {
            id: req.params.id
        }
    });

    const [projects, project] = await Promise.all([projectsPromise, projectPromise]);

    //this will render the VIEW
    res.render('newProject', {
        pageName : 'Edit Project',
        projects,
        project
    })
}

