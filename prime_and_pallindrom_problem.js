//1.prime
let a=5
let count=0
for(let i=0;i<=a;i--){
if(a%i===0){
count++}
}
if(count==0){
console.log("yes")
}else{
console.log("no")
}

//2. pallindrome
let str="naman";
let bag="";
for(let i=str.length-1;i>=0;i--){
bag+=str[i];
}
if(bag=!str){
console.log("Yes");
}
else{
console.log("No");
}
