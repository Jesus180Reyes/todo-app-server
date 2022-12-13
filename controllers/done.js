const { response, request } = require("express");
const InProgress = require("../models/InProgress");
const Done = require("../models/Done");
const getDone = async (req,res = response)=> {

    const done = await Done.find();
    const total = done.length
    res.json({
        ok:true,
        total,
        done
    });

}

const postDone = async(req = request, res = response)=> {
    const {_id} = req.params;
    const inProgressTodo = await InProgress.findById({_id});
    const onDone = new Done({title:inProgressTodo.title});
    await onDone.save();
    const todoDeleted =   await InProgress.findByIdAndDelete({_id});

    res.json({
        ok: true,
        msg: "Generado en InProgress Exitosamente",
        inProgressTodo,
        todoDeleted,
    })
}


module.exports = {
    getDone,
    postDone,
}