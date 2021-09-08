const express = require("express");
const app= express();
const PORT=3000;
const dotenv=require("dotenv")
dotenv.config({
    path:"./config.env"
})
const mongoose=require("mongoose")
const students = [
    "yangchent",
    "emran",
    "Rahmad",
    "Lauraillouz",
    
]
app.use(express.json())

app.use((req, res, next) => {
	console.log("student ok");

	next();
});

const StudentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	}
});

const Student = mongoose.model('Student',StudentSchema)

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

app.get("/students", async(req, res) => {
    const superHeroe=await Student.find()
    res.json({
         message:"ok",
         data: Student
    })
})


app.post("/students", async (req, res) => {
    const addStudents = await Student.create (req.body)
   
     console.log(addStudents)
    res.json({
        message: "Student Added",
        data: addStudents
    })
})



app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))