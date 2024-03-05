# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

recorre los argumentos cogiendo uno a uno
con cada argumento, consulta si esta en el array
si no esta, aniadelo a un array nuevo.


variable arrayNuevo
variable para si un argumento estaContenido
repite coger el siguiente elemento del array
  estaContenido = falso
  repite coger el siguiente argumento
    si el argumento coincide 
      estaContenido igual verdadero 
  fin repite
  si estaContenido igual Falso
    empuja elemento del array a arrayNuevo