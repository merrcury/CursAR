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

route.post('/feedback',(req,res)=>{
    userOperation.feedback(req.body,res);
})

route.get('/alluser',(req,res)=>{
    userOperation.alluser(res);
})

route.get('/displayFeedback',(req,res)=>{
    userOperation.displayFeedback(res);
})
module.exports=route;