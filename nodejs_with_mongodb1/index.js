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
//             title:"learn react",
//             description:"learn react with express"
//         });
//         await todo.save();
//         console.log("Data saved");
//     } catch (err) {
//         console.error(err.message);
//     }
// };

//addDummyData();

// ( async()=>{
//     try {
//         const todos=await ToDos.findOne({title:"learn node"});
//         console.log(todos);
//     } catch (err) {
//         console.error(err.message);
//     }

// })();

//delete data
// (async()=>{
//     try {
//        const todos=await ToDos.findOneAndDelete("5f4d5d0abbb9733570ae7fa0");
//         console.log(todos);
//     } catch (err) {
//         console.error(err.message);
        
//     }

// })();

//update data base

(async()=>{
    try {
        await ToDos.updateOne(
            {_id:"5f4e7c0a62813a8f68bb8dbd"},
            {$set:{title:"learn node", description:"learn with node"}}
          
        );
        console.log("data updated");
    } catch (err) {
        console.err();
        
    }

})();