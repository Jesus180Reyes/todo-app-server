const { response, request } = require("express");
const InProgress = require("../models/InProgress");
const Todo = require("../models/Todo");
const getTaskInProgress = async(req,res = response)=> {
    const todos = await InProgress.find().sort("-createdAt");
    const total = todos.length
    res.json({
        ok:true,
        total,
        todos
    });
}

const postTaskInProgress = async(req = request,res = response) => {
    const {_id} = req.params;
    const inProgressTodo = await Todo.findById({_id});
    const inProgress = new InProgress({title:inProgressTodo.title});
    await inProgress.save();
    const todoDeleted =   await Todo.findByIdAndDelete({_id});

    res.json({
        ok: true,
        msg: "Generado en InProgress Exitosamente",
        inProgressTodo,
        todoDeleted,
    })
}
const deleteInProgress = async(req = request, res= response)=> {

    try {
    const {_id} = req.params;
    const todo = await InProgress.findByIdAndDelete(_id, {new:true});
    res.json({
        ok:true,
        msg:"Todo Borrado",
        todo
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: "Hable con el administrador"
        });
        
    }
}



module.exports = {
    getTaskInProgress,
    postTaskInProgress,
    deleteInProgress
}