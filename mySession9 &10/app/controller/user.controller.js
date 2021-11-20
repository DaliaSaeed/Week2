const userModel = require('../../db/models/user.model')

class User {
    static createUser = async (req, res) => {
        try {
            const user = await new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Created',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static readUser = async (req, res) => {
        try {
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) throw new Error('User not Found')
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Found',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }

    }

    static AllUser = async (req, res) => {
        try {
            const user = await userModel.find()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Found',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "Error on showing Data"
            })
        }

    }

    static updateUser = async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id ,  req.body)
            await user.validate()
            if(!user) throw new Error('User not found')
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Updated',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id ,  req.body)
            if(!user) throw new Error('User not found')
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Deleted',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static addAddress = async (req, res) => {
        try {
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) throw new Error('User not found')
            user.address.push(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Added Address',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "Error on Adding Address"
            })
        }
    }
}

module.exports = User