const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const findAllEmployeeInDB = async () => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse; 
}
const EmployeeListAccToSalaryInDB= async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}
const EmployeeListAccToExperienceInDB = async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}
const EmployeeListAccToExperienceAndGraduateInDB = async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}
const updateInDB = async (filteredCond, value) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.updateOne(filteredCond, value);
    await client.close();
    return dbResponse; 
}

const deleteInDB = async (filteredCond) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.deleteMany(filteredCond);
    await client.close();
    return dbResponse; 
}
module.exports = {
    findAllEmployeeInDB,EmployeeListAccToSalaryInDB,EmployeeListAccToExperienceInDB, EmployeeListAccToExperienceAndGraduateInDB,
    updateInDB,deleteInDB
}