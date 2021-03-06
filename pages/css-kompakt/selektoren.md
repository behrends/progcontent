import WebPlayground from '../../components/WebPlayground'

# Selektoren

Eine CSS-Regel besteht im Wesentlichen aus zwei Teilen, nämlich

- einem Selektor am Anfang der Regel gefolgt von
- einer durch `;` voneinander getrennten Auflistung von Deklarationen innerhalb `{ ... }`.

CSS-Regeln haben also grundlegend diesen Aufbau:

```css
selector {
  /* hier stehen die Deklarationen der Regel */
  declaration1;
  declaration2;
  /* usw. */
}
```

In diesem Artikel wird es um den Selektor von CSS-Regeln gehen. Wenn eine
CSS-Regel auf ein HTML-Dokument angewendet wird, dann wird anhand des Selektors
die Menge der HTML-Elemente bestimmt, für die diese Regel gelten soll und für
die die Deklarationen ausgewertet werden (z.B. die Schriftfarbe anpassen). Ein
Selektor wirkt also wie eine Art Filter oder eine Auswahl der von dieser Regel
betroffenen Elemente.

Welche konkreten Elemente durch den Selektor ausgewählt werden, lässt sich
durch den syntaktischen Aufbau des Selektors festlegen. Hierbei gibt es in CSS eine
sehr große Flexibilität. Beispiele sind konkrete Elementtypen bzw. Tags, einzelne
Elemente mit einem bestimmten `id`-Attributwert, Elemente mit gewissen Werten
im `class`-Attribut, usw. Wir werden hier einige wichtige Arten von Selektoren
besprechen.

## Elementtyp bzw. Tagname

Der wohl einfachste und offensichtlichste Selektor besteht lediglich
aus dem Namen der Elemente bzw. Tags, für die eine Regel gelten soll.
Wir haben diese Art von Selektor bereits zuvor für ein paar Beispiele
verwendet:

```css
h1 {
  color: red;
  text-decoration: underline;
}
```

Mit obiger Regel werden _alle_ `<h1>`-Elemente in roter Schriftfarbe
und unterstrichen dargestellt. Diese Art von Selektor hat also
folgende Form:

```css
elementname {
  /* Deklarationen dieser Regel */
}
```

Für `elementname` lassen sich alle im HTML-Dokument vorkommden Tagname
einsetzen. Um also z.B. die Schriftfarbe von Text in _allen_ Paragraphen
des HTML-Dokuments in blauer Farbe erscheinen zu lassen, kann diese Regel
genutzt werden:

```css
p {
  color: blue;
}
```

Hier wird also der Selektor `p` für _alle_ Paragraphen des HTML-Dokuments
genutzt. Entsprechend kann für jeden anderen Elementtypen vorgegangen werden
&mdash; solange gewünscht ist, dass _alle_ Vorkommen dieses Tags bzw. Elementtyps
eines Dokuments mit dieser Regel angepasst werden. Denn es ist zu beachten,
dass diese Art von Selektor _alle_ Elemente eines konkreten Tags auswählt.
Andere Selektoren wirken sich dagegen nur auf bestimmte oder einzelne Elemente aus,
wie wir noch sehen werden.

## Mehrere Selektoren anwenden

Es ist möglich, eine Regel für mehrere Selektoren
anzuwenden, indem verschiedene Selektoren durch
Kommas voneinander getrennt angegeben werden::

```css
selector1, selector2 /* , usw. ... */ {
  /* Deklarationen dieser Regel */
}
```

Dadurch werden alle Selektoren dieser „Auflistung“ ausgeführt
und die zugehörige Regel wird auf alle ausgewählten Elemente
angewandt.

Eine Erweiterung des Elementtypselektors wäre somit z.B. die Aufzählung mehrerer
Tagnamen. Dies geschieht dadurch die Auflistung gewünschter Tagnamen
durch Kommas voneinander getrennt. Dadurch wird eine Regel auf _alle_ Elemente mehrerer Tags angewendet.
Es wäre also z.B. möglich, durch folgende Regel alle Überschriften des Typs
`<h1>`, `<h2>` und `<h3>` gleichförmig anzupassen:

```css
h1, h2, h3 {
  color: red;
}
```

**Bemerkung:** Es können beliebige Selektoren
in solch einer „Auflistung“ enthalten sein &mdash;
auch solche, die `id`- oder `class`-Attributwerte
enthalten (wie unten besprochen).

## id-Attributwerte

In einem HTML-Dokument sollten `id`-Attributwerte eines Elements eindeutig sein bzw.
nur einmal in dieser Form im gesamten Dokument vorkommen. Um genau dieses
Element für eine CSS-Regel zu selektieren, kann ein `id`-Selektor eingesetzt werden:

