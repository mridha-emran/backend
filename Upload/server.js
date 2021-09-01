const express = require("express");
const cors = require("cors")
const multer  = require('multer');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: 'public/uploads/' });

const PORT=3000;

const app= express();

app.use(cors())
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.json({status :'ok',})
})

app.post('/user', upload.single('image'),  (req, res) => {
    console.log(req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    res.json("ok");
  });

app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))