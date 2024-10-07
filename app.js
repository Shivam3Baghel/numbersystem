const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  primeArray=[];
  for(i of numbers){
    if(isPrime(i)){
        primeArray.push(i);
    }
  }
function max(a){
    max=-Infinity;
    for(i of a){
        if(i>max){
            max=i;
        }
    }
    return max;
}  
function min(a){
    min=Infinity;
    for(i of a){
        if(i<min){
            min=i;
        }
    }
    return min;
}  
function sum(a){
    sum=0;
    for(i of a){
        sum+=i;
    }
    return sum;
}  
console.log("Maximum in primeArray is "+max(primeArray));
console.log("Minimum in primeArray is "+min(primeArray));
console.log("Sum of primeArray is "+sum(primeArray));
function isPrime(n){
    for(i=2;i<=n-1;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}