---
templateKey: markdown-unit
title: Code exportieren und importieren
---

Seit der JavaScript-Version ES2015 (ES6) gibt es ein offizielles, direkt in JavaScript enthaltenes Modulkonzept, mit dem Code aus anderen Dateien und Bibliotheken strukturiert wiederverwendet werden kann.

```js
// zufällige Gleitkommazahl x mit 0 <= x < 1
function random() {
  return Math.random();
}

// einstellige, zufällige Ziffer x mit 0 <= x <= 9
function randomDigit() {
  return Math.floor(Math.random() * 10);
}

// ganze, zufällige Zahl x mit min <= x < max
function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

Diese drei Funktionen könnten z.B. in einer Datei `randomUtilities.js` zusammengefasst werden. Um diese Funktionen anderen Skripten bzw. Dateien in unserem Projekt zur Verfügung zu stellen, können wir sie exportieren, wofür ES2015 das Schlüsselwort `export` bereitstellt (diesmal ohne Kommentare zu den Funktionen):

```js
export function random() {
  return Math.random();
}
export function randomDigit() {
  return Math.floor(Math.random() * 10);
}
export function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

Nun können diese Funktionen in einer anderen Datei des gleichen Projekts importiert werden. Dazu steht jede exportierte Funktion mit ihrem Namen zur Verfügung:

```js
import { random, randomDigit, randomIntInRange } from './randomUtilities';
// die importierten Funktionen können nun verwendet werden:
// console.log(randomIntInRange(1,100));
// usw.
```

Eine `import`-Anweisung fasst also in geschweiften Klammern zusammen, was importiert werden soll, und gibt mit `from` die Datei an, aus der importiert werden soll. Die `import`-Anweisungen sollten immer am Anfang einer Datei stehen. In React Native muss die Datei, aus der importiert wird, mit ihrem Dateipfad angesteuert werden. Dabei wird die Dateiendung `.js` weggelassen. In dem obigen Beispiel gehen wir davon aus, dass sich die Datei im selben Ordner befindet, daher wird sie mit `'./randomUtilities'` referenziert. Würde die Datei in einem Unterordner namens `utils` zu finden sein, könnte sie entsprechend mit `'./utils/randomUtilities'` erreicht werden. Bei mehreren `imports` empfiehlt es sich, diese mit Zeilenumbrüchen übersichtlicher zu gestalten:

```js
import {
  random,
  randomDigit,
  randomIntInRange,
  randomNegativeNumber,
  randomEvenNumber
} from './randomUtilities';
```

Beachten Sie hierbei das letzte Komma nach `randomEvenNumber`. Dies führt nicht zu einem Fehler, sondern wird von JavaScript toleriert. Es wird Trailing Comma genannt und kann auch an anderen Stellen wie z.B. Parameterlisten verwendet werden.

Die Datei `randomUtilities.js` wird nun als eigenständiges Skript oder Modul aufge- fasst, aus dem importiert werden kann. Es besteht die Möglichkeit, pro Modul in höchstens einer `export`-Anweisung das Schlüsselwort `default` zu verwenden:

```js
export default function random() {
  return Math.random();
}
export function randomDigit() {
  return Math.floor(Math.random() * 10);
}
export function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

Diese mit dem Zusatz default exportierte Funktion kann im Gegensatz zu den restlichen exportierten Funktionen ohne Angabe von geschweiften Klammern importiert werden, da es sozusagen der „Defaultexportwert“ ist:

```js
import random, { randomDigit, randomIntInRange } from './randomUtilities';
```

Mit `random` wird also genau die Funktion importiert, die im Modul `randomUtilities.js` mit dem Zusatz `default` exportiert wurde. Damit das funktioniert, kann `export` default höchstens einmal pro Modul verwendet werden. Im Zusammenhang mit `export default` ist es auch möglich, die importierte Funktion unter einem anderen Namen bereitzustellen. Zwar wird im Modul `randomUtilities.js` die Funktion `random` mit `export default` exportiert, aber diese Funktion könnte durch eine `import`-Anweisung auch z.B. folgendermaßen als `myRandom` importiert werden:

```js
import myRandom, {
  randomDigit,
  randomIntInRange
} from './randomUtilities';
```

`myRandom` entspricht somit lokal der Funktion `random`. Hierdurch ist es unter anderem möglich, Namenskonflikte zu vermeiden.

In den obigen Beispielen haben wir nur Funktionen exportiert und importiert. Es können aber auch andere JavaScript-Artefakte wie Variablen, Klassen und Konstanten (siehe folgende Abschnitte) exportiert und im Gegenzug in anderen Teilen unseres Codes importiert werden.
