const mongoClient = require("../database/connection");

const findAllEmployeeInDB = async (req, res) => {
    try {
        const result = await mongoClient.findAllEmployeeInDB();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const EmployeeListAccToSalaryInDB = async (req, res) => {
    const query = {salary: { $gt : "30000" }};
    try {
        const result = await mongoClient.EmployeeListAccToSalaryInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const EmployeeListAccToExperienceInDB = async (req, res) => {
    const query = {overallExp : { $gt : "2" }};
    try {
        const result = await mongoClient.EmployeeListAccToExperienceInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const EmployeeListAccToExperienceAndGraduateInDB = async (req, res) => {
    const query = {$and: [{ yearGrad : { $gt : "2015" }},{ overallExp : { $gt : "1" }}]};
    try {
        const result = await mongoClient.EmployeeListAccToExperienceAndGraduateInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const updateInDB = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
      try {
        const result = await mongoClient.updateInDB(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const deleteInDB = async (req, res) => {
    const query = { lastCompany: "Z" } ;
    try {
        const result = await mongoClient.deleteInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
module.exports = {
    findAllEmployeeInDB,EmployeeListAccToSalaryInDB,EmployeeListAccToExperienceInDB,
    EmployeeListAccToExperienceAndGraduateInDB,updateInDB,deleteInDB
   
}