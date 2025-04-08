const students = require('./studentdb')

function getStudents(){
    return students
}

function getStudent(id){
    return students.find((student)=>student.regno==id)
}

function getByGender(gender){
    return students.filter((student)=>student.gender==gender)
}

function getCourse(course){
    return students.filter((student)=>student.course==course)
}

module.exports={getStudents,getStudent,getByGender,getCourse}