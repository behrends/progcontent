---
templateKey: markdown-unit
title: Text in Paragraphen
---

Gewöhnlicher Text wird häufig in `p`-Elementen angegeben.
`p` steht dabei für _paragraph_ bzw. Absatz.

```html
<p>
  Hier steht ein Text in einem eigenen Absatz. Und hier steht noch ein
  Satz.
</p>
```

Kommen in HTML-Elementen mehrere Leerzeichen und Zeilenumbrüche vor,
dann werden diese in der Regel vom Browser bei der Darstellung ignoriert.
Wir könnten das obige `p`-Element mit einigen Leerzeichen erstellen:

<!-- prettier-ignore-start -->

```html
<p>
  Hier steht ein     Text in einem eigenen     Absatz.
  
  Und hier steht noch ein     Satz.
</p>
```

<!-- prettier-ignore-end -->

Dennoch ist die Darstellung der Paragraphen im Browser in beiden Fällen
gleich, d.h. der _whitespace_ (mehrere Leerzeichen, Zeilenumbrüche, usw.)
wird ignoriert:

<p style="font-family: serif; border: 1px solid black; padding: 3px;">
Hier steht ein Text in einem eigenen Absatz. Und hier steht noch ein
Satz.
</p>

Mit `br`-Elementen (`br` steht für _break_) können Zeilenumbrüche erzwungen
werden:

```html
<p>
  Hier steht ein Text in einem eigenen Absatz.
  <br />
  Und hier steht noch ein Satz.
</p>
```

Nun erscheint der Zeilenumbruch im Browser:

<p style="font-family: serif; border: 1px solid black; padding: 3px;">
Hier steht ein Text in einem eigenen Absatz. 
<br/>
Und hier steht noch ein Satz.
</p>

`br` ist ein leeres Element ohne Inhalt. Es ist auch erlaubt, `br` ohne
Schrägstrich anzugeben, was häufig zu sehen ist:

<!-- prettier-ignore-start -->
```html
<br>
```
<!-- prettier-ignore-end -->

Sind mehrere Leerzeichen oder Abstände erwünscht, dann kann dies einerseits
mit [CSS](/css-kompakt) erreicht werden. Anderseits steht dazu auch mit _non breaking space_
eine spezielle Entity bereit:

```html
Folgendes &nbsp;&nbsp;&nbsp; hat etwas mehr Abstand.
```

Dies erscheint in etwa so im Browser:

<p style="font-family: serif; border: 1px solid black; padding: 3px;">
Folgendes &nbsp;&nbsp;&nbsp; hat etwas mehr Abstand.
</p>

Im folgenden Artikel steht mehr zu Entities.
