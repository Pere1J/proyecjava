//Dado un array de números imprimir por consola el número mayor.

let numberList = [1, 2, 3, 4, 5, 6, 7, 100, 9];
let maxNumber = numberList[0];

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] >= maxNumber) {
    maxNumber = numberList[i];
  }
}
console.log("el número más alto es " + maxNumber);

//Dado un array de números imprime por consola la suma de todos los que sean pares.

let pairNumbers = 0;

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] % 2 == 0) {
    pairNumbers += numberList[i];
  }
}
console.log("la suma de los pares es " + pairNumbers);

//Dado un array de números y strings imprime un array de solamente los strings.

let cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin", 5, 6, 7];

for (let i = 0; i < cats.length; i++) {
  if (typeof cats[i] == "string") {
    console.log("mi gato se llama " + cats[i]);
  }
}

/*Dado un array de strings imprime un array de solamente los strings
   que empiezan por ‘a’.*/

let names = ["Peter", "Paul", "Mary", "Adan", "aroa"];
let namesa = [];
let namesa2 = [];

for (let i = 0; i < names.length; i++) {
  if (names[i].includes("a")) {
    namesa.push(names[i]);
  }
}
console.log("los nombres con la letra a son: " + namesa);
//console.log(names [i].charAt(0).equals ('a'))

for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(0) == "A") {
    namesa2.push(names[i]);
  }
  if (names[i].charAt(0) == "a") {
    namesa2.push(names[i]);
  }
}
console.log(namesa2);

/*Dado un array de strings (con palabras repetidas)
   imprime el numero de repeticiones de la palabra que más veces aparezca.*/

let animals = [
  "perro",
  "gato",
  "perro",
  "gato",
  "pajaro",
  "mono",
  "serpiente",
  "perro",
];
// a partir de aquí es contar
let animalbuscado = "perro";
let sumaanimal = 0;

animals.forEach((animal) => {
  if (animalbuscado == animal) {
    sumaanimal += 1;
  }
});
//lo anterior es contar
let maxanimals = 0;
let aninalmax = "";
animals.forEach((animal) => {
  let animalbuscado = animal;
  let sumaanimal = 0;

  animals.forEach((animal) => {
    if (animalbuscado == animal) {
      sumaanimal += 1;
    }
  });
  if (sumaanimal > maxanimals) {
    maxanimals = sumaanimal;
    animalmax = animal;
  }
});

console.log(
  "la palabra más utilizada aparece " +
    maxanimals +
    " veces y es el " +
    animalmax
);

//Dado un array de objetos "producto" (con nombre y precio)
// imprime un array de los objetos que sean más caros de 10.

let productos = [
  "pelota:10", 
  "tambor:5",
  "muñeca:15",
  "cochecito:2"
];

/* productos.forEach(nombreproducto => {productos[i].split(':'); let nombreproducto = [0];
let juguete = nombreproducto [0];
let precio = numero(nombreproducto[1]);
total += precio;
subproducto = juguete + ' ' + precio
  
}); */
//esta fucion separa los elementos en base a : con split

total = 0;
list = ' '


for(let i = 0; i < productos.length; i++) {
  let subArray = productos[i].split(':');
  let juguete = subArray[0];
  let price = Number(subArray[1]);
  total += price;
  itemText = juguete + ' ' + price;

  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}
  
 
  

