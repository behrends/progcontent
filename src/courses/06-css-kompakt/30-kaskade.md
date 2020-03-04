---
templateKey: markdown-unit
title: Kaskade und Spezifizität
---

import Codepen from '../../components/codepen'

### Kaskade

Merkregel: „Bei gleichstarken Selektoren hat die Regel Vorrang, die als letztes in
der Reihenfolge der Anwendung ist“.

Mit „gleichstark“ ist hier die Spezifizität gemeint (siehe unten). Die Reihenfolge
der Anwendung wird durch die Anordnung der Regeln in CSS-Dateien oder Einbindung
von Stylesheets durch `link`-Elemente im HTML-Dokument bestimmt.

TODO Beispiel:

<Codepen id="BaNReRO" height={340} />

### Spezifizität

Merkregel: „Je spezifischer der Selektor, desto größer die Priorität dieser Regel
&mdash; egal wo diese Regeln in den Stylesheets deklariert wird.“

- `id`-Selektoren sind stärker als `class`-Selektoren
- `class`-Selektoren sind stärker als Elementtyp-Selektoren
- usw.

Hierzu mehr bei MDN (todo).

**Bemerkung:** CSS in `style`-Attributen direkt an HTML-Elementen haben immer Vorrang.
