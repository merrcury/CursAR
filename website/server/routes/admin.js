const route=require('express').Router();

const adminOperation=require('../helpers/adminCrud');

route.post('/addModel',(req,res)=>{
    adminOperation.addModel(req.body,res);
})

route.post('/acceptModel',(req,res)=>{
    adminOperation.acceptModel(req.body,res);
})

route.get('/sort',(req,res)=>{
    adminOperation.sort(res);
})

module.exports=route;