const Address= require("../model/address")


 const addAddress=async(req,res)=>{
    try {
        const address=await Address.create(req.body);
       

       res.json({
           message: "OK",
           data: address,
       });
   } catch (err) {
       res.status(404).json({
           message: err,
       });
   }
 }
 module.exports={
     addAddress
 }