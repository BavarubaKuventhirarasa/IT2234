const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    _id:{type:String, require: true},
   Duration:{type:Number,require:true},
   managed_by:[{
        type:String,
        require:true,
        ref:'employees'
    }]
})

const Project = mongoose.model('projects', projectSchema)

const project1 = new Department({
    _id: "Web App Dev for Client A",
    Duration: 3,
    managed_by: ["Mayumi", "Sithumi", "Jennie","Yoora"]
})

const project2 = new Department({
    _id: "Photo Shoot for upcoming product",
    Duration: 0.25,
    managed_by: ["Dinithi", "Mayumi", "Himadi", "Sithumi"]
})

const project3 = new Department({
    _id: "Robot Arm Design for prototype",
    Duration: 2,
    managed_by: ["Jennie", "Dinithi", "Himadi", "Yoora"]
})

project1.save()
project2.save()
project3.save()

module.exports=Project