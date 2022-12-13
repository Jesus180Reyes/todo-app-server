const { Schema, model } = require('mongoose');
const TodoSchema = Schema({
title: {
type: String,
required: [true, 'El Titulo es obligatorio'],
required:true,
trim: true,
},

createdAt:{
    type: Date,
    default: new Date(),
},
updatedAt:{
    type:Date,
    default: new Date(),
    
}

// usuario: {
// type: Schema.Types.ObjectId,
// ref: 'Usuario',
// required: true,
// }
});
TodoSchema.methods.toJSON = function () {
const { __v, ...data } = this.toObject();
return data;
}
module.exports = model('Todo', TodoSchema);