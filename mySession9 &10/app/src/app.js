require("dotenv").config()
const express = require("express")
require('../../db/dbConnections')
const app = express()
app.use(express.json())

const userRouter = require('../../routes/user.routes')
app.use("/api/user", userRouter)

//const taskRouter = require('../../routes/task.routes')
//app.use("/api", taskRouter)

app.get("*",(req, res)=>{
    res.status(404).send({
        apiStatus: false,
        message: "api invalid link"
    })
})
module.exports = app