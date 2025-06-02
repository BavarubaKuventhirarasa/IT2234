const express = require('express');
const app = express();
const port = 3001;
const mongoose = require("mongoose")
const employeert = require('./Routes/employeeRoute')
const etfrt = require('./Routes/etfRoute')
const departmentrt = require('./Routes/departmentRoute')
const projectrt = require('./Routes/projectRoute')

app.use(express.json())

app.use('/employee',employeert)
app.use('/etf',etfrt)
app.use('/department', departmentrt)
app.use('/project', projectrt)

mongoose.connect('mongodb://localhost:27017/Company').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
})