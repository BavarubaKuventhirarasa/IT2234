//Function
function PrintMsg(){
	console.log("Hello JS")
}
PrintMsg()
console.log("****************************************")
//Return type function
function sum(){
	return 5+6
}
console.log(sum())
console.log("****************************************")
// pass the arguments inside the parameter
function sub(a,b){
	return a-b
}
console.log(sub(5,3))
console.log("****************************************")
//write a boolean function to find a given number is prime or not
//let num=2
function isPrime(num){
	if(num <= 1)
	{
		return false
	}
	for(let i=2; i<= Math.sqrt(num); i++)
	{
		if(num %i === 0)
		{
			return false
		}
	}
	return true
}
let num =25
console.log(num + "is prime: "+ isPrime(num))
console.log("****************************************")
//write recursive function to print numbers from 1 to n
function printNumbers(n,current = 1){
	if(current > n) return
	console.log(current)
	printNumbers(n,current+1)
}
printNumbers(7)
console.log("****************************************")
//Arrow function
const msg =()=>(console.log("Hello JavaScript"))
//console.log(msg) output like [Function: msg]
msg()
console.log("****************************************")
//Some mathematic calculation using arrow function
const add=(a,b)=>{return a+b}
console.log("Addition of  numbers : "+add(2,3))
const subs=(a,b)=>{return a-b}
console.log("Substraction of two numbers : "+subs(5,1))
const multi =(c,d)=>{return c*d}
console.log("Multiplication of two numbers :"+multi(9,8))
const divi =(d,e)=>{return d/e}
console.log("divition of two numbers :"+divi(9,3))

console.log("****************************************")
//default parameter
const multy =(a,b=2)=>{return a*b}
console.log(multy(4,6))
console.log(multy(4))
console.log("****************************************")
//reset parameter
const mysum=(...n)=>{
	console.log(n)
}
mysum(4,8,12,16,2)
console.log("****************************************")
//another way
const mysums=(...n)=>{
	return n.reduce((t,i)=> t=t+i)
}
console.log(mysums(4,5,6,7,8))

console.log("****************************************")
//function passed an arguments
const greet=(msg,fun)=>{
	console.log("Hi.."+msg)
	fun()
}
greet("Good morning",()=>{console.log("My name is David")})
console.log("****************************************")
const multwo =(n)=>n*2
const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,7,9,2)
