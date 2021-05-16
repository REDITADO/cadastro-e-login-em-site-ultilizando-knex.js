const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended:true}))
const expressSession= require('express-session')
const {registroUser, findUser} = require('../controlles/usersController')
router.use(expressSession({
    secret:'cat board',
  cookie:{maxAge:42*60*60*60},
  resave:false,
  saveUninitialized:true
  }))
  router.get('/cadastro',(req,res)=>{
      
      res.render('views/cadastro.html')
  })
  router.get('/',(req,res)=>{
    if(req.session.isLogged){
        console.log(req.session.isLogged)
        res.render('views/index.html', {user:req.session.userName,foto:req.session.foto})
        }else{
   res.redirect('/login')
        }
  })
  router.get('/login',(req,res)=>{
      res.render('views/login.html')
  })
  router.post('/login',findUser)

 router.post('/log',registroUser)
  module.exports=router