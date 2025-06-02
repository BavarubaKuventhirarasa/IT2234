const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    name:{type:String, require: true},
    age: {type:Number, require: true},
    etf: {
        type:Number,
        require:true,
        ref:'etfs'
    },
    department:{
        type:String,
        require:true,
        ref:'departments'
    },
    projects:[{
        type:String,
        require:true,
        ref: 'rpojects'
    }]
})

const Employee = mongoose.model('employees', employeeSchema)
const employee1 = new Student({
    name: "Dinithi",
    age: 23,
    etf: 101,
    department:"Mechanincal Department",
    projects: ["Photo Shoot for upcoming product", "Robot Arm Design for prototype"]
})

const employee2 = new Student({
    name: "Mayumi",
    age: 25,
    etf: 102,
    department:"IT",
    projects: ["Web App Dev for Client A", "Photo Shoot for upcoming product"]
})

const employee3 = new Student({
    name: "Sithumi",
    age: 20,
    etf: 103,
    department:"IT",
    projects: ["Web App Dev for Client A","Photo Shoot for upcoming product"]
})

const employee4 = new Student({
    name: "Himadi",
    age: 19,
    etf: 104,
    department:"Media",
    projects: ["Photo Shoot for upcoming product","Robot Arm Design for prototype"]
})
const employee5 = new Student({
    name: "Jennie",
    age: 29,
    etf: 105,
    department:"Media",
    projects: ["Web App Dev for Client A", "Robot Arm Design for prototype"]
})
const employee6 = new Student({
    name: "Yoora",
    age: 28,
    etf: 106,
    department:"Mechanical Department",
    projects: ["Web App Dev for Client A", "Robot Arm Design for prototype"]
})

employee1.save()
employee2.save()
employee3.save()
employee4.save()
employee5.save()
employee6.save()

module.exports=Employee