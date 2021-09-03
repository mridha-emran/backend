const express = require("express");
const { getuser } = require("./controllers/usersController");
const app = express();
const PORT=3000;
const usersRouter= require("./routers/usersRouter")

app.use(express.json())
app.use("/users", usersRouter);






app.listen(PORT,()=>(console.log(`this port listing${PORT}`)))

