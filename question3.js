//Question 03
function maxRearrange(num) 
{
	return parseInt(num.toString().split('').sort((a, b) => b - a).join('')); 
}

console.log(maxRearrange(216));
console.log(maxRearrange(1093)); 