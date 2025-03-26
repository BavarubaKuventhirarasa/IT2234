const express = require('express');
const app = express();
const port = 3001;
//array of students details
let students =[
    {regno:'2021ICT100',name:'Ruba',gender:'female',age:24,course:'IT'},
    {regno:'2021AMC101',name:'Rasa',gender:'male',age:24,course:'AMC'},
    {regno:'2021AMC102',name:'Rani',gender:'female',age:23,course:'AMC'},
    {regno:'2021ICT103',name:'Jana',gender:'male',age:22,course:'IT'},
    {regno:'2021ICT104',name:'Loban',gender:'male',age:23,course:'IT'}
];


app.get('/stu',(req,res)=>{
    res.send(students);

});

app.get('/msg',(req,res)=>{
    res.send('Hello IT students');
});

app.get('/stu/:id',(req,res)=>{
    const id=req.params.id;
    const result =students.find(student=>student.regno == id);
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("student not found");
    }

});
//filter by gender
app.get('stu/gender/:gen',(req,res)=>{
    const gender=req.params.gen;
    const result = students.find(student=>student.gender == gen);
    res.send(result)
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})