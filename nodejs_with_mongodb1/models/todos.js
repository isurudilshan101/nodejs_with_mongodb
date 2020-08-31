const {Schema,model}=require("mongoose");

const TodoSchema=new Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }
});

module.exports=model("todo",TodoSchema );