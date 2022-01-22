const router = require('express').Router()
const { Students } = require('../db')

//Write a route to serve up all students
router.get('/', async (req, res) => {
    try {
        const students = await Students.findAll()
        res.status(200).send(students)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//Write a route to serve up a single student (based on their id), _including that student's campus_
router.get('/:id', async(req, res) => {
    try {
        const student = await Students.findByPk(req.params.id)
        res.send(student)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id/campus', async (req, res) =>  {
    try {
        const campus = await Campuses.findByPk(req.params.id)
        res.send(campus)
    } catch (error) {
        res.send(error.message)
    }
});

//Write a route to add a new student
router.post('/', async(req, res) => {
    try {
        const newStudent = await Students.create(req.body)
        res.json(newStudent)
    } catch (error) {
        res.send(error.message)
    }
})
 

//Write a route to remove a student (based on its id)
router.delete('/:id', async(req, res) =>  {
    try {
        const student_id = await Students.findByPk(req.params.id)
        student_id.destroy()
        res.status(200).send("Successfully Deleted!")
    } catch(error) {
        res.send(error.message)
    }
});


module.exports = router

