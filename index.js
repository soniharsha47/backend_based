const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const os=require('os');
const mongoose = require('mongoose');

// get, post, use, all

mongoose.connect("mongodb://127.0.0.1:27017/datagather")
var db=mongoose.connection;

// Use () -> JSON & Urlencoded 
app.use(bodyParser.json()); //Translate
app.use(bodyParser.urlencoded({extended:true})); //Readable format

// Port Define
var port=8092;
app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`http://localhost:${port}`);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

// Route parameters 
app.get('/api/user/ad/min/:id/:name',(req,res)=>{
    // res.send('Admin called');
    const id=req.params.id;
    // res.send(id)
    // adminId=74125SDF852
    if(id=='74125SDF852'){
        res.send('Welcome Admin');
    }
    else{
        // res.send('Warning');
        res.redirect('/');
    }
});

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

// POST API -> Data Exchange
app.post('/data',(req,res)=>{
    const uname=req.body.uname;
   
    console.log(os.platform())
    // res.send(uname);
    // res.redirect('/');
    var data={
        "username":uname
    }
    res.redirect("https://github.com/soniharsha47/backend_based/actions/runs/5699873501")
});

app.all('*',(req,res)=>{
    res.send('<h1>404 Page not found</h1>');
});