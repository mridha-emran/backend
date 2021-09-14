const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const User=require("./model/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config({
    path:"./config.env"
})
app.use(express.json())

mongoose.connect(process.env.DB,{useNewUrlParser:true,}).then(()=>{
    console.log("connected to mongoDB!")
})

app.post("/signup",async(req,res)=>{
    const { email, password } = req.body;
    const userPassword = await bcrypt.hash(password, 12);
    try {
		await User.create({ email: email, password: userPassword });
        res.json("User added", User)
	} 
    catch (err) {
		return res.status(400).json({
			message: " user is  exists",
		});
	}
    
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email })

    try {
        const passwordValid = await bcrypt.compare(password, user.password);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
 
	    res.cookie("jwt", token, { httpOnly: true, secure: false });

        res.json("User match", passwordValid)
    } catch (error) {
        console.error(err)

        res.json({ errorMessage: "There is a probleme " })
    }
})

app.get("/signup", async (req, res) => {
	
	res.json({
		message: "You are authorized",
	});
});


app.listen(process.env.PORT,()=>(console.log("this server listing port:3005")))