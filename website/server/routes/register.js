const route=require('express').Router();
const userOperation=require('../helpers/userCrud');

route.post('/signup',(req,res)=>{
    userOperation.signup(req.body,res);
});

route.post('/signin',(req,res)=>{
    userOperation.signin(req.body,res);
});

route.post('/passwordReset',(req,res)=>{
    userOperation.passwordReset(req.body,res);
});

route.post('/verifyToken',(req,res)=>{
    userOperation.verifyToken(req.body,res);
})

module.exports=route;