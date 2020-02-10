---
templateKey: markdown-unit
title: Operatoren
---

Viele der oft verwendeten, aus Java bekannten Operatoren gibt es auch in JavaScript:

```js
// arithmetische Berechnungen
50.0 - 10 + ((300 / 40) % 8);

// Inkrement/Dekrement
let i = 1;
i++;
--i; // nun hat i wieder den Wert  1

// Zusammengesetze Zuweisungen
i += 10;

// String-Konkatenation
console.log('Hallo ' + 'Leute!');

// Vergleiche
3 <= 4; // true
3 > 4; // false

// logische Operatoren
3 <= 4 && 4 > 3; // true
3 >= 4 && 4 > 3; // false
3 >= 4 || 4 > 3; // true
3 >= 4 || 4 < 3; // false
!(3 >= 4 || 4 < 3); // true
```

Es gibt zwei Arten, in JavaScript Gleichheit von Ausdrücken zu überprüfen: `==` und `===`
beziehungsweise `!=` und `!===` für Ungleichheit. Empfohlen wird der Einsatz des „strikten“
Vergleichs mit `===` (bzw. `!==`), denn die „lose“ Gleichheit `==` (bzw. `!=`) kann beim
Vergleich von Werten unterschiedlichen Datentyps zu unerwarteten Ergebnissen führen:

```js
// schwacher Vergleich liefert true
1 == '1'; // --> true

// starker Vergleich liefert wie erwartet false
1 === '1'; // --> false
```

Strings können mit `===` bzw. `!==` auf Gleichheit bzw. Ungleichheit getestet werden und
ein String-Vergleich überprüft die lexikographische Ordnung von Strings:

```js
'abc' === 'abc'; // true
'abc' === 'ABC'; // false
'abc' < 'bcd'; // true
'abc' > 'xyz'; // false
```
