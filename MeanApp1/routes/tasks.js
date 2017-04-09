var express=require('express');
var taskRouter=express.Router();
var Task=require('../Models/Task.Model');

taskRouter.get('/',function (req,res,next)
{
   // console.log('you re in get');
   Task.find({},function (err,tasks) {
       if(err)
           throw err;
       else
           res.json(tasks);
   })
});

taskRouter.post('/',function(req,res,next)
{
   var newTask=new Task(req.body);
   newTask.save(function (err,use) {
       if(err)
           throw err;
       else
       {

           console.log(use);
            res.status(200).json('user saved');
       }

   })
});
taskRouter.delete('/',function (req,res,next)
{
   // console.log(req.body);
            Task.remove({description:req.body.description},function (err)
            {
                if(err)
                    throw err;
                else
                {
                    console.log('removed successfully');
                    res.status(200).json('removed successfully');
                }

            });
});

taskRouter.put('/',function(req,res,next)
{
  var modifiedUser={description:req.body.description,
  done:req.body.done};
  console.log(modifiedUser);
    Task.remove({description:req.body.description},function (err)
    {
        if(err)
            throw err;
        else
        {
            console.log('modified successfully');
            var modTask=new Task(modifiedUser);
            modTask.save(modifiedUser,function (err1)
            {
                if(err1)
                    throw err1;
                else
                res.status(200).json('modified successfully');

            })
            }

    });

});
module.exports=taskRouter;