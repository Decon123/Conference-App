const path = require("path");
const express = require("express");
const hbs = require("hbs")
const app = express();

//set the hbs view engine for the server(express)
app.set("view engine","hbs")

//join a path to the current directory
const publicDirectoryPath = path.join(__dirname,"../public")

//register the views path
const viewsPath = path.join(__dirname,"../templates/views")

//register the partials path
const partialsPath = path.join(__dirname,"../templates/partials")

app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

//in this route it is the root folder
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/speakers",(req,res)=>{
    res.render("speakers",{
        name:"speakerNames"
    });
})

app.get("*",(req,res)=>{
    res.render("404",{
        title:"404",
        error:"404 page not found"
    })
})
app.listen(3000,(req,res)=>{
    console.log("Server is running")
})