---
templateKey: markdown-unit
title: Unterschiede zwischen JavaScript und Java
---

_Java is to JavaScript like Car is to Carpet._

Java und JavaScript haben zwar einige Gemeinsamkeiten, aber
auch wesentliche Unterschiede:

**Java**

- ist statisch typisiert
- am Ende einer Anweisung muss immer `;` stehen
- Programmcode benötigt mindestens eine Klasse und eine Methode (`main`)
- Methoden haben festen Parameter und können eine Rückgabewert haben (oder nicht, siehe `void`)
- Objekte sind Instanzen von Klassen
- Konstruktoren sind für die Objekterzeugung zuständig
- wird kompiliert in Bytecode
- Vererbung mit Klassen und Interfaces
- wird durch den von Oracle dominierten _Java Community Process (JCP)_ spezifiziert
- `this` bezieht sich auf die Objektinstanz
- …

**JavaScript**

- ist dynamisch typisiert
- am Ende einer Anweisung genügt statt `;` der Zeilenumbruch
- jeder JavaScript-Ausdruck ist ein lauffähiges Programm (z.B. `1+2`)
- behandelt Funktionen wie Objekte, die flexible Parameteranzahlen und immer einen Rückgabewert haben und Methoden als Teil von Klassen
- `object` ist ein eigener Datentyp (JavaScript-Objekte), mit dem sich _key/value_-Paare
  willkürlich definieren lassen (siehe `HashMaps` in Java, _dictionaries_ in Python).
- Funktionen lassen sich wie Konstruktoren verwenden (siehe Prototypen) und es gibt
  Konstruktor-Methoden als Teil von Klassen
- wird als Skriptsrache interpretiert
- wird als ECMAScript von Vertretern verschiedener Unternehmen standisiert
- Vererbung basiert ursprünglich auf Prototypen, Klassenhierarchien erst seit ECMAScript 2015
- `this` bezieht sich auf den Kontext in dem eine Funktion aufgerufen wird
- …

**Bemerkung**: Mit TypeScript erhält JavaScript eine statische Typisierung.
