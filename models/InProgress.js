const { Schema, model } = require('mongoose');
const InProgressSchema = Schema({
    title: {
        type: String,
        required: [true, 'El Titulo es obligatorio'],
        required:true
        },
        
        createdAt:{
            type: Date,
            default: new Date(),
        },
        
        
        });
InProgressSchema.methods.toJSON = function () {
const { __v, ...data } = this.toObject();
return data;
}
module.exports = model('InProgress', InProgressSchema);