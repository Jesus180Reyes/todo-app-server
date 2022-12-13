const { response, request } = require("express");
const InProgress = require("../models/InProgress");
const Todo = require("../models/Todo");
const getTaskInProgress = async(req,res = response)=> {
    const todos = await InProgress.find();
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


module.exports = {
    getTaskInProgress,
    postTaskInProgress
}