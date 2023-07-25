require("dotenv").config()

const express=require("express")
const cors=require("cors")
const rateLimit = require('express-rate-limit');
const connect=require("./Config/Config")
const product =require("./Routes/product.route")
const user=require("./Routes/user.route")
const category=require("./Routes/category.route")
const cart=require("./Routes/cart.route")
const order=require("./Routes/order.route")
//routes


const app=express()

app.use(express.json())
app.use(cors())


const limiter = rateLimit({windowMs:15 *60*1000, max:100});

app.use(limiter)  // Limiter for api

app.use("/user",user) // Route for user

app.use("/products",product) // Route for product

app.use("/categorys",category)  // Route for Category

app.use("/cart",cart) // Route for Cart

app.use("/order",order)




app.get("/",(req,res)=>
{
    res.send("Welecome to server")
})


app.listen(process.env.PORT,async()=>
{
    await connect
    console.log("Server started")
})