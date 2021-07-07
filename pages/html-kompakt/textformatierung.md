# Textformatierung

HTML bietet mit `b` und `i` zwei einfache und naheliegende
Möglichkeiten an, um die Darstellung von Text zu beeinflussen:

```html
<p>
  Dies wird <b>fett</b> gedruckt und dies erscheint <i>kursiv</i>.
</p>
```

Der mit `<b>` markierte Text erscheint in Fettschrift (`b` wie _bold_)
und was mit `<i>` umgeben wird ergibt Kursivschrift (`i` wie _italic_):

<p style={{fontFamily: "serif", border: "1px solid black", padding: "3px"}}>
Dies wird <b>fett</b> gedruckt und dies erscheint <i>kursiv</i>. 
</p>

Allerdings wird davon abgeraten, Text auf diese Weise zu formatieren,
denn für die Darstellung und Gestaltung von Text ist nicht HTML sondern
[CSS](/css-kompakt) zuständig.

Dennoch sind diese beiden Elemente nützliche Beispiele für die
Schachtelungen von HTML-Elementen und Text, denn das `<p>`-Element
enthält in dem Beispiel oben sowohl Text als auch zwei Kindelemente
(nämlich `<b>` und `<i>`).
