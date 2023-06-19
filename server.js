const express = require("express")
const cors = require("cors")
const os = require("os")
const app= express()
require("dotenv").config()

const port = process.env.PORT

const operatingSystem= os.type()
app.get("/",(req,res)=>{
    res.send(`<h1>${operatingSystem}</h1>`)
})

app.listen(3001,()=>{
    console.log(`server is up on port${port}`)
})




