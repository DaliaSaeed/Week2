const router = require("express").Router()
const task = require('../app/controller/task.controller')
router.post('/add', task.addTask)
module.exports = router