const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const Register=require("./models/registers")
const port=process.env.PORT ||8080;
const static_path=path.join(__dirname,"../backend/frontend");

app.use(express.static(static_path));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'templates', 'views'));
hbs.registerPartials(path.join(__dirname, 'templates', 'partials'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));




const mongoose = require('mongoose');


// Connection URL
const db = "mongodb+srv://suraj:mahto@cluster0.5h46w9f.mongodb.net/admisDB?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Start using Mongoose models and perform database operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  app.get("/",(req,res)=>{
    res.render("index");
  });
  app.get("/register",(req,res)=>{
    res.render("register");
  });
  app.post("/register",async(req,res)=>{
    try{
const registerStudent=new Register({
  Username:req.body.username,
  Email:req.body.email,
  Password:req.body.password

});
const registered=await registerStudent.save();
res.status(201).render(index);

    } catch(error){
      res.status(400).send(error);
    }
  });
  app.get("/login",(req,res)=>{
    res.render("login");
  });
  app.listen(port,()=>{
    console.log("server is running");
  })
