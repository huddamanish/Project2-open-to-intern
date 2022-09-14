const moment = require('moment')
const jwt = require("jsonwebtoken")
const ObjectId = mongoose.Types.ObjectId
const { default: mongoose } = require("mongoose")
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const mobileRegex = /^\d{10}$/


// ===========================|| CREATE INTERN ||==================

const createIntern = async function (req, res) {
    try {
        let data = req.body
        if (!data) {
            return res.status(400).send({ status: false, msg: "Provide Data" })
        }
        let { name, email, mobile, collegeName} = data;

        if (!name) {return res.status(400).send({ status: false, msg: "name is required" })}
        if (!email) {return res.status(400).send({ status: false, msg: "email is required" })}
        if (!mobile) {return res.status(400).send({ status: false, msg: "mobile Number missing" })}
        if (!collegeName) {return res.status(400).send({ status: false, msg: "college name missing" })}

        if(typeof (name) !=="string")return res.status(400).send({status:false,msg: "Name must be string"})
        if(typeof (email) !=="string")return res.status(400).send({status:false,msg: "Email must be string"})
        if(typeof (mobile) !=="string")return res.status(400).send({status:false,msg: "mobile number must be string"})
        if(typeof (collegeName) !=="string")return res.status(400).send({status:false,msg: "college name must be string"})


        if (!emailRegex.test(email)) {return res.status(400).send({ status: false, msg: "Invalid emailId" })}
        if (!mobileRegex.test(mobile)) {return res.status(400).send({ status: false, msg: "Invalid mobile number" })}

        let object = {}
        if (name !== null) { object.name = name }
        if (email !== null) { object.email = email }
        if (mobile !== null) { object.mobile = mobile }

        let collegeId = await collegeModel.findOne({name:collegeName})
        if (!collegeId) {res.status(404).send({ status: false, msg: " college is not present" })}
        if (collegeId !== null) { object.collegeId = collegeId }

    
        let savedData = await internModel.create(object);
        res.status(201).send({ status: true, msg: savedData })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}



// ======================================================================

module.exports.createIntern = createIntern