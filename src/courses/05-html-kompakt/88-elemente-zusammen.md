---
templateKey: markdown-unit
title: Elemente im Zusammenspiel
---

HTML-Elemente werden häufig miteinander kombiniert. So können z.B.
Listeneinträge nicht bloß aus Text sondern aus weiteren Listen
bestehen und Bilder oder Links enthalten:

<ul style="font-family: serif; padding: 0px 20px">
  <li>
    Mozilla Developer Network
    <ul>
       <li>Umfangreiche Dokumentation</li>
       <li>Tutorials</li>       
    </ul>
    &rarr; <a href="https://developer.mozilla.org">developer.mozilla.org</a>
  </li>
  <li>
    freeCodeCamp
    <ul>
       <li>Verschiedene Programmierthemen online erlernen</li>
       <li>Interaktive Tutorials im Browser</li>       
    </ul>
    &rarr; <a href="https://freecodecamp.org">freecodecamp.org</a>
  </li>
  <li>
    StackOverFlow
    <ul>
       <li>Fragen und Antworten zu vielen IT-Themen</li>
       <li>hier werden oft Lösungen für Probleme gefunden</li>
       <li>daher sehr beliebt bei Programmieren</li>       
    </ul>
    &rarr; <a href="https://stackoverflow.com">stackoverflow.com</a>
  </li>
</ul>

Eine gute Übung ist, die obige Liste in HTML nachzubauen
(die Links müssen dabei nicht farblich angepasst werden).
Dies kann in einer Datei auf dem eigenen Computer erfolgen
oder direkt im Browser bei [codepen.io](https://codepen.io)
umgesetzt werden.

Tipp: der Pfeil nach rechts vor den Webadressen ist eine Entity
mit dem Namen _right arrow_.

Eine erweitere Übung wäre, die List noch mit Bildern
zu ergänzen (z.B. die Logos der aufgelisteten Webseiten).
