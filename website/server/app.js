const express=require('express');
const app=express();
var bodyParser=require('body-parser');
app.use(require('./utils/cors'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/',require('./routes/register'));
app.use('/',require('./routes/model'));
app.use('/',require('./routes/admin'));



app.listen(process.env.PORT || 9009,()=>{
    console.log("Server Started at port 9009 ");
});