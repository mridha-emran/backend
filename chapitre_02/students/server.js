const express = require("express");
const app= express();
const PORT=3000;


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

app.get("/students", (req, res) => {
    res.json(students)
})

app.post("/students", (req, res) => {
    const addStudents = req.body
    students.push(addStudents)
     console.log(addStudents)
    res.json({
        message: "Student Added",
        addStudents
    })
})



app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))