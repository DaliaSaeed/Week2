const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')
const userSchma = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Is Required"],
        minlenth: 3,
        maxlenth: 30,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        unique: [true, "Email is enterd Before"],
        lowercase:true,
        required: [true, "Email Is Required"],
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid Email format")
        }

    },
    psw: {
        type: String,
        required: [true, "Password Is Required"],
        trim: true,
        //match: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/'
    },



    // age:{
    //     type: Number,
    //     min: 21,
    //     max: 30
    // },
    // address: [
    //     {
    //         street:{type: String},
    //         city:{type: String}
    //     }
    // ],
    // bday:{
    //     type: Date
    // },
    // phone: {
    //     type: String,
    //     validate(value){
    //         if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error("invalid Phone format")
    //     }
    // },
    // img: {
    //     type: String
    // },
    // states: {
    //     type: Boolean,
    //     default: false
    // }
}, {
    timestamps: true
})

userSchma.methods.toJSON = function(){
    const user = this.toObject()
    delete user.psw
    return user
}

userSchma.pre('save', async function(){
    //console.log(this)
    const user = this
    if(user.isModified('psw')) user.psw = await bcrypt.hash(user.psw, 8)
})
const User = mongoose.model("User", userSchma)
module.exports = User