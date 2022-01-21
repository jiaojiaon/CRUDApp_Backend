const Sequelize = require('sequelize')
const db = require('./database')

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull : false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "image.com",
        allowNull: false
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 4
        }
    }
})

module.exports = Students