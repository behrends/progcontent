---
templateKey: markdown-unit
title: Verzweigungen mit if/else
---

Im Prinzip wie in Java:

```js
if( ...ein logischer Ausdruck X... ) {
  // Anweisungen in diesem Block werden ausgeführt,
  // wenn X wahr (true) ist
} else if( ...ein logischer Ausdruck Y... ) {
  // Anweisungen in diesem Block werden ausgeführt,
  // wenn X falsch (false) und Y wahr (true) ist
} else if( ...ein logischer Ausdruck Z... ) {
  // Anweisungen in diesem Block werden ausgeführt,
  // wenn X und Y falsch (false) sind und Z wahr (true) ist
  // es können mehrere else if Blöcke folgen
} else {
  // Anweisungen in diesem Block werden ausgeführt, wenn
  // alle Bedingungen in den if und else if Blöcken falsch (false) sind
}
```

**Hinweis:**
JavaScript wandelt Ausdrücke bei Bedarf automatisch in `boolean`-Werte um.
Dafür gibt es den Begriff, dass manche Werte „_truthy_“ sind, d.h. als `true`
aufgefasst werden und andere als „_falsy_“ (also als `false`) interpetiert werden:

```js
if (1) {
  // 1 --> true
  console.log('Zahlen !== 0 sind truthy');
}

if (0) {
  // 0 --> false
  // 0 ist nicht truthy
} else {
  console.log('0 ist falsy');
}

// ähnliches gilt für string-Werte usw.

if (null) {
  // null --> false
  // null ist nicht truthy
} else {
  console.log('null ist falsy');
}
```
