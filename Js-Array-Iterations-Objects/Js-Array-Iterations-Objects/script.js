//task1
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


//task2
let months=["Yanvar","Fevral","Mart","Aprel"]

function myFunction(value, index) {
    return value  + " " + (index + 1);
    
}
let sortedmonth=months.map(myFunction)
console.log(sortedmonth);


//task3
function WordCount(str) { 
let arrn= str.split(" ") ;
console.log(arrn);
let arr1=[]
for (let index = 0; index < arrn.length; index++)
 {

   let element = arrn[index];

  arr1.push(element.length)


   
} return arr1



  }
console.log( WordCount("qoymuyun ayee irasim geleyr ustume"))