const expressSession= require('express-session')
const knex = require('../db')
expressSession({
    secret:'cat board',
  cookie:{maxAge:42*60*60*60},
  resave:false,
  saveUninitialized:true
  })

module.exports={
    async registroUser(req,res,next){
        const {nome, senha,eMail,link} =await req.body
try{
    await knex('users').insert({userName:nome,senha,eMail,foto:link})
    res.redirect('/login')
   }catch(e){
       console.log(e)
next(e.message)
   }},
   async findUser(req,res,next){
    const userName=req.body.eMail
    const senha = req.body.senha
    try{
     let user=await knex('users').select('userName','senha','foto').where({userName:userName,senha:senha})
        if(user){
        console.log( user)
        req.session.userName=user[0].userName
        req.session.isLogged=true
        req.session.foto=user[0].foto
        console.log(req.session.foto=user[0].foto)
        res.redirect('/')
        }else{
            console.log('erro')
            //const erro =  new Error('usuario não existe')
        }
    }catch(e){
      
    console.log(e)
        next(e.message='usuario ou senha incorretos')
    }
   }
}