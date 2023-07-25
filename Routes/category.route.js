const express=require("express")
const Category=require("../Model/category.model")
const app=express.Router()


app.get("/",async(req,res)=>
{
    try
    {
        const category=await Category.find()
        res.send(category)
    }
    catch(e)
    {
        res.send({error:"Failed to get Category"}).status(404)
    }
   

})

app.post("/",async(req,res)=>
{
    try
    {
        const {name}=req.body
        await Category.create({name})
        res.send({msg:"Created New Category Succesfully"}).status(200)
    }
    catch(e)
    {
        res.send({error:"Failed to Create New Category"}).status(404)
    }
   

})



module.exports=app

