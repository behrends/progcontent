---
templateKey: markdown-unit
title: Aufbau von Regeln
---

Regeln bzw. Deklarationsblöcke bestehen aus

### Selektoren (selectors)

Welche Elemente sollen einen Style erhalten?

### Eigenschaften (properties)

Was soll in der Darstellung geändert werden?

### Werte (values)

Wie ist die Änderung für die Eigenschaft?

```css
selector {
  just_a_property: some_value;
  another_property: some_other_value;
  /* usw. … */
}
```

<!-- prettier-ignore-start -->
```css
h1 {
  color: red;                 /* <-- Deklaration */
  text-decoration: underline; /* <-- Deklaration */
}
```
<!-- prettier-ignore-end -->

![CSS Regel](../../images/css/regel.png)

### Kommentare in CSS

```css
/* einzeiliger Kommentar */
/* oder über
  mehrere
  Zeilen
  hinweg
*/
```
