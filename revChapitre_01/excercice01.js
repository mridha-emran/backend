const express = require("express");
const app= express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.json("Authors API")
})








app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))