const mongoose = require("mongoose");
const Product=require("./product.model")
const User=require("./user.model")



const orderSchema = new mongoose.Schema({
  user: {type:mongoose.Schema.Types.ObjectId,ref:User,required: true},
  products: [{product:{type:mongoose.Schema.Types.ObjectId,ref:Product,required:true},quantity: {type:Number,required:true,min:1}}],
  totalAmount: {type: Number,required: true},
  createdAt: {type: Date,default: Date.now},
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
