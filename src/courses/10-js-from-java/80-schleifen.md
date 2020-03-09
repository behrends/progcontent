---
templateKey: markdown-unit
title: Schleifen (while und for)
---

**Vorbemerkung:** Auch bei den Schleifenbedingungen werden JavaScript-Ausdrücke bei Bedarf in
Wahrheitswerte umgewandelt (siehe die Beschreibungen zu „_truthy_“ und „_falsy_“ bei [Verzweigungen](../if_else)).

### while

Im Prinzip wie in Java

```js
while (Bedingung === true) {
  // do something
}
```

Die Bedingung im `while`-Ausdruck muss einen Wert vom Typ `boolean` (`true` oder `false`) liefern.
Die Schleife läuft solange wie die Bedingung `true` ist.

```js
let x = 10;
while (x > 0) {
  x--;
  console.log(x);
}
```

### for

Im Prinzip wie in Java &mdash; nur ohne Typangaben bei der Initialisierung.

```js
for (Initialisierung; Bedingung; Aktualisierung) {
  // do something
}
```

Die Zählvariable sollte mit `let` definiert werden.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```
