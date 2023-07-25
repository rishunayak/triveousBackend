const mongoose = require('mongoose');
const Category=require("./category.model")


const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    availability:{type:Boolean,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:Category,required:true},
});

const Product=mongoose.model('products', productSchema);

module.exports=Product;



