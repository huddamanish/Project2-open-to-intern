const moment = require('moment');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const CollegeSchema = new mongoose.Schema({




}, { timestamps: true });
module.exports = mongoose.model('College', CollegeSchema)