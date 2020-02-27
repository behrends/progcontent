---
templateKey: markdown-unit
title: Einleitung
---

CSS steht für „_Cascading Style Sheets_“ und wird verwendet, um die Gestaltung und
Darstellung von HTML-Dokumenten zu beeinflussen. Mit CSS ist es möglich, HTML-Dokumente
in mehreren Varianten darzustellen, z.B. könnte ein HTML-Dokument im Browser anders erscheinen
als wenn es auf Papier ausgedruckt wird. Diese verschiedenen Darstellungen
werden durch unterschiedliche _Style Sheets_ erreicht, welche mit der Sprache CSS definiert
werden. Der Begriff „_Cascading_“ (kaskadierend) bezieht sich auf die Eigenschaft von CSS, dass
bestimmte CSS-Regeln Vorrang gegenüber anderen haben können. CSS ist also ebenso wie HTML keine
Programmiersprache, aber auch keine _Markup Language_ wie HTML, sondern eine Sprache zur
Definition von sogenannten „_Style Sheets_“.

Die erste offizielle Version von CSS ist 1996 veröffentlicht worden und wird seither beständig vom
_[World Wide Web Consortium (W3C)](https://w3.org)_ weiterentwickelt. Im Vergleich zu HTML ist
CSS bereits deutlich umfangreicher und komplexer. Das Grundprinzip von CSS ist zunächst relativ
einfach, denn mit CSS werden lediglich einzelne Regeln deklariert, die dann auf das betroffene
HTML-Dokument angewendet werden.

Betrachten wir z.B. folgende CSS-Regel:

```css
h1 {
  color: red;
  text-decoration: underline;
}
```

Wird diese Regel auf ein HTML-Dokument angewendet, dann bewirkt diese, dass Hauptüberschriften
(bzw. `h1`-Elemente) eine rote Schriftfarbe erhalten und unterstrichen dargestellt werden:

<h1 style="font-family: serif; color: red; text-decoration: underline;">Eine Überschrift</h1>

Grundlegend haben alle CSS-Regeln diesen Aufbau. Neben solchen einfach erscheinenden
gestalterischen Aufgaben, kann mit CSS jedoch auch das Layout und die Anordnung von
HTML-Dokumenten beeinflusst werden. Es ist sogar möglich, komplexe Animationen und
3D-Transformationen mit CSS zu erreichen. Außerdem gibt es einige wichtige Konzepte
wie das sogenannte _box model_, die für das Verständnis von CSS erlernt werden müssen.

In diesem Kurs werden die wesentlichen Grundlagen für CSS besprochen, damit der Einstieg in
dieses unerlässliche Thema der Webentwicklung gelingt.
