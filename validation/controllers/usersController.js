

const getuser = (req, res) => {
	console.log("getuser test:")
	res.json({
		status: "OK",
		message:"data send"
	});
};

const postuser=(req,res)=>{

	const user = req.body
	// user.created=new.Data(user)
	

	res.json({
		success: true,
		message: 'User will be saved',
		data:user
		
	})
		
}

const getusername=(req,res)=>{
	const findusername = req.params.username
    console.log(req.params.username);

	res.json({
		success: true,
		message: 'User name found',
		data:findusername
	})
}




module.exports = {getuser,postuser,getusername}
