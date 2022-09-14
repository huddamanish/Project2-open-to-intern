const mongoose = require("mongoose")

function collegeValidation(value) {
    return (Object.keys(college).length > 0)
}

//==================================================internValidation=====================================//

const internValidation = function (intern) {
    return inp.indexOf(intern) !== -1;
  };



module.exports = { collegeValidation, internValidation }
