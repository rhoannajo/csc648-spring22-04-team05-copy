const express = require('express')
const router = express.Router();



//   /api/tasks/getTask
router.get('/getTask', (req, res)=>{
    try{
        const task = db.collection('tasks').find()
        res.json(task);
    }
    catch(err){
        res.json({message:err});
    }
});
    //submit a post
    //   /api/tasks/getTask
router.post('/getTask', (req,res)=>{
    const post = {
        title: req.body.title,
        complete: req.body.complete,
        todolistId: req.body.todolistId,
        date: req.body.date,
        userId: req.body.userId,
        priority: req.body.priority
    }
    post.save().then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message: err}) //send message if data is not saved
    })
})

//delete task by id  /api/tasks/delete/ <id>
router.delete('/delete/:_id', (req, res)=> {
    try{
        const removedTask =  db.collection('tasks').remove({_id: req.params._id});
        res.json(removedTask);
    }
    catch(err){
        res.json({message: err});
    }
  
});

module.exports = router;