const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    tariffItem:{type:String,required:true},
    description:{type:String,trim:true},
    FOB:{type:String,trim:true},
    UQC:{type:String,trim:true},
    Cap:{type:Number,required:true},
},
{timestamps: true}
)

module.exports = mongoose.model('Data',dataSchema)