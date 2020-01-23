const admin=require('firebase-admin');
const keys=require('../config/keys');
const User=require('../models/userSchema');
const feed=require('../models/feedback');

var serviceAccount = require('../config/digital-googl.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: keys.databaseURL,
    storageBucket: keys.storageBucket,
    authDomain: keys.authDomain,
  });


  // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig=require('../firebase');
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// var db = Firebase.database();
// var usersRef = db.ref("users");
const userOperations={
    signup(obj,res){
        firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password).then(function(user) {
            var user = firebase.auth().currentUser;
            //to update user name
            user.updateProfile({
              displayName: obj.fname+" "+obj.lname,
            }).then(function() {
              console.log("Name updated")
            }).catch(function(error) {
              console.log("error updating name");
            });
            //code to send email to user to verify email address
            firebase.auth().onAuthStateChanged(function(user1) {
                user1.sendEmailVerification(); 
              });
            res.status(200).json({"doc":user,"msg":"Verification mail send , ask user to verify(spam folder)"});
           // logUser(user); // Optional
        }, function(error) {
            // Handle Errors here.
            res.status(300).json({"code":error.code,"msg":error.message})
        });
    },
    signin(obj,res){
        firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then(function(user) {
          //generates token id when signin and send to client for storage
          firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            res.status(200).json({"doc":user,"idToken":idToken});
          }).catch(function(error) {
            res.status(300).json({"msg":"Error while generating token","error":error});
            // Handle error
          });
          // update database with new user
          if(user.user.emailVerified){
            User.findOne({"uid":user.user.uid},(err,doc)=>{
              if(!doc){
                User.create({
                  "uid":user.user.uid,
                  "email":user.user.email,
                  "userName":user.user.userName
                })
                console.log("User added in database :)")
              }else{console.log("User already exists in database")}
            })

        /*    var db=admin.database();
          var userRef=db.ref("users");
          var users=userRef.child(user.user.uid);
          users.once('value',function(snap){
            if(!snap.val()){
              users.set({
                "email":user.user.email,
                "totalLockedModel":0,
                "lockedModels":["null"],
                "acceptedModels":["null"],
                "uploadedModels":["null"]
              });
            }
          })   */
         
         }
        },function(err){
              res.status(400).json({"msg":err});
          });
    },
    passwordReset(obj,res){
          firebase.auth().sendPasswordResetEmail(obj.email).then(function() {
              res.status(200).json({"msg":"Mail sent"});// Email sent.
    }).catch(function(error) {
              res.status(300).json({"error":error}); // An error happened.
    });
    },


    verifyToken(obj,res){
                // idToken comes from the client app
          admin.auth().verifyIdToken(obj.idToken)
          .then(function(decodedToken) {
            let uid = decodedToken.uid;
            res.status(200).json({"msg":"token verified","uid":uid});
            // ...
          }).catch(function(error) {
            res.status(300).json({"error":error});
            // Handle error
          });
    },
    feedback(obj,res){
      feed.create(obj,(err,doc)=>{
        if(err){
          res.status(500).json({"msg":"Internal server error"});
        }else{
          res.status(200).json({"msg":"feedback submitted","doc":doc});
        }
      })
   /*   var db=admin.database();
      var feedRef=db.ref("feedback");
      feedRef.push(obj,(err,doc)=>{
        if(err){
          res.status(400).json({"msg":err});
        }
        else{
          res.status(200).json({"msg":"Feedback submitted"});
        }
      }) */
    },
    alluser(res){
      User.find({},{"uid":1,"email":1,"userName":1},(err,doc)=>{
        if(err){
          res.status(300).json({"msg":"Internal service error"});
        }else{
          if(doc){
            res.status(200).json({"doc":doc});
          }else{res.status(205).json({"msg":"No record found"})};
        }
      })
  /*    var db=admin.database();
      var user=db.ref("users");
      user.once('value',function(snap){
        var result=Object.keys(snap.val()).map(function(key){
          return snap.val()[key];
        })
          console.log(result);
          res.json({"doc":snap.val(),"result":result});
      }) */
    },
    displayFeedback(res){
      feed.find({},{"name":1,"message":1},(err,doc)=>{
        if(err){
          res.status(500).json({"msg":"Internal server error"});
        }else{
          if(doc){
            res.status(200).json({"doc":doc});
          }else{
            res.status(205).json({"msg":"no feedback found"});
          }
        }
      })
   /*   var db=admin.database();
      var feed=db.ref("feedback");
      feed.once('value',function(snap){
        var result=Object.keys(snap.val()).map(function(key){
          return snap.val()[key];
        })
          res.json({"feedback":result});
      }) */
  }

}

module.exports=userOperations;