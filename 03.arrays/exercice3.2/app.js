(() => {
    
  let arr = [1,2,3,4,5,6,7,8,9];

  let sum = 0;
  let n = arr.length;
  for(let i = 0; i < n; i++){
    sum += arr[i];
  }
sum = sum/n; 
console.log(sum);
})();
(() => {
    
    let newArr = [102,103,104,105];
     
    let total = 0;
    
    for(let r =0; r < newArr.length; r++){
        total += newArr[r];
    }
    total = total / newArr.length;
    console.log(total);
})();
