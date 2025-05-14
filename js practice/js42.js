let arr = [1,0,0,1,1,0,1];

for(let i=0; i<arr.length-1; i++){
    if(arr[i]<arr[i+1]){
        temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
    }
}
console.log(arr);
