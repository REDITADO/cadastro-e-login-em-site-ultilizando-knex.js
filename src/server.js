const knex=require('./db')
const path = require('path')
const expressSession= require('express-session')
const router=require('./routers/Router')
const express = require('express')
const app=express()

app.use((err,req,res,next)=>{
    res.status(500).send(err,{message:'user ja existe'})
})
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'..', 'public')))
app.set("views", path.join(__dirname,'..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.json())
app.use(router)



app.listen(2222)