---
templateKey: markdown-unit
title: Tabellen
---

Tabellen werden durch das Blockelement `<table>` deklariert.
`table` hat verschiedene Kindelemente:

- `thead` für die Beschriftung der Spalten
- `tbody` für den eigentlichen Inhalt der Tabelle
- Tabellenzeilen in `thead` und `tbody` werden mit `tr` (_table row_) deklariert
- Das `tr`-Element in `thead` für die Beschriftung besteht aus `th`-Elementen (_table header_) für einzelnen Überschriften der Spalten
- Die `tr`-Elemente für die Zeilen in `tbody` enthalten `td`-Elemente (_table data_) für die konkreten Daten in den einzelnen Zellen

Ein Beispiel verdeutlicht den Aufbau einer Tabelle in HTML:

```html
<table>
  <thead>
    <tr>
      <th>Freitag</th>
      <th>Samstag</th>
      <th>Sonntag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arbeiten</td>
      <td>Sport</td>
      <td>Ausschlafen</td>
    </tr>
    <tr>
      <td>Einkaufen</td>
      <td>Freunde besuchen</td>
      <td>Brunch</td>
    </tr>
    <tr>
      <td>Ausruhen</td>
      <td>Feiern</td>
      <td>Ausflug</td>
    </tr>
  </tbody>
</table>
```

Diese Table wird in etwa so im Browser dargestellt:

<table style="font-family: serif;">
  <thead>
    <tr>
      <th>Freitag</th>
      <th>Samstag</th>
      <th>Sonntag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arbeiten</td>
      <td>Sport</td>
      <td>Ausschlafen</td>
    </tr>
    <tr>
      <td>Einkaufen</td>
      <td>Freunde besuchen</td>
      <td>Brunch</td>
    </tr>
    <tr>
      <td>Ausruhen</td>
      <td>Feiern</td>
      <td>Ausflug</td>
    </tr>
  </tbody>
</table>

Die `tr`-Elemente bilden also die einzelnen Zeilen (sowohl im
`thead` also auch im `tbody`). Die `th`-Elemente in der `tr`-Zeile
im `thead`-Element werden fett gedruckt dargestellt (im Gegensatz
zu den `td`-Elementen in den `tr`-Zeilen von `tbody`).

Mit den Attributen `colspan` (`col` steht für _column_ (Spalte))
und `rowspan` können Zellen bzw. Zeilen ausgedehnt werden:

```html
<table>
  <tbody>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
      <td>Spalte 3</td>
    </tr>
    <tr>
      <td colspan="2">
        colspan="2": Zelle erstreckt sich über 2 Spalten
      </td>
      <td>Spalte 3</td>
    </tr>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
      <td rowspan="2">
        rowspan="2": Hier werden 2 Zeilen zusammengefasst
      </td>
    </tr>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
    </tr>
  </tbody>
</table>
```

Dieses Beispiel erscheint so:

<table style="font-family: serif;">
  <tbody>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
      <td>Spalte 3</td>
    </tr>
    <tr>
      <td colspan="2">colspan="2": Zelle erstreckt sich über 2 Spalten</td>
      <td>Spalte 3</td>
    </tr>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
      <td rowspan="2">rowspan="2": Hier werden 2 Zeilen zusammengefasst</td>
    </tr>
    <tr>
      <td>Spalte 1</td>
      <td>Spalte 2</td>
    </tr>
  </tbody>
</table>

Mit `colspan` werden also Zellen über Spalten hinweg
ausgedehnt wohingegen `rowspan` mehrere Zeilen zusammenfasst.
Wird `colspan` verwendet, dann fallen `td`-Einträge in
derselben Zeile weg und bei `rowspan` werden `td`-Elemente
in den betroffenen, anderen Zeilen weggelassen.
