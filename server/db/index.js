const db = require('./database');
const Students = require('./students');
const Campuses = require('./campuses');

Students.belongsTo(Campuses)
Campuses.hasMany(Students)

module.exports = {
    db,
    Students,
    Campuses
}