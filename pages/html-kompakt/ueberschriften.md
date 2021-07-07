# Überschriften

HTML stellt 6 Arten von Elementen für Überschriften verschiedener Ebenen
an. Mit `h1` wird die Hauptüberschrift definiert und mit `h2` bis `h6`
gibt es fünf weitere Arten von „Zwischenüberschriften“ (das `h` steht
für _heading_ also Überschrift). Der Text der Überschrift wird als
Inhalt zwischen den Tags angegeben.

```html
<h1>Die Hauptüberschrift auf Ebene 1</h1>
<h2>Zwischenüberschrift auf Ebene 2</h2>
<h3>Zwischenüberschrift auf Ebene 3</h3>
<h4>Zwischenüberschrift auf Ebene 4</h4>
<h5>Zwischenüberschrift auf Ebene 5</h5>
<h6>Zwischenüberschrift auf Ebene 6</h6>
```

Im Browser erscheinen die Textinhalte von `h1`, ... , `h6` als
fettgedruckte Überschriften in absteigender Schriftgröße.

<h1 style={{fontFamily: "serif", marginTop: "4px"}}>Die Hauptüberschrift auf Ebene 1</h1>
<h2 style={{fontFamily: "serif", marginTop: "4px"}}>Zwischenüberschrift auf Ebene 2</h2>
<h3 style={{fontFamily: "serif", marginTop: "4px"}}>Zwischenüberschrift auf Ebene 3</h3>
<h4 style={{fontFamily: "serif", marginTop: "4px"}}>Zwischenüberschrift auf Ebene 4</h4>
<h5 style={{fontFamily: "serif", marginTop: "4px"}}>Zwischenüberschrift auf Ebene 5</h5>
<h6 style={{fontFamily: "serif", marginTop: "4px"}}>Zwischenüberschrift auf Ebene 6</h6>

Mit CSS wird häufig auf die Gestaltung der Schriftart, -größe und -farbe der
Überschriften Einfluss genommen.
