require('dotenv').config()
const express = require("express")
const path = require("path")
const fs = require("fs")
const uniqid = require("uniqid")
const validator = require("validator")
const hbs = require("hbs")

const app = express()
app.use(express.urlencoded({extended: true}))
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "../public")))
app.set('views', path.join(__dirname, "../front/views"))
hbs.registerPartials(path.join(__dirname, "../front/layaut"))

const userRautes = require('../rautes/user.rautes')
const { use } = require('../rautes/user.rautes')
app.use(userRautes)
app.get('*' , (req, res)=>{
    res.render('error404', {pageTitle:"Error Page", err:"Page Not Found"})
})

module.exports = app