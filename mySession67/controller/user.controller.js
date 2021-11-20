const { query } = require("express")
const fs = require("fs")
const uniqid = require("uniqid")

const ReadDataFromJson = ()=>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('./model/user.json'))
        if(!Array.isArray(data)) throw new console.error();

    }
    catch(e){
        data = []
    }
    return data

}

const writeDataToJson = (data)=>{
    fs.writeFileSync('./model/user.json', JSON.stringify(data))

}

const add = (req, res)=>{
    if(req.query.name){
        let allUser = ReadDataFromJson()
        let user = {
        ...req.query,
        id: uniqid()
    }
    allUser.push(user)
    writeDataToJson(allUser)
    res.redirect("/addUser")
    }
    
        res.render("add",{
            pageTitle: "add New User"
        })
}

const addPost = (req, res)=>{
        res.render("addPost",{
            pageTitle: "add New User"
        })
}

const addPostLogic  = (req, res)=>{
    let allUser = ReadDataFromJson()
        let user = {
        ...req.body,
        id: uniqid()
    }
    allUser.push(user)
    writeDataToJson(allUser)
    res.redirect("/")
}

const showAll = (req, res)=>{
    let allUser = ReadDataFromJson()
    res.render("showAll",{
        pageTitle: "All Users", allUser,noData: allUser.length==0?true: false
    })
}

const single = (req, res)=>{
    let allUsers = ReadDataFromJson()
    let user = allUsers.find(user=>user.id == req.params.id)
    if(!user) res.render('error404', {PageTitle:"user not found", err:"not ID"})
    res.render("single",{
        pageTitle: "User Data",
         user
          //id:req.params.id
    })
}

const edit = (req, res)=>{
    res.render("edit",{
        pageTitle: "Edit User"
    })
}

const delet = (req, res)=>{
    let allUsers = ReadDataFromJson()
    allUsers =allUsers.filter(user=>user.id != req.params.id)
    writeDataToJson(allUsers)
    res.redirect("/")
}

const deleteAll = (req, res)=>{
    writeDataToJson([])
    res.redirect("/")
}

module.exports = {
    add, addPost,addPostLogic, showAll, single, edit,delet, deleteAll
}