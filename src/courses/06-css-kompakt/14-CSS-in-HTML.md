---
templateKey: markdown-unit
title: CSS im HTML-Dokument
---

import WebPlayground from '../../components/WebPlayground'

Es gibt zwei Möglichkeiten, CSS-Regeln direkt in HTML-Dokumenten zu definieren:

- Innerhalb eines `<style>`-Elements im `<head>` des HTML-Dokuments
- Als Wert des Attributs `style` bei einzelnen Elementen.

**Bemerkung:** In der praktischen Webentwicklung werden Stylesheets in der Regel
in eigenen CSS-Dateien getrennt vom HTML-Dokument definiert. Dies wird
im [folgenden Artikel](../html-und-css) beschrieben.

Hier werden die beiden Ansätze `<style>`-Element und `style`-Attribut kurz
erläutert, da sie manchmal praktisch für schnelle Experimente mit CSS
direkt im betroffenen HTML-Dokument sind.

### CSS im style-Element

Im `<head>`-Tag des HTML-Dokuments kann ein `<style>`-Element stehen,
dessen Inhalt aus CSS-Regeln bestehen kann:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <!-- restliche Elemente im Head -->
    <style>
      /* Hier wird CSS-Syntax verwendet! 
        Keine HTML-Elemente in diesem style-Element!*/
      h1 {
        color: red;
      }
    </style>
  </head>
  <!-- CSS-style von oben wirkt sich auf HTML im body aus -->
</html>
```

Mit obigem Beispiel würden `<h1>` Elemente mit Überschriften im
HTML-Dokument in roter Schriftfarbe erscheinen. Zu beachten ist,
dass innerhalb der Tags `<style> ... </style>` keine weiteren HTML-Elemente
stehen, sondern dass dort Regeln in CSS-Syntax angegeben werden. Daher muss
im obigen Beispiel entsprechend auch der Kommentar innerhalb von `<style>` in CSS-Form
erfolgen &mdash; also `/* ... */` und nicht `<!-- ... -->` wie im Rest des HTML-Dokuments.

Die im `<style>`-Element deklarierten Regeln werden auf das HTML-Dokument
angewendet, d.h. die Regeln wirken sich auf die nachfolgenden Elemente in `<body>`
aus. Alternativ oder zusätzlich dazu können auch einzelne HTML-Elemente im
`body` direkt mit einem `style`-Attribut ausgestattet werden:

```html
<h1 style="color: red; text-decoration: underline;">Eine Überschrift</h1>
```

In diesem Fall werden lediglich einzelne CSS-Deklarationen ohne Selektor
mit `;` voneinander getrennt als Textwert des `style`-Attributs angegeben.
Diese Regeln wirken sich allerdings ausschließlich auf das konkrete HTML-Element aus,
zu dem dieses `style`-Attribut gehört. Andere Elemente werden hiervon nicht beeinflusst.

Die CSS-Regeln eines `style`-Attributs haben Vorrang gegenüber allen anderen
Ansätzen CSS zu deklarieren. Dies ist ein Beispiel für die „kaskadierende“ (_cascading_)
Eigenschaft von CSS-Regeln.

In den folgenden Artikeln werden einige Beispiele eingebettet. Diese können
interaktiv verändert werden und zeigen das Ergebnis sofort an (einfach ausprobieren):

export const html = `<style>
  h1 {
    color: red;
  }
</style>
<h1>Überschrift</h1>
<h1 style="color: blue;">
  Überschrift 2
</h1>
<h1>Überschrift 3</h1>`;

<WebPlayground markup={html} />

In diesen Beispielen können wir einzelne HTML-Fragment ohne `DOCTYPE`, `<html>`-, `<head>`-
und `<body>`-Elemente deklarieren, um die wesentlichen Aspekte zu verdeutlichen.

Oben ist zu sehen, wie das `style`-Attribut des zweiten `<h1>`-Elements eine
höhere Priorität hat als die CSS-Regel im `<style>`-Element. Daher erscheint
dieses Element in blauer Schriftfarbe und nicht in rot wie die anderen beiden.

Im Folgenden werden kleinere HTML-Fragmente und die beispielhaften CSS-Regeln
für eine bessere Übersichtlichkeit voneinander getrennt erscheinen:

export const html2 = `<h1>Überschrift 1</h1>
<h1 style="color: blue;">
  Überschrift 2
</h1>
<h1>Überschrift 3</h1>`;

export const css = `h1 {
  color: red;
}`;

<WebPlayground markup={html2} css={css} defaultEditorTab="css"/>

Es kann jedoch leicht zwischen den `HTML`- und `CSS`-Ansichten gewechselt werden.
