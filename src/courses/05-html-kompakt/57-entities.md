---
templateKey: markdown-unit
title: Sonderzeichen und Entities
---

import Quiz from "../../components/quiz"

Wenn HTML-Elemente mit spitzen Klammern deklariert werden,
wie ist es dann möglich, besondere Zeichen wie z.B. die spitzen
Klammern bzw. die Größer-/Kleiner-Zeichen in Texten darzustellen?

Für solche Fälle und für die Darstellung spezieller Zeichen gibt es in HTML die Entities. Diese bestehen
aus bestimmten Abkürzungen oder Zahlencodes, die zwischen
einem `&` und einem Semikolon `;` stehen. Ein paar Beispiele:

| Entity   | Darstellung | Bezeichnung          |
| -------- | ----------- | -------------------- |
| `&lt;`   | `<`         | _less than_          |
| `&gt;`   | `>`         | _greater than_       |
| `&nbsp;` | Leerzeichen | _non breaking space_ |
| `&amp;`  | `&`         | _ampersand_          |

Die offizielle Liste aller Entities ist hier zu finden: [https://html.spec.whatwg.org/multipage/named-characters.html](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

Entities dürfen überall dort verwendet werden, wo auch andere Textinhalte
zu finden sind &mdash; allerdings nicht in Elementnamen bzw. Tags.

<Quiz question="Deklarieren Sie ein h1-Element, sodass diese Überschrift dargestellt wird: <h1>" answer={`<h1>&lt;h1&gt;</h1>`}/>
