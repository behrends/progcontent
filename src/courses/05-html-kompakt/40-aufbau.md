---
templateKey: markdown-unit
title: Aufbau und Struktur eines HTML-Dokuments
---

Ein HTML-Dokument sollte immer mit der Deklaration des Dokumententyps (_document type_)
beginnen:

```html
<!DOCTYPE html>
```

Dieser `DOCTYPE` sollte in der ersten Zeile des
HTML-Dokuments stehen (zur Erinnerung: HTML-Dokumente sind im Prinzip
bloß Text-Dokumente in einem bestimmten Format). Durch den `DOCTYPE` wird das Dokument
deutlich als HTML-Dokument gekennzeichnet.

**Hinweis:** Auf das Ausrufungszeichen (`!`) ist zu achten: `<!DOCTYPE html>`.
Bei der `DOCTYPE`-Deklaration handelt es sich _nicht_ um ein HTML-Element und
daher gibt es auch kein schließendes Tag.

Danach folgen die eigentlichen HTML-Elemente in einer hierarchischen oder
geschachtelten Struktur:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titel wird im Browser-Tab angezeigt</title>
  </head>
  <body></body>
</html>
```

Das äußerste Element oder Wurzelelement ist immer `html`, welches zwei
Kindelemente hat: `head` und `body`. Das `head`-Element hat Kindelemente,
die vereinfacht gesagt Informationen über das Dokument enthalten, wie z.B.
das `title`-Element, mit dem der Titel des Dokuments festgelegt wird.
Dieser Titel wird in der Tableiste des Browsers angezeigt. Oft finden
sich innerhalb des `head`-Elements mehrere `meta`-Elemente, mit denen
weitere Eigenschaften des Dokuments angegeben werden können. Hier werden
wir nur die wichtigsten Elemente beschreiben, wie z.B. das `meta`-Element
mit Attribut `charset`, wodurch im Dokument enthaltene Sonderzeichen
korrekt interpretiert und dargestellt werden (z.B. Umlaute der deutschen Sprache).

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Titel wird im Browser-Tab angezeigt</title>
  </head>
  <body></body>
</html>
```

Im `body`-Element werden die eigentlichen Inhalte des Dokuments festgelegt.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Titel wird im Browser-Tab angezeigt</title>
  </head>
  <body>
    <h1>Dies ist die Hauptüberschrift</h1>
    <h2>Dies ist eine Zwischenüberschrift</h2>
  </body>
</html>
```

Hier haben wir zunächst eine Hauptüberschrift mit `h1` deklariert,
auf die eine Zwischenüberschrift mit `h2` folgt. Die Darstellung der
einzelnen Elemente im Browser ergibt sich aus der Reihenfolge der
Elemente im HTML-Dokument:

<h1 style="font-family: serif;">Dies ist die Hauptüberschrift</h1>
<h2 style="font-family: serif;">Dies ist eine Zwischenüberschrift</h2>

### Bemerkungen

Leere Zeilen oder Leerzeichen anderer Art (sogenannter _whitespace_) im HTML-Dokument
wirken sich nicht auf die Darstellung im Browser aus. Selbst wenn mehrere leere
Zeilen zwischen den Elementen oder innerhalb der Tags stehen, wird dies vom Browser
ignoriert.

Jeder Text oder andere Inhalte sollten von Tags umgeben sein, die beschreiben, um welche
Strukturelemente es sich handelt. Dies gilt auch für Text jeder Art
(Überschriften, Absätze/Paragraphen, Listen, Tabellen, usw.) und bedeutet, dass selbst
einfacher Text in einem HTML-Element enthalten sein sollte.

### Kommentare

Kommentare im HTML-Dokument, die nicht vom Browser angezeigt werden
sollen, können so angegeben werden:

```html
<!-- ich bin ein HTML-Kommentar-Element -->
```

Durch die Schreibweise mit dieser Syntax (`<!--` ... Kommentar ... `-->`) werden
Kommentare eindeutig von den HTML-Elementen unterschieden.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Titel wird im Browser-Tab angezeigt</title>
  </head>
  <body>
    <h1>Dies ist die Hauptüberschrift</h1>
    <h2>Dies ist eine Zwischenüberschrift</h2>
    <!-- TODO: eigentlichen Inhalt ergänzen (Text, Bilder, usw.)  -->
  </body>
</html>
```
