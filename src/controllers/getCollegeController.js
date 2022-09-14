
const { default: mongoose } = require("mongoose")
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")


// ===========================||GET COLLEGE DATA||==================

const getCollege = async function (req, res) {
    try {
        let collegeName = req.query.collegeName
        if (!collegeName) {  return res.status(404).send({ status: false, msg: "Please provide college Name in query." }) }
        
        if (!validfun.nameValidation(collegeName)) {
            return res.status(400).send({ status: false, msg: "Please enter intern College Name!!" })
        }

        const collegeData=await collegeModel.findOne({name:collegeName}).select({name:1,fullName:1,logoLink:1});
        if (!collegeData) {return res.status(404).send({status: false, msg:"No college data found"})};

        let collegeId=collegeData._id;
       
        const internData=await internModel.find({collegeId:collegeId}).select({name:1,email:1,mobile:1})
        if(!internData){return res.status(404).send({ status: false, msg: "No intern found." })};

        Object.assign(collegeData._doc, { interns: internData });
        res.status(200).send({ status: true, data: collegeData });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

// ======================================================================

module.exports.getCollege = getCollege