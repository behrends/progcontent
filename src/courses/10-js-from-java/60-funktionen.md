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

Funktionen sind in JavaScript Objekte und können Variablen zugewiesen werden.

Es gibt verschiedene Wege, Funktionen zu deklarieren:

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

// Pfeilfunktion noch kompakter (nur wenn diese aus return besteht)
const add4 = (a, b) => a + b;
```
