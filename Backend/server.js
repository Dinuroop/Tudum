const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/UserRoutes");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection Sucessful");
}).catch((err)=>{
    console.log(err.message);
})

app.use("/api/user", userRoutes);

app.listen(process.env.PORT||3005,()=>{
    console.log("Server connected on port 4000");
})