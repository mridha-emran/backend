const mongoose = require("mongoose")

const addressShema = new mongoose.Schema({
    // ID:	ObjectId,
    streetName:	String,
    streetNumber: String,
    postCode: String,
    city: String
})


const Address = mongoose.model('Address',addressShema)

module.exports = Address