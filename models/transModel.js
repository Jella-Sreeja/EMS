const mongoose=require('mongoose')
const transSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        reruired:[true,'amount is required']
    },
    type:{
        type:String,
        requires:[true,'type is required']
    },
    category:{
        type:String,
        requires:[true,'cat is required']
    },
    reference:{
        type:String,
    },
    description:{
        type:String,
        requires:[true,'desc is required']
    },
    date:{
        type:Date,
        requires:[true,'date is required']
    }
},{timestamps:true})

const transModel=mongoose.model('transactions',transSchema);
module.exports=transModel;