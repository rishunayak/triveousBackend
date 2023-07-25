const mongoose = require('mongoose');
const Product =require("./product.model")
const User=require("./user.model")



const cartSchema = new mongoose.Schema({
  user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  items: [{product: {type:mongoose.Schema.Types.ObjectId,ref:Product, required:true},quantity: {type:Number,default:1,min:1}}],
});

const Cart=mongoose.model('Cart',cartSchema);

module.exports=Cart
