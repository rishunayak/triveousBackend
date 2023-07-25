const express=require("express")
const Product=require("../Model/product.model")
const Category=require("../Model/category.model")


const app=express.Router()



app.get("/category/:categoryId",async(req,res)=>
{
    
    const categoryId = req.params.categoryId;
    try
    {
       const product=await Product.find({category:categoryId}).populate("category")
       res.send(product).status(200)
    }
    catch(e)
    {
        res.status(404).send({error:"Failed to fetch the product"});

    }
})

app.get("/:productId",async(req,res)=>
{
    const productId = req.params.productId;
    try
    {
       const product=await Product.findById(productId).populate("category") 
       if (!product) 
       {
         return res.status(404).send({error:"Product not found"});
       }
       res.send(product).status(200)
    }
    catch(e)
    {
        res.status(404).send({error:"Failed to fetch the product"});  
    }
}) 


module.exports=app 

