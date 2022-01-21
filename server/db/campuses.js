const Sequelize = require('sequelize')
const db = require('./database')

const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull : false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "image default val",
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
})

module.exports = Campuses