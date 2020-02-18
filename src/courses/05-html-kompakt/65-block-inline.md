---
templateKey: markdown-unit
title: Blockelemente und inline Elemente
---

In HTML gibt es eine Unterscheidung zwischen sogenannten
**Blockelementen** und **inline Elementen**. Zu den Blockelementen
gehören z.B. die Elemente für Überschriften (_headings_) und Paragraphen.
Die Darstellung von Blockelementen beginnt im Browser auf einer neuen
Zeile und nachfolgende Elemente werden ebenfalls auf der nächsten
Zeile dargestellt. Dazu ein Beispiel:

```html
<h1>Überschrift</h1>
<p>Ein Absatz mit Text</p>
<h2>Nächste Überschrift</h2>
<p>Wieder ein Absatz.</p>
```

Jedes dieser vier Elemente ist ein Blockelement und wird daher
mit Zeilenumbruch davor und danach dargestellt:

<h1 style="font-family: serif; border: 1px solid black; padding: 3px;">Überschrift</h1>
<p style="font-family: serif; border: 1px solid black; padding: 3px;">Ein Absatz mit Text</p>
<h2 style="font-family: serif; border: 1px solid black; padding: 3px;">Nächste Überschrift</h2>
<p style="font-family: serif; border: 1px solid black; padding: 3px;">Wieder ein Absatz.</p>

Die Rahmen um die Elemente sollen hier verdeutlichen, dass es sich um
Blockelemente handelt. Ein Blockelement hat also immer einen Zeilenumbruch
vor und nach dem Element.

Bei inline Elementen ist dies nicht der Fall, wie folgendes Beispiel zeigen soll
(auch wenn eigentlich von der Verwendung von `b`- und `i`-Elemente zugunsten von CSS
abgeraten wird):

```html
<p>
  Dieses <b>b-Element</b> ist inline und dieses <i>i-Element</i> auch.
</p>
```

Diese Elemente erzwingen keine Zeilenumbrüche davor und danach, daher werden sie
als „inline“ bezeichnet, was die <span style="border: 2px solid red;">roten Umrandungen</span> verdeutlichen:

<p style="font-family: serif; border: 1px solid black; padding: 3px;">
  Dieses <b style="border: 2px solid red; padding: 2px">b-Element</b> ist inline und dieses <i style="border: 2px solid red; padding: 2px">i-Element</i> auch.
</p>

### div und span

In HTML kommt es insbesondere in Kombination mit CSS immer wieder
vor, dass mehrere Elemente als ein zusammenhängendes Blockelement oder ein
inline Element aufgefasst werden sollen. Für diese Anwendungsfälle stehen
die Elemente `div` und `span` zur Verfügung. `div` und `span`
bewirken keine besondere Darstellung im Browser, außer dass `div` als
allgemeines Blockelement Zeilenumbrüche davor und danach erzwingt. `span`
hingegen ist ein allgemeines inline-Element.

```html
<div>
  <h3>Ein eigener Block</h3>
  <p>Vielleicht mit speziellen CSS-Styles</p>
  <p>
    Hier könnte <span>dieses Element</span> inline mit CSS angepasst
    werden.
  </p>
</div>
```

Im Zusammenhang mit CSS sieht man sehr häufig `div`- und `span`-Elemente, die
eigene Styles erhalten. Insbesondere kann mit `span` und CSS eine Fett- und
Kursivschrift ohne `b` und `i` erreicht werden. Hierzu werden
bei den `span`- bzw. `div`-Elementen die speziellen Attribute
`id` oder `class` mit passenden Werten definiert, um diese Elemente mit bestimmten CSS-Regeln zu selektieren und zu gestalten:

```html
<div id="info">
  <h3>Ein eigener Block</h3>
  <p>Vielleicht mit speziellen CSS-Styles</p>
  <p>
    Hier könnte <span class="highlight">dieses Element</span> inline
    mit CSS angepasst werden.
  </p>
</div>
```

Dies wird im Kurs zu CSS genauer besprochen.
