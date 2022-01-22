const router = require('express').Router()
const {Campuses} = require('../db')

//Write a route to serve up all campuses
router.get('/', async (req, res) => {
    try {
        const campus = await Campuses.findAll()
        res.status(200).send(campus)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//Write a route to serve up a single campus (based on its id), _including that campuses' students_
router.get('/:id', async(req, res) => {
    try {
        const campus = await Campuses.findByPk(req.params.id)
        res.send(campus)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id/students', async(req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        res.send(student)
    } catch (error) {
        res.send(error.message)
    }
})

//Write a route to add a new campus
router.post('/', async(req, res) => {
    try {
        const newCampuses = await Campuses.create(req.body)
        res.json(newCampuses)
    } catch (error) {
        res.send(error.message)
    }
})


//Write a route to remove a campus (based on its id)
router.delete('/:id', async(req, res) =>  {
    try {
        const student_id = await Campuses.findByPk(req.params.id)
        student_id.destroy()
        res.status(200).send("Successfully Deleted!")
    } catch(error) {
        res.send(error.message)
    }
});

module.exports = router