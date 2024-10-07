const numbers=[3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18];
console.log("The even no.s are");
str="";
for(i of numbers){
    if(i%2==0){
        str+=i+" ";
    }
}
console.log(str);
console.log("The odd no.s are");
str="";
for(i of numbers){
    if(i%2!=0){
        str+=i+" ";
    }
}
console.log(str);