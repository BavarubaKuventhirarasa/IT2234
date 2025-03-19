let numarray=[12,24,3,2]
//print the array using for and forEach loop
console.log(numarray)
console.log("************************")
//forEach loop
numarray.forEach((n)=>{
	console.log(n);
}) 
console.log("************************")
//Find the maximum value of the array
let i=0
let max=0
while(i<4)
{
	if(max<numarray[i])
	{
		max= numarray[i]
	}
	i++;
}
console.log("The maximum value of the array : "+max);
console.log("************************")
//Nested Array
let NumArray=[[1,2,3],[5,6],[11,21,31]]
//print the array using for and forEach loop
let j
for(j=0;j<NumArray.length;j++)
{
	console.log(NumArray[j])
}
console.log("************************")
NumArray.forEach((n)=>{
	console.log(n)
})
console.log("************************")
//print ach and every element seperately
NumArray.forEach((n)=>{
	n.forEach((m)=>{
		console.log(m)
	})
})
console.log("************************")
//push and pop operation in Array
strArray=['a','b','d']
console.log(strArray)
strArray.push('e')
console.log(strArray)
strArray.pop()
console.log(strArray)
strArray.pop()
console.log(strArray)

console.log("************************")
//reverse the array using push and pop operation
let Arr=['a','b','c','d']
console.log(Arr)
let temp=[]
while(Arr.length>0)
{
	temp.push(Arr.pop())
}
Arr = temp
console.log(Arr)
