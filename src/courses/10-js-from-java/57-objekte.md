---
templateKey: markdown-unit
title: Objekte
---

In JavaScript lassen sich mit Objekten beliebige Werte zusammenfassen.
Die Werte sind in Objekten bestimmten Schlüsseln bzw. Eigenschaften zugeordnet.
Objekte werden mit geschweiften Klammern deklariert:

```js
let object1 = { name: 'Jane', age: 33 };
```

Objekte sind also Sammlungen von Schlüssel/Wert-Paaren (_key/value pairs_).
In Java gibt es mit `HashMaps` eine ähnliche Datenstruktur. Der Zugriff auf einzelne
Werte erfolgt mit `object.key` oder `object['key']` bzw. `object["key"]`:

```js
// lesender Zugriff
console.log(object1.name); // oder object['name']
console.log(object1['age']); // oder object.age

// schreibender Zugriff
object['name'] = 'Janet'; // oder object.name = ...
object.age = 30; // oder object['age'] = ...
```

Das Konzept privater Eigenschaften gibt es in JavaScript nicht.

Objekte können auch weitere Objekte, Arrays oder Funktionen als Eigenschaften enthalten:

```js
let object2 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 27,
  address: {
    zip: 79098,
    city: 'Freiburg'
  },
  professions: ['IT specialist', 'Farmer'],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(object2.getFullName());
console.log(object2.address.city);
```

Objekte sind die Grundlage für JSON (_JavaScript Object Notation_).
