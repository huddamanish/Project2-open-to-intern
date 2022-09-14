const moment = require('moment');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const InternSchema = new mongoose.Schema({

 name:{type:String,required:true},

 email:{type:String,require:true,unique:true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},

 mobile:{type:String,match:[/^\d{10}$/] ,unique:true } ,

 college:{type:ObjectId,ref:"College", required: true},

 isDeleted:{type:Boolean,default:false}

}, { timestamps: true });

module.exports = mongoose.model('Intern', InternSchema)