```css
#idval {
  /* Deklarationen dieser Regel */
}
```

Dieser Art von Selektor beginnt also mit `#`, womit angezeigt wird, dass nun ein
`id`-Attributwert folgt (hier `idval`). Dieser Selektor wählt genau das bzw.
das zuerst gefundene HTML-Element aus, dass ein `id`-Attribut mit diesem konkreten
Wert hat.

Angenommen, wir haben einen Link (d.h. ein `a`-Element) im HTML-Dokument, der
mit einem `id`-Attribut mit Wert `logout` ausgestattet ist:

```html
<a id="logout" href="actions/logout">Logout</a> ;
```

Dann würde folgende CSS-Regel genau dieses Element auswählen und in grüner
Schriftfarbe darstellen:

```css
#logout {
  color: green;
}
```

Wenn bei dieser Art von Selektor nur der Wert des
`id`-Attributs angegeben wird (im Beispiel `#logout`), dann spielt der Elementtyp bzw. der Tagname keine Rolle.

## class-Attributwerte

Mit dem Elementtypselektor können wir also ganze Mengen von Elementen auswählen
und mit dem `id`-Selektor werden einzelne, bestimmte Elemente selektiert.
Beim `class`-Selektor handelt es sich gewissermaßen um einen Ansatz, der einen
„Mittelweg“ dazwischen bietet. Ein `class`-Selektor wählt alle Elemente aus,
die ein `class`-Attribut mit einem bestimmten Wert haben. Dieser Selektor hat
folgende Form:

```css
.classval {
  /* Deklarationen dieser Regel */
}
```

Dieser Selektor beginnt also mit einem Punkt (`.`) gefolgt von dem Wert
des Attributs `class` der gewünschten HTML-Elemente.

Angenommen es gibt mehrere Elemente im HTML-Dokument, die ähnlich
gestaltet werden sollten. Dazu ein Beispiel:

<WebPlayground 
  markup={
`<p class="highlight">
  Hier steht etwas wichtiges
</p>
<div>
  Dies ist nicht so wichtig.
</div>
<p>
  Und dies schon gar nicht.
</p>
<div class="highlight">
  Dies aber muss betont werden.
</div>`    
  } 
  css={
`.highlight { 
  color: orange;
}`    
  } 
  defaultEditorTab="css"/>

Hier werden also das erste und das letzte Element gewählt und mit einer
orangenen Schriftfarbe ausgestattet, da beide Elemente ein `class`-Attribut
mit Wert `highlight` haben. Die anderen Elemente haben kein solches Attribut.
Mit `class`-Selektoren können insbesondere verschiedene Elementtypen
ausgewählt werden, wie oben zu sehen, denn es handelt sich hierbei jeweils
um ein `<p>`- und ein `<div>`-Element.

## Position im Dokument am Beispiel von Kindelementen

Werden in einem Selektor zwei Elementtypen durch Leerzeichen voneinander
getrennt angegeben:

```css
parentelem childelem {
  /* Deklarationen dieser Regel */
}
```

dann wird dadurch ausgedrückt, dass nur die Elemente vom Typ `childelem` innerhalb
eines Elements `parentelem` ausgewählt werden sollen. Hierbei spielt also
die Position der relevanten Elemente in der Hierarchie des HTML-Dokuments eine
wesentliche Rolle.

<WebPlayground 
  markup={
`<p>
  Dies ist ein Text mit <span>wichtigen</span> 
  und <span>relevanten</span> Teilen ...
</p>
<span>Dies ist unwichtig</span>
<div>
  <span>Dies auch</span>
</div>
<p>
  Noch etwas <span>besonderes</span>
  in diesem Absatz.
</p>`    
  } 
  css={
`p span {
  color: red;
}`    
  } 
  defaultEditorTab="css"
/>

Dieses Beispiel selektiert also nur genau die `<span>`-Elemente innerhalb von
`<p>`-Tags.

## Kombinationen von Selektoren

Gewisse Selektoren lassen sich miteinander kombinieren. So könnten
beispielsweise alle `<p>`-Elemente mit einem `class`-Attributwert `note`
ausgewählt werden:

```css
p.note {
  /* Deklarationen dieser Regel */
}
```

oder alle Kindelement eines Elements mit `id`-Wert `specialitem` mit Tagnamen
`<span>`, die einen `class`-Attributwert `essential` haben:

```css
#specialitem span.essential {
}
```

## weitere Selektoren

Es gibt zahlreiche weitere Arten von Selektoren, wie z.B. vom
[Mozilla Developer Network (MDN) dokumentiert](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).
