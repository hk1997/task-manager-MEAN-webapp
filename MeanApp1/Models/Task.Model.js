var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var taskSchema=new Schema(
    {
        description:String,
        done:Boolean
    }
);

module.exports=mongoose.model('Task',taskSchema);