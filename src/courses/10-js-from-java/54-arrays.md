---
templateKey: markdown-unit
title: Arrays
---

Arrays werden in JavaScript mit eckigen Klammern `[…]` deklariert. Arrays können Werte verschiedener Typen
enthalten und die Länge des Arrays muss nicht festgelegt werden und kann zur Laufzeit variieren.

```js let empty = []; // leeres Array
empty = ['a', 'b', 'c'];
const myList = [1, 2, 3, 4, 5];
const myMixedList = [1, 'eins', 'one', 1.0, false];

// erster Eintrag mit [0]
console.log(myList[0]); // ==> 1

// erster Eintrag ändern:
myList[0] = -1;
console.log(myList[0]); // ==> -1

// Länge der Liste mit length
console.log(myMixedList.length); // ==> 4
```
