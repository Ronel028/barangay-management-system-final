const express = require('express')
const dbConnection = require('./database/connection')
const app = express()


// middle that can convert data from client into json object
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// db connection testing
dbConnection().getConnection((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Connected')
    }
})

// Routes
app.use('/account', require('./routes/user-routes'))

app.listen(3001, ()=>{
    console.log('server is running')
})