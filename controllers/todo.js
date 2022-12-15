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
    try {
        
    const {title} = req.body;
    const todo = new Todo({title:title[0].toUpperCase()+ title.slice(1)});
    await todo.save();
    res.json({
        ok:true,
        todo
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        msg:"Hable con el administrador",
        });
        
    }
}

const deleteTodo = async(req = request, res= response)=> {
    try {
        const {_id} = req.params;
        const todo = await Todo.findByIdAndDelete(_id, {new:true});
        
        res.json({
            ok:true,
            msg:"Todo Borrado",
            todo
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:"Hable con el administrador"
        });
    }

}




module.exports = {
    getTodos,
    postTodo,
    deleteTodo
}