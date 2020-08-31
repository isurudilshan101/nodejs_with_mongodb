const express=require("express");

const app=express();

const mongourl="mongodb+srv://herath:herath41@cluster0.kl6b4.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT=process.env.PORT||5001;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});
