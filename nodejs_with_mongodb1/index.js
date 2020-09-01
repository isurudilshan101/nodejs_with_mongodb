const express=require("express");
const mongoose=require("mongoose");

const app=express();

const mongoUrl="mongodb+srv://herath:herath41@cluster0.kl6b4.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

require("./models/Todos");

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

//Add  data to database

const ToDos=mongoose.model("todos");

// const addDummyData= async ()=>{
//     try {
//         const todo=new ToDos({
//             title:"learn vuejs",
//             description:"learn vuejs with vuex"
//         });
//         await todo.save();
//         console.log("Data saved");
//     } catch (err) {
//         console.error(err.message);
//     }
// };

// addDummyData();

( async()=>{
    try {
        const todos=await ToDos.find();
        console.log(todos);
    } catch (err) {
        console.error(err.message);
    }

})();