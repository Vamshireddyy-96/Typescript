/*2) Create an arrow function by which you have to sort the given numbers. */
var arraysort = (arr:number[]):number[]=>{
	var length = arr.length;
	
	for(let i = 0; i< length;i++){
		for(let j = 0; j< length; j++){
		
			if(arr[j] > arr[j+1]){
				[arr[j],arr[j+1]] =[arr[j+1],arr[j]];
			}
		}
	}
	return arr;
}
console.log(arraysort([25,20,34,56,2,4,5,4,12]));
