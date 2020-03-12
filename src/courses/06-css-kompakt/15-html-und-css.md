---
templateKey: markdown-unit
title: CSS und HTML in verschiedenen Dateien
---

Für ein bestimmtes HTML-Dokument wird CSS in der Regel in
einer oder mehreren separaten Datei(en) deklariert. Diese Dateien
werden mit der Endung `.css` abgespeichert und können mit Hilfe eines
`<link>`-Elements im `<head>` des HTML-Dokuments eingebunden werden:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <!-- hier stehen mehr Elemente im head wie meta, title, usw.  -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <!-- hier folgt der body -->
</html>
```

Mit dem Attribut `rel="stylesheet"` wird dem Browser signalisiert, dass hier ein
CSS-Dokument eingebunden wird und mit `href` kann genau wie bei
gewöhnlichen Links (also `<a>`-Elementen in HTML) der Name der CSS-Datei
auf dem gleichen Server oder eine URL zur Referenzierung einer CSS-Ressource
im Web angegeben werden. Der Browser lädt diese CSS-Dateien automatisch
und wendet sie auf das HTML-Dokument an.

Im folgenden Beispiel ist zu sehen, dass zwei Stylesheets referenziert werden:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>Beispiel</title>
    <!-- zwei CSS Style Sheet Dokumente werden hier eingebunden: -->
    <link rel="stylesheet" href="normalize.css" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- HTML Elemente des Dokuments-->
  </body>
</html>
```

Hier wird zunächst eine CSS-Datei `normalize.css` referenziert und danach
wird eine CSS-Datei `styles.css` eingebunden. Der Browser wendet die in diesen
Dateien enthaltenen CSS-Regeln **nacheinander** auf das HTML-Dokument an, wodurch
später ausgeführte Regeln evtl. die Auswirkungen zuvor definierte Regeln überschreiben
(ein weiteres Beispiel für die „kaskadierende“ Eigenschaft von CSS).

### Browser-Stylesheets und Normalisierung

Mit `normalize.css` wird im obigen Beispiel gezeigt, dass häufig ein
„Normalisierungs“-Stylesheet wie z.B.
[Normalize.css](https://necolas.github.io/normalize.css/) als erstes
Stylesheet eingebunden wird, um die sogenannten Browser-Stylesheets zu
„normalisieren“, d.h. auf einen definierten Zustand zu bringen. Jeder Browser
liefert nämlich eigene CSS-Styles mit, die sich von denen anderer Browser
unterscheiden können. Nach dieser Normalisierung werden dann unsere eigenen
Styles eingelesen, was hier durch die Datei `styles.css` angedeutet wird.
