const express=require("express")
const Category = require("../Model/category.model")
const Order = require("../Model/order.model")
const Authentication = require("../Middleware/Authentication")
const app=express.Router() 

app.use(Authentication)

app.get("/",async(req,res)=>
{
    try
    {
        const order=await Order.find({user:req.body.id}).populate("products.product")
        res.send(order).status(200)
    }
    catch(e)
    {
        res.status(404).send({error:'Failed to fetch orders'});
    }
})

app.post("/",async(req,res)=>
{
    const {products,totalAmount,id}=req.body
    
    try
    {
        const newOrder=await Order.create({user:id,products,totalAmount})
        res.send(newOrder).status(200)
    }
    catch(e)
    {
        console.log(e.message)
        res.status(404).send({error:'Failed to create order'});
    }
})

app.get("/:orderId",async(req,res)=>
{
    const orderId=req.params.orderId;

    try
    {
        
        const order=await Order.findById(orderId).populate("products.product")
        
        if(order.user==req.body.id)
        {
            res.status(200).send(order)
        }
        else
        {
            res.send({msg:"its not your order"})
        }
        
       
    }
    catch(e)
    {
        res.status(404).send({error:"Failed to Fetch Order Details"})
    }

})


module.exports=app
