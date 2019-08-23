---
title: 'Module exportieren und importieren'
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
