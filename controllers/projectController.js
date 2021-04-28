exports.projectHome = (req, res) =>{
        res.render('index', {
            pageName : 'Projects'
        });
    }

exports.projectForm = (req, res) =>{
        res.render('newProject', {
            pageName : 'New Project'
        })
}

exports.newProject = (req, res) =>{
    //res.send('You have send a new Form')
    //console.log(req.body);

    //** this will validate the inputs */
    const { name } = req.body;

    let errors = [];

    if (!name) {
        errors.push({'text': 'Add a name to the Project'})
    }

    //if there are errors
    if (errors.length > 0) {
        res.render('newProject', {
            pageName : 'New Project',
            errors
        })
    } else {
        //no errors insert into DB
    }
}

