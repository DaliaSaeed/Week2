const taskModel = require('../../db/models/tasks.model')
class Task{

    static addTask = async(req, res)=>{
        try{
            const newTask = new taskModel(req.body)
            await newTask.save()
            res.status(200).send({
                apiStatus: true,
                data: newTask,
                message: " Task added"

            })

        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: " Error in adding Task Data"
                
            })

        }
    }
}

module.exports = Task