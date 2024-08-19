const Task=require('../models/tasks')



const getAllTasks= async (req,res)=>{
try{
    tasks=await Task.find()
    return res.status(200).json({tasks})
}
catch{
    console.log(err)
}
}

const createTask=async (req,res)=>{
    try{
       const task= await Task.create(req.body)
       res.status(201).json({task})
    }
    catch(err){
     console.log(err)
    
    }
}

const deleteTask=async (req,res)=>{

    const{id:taskID} =req.params

    task=await Task.findOneAndDelete({_id:taskID})

    if(!task){
        return res.status(404)
    }

    return res.status(201).json({task})

 
}

const updateTask=(req,res)=>{
    res.send('update task')

}

const getTask= async (req,res)=>{

    const{id:taskID}=req.params

    task=await Task.findOne({_id:taskID})

    if(!task){
        return res.status(404)
    }

    return res.status(201).json({task})

    
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}