---
templateKey: markdown-unit
title: Datentypen
---

Folgende Datentypen in JavaScript sind hier relevant:

- `number`
- `string`
- `boolean`
- `object`
- `undefined`
- `null`

### number

Der Typ `number` umfasst ganze Zahlen (z.B. `123`) und Gleitkommazahlen (z.B. `3.1415`).
Es gibt also keinen besonderen Datentyp für Gleitkommazahlen.

### string

Zeichenketten bzw. Strings werden mit `"`, `'` oder `` ` `` umgeben. Hier werden Strings
hauptsächlich mit einfachen Anführungszeichen angegeben (also `'`). Mit Template-Strings,
die mit `` ` `` umgeben werden, lassen sich Zeichenketten dynamisch durch Interpolation
von JavaScript-Ausdrücken erstellen. Dabei werden die interpolierten Ausdrücke in
`${ ... }` angegeben:

```js
const firstName = 'John';
const lastName = 'Doe';

console.log(`Full name: ${firstName} ${lastName}`);
```

Dies ist manchmal eleganter oder kompakter als die String-Konkatenation mit `+`.

### boolean

Wie auch in Java gewohnt sind die Wahrheitswerte `true` und `false` die einzigen möglichen Werte von `boolean`.

### object

Zu `object` zählen Objekte, Arrays und Funktionen. Objekte werden in geschweiften Klammern
angegeben und bestehen aus einzelnen _key/value_-Paaren der Form `key: value`, die mit Komma
voneinander getrennt werden:

```js
const jane = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 36
};
```

Die Schlüssel (_key_) werden manchmal als Eigenschaften bezeichnet (_properties_). Für Werte der
Eigenschaften eines Objekts gibt es keine Einschränkungen in Bezug auf die zulässigen Typen,
d.h. die Werte dürfen Zahlen, Strings, Booleans, `null` und selbstverständlich auch weitere Objekte
sein &mdash; einschließlich Arrays und Funktionen:

```js
const smithFamily = {
  joe: { name: 'Joe', age: 42 },
  jane: { name: 'Jane', age: 39 },
  kids: [
    { name: 'Jean', age: 12 },
    { name: 'John', age: 9 }
  ],
  mothersName: function() {
    return this.jane.name;
  }
};
```

Zu Objekten, Arrays und Funktionen gibt es eigene Abschnitte (siehe [Objekte](../objekte), [Arrays](../arrays) und [Funktionen](../funktionen)).

### null

`null` ist ein Nullwert, der nüztlich ist, um nicht vorhandene oder noch nicht gesetzte Werte
auszudrücken. Dazu ein Beispiel:

```js
// deklariere Objekt mit lastName = null (sozusagen unbekannt)
const joe = { firstName: 'John', lastName: null };

// ... später erhält die Eigenschaft lastName einen konkreten Wert:
joe.lastName = 'Smith';
```

### undefined

`undefined` ist der Wert von nicht initialisierten Variablen und der Rückgabewert
von Funktionen ohne `return`-Anweisung. Außerdem ergibt der Zugriff auf nicht vorhandene Eigenschaften
von Objekten den Wert `undefined`. Im Code sollte `undefined` nicht in Zuweisungen verwendet werden,
statt dessen kann `null` für Nullwerte eingesetzt werden, um z.B. auszudrücken, dass eine bestimmte
Eigenschaft eines Objektes (noch) keinen Wert hat (siehe Beispiel zu `null` oben).

### typeof

Mit `typeof` kann der Typ eines JavaScript-Ausdrucks ermittelt werden.

```js
typeof 3; // --> "number"
typeof 'Hallo'; // --> "string"
typeof true; // --> "boolean"
typeof { x: 8 }; // --> "object"
```

Bei `null` und Funktionen gibt es spezielle Ergebnisse:

```js
typeof null; // --> "object"

typeof function() {
  return 1;
}; // --> "function"
```

Dass `typeof null` den Wert `"object"` ergibt, wird als Fehler in der Konzeption der Sprache angesehen.
Bei Funktionen erscheint der Typ `"function"`, wodurch klar ist, dass es sich um ein „Funktionsobjekt“ handelt.

### Wichtige Unterschiede zu Java

In JavaScript wird nicht zwischen einfachen (elementaren, primitiven) Datentypen
und Referenzdatentypen unterschieden. Außerdem gibt es nur einen numerischen Datentypen,
nämlich `number`. Der Datentyp `string` wird klein geschrieben und erlaubt `"doppelte Anführungszeichen"`,
`'einfache Anführungszeichen'` und `` `Backtick` `` als Begrenzer. Es gibt keinen Datentyp für
einzelne Zeichen (`char` in Java). `null` hat in JavaScript (Nullwert) eine andere Bedeutung als
in Java (Nullreferenz).

### Bemerkungen

- Es gibt einen neuen Datentypen `bigint` für beliebig große Zahlen (`number` ist auf 2<sup>53</sup> bzw. -2<sup>53</sup> beschränkt). `bigint`-Zahlen werden mit `n` abgeschlossen: `1234n`. Noch nicht alle Browser unterstützen `bigint` (Anfang 2020) und daher wird dieser Typ hier nicht behandelt.
- Es gibt noch einen weiteren „Symbol-Typ“, der hier nicht behandelt wird.
