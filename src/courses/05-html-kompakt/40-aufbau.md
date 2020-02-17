---
templateKey: markdown-unit
title: Aufbau und Struktur eines HTML-Dokuments
---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titel wird im Browser-Tab angezeigt</title>
  </head>
  <body></body>
</html>
```

Kein schließendes Tag bei `<!DOCTYPE html>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <title>Titel wird im Browser-Tab angezeigt</title>
    <style>
      /* hier kann CSS enthalten sein */
    </style>
  </head>
  <body>
    <!-- dies ist ein Kommentar: 
      Im body-Element werden die Elemente für den Inhalt 
      des Dokuments deklariert (Text, Bilder, Links, usw.) -->
    <script>
      // hier kann JavaScript-Code stehen
    </script>
  </body>
</html>
```

Leere Zeilen oder anderer Whitespace wirken sich nicht aus. Jeder Text oder andere
Inhalte sollten von Tags umgeben sein, die beschreiben, um welche Strukturelemente
es sich handelt (Text: Überschriften, Absätze/Paragraphen, Listen, Tabellen, usw.).
