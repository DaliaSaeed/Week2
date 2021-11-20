const mongoose = require("mongoose")
const validator = require("validator")
const task = new mongoose.model('Task',{
    title:{
        type:String,
        required: true,
        unique: true,
        maxlenght: 40,
        trim: true
    },
    content:{
        type: String,
        trim: true,
        required: true

    },
    dueDate:{
        type: String,
        validate(value){
            if(value<(Date.now()+1)) throw new Error("Date Error")
        }
    },
    status:{
        type: String,
        enum: ['done', 'starting', 'running', 'not started'],
        required: true
    }
})

module.exports = task