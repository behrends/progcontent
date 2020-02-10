---
templateKey: markdown-unit
title: Variablen und Konstanten
---

In JavaScript gibt es Variablen und Konstanten, denen beliebige Werte zugewiesen werden
können. Die Werte von Variablen können sich ändern, die von Konstanten nicht.
Variablen werden mit `let` und Konstanten mit `const` deklariert.

Variablen und Konstanten selbst haben keine Typen, denn JavaScript ist dynamisch
typisiert. Daher können einer Variablen zur Laufzeit beliebige Werte verschiedener
Typen zugewiesen werden. Variablen und Konstanten werden daher lediglich an
bestimmte Werte gebunden. Daher wird bei Variablen gelegentlich wird von
`let`-_bindings_ gesprochen.

```js
// lokale Variablen werden mit let deklariert
let localVar = 'Joe';
let otherVar; // noch ohne Wert
// Typen der Variablen können sich ändern
// --> JavaScript ist dynamisch typisiert
// (im Gegensatz zur statischen Typisierung in Java)
localVar = 123;
localVar = false;
otherVar = true;
otherVar = 321;

// Variablen sind Namen, an die Werte gebunden werden
// Variablen haben keine Typen — nur die an Variablen gebundenen Werte
let x;
x = 1; // x hat einen Wert vom Typ number
x = 'Hallo'; // x hat einen Wert vom Typ string

// Konstanten
const localConstant = 3.1415;
// Konstanten darf kein neuer Wert zugewiesen werden
// localConstant = 123; // --> type error

// Konstanten benötigen bei der Deklaration einen Wert
// const otherConstant; // --> syntax error
```

### Bezeichner

Die Namen von Variablen, Konstanten, Funktionen, Klassen, usw. dürfen nicht mit einer Zahl beginnen.
Ansonsten dürfen Bezeichner aus allen Buchstaben des Alphabets, Zahlen, `_` und `$` bestehen. Es wird zwischen
Groß- und Kleinschreibung unterschieden (JavaScript ist also _case sensitive_).

**Hinweis:** Es gibt auch die Möglichkeit, Variablen mit `var` zu deklarieren, was hier
nicht behandelt wird. Oft wird davon abgeraten, `var` zu verwenden – mehr dazu z.B. unter
[javascript.info/var](https://javascript.info/var)
