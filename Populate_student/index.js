const express=require("express");
const app=express()
const dotenv=require("dotenv")
const Student=require("./model/student")
const Address=require("./model/address")
dotenv.config({
    path:"./config.env",
})
const mongoose=require("mongoose");
app.use(express.json())

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
	.then(() => {
		console.log("Connected to MongoDB !");
	});
   
    app.get("/student", async (_req, res) => {
        try {
            const students = await student.find();
    
            res.json({
                message: "OK",
                data: students,
            });
        } catch (err) {
            res.status(404).json({
                message: err,
            });
        }
    });


    app.get("/student/:ID", async (req, res) => {
        try {
            const students = await Student.findById(req.params.ID).populate("address");;
    
            res.json({
                message: "OK",
                data: students,
            });
        } catch (err) {
            res.status(404).json({
                message: err,
            });
        }
    });
    
app.post("/student", async (req, res) => {
    
    try {
         await Student.create(req.body);
        

        res.json({
            message: "OK",
            data: Student,
        });
    } catch (err) {
        res.status(404).json({
            message: err,
        });
    }
});

app.post("/address", async (req, res) => {
    
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
});








app.listen(process.env.PORT,()=>(console.log("this server listing port:3000")))