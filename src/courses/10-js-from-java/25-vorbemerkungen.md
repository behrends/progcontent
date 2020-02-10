---
templateKey: markdown-unit
title: Vorbemerkungen
---

### Ausdrücke sind Programme

In Java kann ohne Klassen und Methoden nicht programmiert werden.
In JavaScript dagegen kann jeder zulässige Ausdruck bereits als
ein „Programm“ ausgeführt werden:

```js
'Hallo, JavaScript!';
2 + 6 / 3;
```

### Code wird intepretiert und nicht kompiliert

Die Anweisungen in JavaScript-Code werden nacheinander vom Interpreter ausgeführt.
Falls eine Anweisung einen Syntax-Fehler enthält oder einen Laufzeitfehler hervorruft,
wird das Programm beendet.

```js
5 - 3;   // wird ausgeführt
8 *&^ 2; // Programm wird mit syntax error beendet
```

### let statt var für Variablen – ohne Datentypen zu nennen

Lokale Variablen sollten mit `let` deklariert werden. Es gibt
in JavaScript zwar auch `var`, aber von der Verwendung wird abgeraten.
Bei der Deklaration von Variablen werden keine Datentypen angegeben und
es ist erlaubt, einer Variablen nacheinander Werte verschiedener Datentypen
zuzuweisen.

```js
let x = 123;
x = 'Hallo'; // dies ist erlaubt!
```

### Kommentare wie in Java

Genau wie in Java können Kommentare in JavaScript-Code mit `//` bis zum Zeilenende
oder mit `/* ... */` über mehrere Zeilen hinweg angegeben werden.

### Strings und Template-Strings

Strings können mit `'`, `"` oder `` ` `` umgeben werden. Hier wird hauptsächlich `'` verwendet. Template-Strings mit `` ` `` bieten eine elegante
Möglichkeit, Strings dynamisch zusammenzusetzen (String-Interpolation).

```js
let name1 = 'Joe';
let name2 = 'Jane';

// Template-Strings für dynamische Interpolation
let name3 = `${name1} Smith`; // --> Joe Smith
let name4 = `${name2} Smith`; // --> Jane Smith
```

### Funktionen als Objekte

JavaScript ist eine funktionale Programmiersprache, was u.a. bedeutet, dass
Funktionen auch Objekte sind und z.B. Variablen zugewiesen werden können.
In der Frontend-Programmierung im Web-Browser wird diese Tatsache häufig im
Zusammenhang mit Listener- und Callback-Funktionen ausgenutzt.

```js
const myAddFunction = function(a, b) {
  return a + b;
};
let result = myAddFunction(2, 3); // --> 5
```

### Klassen für mehr Struktur

Oft reichen Funktionen aus, um JavaScript-Code zu strukturieren.
Es gibt seit ein paar Jahren auch Klassen in JavaScript. Funktionen innerhalb
von Klassen werden als Methoden bezeichnet – allerdings ohne Angabe
von Datentypen.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let joe = new Person('John', 'Smith');
let name = joe.getFullName();
```

### Schwächen von JavaScript

JavaScript hat einige Schwachstellen und seltsame Eigenschaften.
Siehe [https://bonsaiden.github.io/JavaScript-Garden/](https://bonsaiden.github.io/JavaScript-Garden/)

```js
true + 6; // 7
[] + []; // ''
// u.v.a.m.
```

### TypeScript: „besseres“ JavaScript

Mit TypeScript wird JavaScript um statische Typen erweitert.
Dadurch wird JavaScript-Code um einiges stabiler. TypeScript ist
eine Erweiterung von JavaScript und abwärtskompatibel, d.h.
JavaScript-Code ist bereits TypeScript-Code.

```js
let x = 123; // x ist vom Typ number
x = 'Hallo'; // --> type error
```
