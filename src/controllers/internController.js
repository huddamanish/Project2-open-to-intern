const moment = require('moment')
const jwt = require("jsonwebtoken")
const ObjectId = mongoose.Types.ObjectId
const { default: mongoose } = require("mongoose")
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")


// ===========================|| CREATE INTERN ||==================

const createIntern = async function (req, res) {

}

// ======================================================================

module.exports.createIntern = createIntern