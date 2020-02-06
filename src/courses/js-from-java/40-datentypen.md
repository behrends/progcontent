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

Der Typ `number` umfasst ganze Zahlen (z.B. `123`) und Gleitkommazahlen (z.B. `3.1415`).
Zeichenketten werden entweder mit `"` oder `'` umfasst.
Die Wahrheitswerte `true` und `false` sind die einzigen mögliche Werte von `boolean`.
Zu `object` zählen Objekte, Arrays und Funktionen.
Mit `undefined` und `null` wird ausgedrückt, dass etwas undefiniert bzw. nicht vorhanden ist.
`null` ist ein Nullwert, der nüztlich ist, um nicht vorhandene oder noch nicht gesetzte Werte
auszudrücken. `undefined` ist der Wert von nicht initialisierten Variablen und der Rückgabewert
von Funktionen ohne `return`-Anweisung. Außerdem ergibt der Zugriff auf nicht vorhandene Eigenschaften
von Objekten den Wert `undefined`. Im Code sollte `undefined` nicht in Zuweisungen verwendet werden,
statt dessen kann `null` für Nullwerte eingesetzt werden.

### Wichtige Unterschiede zu Java

In JavaScript wird nicht zwischen einfachen (elementaren, primitiven) Datentypen
und Referenzdatentypen unterschieden. Außerdem gibt es nur einen numerischen Datentypen,
nämlich `number`. Der Datentyp `string` wird klein geschrieben und erlaubt `"doppelte Anführungszeichen"` und `'einfache Anführungszeichen'`. Es gibt keinen Datentyp für einzelne Zeichen (`char` in Java). `null` hat in JavaScript (nicht vorhandener Wert) eine andere Bedeutung als in Java (Nullreferenz).

### Bemerkungen

- Es gibt einen neuen Datentypen `bigint` für beliebig große Zahlen (`number` ist auf 2<sup>53</sup> bzw. -2<sup>53</sup> beschränkt). `bigint`-Zahlen werden mit `n` abgeschlossen: `1234n`. Noch nicht alle Browser unterstützen `bigint` (Anfang 2020).
- Es gibt noch einen weiteren „Symbol-Typ“, der hier nicht behandelt wird
