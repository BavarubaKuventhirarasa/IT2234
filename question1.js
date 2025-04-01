//Question -01
function getMaxPurchase(budget,keyboards,mouse)
{
	 let maxPurchase = -1; 
	 for (let k of keyboards)
		{  
			for (let m of mouse) 
			{
			let total = k + m; 
			if (total <= budget && total > maxPurchase) 
			{
				maxPurchase = total; 
			} 
	
		}
		return maxPurchase;
		}
}
console.log("Keyboard and mouse total price within a budget is"+(getMaxPurchase(60,[40,50,60],[5,8,12])))
console.log("Keyboard and mouse total price within a budget is"+(getMaxPurchase(10, [3, 1], [5, 2, 8])))
console.log("Keyboard and mouse total price within a budget is"+(getMaxPurchase(20, [30, 15], [8, 10, 6])))