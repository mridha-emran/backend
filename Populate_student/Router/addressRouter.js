const express = require("express")
const router = express.Router()
const {addAddress} = require("../controller/addressController")

router.post("/", addAddress)

module.exports = router
