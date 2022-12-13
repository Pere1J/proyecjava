
//Dado un array de números imprimir por consola el número mayor.


let numberList= [1,2,3,4,5,6,7,100,9]
let maxNumber=numberList [0];

for (let i = 0; i < numberList.length; i++) {
   
   if(numberList[i] >= maxNumber) {maxNumber = numberList[i]}
}
console.log (maxNumber)

//Dado un array de números imprime por consola la suma de todos los que sean pares.

