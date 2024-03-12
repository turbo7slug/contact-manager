const express  = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectDb()
const app = express();
const port=process.env.PORT||5000;


app.use(express.json());//inbuilt middleware---provide parser to read datastream from client request
app.use("/api/contacts",require("./routes/contactRoutes"));//middleware
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`sever listening on port ${port}`)
})