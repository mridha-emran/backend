const express = require("express")
const router = express.Router()
const {getuser,postuser,getusername} =require("../controllers/usersController")


router.get("/",getuser)

router.post("/user",postuser)

router.get("/users/:username",getusername)


module.exports = router
