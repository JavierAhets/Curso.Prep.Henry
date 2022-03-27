// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[];
  for (const propiedad in objeto){
    matriz.push([propiedad,objeto[propiedad]]);
  }
  
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objeto={};
  for (i=0; i<string.length; i++){

    if (objeto[string[i]])
      objeto[string[i]]++;
    else
      objeto[string[i]] = 1;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var lower ='';
  var upper ='';
  while (s.length>0){
    if (s.charAt(0).toUpperCase()==s.charAt(0)){
      upper+=s.charAt(0);
    }
    else{
      lower+=s.charAt(0);
    }
    s=s.substring(1,);
  }
  return upper+lower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //var str='hola que tal como estas?';
  var strInvertida = '';
  var strAux = '';
  var i = 0;
  do{
    if((i=str.indexOf(' '))>0){
      strAux=str.substring(0,i);

      for (var j=strAux.length-1; j>=0; j--){
        strInvertida += strAux[j];
      }
      strInvertida+= ' ';
      str = str.substring(i+1,);
    }
    else {
      for (var j=str.length-1; j>=0; j--){
      strInvertida += str[j];
      }
      str='';
    }
  } 
  while (str.length>0);


  return strInvertida;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var palabra = numero.toString();
  var invertida = palabra.split('').reverse().join('');
  if (invertida==palabra)
    return 'Es capicua';
  else
    return 'No es capicua' 

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  

  
  return cadena.split('a').join('').split('b').join('').split('c').join('');

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var aux;
  for (i=0; i<arr.length-1; i++){
    for (j=i+1; j<arr.length; j++){
      if (arr[j].length<arr[i].length){
         aux=arr[j];
         arr[j]=arr[i];
         arr[i]= aux;
      }
    }
  }
  return arr;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  var array = [];
  for (i=0; i<arreglo1.length; i++){
    for (j=0; j<arreglo2.length; j++){
      if (arreglo1[i]==arreglo2[j]){
        array.push(arreglo1[i]);
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

