const collegeModel = require("../models/collegeModel")
const validfun = require("../validationfunction/validfun")
const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/

// ===========================||CREATE COLLEGE||==================

const createCollege = async function (req, res) {

    try {
        let data = req.body
        if (!data) {
            return res.status(400).send({ status: false, msg: "Provide Data" })
        }

        let { name, fullName, logoLink, isDeleted } = data;
        if (!name) return res.status(400).send({ status: false, msg: "Name is required" })
        if (!fullName) return res.status(400).send({ status: false, msg: "Fullname is required" })
        if (!logoLink) return res.status(400).send({ status: false, msg: "logoLink is required" })

      //   if (typeof (name) !== "string") return res.status(400).send({ status: false, msg: "Name must be string" })
      //   if (typeof (fullName) !== "string") return res.status(400).send({ status: false, msg: "fullName must be string" })
        if (!validfun.nameValidation(name)) {
            return res.status(400).send({ status: false, msg: "Please enter name" })}

            if (!validfun.nameValidation(fullName)) {
                return res.status(400).send({ status: false, msg: "Please enter full name!!" })}

      const avlebalData=await collegeModel.find({name:name,fullName:fullName})
      if(avlebalData.length>0){return res.status(409).send({status:false,msg:"user alreeady exists"})}

        if (typeof (logoLink) !== "string") return res.status(400).send({ status: false, msg: "logoLink must be string" })//this is for url

        if (isDeleted) {
            if (typeof (isDeleted) !== "boolean")
                return res.status(400).send({ status: false, msg: "isDeleted must be a Boolean value" })
        }

        if (isDeleted){
            if (isDeleted===true)
                return res.status(400).send({ status: false, msg: "Provide Is deleted key must be false" })
        }
        
        if (!urlPattern.test(logoLink)) {return res.status(400).send({ status: false, msg: "Invalid url" })}

        let savedData = await collegeModel.create(data);

        res.status(201).send({ status: true, data: savedData });

    } catch (error) {
        res.status(500).send({ status: false, error: error.message });
    }
};

// ======================================================================

module.exports.createCollege = createCollege