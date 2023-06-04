const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

//connect to mongoose
mongoose.connect("mongodb+srv://harshilchandratre:56vu6equj57a@cluster0.fuitgez.mongodb.net/complaintsDB")

//require route
app.use("/", require("./routes/complaintsRoute"))

app.get("/", function(req, res){
    // console.log(req)
    res.send("You're currently on root of paveRM server.")    
})

app.listen(3001, function(){
    console.log("Server is running on port 3001.")
})