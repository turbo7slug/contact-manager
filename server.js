const express  = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
const port=process.env.PORT||5000;


app.use(express.json());//inbuilt middleware---provide parser to read datastream from client request
app.use("/api/contacts",require("./routes/contactRoutes"));//middleware
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`sever listening on port ${port}`)
})