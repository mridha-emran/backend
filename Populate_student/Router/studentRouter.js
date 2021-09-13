const express = require("express")
const router = express.Router()
const { getStudent,getStudentId,addStudent} = require("../controller/studentController")

router.get("/", getStudent)
router.get("/:ID",getStudentId)
router.post("/", addStudent)


module.exports = router