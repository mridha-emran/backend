const mongoose = require("mongoose")
const Address=require("../model/address")

const studentShema = new mongoose.Schema({
        ID:	Object,
        firstName:String,
        surname	:String,
        address	:{ type: mongoose.Types.ObjectId, ref: "Address" }

})


const Student = mongoose.model('Student',studentShema)

module.exports = Student