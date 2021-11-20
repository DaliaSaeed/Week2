const router  = require("express").Router()
const userController = require("../controller/user.controller")

router.get("/addUser", userController.add )
router.get("/addPost", userController.addPost )
router.post("/addPost", userController.addPostLogic )
router.get("/", userController.showAll )
router.get("/single/:id", userController.single )
router.get("/edit", userController.edit )
router.get("/delet/:id", userController.delet )
router.get("/deletAll", userController.deleteAll )
// router.get("/x", (req, res)=> res.send("test from x route"))

module.exports = router