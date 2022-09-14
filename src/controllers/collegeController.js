const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")

// ===========================||CREATE COLLEGE||==================

const createCollege = async function (req, res) {
    try {
        
 let {name,fullName,logoLink,isDeleted}= req.body;
 if(!name) return res.status(400).send({status:false,msg: "Name is required"})
 if(!fullName) return res.status(400).send({status:false,msg: "Fullname is required"})
 if(!logoLink) return res.status(400).send({status:false,msg: "logoLink is required"})

 if(typeof (name) !=="string")return res.status(400).send({status:false,msg: "Name must be string"})
 if(typeof (fullName) !=="string")return res.status(400).send({status:false,msg: "fullName must be string"})
 if(typeof (logoLink) !=="string")return res.status(400).send({status:false,msg: "logoLink must be string"})//this is for url

 if(isDeleted){
    if(typeof (isDeleted) !== "boolean")
    return res.status(400).send({status:false,msg: "isDeleted must be a Boolean value"})
 }


 let savedData = await collegeModel.create(collegeDetails);

 res.status(201).send({ status: true, data: savedData });

} catch (error) {
 res.status(500).send({ status: false, error: error.message });
}
};

// ======================================================================

module.exports.createCollege = createCollege