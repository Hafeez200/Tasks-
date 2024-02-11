// const n1 = 2
// const n2 = 5
// let sum = 0

// for(let i = n1; i<= n2; i++){
//     sum += i
// // }

// console.log(sum)

//var num1 = prompt("enter a number");
//var num2 = prompt("enter a number");
//var num3 = prompt("enter a number");
//var sum = parseInt(num1)+parseInt(num2)+parseInt(num3);
//console.log(sum);
//average 
//var avg= sum/3;
//console.log(avg);

//var char1=prompt("enter a string "); 
//var char2=prompt("enter a string ");
//console.log(char1);
//console.log(char2);
//if (char1.length>char2.length){
//    console.log("the frist charcter is greater");
//} else if (char1.length<char2.length){
//    console.log("the second charcter is greater");
//}else{
//    console.log("the frist charcter is equal to second");
//}
 
const str =prompt("Enter a name");
let indexfi=str.charAt(0);
let indexla=str.charAt(str.length-1);
let slice=str.slice(1,-1);
console.log(indexfi);
console.log(indexla);
console.log(slice);
let conc= indexla+slice+indexfi;
console.log(conc);

