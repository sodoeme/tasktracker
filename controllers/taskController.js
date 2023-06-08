const Task = require('../models/task')



exports.getAllTasks = async (req, res) => {

   const tasks = await Task.find()

    
    res.render('task', {tasks})

 

}



exports.editTask = async (req, res) => {
    
    const updatedTask = new Task(req.body)

    const task = await Task.findById(taskId)
    if(!task){
        return
    }
    const success = await task.updateOne(updatedTask)
    if(success){
        //reload page
    }
    else{
        
    }


};


exports.createTask = async (req, res) => {

    const task = new Task(req.body)
    task.author = req.session.user
    console.log(task)
    if(!task){
        return
    }
    const success = await Task.create(task)
    if(success){
        res.redirect('/tasks')
    }
    else{
        
    }

};


exports.delete = async (req, res) => {

   
    const id =  (req.params.id)
    console.log(req.params)
    if(!id){
        return
    }
    const exist = await Task.findById(id)
    if(!exist){
        console.log("not found")
        
    }

    const status = exist.deleteOne()

    if(status){
        //reload page
        res.redirect('/tasks')
    }
   else{

   }


};