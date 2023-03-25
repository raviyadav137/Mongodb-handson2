const express=require('express');

const employeeController = require("../controllers/employee");

const router = express.Router();
router.get('/employee', employeeController.findAllEmployeeInDB);
router.get('/employeeSalary', employeeController.EmployeeListAccToSalaryInDB);
router.get('/employeeExperience', employeeController.EmployeeListAccToExperienceInDB );
router.get('/employeeGraduateYear',employeeController.EmployeeListAccToExperienceAndGraduateInDB);
router.put('/employeeUpdate', employeeController.updateInDB);
router.delete('/employeeDelete', employeeController.deleteInDB);
module.exports=router;