const express=require('express')
const router = express.Router()
const Employee = require('../Models/employees')
const {default: mongoose} = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Employee.find().populate("etf").populate("department").populate("projects")
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
//each employee count their number of projects
router.get('/procount',async(req,res)=>{
    try{
        const results = await Employee.aggregation({
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
module.exports=router