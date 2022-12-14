
//Dado un array de números imprimir por consola el número mayor.


let numberList= [1,2,3,4,5,6,7,100,9]
let maxNumber=numberList [0];

for (let i = 0; i < numberList.length; i++) {
   
   if(numberList[i] >= maxNumber) {maxNumber = numberList[i]}
}
console.log ('el número más alto es ' + maxNumber)

//Dado un array de números imprime por consola la suma de todos los que sean pares.


let pairNumbers= 0;

for (let i = 0; i < numberList.length; i++) {
   if (numberList[i] % 2 == 0) {pairNumbers += numberList[i];}
   
}
console.log ('la suma de los pares es ' + pairNumbers);

//Dado un array de números y strings imprime un array de solamente los strings.

  let cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin', 5, 6 , 7];

for (let i = 0; i < cats.length; i++) {
    if (typeof(cats[i])=="string") { 
       console.log('mi gato se llama ' + cats[i]);}; 
  }

  /*Dado un array de strings imprime un array de solamente los strings
   que empiezan por ‘a’.*/
  
   let names = ['Peter', 'Paul', 'Mary']
   let namesa = []
   
 
   for (let i = 0; i < names.length; i++) {
    if (names [i].includes ('a')) {namesa.push(names [i]);}
     
   }
   console.log('los nombres con la letra a son: ' + namesa)

  /*Dado un array de strings (con palabras repetidas)
   imprime el numero de repeticiones de la palabra que más veces aparezca.*/
  

   /*Dado un array de strings (con palabras repetidas)
    imprime el numero de repeticiones de la palabra que más veces aparezca.*/