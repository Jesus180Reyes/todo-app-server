const { response, request } = require("express");
const  Todo = require("../models/Todo");
const getTodos = async(req,res = response)=> {
    const {limit = 10} = req.query
    const todos = await Todo.find().limit(Number(limit))
                                    .sort("-createdAt");
                                    

    const total = todos.length
    res.json({
        ok:true,
        total,
        todos
    });
}

const postTodo = async(req = request,res = response)=> {
    const {title} = req.body;
    const todo = new Todo({title:title[0].toUpperCase()+ title.slice(1)});
    await todo.save();
    res.json({
        ok:true,
        todo
    });
}


module.exports = {
    getTodos,
    postTodo
}