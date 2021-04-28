const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('uptasknode', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    port: '3306',
    define: {
        timestamps: false
    },
});

module.exports = db;