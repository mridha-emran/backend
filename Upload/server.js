const express = require("express");
const cors = require("cors")
const multer  = require('multer');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: 'public/uploads/' });
const dotenv=require("dotenv")
dotenv.config({
  path:"./config.env",
})

const mongoose=require("mongoose")

const app= express();
mongoose.connect(process.env.DB,{useNewUrlParser:true,}).then(()=>{
  console.log("Conected to mongoDB")
})

app.use(cors())
app.use(express.static('public'));


const userListShema = new mongoose.Schema({
   photo:String,
   username:String
})

const UserList = mongoose.model('UserList', userListShema)

app.get("/",async (req, res) => {
  const user=await UserList.find()
    res.json({status :'ok',
              data:user
  })
})

app.post('/user', upload.single('image'), async (req, res) => {
    console.log( "req user",req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    const username=await UserList.create({
      username:req.query.username,
      photo:`uploads/${req.file.originalname}`
    }) 
    console.log( "postuserName",username)
    res.json("ok");
  });

  app.listen( process.env.PORT,()=>( console.log("this server listing port:3000")))