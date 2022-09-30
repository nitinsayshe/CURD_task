const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/routes");
const cors=require("cors");

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const url = "mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/tech-test"

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected "))
    .catch((err) => console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 8000, function () {
    console.log("Express is running on port " + (process.env.PORT || 8000))
})