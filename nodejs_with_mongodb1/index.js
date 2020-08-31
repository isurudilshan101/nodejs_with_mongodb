const express=require("express");
const mongoose=require("mongoose");

const app=express();

const mongourl="mongodb+srv://herath:herath41@cluster0.kl6b4.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB= async()=>{
    try {
        await mongoose.connect(mongourl);
    } catch (err) {
        console.log (err.message);
    }
}

const PORT=process.env.PORT||5001;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});
