const express = require('express')
const router = express.Router()
const internController=require('../controllers/internController')
const collegeController=require('../controllers/collegeController')
const getCollegeController=require('../controllers/getCollegeController')

//CREATE BLOG

router.post("/functionup/colleges", collegeController.createCollege)

//CREATE INTERN

router.post("/functionup/interns", internController.createIntern)

// router.get("/functionup/allInterns", internController.allIntern)

// GET COLLEGE DATA

router.get("/functionup/collegeDetails", getCollegeController.getCollege)


router.all("/*", (req, res) => { res.status(400).send({ status: false, message: "Endpoint is not correct" }) })

module.exports = router;