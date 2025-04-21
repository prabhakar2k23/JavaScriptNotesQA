const arr = [1, 2, 3, 2, 4, 5, 3];
console.log(arr);

function removeDuplicates(){
    let result = [];
    
    for(let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    
    arr.length = 0;
    for(let i=0; i<result.length; i++){
        arr.push(result[i]);
    }
    
}
removeDuplicates(arr);
console.log(arr);