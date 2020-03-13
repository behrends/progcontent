---
templateKey: markdown-unit
title: Kaskade und Spezifizität
---

import Codepen from '../../components/codepen'

Oft werden mehrere Stylesheets verwendet und es kann auch sein, dass
die Selektoren verschiedener Regeln die gleichen Elemente auswählen.
In diesen Fällen stellt sich die Frage, welche CSS-Regeln auf die
betroffenen HTML-Elemente angewendet werden.

### Kaskade

Mit Kaskade (_cascading_, das „_C_“ in CSS) ist gemeint, dass die
CSS-Regeln nacheinander angewendet werden, so wie sie in den
eingebunden Stylesheets auftreten.

Dazu ein vereinfachter Merksatz:

> Bei gleichstarken Selektoren hat die Regel Vorrang,
> die als letztes in der Reihenfolge der Anwendung ist.

Mit „gleichstark“ ist hier die Spezifizität gemeint (mehr dazu unten). Die Reihenfolge
der Anwendung wird durch die Anordnung der Regeln in CSS-Dateien oder Einbindung
von Stylesheets durch `link`-Elemente im HTML-Dokument bestimmt.

Ein einfaches Beispiel:

<Codepen id="BaNReRO" height={340} />

Hier wird zunächst die erste Regel angewendet, wodurch die Überschrift unterstrichen
und in roter Farbe erscheint. Jedoch bewirkt die nachfolgende Regel, dass die Schrift
blau wird und danach wird die Schriftgröße durch die letzte Regel auf 40px erhöht.

### Spezifizität

Mit Spezifizität wird festgelegt, wie spezifisch der Selektor ist. Wenn der Selektor
z.B. aus dem Wert eines `id`-Attributs für genau ein Element besteht oder nur der
Elementtyp angegeben wird, wodurch mehrere Elemente selektiert würden, dann wäre
der erstgenannte `id`-Selektor spezifischer als der zweite. Dabei spielt es anders
als bei der Kaskade keine Rolle, wo die Regel in der Reihenfolge der Deklarationen steht.

Auch hier wieder ein vereinfachter Merksatz:

> Je spezifischer der Selektor, desto größer die Priorität dieser Regel
> &mdash; egal wo diese Regeln in den Stylesheets deklariert wird.

Die Spezifizität ist bei der Vielzahl der möglichen Selektoren ein Recht komplexes
Thema, von dem wir hier nur die Grundprinzipien besprechen. Wir betrachten hier
nur folgendes:

- `id`-Selektoren sind stärker als `class`-Selektoren
- `class`-Selektoren sind stärker als Elementtyp-Selektoren

Dazu ein Beispiel:

<Codepen id="BaNrJEM" height={340} />

Hier setzt sich aufgrund der höheren Spezifizität die Regel mit dem
`id`-Selektor beim ersten Element durch, obwohl diese Regel ganz am
Anfang steht. Und die Regel mit dem `class`-Selektor wiederum ist
stärker als die letzte Regel.

Mehr zu den konkreten Berechnungen der Spezifizität beim [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

**Bemerkung:** CSS in `style`-Attributen direkt an HTML-Elementen haben immer Vorrang.
