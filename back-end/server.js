const express = require('express')
const db = require('./database/connectionClass')
const app = express()


// middle that can convert data from client into json object
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// db connection testing
const dbConnection = new db() //create new instance of db
dbConnection.dbConnect().getConnection(error =>{
    if(error){
        console.log(error)
    }else{
        console.log('connected')
    }
})

// Routes
app.use('/account', require('./routes/user-routes'))
app.use('/officials', require('./routes/officialRoutes'))

app.listen(3001, ()=>{
    console.log('server is running')
})