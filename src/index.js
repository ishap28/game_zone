const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongodb");

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs");
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render("front");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }
await collection.insertMany([data])

res.render("login")

})

app.post("/login",async (req,res)=>{

   try{
    const check=await collection.findOne({name:req.body.name})
    if(check.password===req.body.password){
        res.render("home")
    }
    else{
        res.send("wrong password")
    }
   }catch{
    res.send("wrong details")
   }

})

app.get("/snake",(req,res)=>{
    res.render("snake");
})
app.get("/space",(req,res)=>{
    res.render("space");
})
app.get("/beyblade",(req,res)=>{
    res.render("beyblade");
})
app.get("/rock",(req,res)=>{
    res.render("rock");
})
app.get("/quiz",(req,res)=>{
    res.render("quiz");
})
app.get("/tic",(req,res)=>{
    res.render("tic");
})

app.get("/brick",(req,res)=>{
    res.render("brick");
})
app.get("/wordle",(req,res)=>{
    res.render("wordle");
})
app.get("/puzzle",(req,res)=>{
    res.render("puzzle");
})
app.get("/card",(req,res)=>{
    res.render("card");
})
app.get("/cross",(req,res)=>{
    res.render("cross");
})
app.get("/maze",(req,res)=>{
    res.render("maze");
})
app.listen(3000,()=>{

    console.log("connected");
})