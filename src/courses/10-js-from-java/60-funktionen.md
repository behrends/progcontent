---
templateKey: markdown-unit
title: Funktionen
---

In JavaScript haben Rückgabewerte und Parameter bei Funktionsdeklarationen keine Typangaben.
Funktionen haben immer einen Rückgabewert &mdash; entweder ausdrücklich durch `return`-Ausdrücke
oder implizit `undefined`, falls die Funktion kein `return` hat.

Funktionen können mit beliebigen Parametern in Bezug auf Anzahl und Datentypen aufgerufen werden
&mdash; es liegt am Code im Funktionsrumpf, wie die Funktion damit umgeht.

Erwartet eine Funktion einen (oder mehrere) Parameter und wird dieser nicht beim Aufruf angegeben,
dann ist der Parameter im Funktionsrumpf `undefined`.

Funktionen sind in JavaScript Objekte und können daher z.B. auch Variablen zugewiesen werden.

Es gibt verschiedene Wege, Funktionen zu deklarieren. Dieses Beispiel zeigt, wie eine
Funktion zur Berechnung der Summe zweier Zahlen auf unterschiedliche Weise deklariert werden
kann:

```js
// Funktion mit Namen/Bezeichner
function add1(a, b) {
  return a + b;
}

// Anonyme Funktionen ohne Namen wird Konstanten zugewiesen
const add2 = function(a, b) {
  return a + b;
};

// Pfeilfunktion
const add3 = (a, b) => {
  return a + b;
};

// Pfeilfunktion kompakter (nur wenn diese aus return besteht)
const add4 = (a, b) => a + b;
```

Der Aufruf von Funktionen erfolgt in allen Fällen gleich. Das Ergebnis einer
Funktion kann als Ausdruck oder Wert aufgefasst werden und z.B. einer
Variablen zugeweisen werden:

```js
console.log(add1(1, 2));
let eight = add2(3, 5);
const ten = add3(2, 3) + add4(5, 0);
```

Pfeilfunktionen bieten eine kompaktere Syntax als die „klassische“ Art, Funktionen
mit `function` zu deklarieren. Es gibt gewisse Unterschiede zwischen Pfeilfunktionen
und der `function`-Syntax, die mit der Bedeutung von `this` innerhalb des Funktionsrumpf zu tun
haben. Hier sind diese noch nicht relevant und werden daher nicht behandelt.
