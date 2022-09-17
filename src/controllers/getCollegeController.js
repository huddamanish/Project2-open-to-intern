
const { default: mongoose } = require("mongoose")
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")
const nameRegex = /^[a-zA-Z_ ]*$/

// ===========================||GET COLLEGE DATA||==================

const getCollege = async function (req, res) {
    try {
        let collegeName = req.query.collegeName
        if (!validfun.nameValidation(collegeName)) {
            return res.status(400).send({ status: false, msg: "Please enter intern College Name!!" })}
        
        if (!nameRegex.test(collegeName)) {return res.status(400).send({ status: false, msg: "Invalid college Name" })}

        const collegeData=await collegeModel.findOne({name:collegeName,isDeleted:false}).select({name:1,fullName:1,logoLink:1});
        if (!collegeData) {return res.status(404).send({status: false, msg:"No college data found"})};

        let collegeId=collegeData._id;
       
        const internData=await internModel.find({collegeId:collegeId,isDeleted:false}).select({name:1,email:1,mobile:1})
        if(!internData[0]){ internData[0]="No intern found."} ;

        Object.assign(collegeData._doc, { interns: internData });
        res.status(200).send({ status: true, data: collegeData });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

// ======================================================================

module.exports.getCollege = getCollege