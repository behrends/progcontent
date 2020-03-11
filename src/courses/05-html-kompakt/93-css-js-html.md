---
templateKey: markdown-unit
title: CSS und JavaScript im HTML-Dokument
---

HTML wird in der praktischen Anwendung im Prinzip immer zusammen mit CSS und JavaScript
verwendet. Mit CSS werden Regeln definiert, die die Gestaltung der HTML-Elemente beeinflussen,
und mit JavaScript kann Programmcode für komplexere Interaktionen und Logik einer Webanwendung
geschrieben werden. Mit speziellen HTML-Elementen können die CSS-Regeln und der JavaScript-Code
in ein HTML-Dokument eingebunden werden. Dieses Einbinden kann auf zwei Weisen geschehen: direkt
eingebettet im HTML-Dokument oder durch Referenzierung separater Dateien.

### CSS und JavaScript inline im HTML einbetten

Für das direkte (_inline_) Einbinden von CSS-Regeln und JavaScript-Code im HTML-Dokument
stehen die Elemente `<style>` für CSS und `<script>` für JavaScript zur Verfügung. Ein
`style`-Element kann CSS-Regeln enthalten und wird als Kindelement des `head`-Elements
deklariert. `script`-Elementen können JavaScript-Code enthalten und können überall
im HTML-Dokument verwendet werden. Meistens werden sie jedoch als letztes Kindelement
des `body`-Elements deklariert:

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

Zu beachten ist, dass die Syntax innerhalb dieser Elemente nicht mehr HTML ist, sondern
bei `style` aus CSS und bei `script` aus JavaScript besteht.

### CSS und JavaScript aus separaten Dateien

Da CSS-Regeln und JavaScript-Code in der praktischen Anwendung sehr umfangreich werden
können, werden diese meistens in externen Dateien deklariert. In diesem Fall werden
CSS-Dateien mit Hilfe des Elements `<link>` im `head` eingebunden. Das Attribut
`rel` muss mit dem Wert `stylesheet` hinzugefügt werden und das Attribut
`href` enthält den Dateinamen oder die Webadresse des einzubindenden Stylesheets. JavaScript-Dateien werden mit Elementen der Form `<script src="...">` referenziert, die
manchmal auch im `head` stehen können aber häufig am Ende des Dokuments angegeben werden:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- hier stehen mehr Elemente im head wie meta, title, usw.  -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- hier folgt der body -->
    <script src="main.js"></script>
  </body>
</html>
```

HTML-Dokumente haben in der Regel die Dateiendung `.html`, CSS-Dateien enden mit `.css` und
JavaScript wird in Dateien mit der Endung `.js` gespeichert.

Wenn das Dokument vom Browser geladen wird, dann werden die Stylesheets auf das HTML angewendet
und der JavaScript-Code wird vom Browser interpretiert und ausgeführt.

Es gibt auf dieser Plattform spezielle Kurse zu [CSS](/css-kompakt) und [JavaScript](/js-from-java).
