const express=require('express')
const router = express.Router()
const Department = require('../Models/departments')
const {default: mongoose} = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Department.find().populate("employees")
        if (results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})
const results = await employee.find(
    {departmebtId:did},
    {name:1 , departmebtId:1}).populate('departmentId').sort({name:-1})

//manipulate the results
const filterResult = results.map(emp=>({
    employee_id:emp_id,
    employee_name:emp.name,
    departmennt_name:departmentId.name
}))
//find how many employees are working in a department
const countresults = await employee.find(
    {departmebtId:did},
{name:1 ,departmebtId:1}).populate(employee_id)

router.get('/empcount',async(req,res)=>{
    try{
        const results = await Department.aggregation({
            $lookup:{
                from:"employee",
                localField:"_id",
                foreignfield:"departmentId",
                as:"emps"
            }
        },{
            $project:{
                name:1,
                location:1,
                number_of_employees:{$size:"$emps"}
            }
        })
        if (results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

//shows the employee count along with each depatment details

module.exports=router