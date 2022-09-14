const express = require('express')
const router = express.Router()
const internController=require('../controllers/internController')
const collegeController=require('../controllers/collegeController')
const getCollegeController=require('../controllers/getCollegeController')

//CREATE BLOG



//CREATE INTERN



// GET COLLEGE CONTROLLER





router.all("/*", (req, res) => { res.status(404).send({ status: false, message: "Endpoint is not correct" }) })

module.exports = router;