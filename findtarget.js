//write a code find the all pairs that sum up to the target
let Collect=[1,2,3,4,5,6]
let target =7
let i 
let j
for(i=0;i<Collect.length;i++)
{
	for(j=0;j<Collect.length;j++)
	{
		if(i+j == target)
			console.log("Sumation pairs of target 7 :"+i+"and "+j)
	}
}
console.log("**********************************")
//find the common elements between two arrays
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
a.forEach((n)=>{
	b.forEach((m)=>{
		if(n==m)
			console.log("Common element between a and b :"+n)
	})
})