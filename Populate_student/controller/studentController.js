const Student=require("../model/student")

const getStudent=async(_req,res)=>{
    try {
        const students = await Student.find();

        res.json({
            message: "OK",
            data: students,
        });
    } catch (err) {
        res.status(404).json({
            message: err,
        });
    }
}

const getStudentId=async(req,res)=>{
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

}
const addStudent=async(req,res)=>{
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
}

module.exports ={
    getStudent,
    getStudentId,
    addStudent
}