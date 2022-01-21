const router = require('express').Router()
const { Students } = require('../db')

router.get('/', async (req, res) => {
    try {
        const students = await Students.findAll()
        res.status(200).send(students)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/addStudent', async(req, res) => {
    try {
        const newStudent = await Students.create(req.body)
        res.json(newStudent)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id',  (req, res) =>  {

    Students.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( () => {
        res.status(200).json("Successfully Deleted!")
    })
});

module.exports = router