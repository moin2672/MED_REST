const mongoose = require('mongoose');

const memberSchema= mongoose.Schema({
    memberID: {
        type: String,
        required: true
    },
    memberName: {
        type: String,
        required: true
    },
    memberLocation: {
        type: String,
        required: true
    },
    memberPhoneNo: {
        type: String,
        required: true
    },
    memberWhatsApp: {
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports =  mongoose.model('Members',memberSchema);