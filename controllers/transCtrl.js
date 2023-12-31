const transModel=require("../models/transModel");
const moment=require('moment');

const getAllTransaction = async(req,res) =>{
  try {
    const {frequency,selectedDate,type}=req.body;
    const transactions=await transModel.find({

      ...(frequency !== 'custom' ? {
        date:{
          $gt: moment().subtract(Number(frequency),"d").toDate(),
      },
      }: {
        date:{
           $gte:selectedDate[0],
           $lte:selectedDate[1],
        },
      }),
      userid:req.body.userid,
      ...(type!='all' && {type})
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editTransaction= async(req,res)=>{
    try {
      await transModel.findOneAndUpdate(
        {
          _id:req.body.transactionId

        },
        req.body.payload
      );
      res.status(200).send("Edit Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
};

const deleteTransaction=async(req,res)=>{
    try {
      await transModel.findOneAndDelete({_id:req.body.transactionId});
      res.status(200).send("Transaction Deleted");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }

};

const addTransaction =async(req,res)=>{
    try{
        const newTrans=new transModel(req.body);
        await newTrans.save();
        res.status(201).send("Transaction Created");

    }
    catch(error){
       console.log(error);
       res.status(500).json(error);
    }

};
module.exports={getAllTransaction,addTransaction,editTransaction,deleteTransaction};