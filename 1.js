// 1.Write a program to given input Check whether Even or odd.

// let oddeve =(n)=>{
// if ((n%2)==0){
//     console.log("Given input is even")
// }
// else{
//     console.log("Given input is odd")
// }
// }
// oddeve(5)

// let oddeve =(n)=>{
//     if((n%2)==0){
//         console.log('given input is even')
//     }else{
//         console.log("given number is odd")
//     }

// }
// oddeve(2)

// 2.write a program to generate even and odd number less than N and generate 'N' even and odd numbers
//
// let oddeve = (i) => {
//   for (i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//       console.log(`${i} is even number `);
//     } else {
//       console.log(`${i} is odd number `);
//     }
//   }
// };
// oddeve(100);

// 3) Write a program to decide given N is Prime or not.

// num = 10;
// let factorfound = true;

//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       console.log(`${num} is not a prime number`);
//       factorfound = false;
//       break;
//     }
//   }

// if (factorfound == true) {
//   console.log(`${num} is a prime number`);
// }

// 4) Write a program to subtract two integers without using Minus (-) operator

// print ur name 5 times
// a=5
// for (i=1;i<=5;i++){
//     console.log("akheel ossama")
// }

// remove second alphabet from ur name
// a=["o","s","s","a","m","a"]
// a.splice(5)
// console.log(a)

// write a program which return addition of the number
// var a=786
// var sum=0
// d=a.toString().split('')
// // console.log(d)
// for(i=0;i<d.length;i++){
//     sum += (+(d[i]))
// }
// console.log(sum)

// fibonacci series

// function fibonacci(num){
//     let n1=0
//     let n2=1
//     let sum=0
//     output= ''
//     for(let i=0;i<num;i++){
//         output +=` ${n1}`
//         sum=n1+n2
//         n1=n2
//         n2=sum
//     }
//     return output
// }
// console.log(fibonacci(7));

// a="akheel ossama"
// i=1;
// while(i<=5){
// console.log(a)
// i++;
// }

// let a = "ossama";
// function naam() {
//   i = 1;
//   while (i <= 5) {
//     console.log(a);
//     i++;
//   }
// }
// naam(5);


// let a,b,c,d,e
// let arr=['a','b','c','d' ]
// console.log(arr.join(''));


// var a=7
// if((a%2)!==0){
//     console.log("given number is odd")
// }else{
//     console.log("given number is even")
// }

// x="a"
// if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u' ){
//     console.log(" it is vowel")

// }else{
//     console.log("it is consonants")
// }

a="abcdef"
b=[]
c=[]
for(i=0;i<a.length;i++){
    if(i%2==0){
        b.push(a[i])
    }else{
        c.push(a[i])
    }
}
d=b.join('')
e=c.join('')
console.log(d+e)
