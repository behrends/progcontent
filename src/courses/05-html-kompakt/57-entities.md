---
templateKey: markdown-unit
title: Sonderzeichen und Entities
---

Wenn HTML-Elemente mit spitzen Klammern deklariert werden,
wie ist es dann möglich, besondere Zeichen wie z.B. die spitzen
Klammern bzw. die Größer-/Kleiner-Zeichen in Texten darzustellen?

Für solche Fälle gibt es in HTML die Entities. Diese bestehen
aus bestimmten Abkürzungen oder Zahlencodes, die zwischen
einem `&` und einem Semikolon `;` stehen. Ein paar Beispiele:

| Entity   | Darstellung | Bezeichnung          |
| -------- | ----------- | -------------------- |
| `&lt;`   | `<`         | _less than_          |
| `&gt;`   | `>`         | _greater than_       |
| `&nbsp;` | Leerzeichen | _non breaking space_ |
| `&amp;`  | `&`         | _ampersand_          |

Die offizielle Liste aller Entities ist hier zu finden: [https://html.spec.whatwg.org/multipage/named-characters.html](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
