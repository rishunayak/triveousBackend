const express=require("express")
const Authentication = require("../Middleware/Authentication")
const User = require("../Model/user.model")
const Product = require("../Model/product.model")
const Cart = require("../Model/cart.model")
const app=express.Router()


app.use(Authentication) // Middleware for Authentication


app.get("/",async(req,res)=>
{
    try
    {
       const id=req.body.id

        const cart=await Cart.find({user:id}).populate('items.product')
        res.send(cart).status(200)
    
    }
    catch(e)
    {
      console.log(req.body.id,e)
      res.status(404).send({error:"Server Issue"}) 
    }
})





app.post("/addToCart",async(req,res)=>
{
    const {productId, quantity}=req.body
    try
    {
        const product=await Product.findById(productId)

        if(!product)
        {
            return res.status(404).send({error:"Product not found"});
        }
        
        const cart=await Cart.findOne({user:req.body.id})

        if(!cart)
        {
            cart=await Cart.create({user:req.body.id,items:[]})
        }

        const existingCartItem=cart.items.find((item)=>item.product.toString()===productId); 

        if (existingCartItem) 
          {
            existingCartItem.quantity+=quantity;
          }
          else
          {
            cart.items.push({product:productId,quantity})
          }

          await cart.save();
          res.status(200).send(cart);


    }
    catch(e)
    {
     
        res.status(404).send({error:"Failed to add item to cart"});
    }
})



app.patch("/updateCart/:itemId",async(req,res)=>
{
    const itemId = req.params.itemId;
    const { quantity } = req.body;

    try
    {
        const cart =await Cart.findOne({ user: req.body.id });

        if(!cart)
        {
            return res.status(404).json({ error: "Cart not found" });
        }

        const existingCartItem = cart.items.find((item) => item._id.toString() === itemId);

        if (!existingCartItem) 
          {
            return res.status(404).json({ error: "Item not found in the cart" });
          }

          existingCartItem.quantity = quantity;
          await cart.save();
          res.send(cart).status(200)

    }
    catch (e) 
    {
        res.status(404).send({error:"Failed to update cart item"});
    }
})


app.delete("/deleteItem/:itemId",async(req,res)=>
{
    const itemId = req.params.itemId;
    
    try
    {
        const cart=await Cart.findOne({user:req.body.id});

        if (!cart) 
        {
            return res.status(404).send({ error: "Cart not found" });
        }
        cart.items = cart.items.filter((item)=>item._id.toString()!==itemId);

        await cart.save();
        res.send(cart).status(200)
    }
    catch(e) 
      {
        res.status(404).send({error: "Failed to remove item from cart"});
      }
})

module.exports=app