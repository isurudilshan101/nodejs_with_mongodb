const express=require("express");
const mongoose=require("mongoose");

const app=express();

const mongoUrl="mongodb+srv://herath:herath41@cluster0.kl6b4.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB= async()=>{
    try {
        await mongoose.connect(mongoUrl,{ useNewUrlParser: true , useUnifiedTopology: true});
        console.log("connect to the database");
    } catch (err) {
        console.log (err.message);
    }
};

connectDB();

const PORT=process.env.PORT||5001;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});
