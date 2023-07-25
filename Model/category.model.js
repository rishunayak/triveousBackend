const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {type:String,required:true},
});

const Category = mongoose.model('categorys', categorySchema);

module.exports = Category;
