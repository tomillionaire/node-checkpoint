// import express
const express = require('express')


const app = express()

// set port
const port= 6080

// introducing user routes to server
const userRouter = require('./routes/users')
app.use(userRouter)

// listen to requests
app.listen(port,()=>{
    console.log('server started successfully')
})