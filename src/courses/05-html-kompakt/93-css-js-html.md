---
templateKey: markdown-unit
title: CSS und JavaScript im HTML-Dokument
---

`style` im `head`, `script` am Ende von `body`. Innerhalb dieser
Elemente wird kein HTML verwendet sondern direkt CSS (in `style`) bzw.
JavaScript (in `script`):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Titel wird im Browser-Tab angezeigt</title>
    <style>
      /* Dies ist ein CSS-Kommentar */
      /* Hier wird CSS-Syntax für CSS-Regeln verwendet */
      body {
        font-size: 11px;
      }
    </style>
  </head>
  <body>
    <!-- dies ist ein HTML-Kommentar: 
      Im body-Element werden die Elemente für den Inhalt 
      des Dokuments deklariert (Text, Bilder, Links, usw.) -->
    <script>
      // Dies ist ein JavaScript-Kommentar
      // Hier kann JavaScript-Code stehen, der ausgeführt wird,
      // wenn der Browser dieses script-Element interpretiert
      let myVariable = 8;
    </script>
  </body>
</html>
```

Daher entstammt die Syntax für Kommentare innerhalb dieser Elemente
auch CSS (in `style`) bzw. JavaScript (in `script`).
