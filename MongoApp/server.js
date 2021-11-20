// const mongodb = require("mongodb")
// const mongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require("mongodb")
const dbName = "g12"
const dbHost = "mongodb://localhost:27017"

MongoClient.connect(dbHost,{}, (error, client)=>{
    if(error) return console.log(error)
    const myClient = client.db(dbName)

    // myClient.collection("users").insertOne({name: "Dalia", age:23}, (err, res)=>{
    //     if(err) return console.log("error")
    //     else console.log(res.insertedId)
    // })


    // myClient.collection("users").insertMany(
    //     [
    //         {name:"ahmed"},
    //         {name:"Aml"},
    //         {age: 32},
    //         {a:5},
    //         {b:17}
    //     ],(err, res)=>{
    //         if(err) return console.log("error")
    //         console.log(res)
    //     }
    //     )

    // myClient.collection("users").find({name: "ahmed"}).toArray((err,res)=>{
    //     if(err) return console.log("error")
    //     console.log(res)
    // })

    // myClient.collection("users").findOne(
    //     {
    //         _id: new ObjectId("61981065f724d6681cee3ee5")
    //     }, (err,res)=>{
    //     if(err) return console.log("error")
    //     console.log(res)
    // })



    // myClient.collection("users").deleteOne({_id:new ObjectId("61981065f724d6681cee3ee4")})
    // .then(res=>console.log(res))
    // .catch(e=>console.log(e))

    // myClient.collection("users").deleteMany({name:"Dalia"})
    // .then(res=>console.log(res))
    // .catch(e=>console.log(e))

    // myClient.collection("users").updateOne(
    //     {name:"ahmed"},
    //     {
    //         $set:{name:"dalia", age:24} 
    //     })
    //     .then(res=>console.log(res))
    //     .catch(e=>console.log(e))

    // myClient.collection("users").updateOne(
    //     {name:"dalia"},
    //     {
    //         $inc:{ age:1} 
    //     })
    //     .then(res=>console.log(res))
    //     .catch(e=>console.log(e))
        
    myClient.collection("users").updateMany(
        {}, //الفاضي معناه هيعدل ف الكل
        {
            $set:{ age:1} 
        })
        .then(res=>console.log(res))
        .catch(e=>console.log(e))

})