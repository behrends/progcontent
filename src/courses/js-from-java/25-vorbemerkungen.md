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
Falls eine Anweisung einen Syntax-Fehler enthält oder einen Laufzeitfehler hervorruft

```js
5 - 3;   // wird ausgeführt
8 *&^ 2; // Progrmm wird mit syntax error beendet
```

### let statt var für Variablen – ohne Datentypen zu nennen

Lokale Variablen sollten mit `let` deklariert werden. Es gibt
in JavaScript zwar auch `var` aber von der Verwendung wird abgeraten.
Bei der Deklaration von Variablen werden keine Datentypen angegeben und
es ist erlaubt, einer Variablen nacheinander Werte verschiedener Datentypen
zuzuweisen.

```js
let x = 123;
x = 'Hallo'; // dies ist erlaubt!
```

### Strings und Template-Strings

Strings können entweder mit `'` und `"` umgeben werden. Hier wird
hauptsächlich `'` verwendet. Template-Strings bieten eine elegante
Möglichkeit, Strings dynamisch zusammenzusetzen.

```js
let name1 = 'Joe';
let name2 = 'Jane';

let name3 = `${name1} Smith`; // --> Joe Smith
let name4 = `${name2} Smith`; // --> Jane Smith
```

### Funktionen als Objekte

D

```js
```

### Klassen für mehr Struktur

Oft reichen Funktionen aus, um JavaScript-Code zu strukturieren.
Es gibt seit ein paar Jahren auch Klassen in JavaScript, mit denen
Java-Entwickler gewohnte Strukturen wiederfinden. Funktionen innerhalb
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
Siehe TODO javascript garden

```js
true + 6; // 7
[] + []; // ''
// u.v.a.m.
```

### TypeScript: „besseres“ JavaScript

Mit TypeScript wird JavaScript um statische Typen erweitert.
Dadurch wird JavaScript-Code um einiges stabiler. TypeScript ist
eine Erweiterung von JavaScript und abwärtskompatibel, d.h.
JavaScript-Code ist bereits TypeScript-Code. TypeScript ist bei
JavaScript-Entwicklern sehr beliebt.

```js
let x = 123; // x ist vom Typ number
x = 'Hallo'; // --> type error
```
