const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const path=require('path')
const connectDb = require('./config/connectDb')


dotenv.config();

//database call
connectDb();

const app=express()

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/users', require('./routes/userRoute'));

app.use('/transactions', require('./routes/transRoutes'));

app.use(express.static(path.join(__dirname,'./client/build')));

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

const PORT =8088||process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});