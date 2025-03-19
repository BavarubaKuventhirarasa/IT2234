//Define 10 student JSON
//Store it in array
//find the female students
//find ythe students who are followingIT course
//find the max and average GPA among the students

let Class =[
{regno:'2021/ICT/01',name:'Bavaruba',course:'IT',sex:'Female',GPA:3.75},
{regno:'2021/ICT/02',name:'Jana',course:'ENS',sex:'Female',GPA:3.55},
{regno:'2021/ICT/03',name:'Raja',course:'IT',sex:'Male',GPA:3.50},
{regno:'2021/ICT/04',name:'Ravi',course:'AMC',sex:'Male',GPA:3.90},
{regno:'2021/ICT/05',name:'Kirisha',course:'IT',sex:'Female',GPA:3.60},
{regno:'2021/ICT/06',name:'Rishi',course:'AMC',sex:'Male',GPA:3.35},
{regno:'2021/ICT/07',name:'Hani',course:'ENS',sex:'Female',GPA:3.45},
{regno:'2021/ICT/08',name:'Lobana',course:'IT',sex:'Female',GPA:3.50},
{regno:'2021/ICT/09',name:'Nisha',course:'AMC',sex:'Female',GPA:3.20},
{regno:'2021/ICT/10',name:'Ananth',course:'IT',sex:'Male',GPA:3.75}
]
console.log(Class)
//find the female students
let count=0
Class.forEach((n)=>{
	if(n.sex=='Female')
	{
		count++
	}
})
console.log(count+"female students are in the class")
console.log("**********************************************")
//find the number of students follwing IT course
let ITcount=0
Class.forEach((n)=>{
	if(n.course=='IT')
	{
		ITcount++
	}
})
console.log(ITcount+"students are follwing IT course")
console.log("**********************************************")
//find the maximum of the GPA
let max=0
Class.forEach((m)=>{
	if(m.GPA>max)
	{
		max=m.GPA
	}
})
console.log(max+"Maximum GPA of the class")
