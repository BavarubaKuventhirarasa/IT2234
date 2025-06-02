const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    _id:{type:String, require: true},
   Controlled_By:{type:String,require:true},
   employees:[{
        type:String,
        require:true,
        ref:'employees'
    }]
})

const Department = mongoose.model('departments', departmentSchema)

const mechanicalDepartment = new Department({
    _id: "Mechanincal Department",
    Controlled_By: "Engineering department",
    employees: ["Dinithi", "Yoora"]
})
const itDepartment = new Department({
    _id: "IT",
    Controlled_By: "Engineering department",
    employees: ["Mayumi", "Sithumi"]
})

const mediaDepartment = new Department({
    _id: "Media",
    Controlled_By: "Marketing department",
    employees: ["Himadi", "Jennie"]
})

mechanicalDepartment.save()
itDepartment.save()
mediaDepartment.save()

module.exports=Department