
//Dado un array de números imprimir por consola el número mayor.


let numberList= [1,2,3,4,5,6,7,100,9]
let maxNumber=numberList [0];

for (let i = 0; i < numberList.length; i++) {
   
   if(numberList[i] >= maxNumber) {maxNumber = numberList[i]}
}
console.log ('el número más alto es ' + maxNumber)

//Dado un array de números imprime por consola la suma de todos los que sean pares.

let numberList= [1,2,3,4,5,6,7,100,9]
let pairNumbers= 0;

for (let i = 0; i < numberList.length; i++) {
   if (numberList[i] % 2 == 0) {pairNumbers += numberList[i];}
   
}
console.log ('la suma de los pares es ' + pairNumbers);

//Dado un array de números y strings imprime un array de solamente los strings.

let itemsList=['gato', 1, 'perro', 2, 'pájaro', 3];

console.log(itemsList)




 