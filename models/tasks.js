const mongoose=require('mongoose')

const Task=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide name"],
        trim:true,
        maxlength:[20,"must be less than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',Task)