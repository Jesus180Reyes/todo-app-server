const { Schema, model } = require('mongoose');
const DoneSchema = Schema({
title: {
type: String,
required: [true, 'El Titulo es obligatorio'],
},
createdAt: {
    type:Date,
    default: new Date(),
}


});
DoneSchema.methods.toJSON = function () {
const { __v, ...data } = this.toObject();
return data;
}
module.exports = model('Done', DoneSchema);