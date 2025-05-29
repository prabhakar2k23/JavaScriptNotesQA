// Reverse array elements
let arr = [10,12,13,14,15,16,17,18,19,20];   
let result = [];
let j=0
for (let i=arr.length-1; i>=0; i--){
    result.push(arr[i]);
}
console.log(result);