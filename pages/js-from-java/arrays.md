# Arrays

Arrays werden in JavaScript mit eckigen Klammern `[…]` deklariert. Arrays können Werte verschiedener Typen
enthalten und die Länge des Arrays muss nicht festgelegt werden und kann zur Laufzeit variieren.

```js
let empty = []; // leeres Array
const chars = ['a', 'b', 'c'];
const myList = [1, 2, 3, 4, 5];
const myMixedList = [1, 'eins', 'one', 1.0, false];

// erster Eintrag mit [0]
console.log(myList[0]); // ==> 1

// erster Eintrag ändern:
myList[0] = -1;
console.log(myList[0]); // ==> -1

// Länge der Liste mit length
console.log(myMixedList.length); // ==> 4

// Arrays sind vom Typ 'object'
console.log(typeof myList); // --> 'object'

// Neuen Eintrag ans Ende des Array anhängen:
myList.push(6);
// ---> nun gilt myList === [1,2,3,4,5,6]
// myList ist zwar eine Konstante aber dies ist erlaubt
// die eigentliche Zuweisung der Konstanten bleibt erhalten
// nur das konkrete, zugewiesene Array ändert sich

// --> es gibt viele weitere Methoden für Arrays
```
