---
templateKey: markdown-unit
title: Beispiele häufiger Eigenschaften
---

import Codepen from '../../components/codepen'

CSS hält unzählige Eigenschaften zur Gestaltung von HTML
bereit. Hier sollen nun u.a. einige häufig verwendete Beispiele im Bereich der
Schriftdarstellung und Größenangaben vorgestellt werden.

### Schriften

Es gibt zahlreiche Möglichkeiten, mit CSS Einfluss auf die Darstellung von Text im
Browser zu nehmen. Hier sind ein paar häufig vorkommende Beispiele:

**color**

Mit `color` wird die Schriftfarbe bestimmt. Es gibt vordefinierte Farbwerte wie `red`, `blue`, usw., welche direkt verwendet werden können:

```css
color: red;
```

Alternativ können beliebige Farben mit RGB-Werten (_Red Green Blue_) oder
hexadezimalen Farbcodes angegeben werden, z.B. ergeben folgende Deklarationen den
gleichen Wert wie `color: red`

```css
color: #ff0000; /* hexadezimaler Wert für red */
```

```css
color: rgb(255, 0, 0); /* RGB-Wert für red */
```

**font-...**

Außerdem kann die Schrift auf vielfältige Weise mit Eigenschaften der Form `font-...`
beeinflusst werden. Davon werden wir hier nur ein paar beispielhaft betrachten.
Es kann u.a. die Schriftart, die Größe der Schrift, der Schriftstil und die
sogenannte Strichstärke bestimmt werden:

```css
font-family: sans-serif; /* serifenlose („glatte“) Schrift */
font-size: 2em; /* Schriftgröße */
font-style: italic; /* Schrägschrift */
font-weight: bold; /* Fettdruck */
```

Eine Besonderheit bei der Eigenschaft für die Schriftgröße (`font-size`) ist die
Verwendung der Einheit `em`. Diese Größeneinheit ist relativ und bezieht sich auf
die Größe des Fonts im Elternelement. Mit `font-size: 2em` wird also erreicht,
dass die Schrift doppelt so groß ist wie die des Textes im umgebenden Element.

Zum Beispiel beim
[Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
finden sich ausführliche Beschreibungen zur Verwendung dieser
Eigenschaften und umfangreiche Auflistungen weiterer Möglichkeiten zur Gestaltung
der Schrift.

**width und height**

Die Breite und Höhe von HTML-Elementen kann mit `width` (Breite) und `height` (Höhe)
bestimmt werden. Dies ist einerseits mit absoluten Werten möglich:

```css
width: 100px;
height: 50px;
```

und andererseits können relative Größenangaben in Prozent angegeben werden:

```css
width: 20%;
height: 15%;
```

Die relativen Prozentangaben beziehen sich auf die Größe des Elternelements.

**background-color**

Mit `background-color` kann die Hintergrundfarbe eines HTML-Elements festgelegt werden.
Bei den zulässigen Werten gilt das gleiche wie bei `color` &mdash; zur Beachtung:
`color` wirkt sich nur auf die Schriftfarbe aus.

<Codepen id="poJWyYY" height={200} defaultTabs="css,result" />
