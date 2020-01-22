const express=require('express');
const route=express.Router();
const admin=require('firebase-admin');
const Multer=require('multer');

const cloudStorageCtrl = require('./cloudstorage');

const modelOperation=require('../helpers/modelCrud');



  var bucket = admin.storage().bucket();

  route.use(function(req, res, next) {
    if (!req.admin) {
      req.admin = admin;
    }
    if (!req.bucket) {
      req.bucket = bucket;
    }
    next();
  });


  const multer = Multer({
    storage: Multer.memoryStorage(),
    // limits: {
    //   fileSize: 10 * 1024 * 1024 // no larger than 10mb, you can change as needed.
    // }
  });
  // URL /upload
  route.post("/upload", multer.single("file"), cloudStorageCtrl.upload);

  route.post('/lockModel',(req,res)=>{
    modelOperation.lockModel(req.body,res);
  })

  route.post('/displayModel',(req,res)=>{
    modelOperation.displayModel(req.body,res);
  })

  route.post('/displayLocked',(req,res)=>{
    modelOperation.dislayLocked(req.body,res);
  })

  route.post('/uploadModeltest',(req,res)=>{
    modelOperation.uploadModeltest(req.body,res);
  })
  module.exports=route;