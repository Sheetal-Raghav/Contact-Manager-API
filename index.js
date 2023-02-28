const express=require('express')
const mongoose=require('mongoose')
const app=express()
const Contact=require('./routes/contact')
mongoose.connect('mongodb://localhost:27017/Contact-Management-backend',{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.once('open',()=>{
    console.log('connect to db')
})

app.use('/',Contact)
app.listen(3000,()=>{console.log('server connected successfully')})