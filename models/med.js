const mongoose = require('mongoose');

const medSchema= mongoose.Schema({
    medName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    medType: {
        type: String,
        required: true
    },
    doseLevel: {
        type:String,
        required:true
    },
    boxNo: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    cost: {
        type:Number
    },
    mfgDate: {
        type:Date
    },
    expDate: {
        type:Date
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports =  mongoose.model('Meds',medSchema);