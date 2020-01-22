const route=require('express').Router();

const adminOperation=require('../helpers/adminCrud');

route.post('/addModel',(req,res)=>{
    adminOperation.addModel(req.body,res);
})

module.exports=route;