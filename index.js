//datos tipos de datos
console.log (5);

//datos booleanos
console.log (true);

let numberList= [1,2,3,4,5,6,7,8,9]
let maxNumber=numberList [0];

for (let i = 0; i < numberList.length; i++) {
   
   if(numberList[i] >= maxNumber) {maxNumber = numberList[i]}
}
console.log (maxNumber)