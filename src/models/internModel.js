const moment = require('moment');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const InternSchema = new mongoose.Schema({




}, { timestamps: true });
module.exports = mongoose.model('Intern', InternSchema)