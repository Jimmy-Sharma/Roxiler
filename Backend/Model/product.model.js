const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        title: {type:String},
        price: {type:Number},
        description: {type:String},
        image: {type:String},
        sold: {type:Boolean},
        dateOfSale: {type:String}
    }
)

const ProductModel = mongoose.model('product',productSchema)

module.exports=ProductModel