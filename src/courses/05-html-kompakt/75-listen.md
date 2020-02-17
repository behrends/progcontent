---
templateKey: markdown-unit
title: Listen und Aufzählungen
---

HTML hat verschiedene Elemente für Listen und Aufzählungen.
Dabei werden beide aber ziemlich ähnlich strukturiert. Es gibt
Listen bei denen die Reihenfolge keine Rolle spielt. Diese
_unordered lists_ werden mit dem Tag `<ul>` deklariert. Einzelne
Listeneinträge (_list items_) werden als `<li>`-Kindelemente
von `<ul>` angegeben. Ein Beispiel könnte eine Einkaufsliste sein,
bei der die Reihenfolge unbedeutend ist:

```html
<ul>
  <li>Butter</li>
  <li>Milch</li>
  <li>Eier</li>
  <li>Mehl</li>
</ul>
```

Die Darstellung erfolgt standardmäßig mit _bullet points_ (oft durch
CSS im Aussehen angepasst):

<ul style="font-family: serif;">
  <li>Butter</li>
  <li>Milch</li>
  <li>Eier</li>
  <li>Mehl</li>
</ul>

Bei Aufzählungen ist die Reihenfolge wichtig, daher sind dies
„geordnete Listen“ (_ordererd list_). Diese werden mit `<ol>`
definiert und haben ebenfalls `<li>`-Elemente für die einzelnen
Einträge. Bei einem Rezept sollten die Schritte wie angegeben
nacheinander ausgeführt werden:

```html
<ol>
  <li>Butter schmelzen</li>
  <li>Milch, geschmolzene Butter, Mehl und Eier vermischen</li>
  <li>Eine Kelle Teig in die heiße Pfanne geben</li>
  <li>Pfannkuchen wenden, wenn sich Blasen bilden</li>
</ol>
```

Aufzählungen mit `<ol>` werden automatisch in der Darstellung durchnummeriert:

<ol style="font-family: serif;">
  <li>Butter schmelzen</li>
  <li>Milch, geschmolzene Butter, Mehl und Eier vermischen</li>
  <li>Eine Kelle Teig in die heiße Pfanne geben</li>
  <li>Pfannkuchen wenden, wenn sich Blasen bilden</li>
</ol>

Listen und Aufzählungen lassen sich kombinieren und schachteln:

```html
<ol>
  <li>Butter schmelzen</li>
  <li>
    Alles vermischen:
    <ul>
      <li>geschmolzene Butter</li>
      <li>125ml Milch</li>
      <li>2 Eier</li>
      <li>150g Mehl</li>
    </ul>
  </li>
  <li>Eine Kelle Teig in die heiße Pfanne geben</li>
  <li>Pfannkuchen wenden, wenn sich Blasen bilden</li>
</ol>
```

<ol style="font-family: serif;">
  <li>Butter schmelzen</li>
  <li>Alles vermischen:
    <ul>
      <li>geschmolzene Butter</li>
      <li>125ml Milch</li>
      <li>2 Eier</li>
      <li>150g Mehl</li>
    </ul> 
  </li>
  <li>Eine Kelle Teig in die heiße Pfanne geben</li>
  <li>Pfannkuchen wenden, wenn sich Blasen bilden</li>
</ol>
