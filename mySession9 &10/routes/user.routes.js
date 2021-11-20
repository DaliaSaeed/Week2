const router = require("express").Router()
const userModel = require('../db/models/user.model')
const userController = require('../app/controller/user.controller')

router.post('/createuser', userController.createUser)

router.get('/readUser/:id', userController.readUser)
router.get('/AllUser', userController.AllUser)

router.patch('/updateUser/:id', userController.updateUser)

router.delete('/deleteUser/:id', userController.deleteUser)

router.patch('/addAddress/:id', userController.addAddress)
module.exports = router