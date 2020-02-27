---
templateKey: markdown-unit
title: Selektoren
---

Element(typ)

IDs

Klassen

Position im Dokument

Pseudo-Klassen

usw.?

### HTML-Elemente bzw. Tags

```css
body {
  /* selektiert das body-Element */
}

p {
  /* selektiert alle Paragraphen */
}
```

### IDs eines HTML-Elements

IDs sollten im ganzen Dokument eindeutig sein. Es wird das Element mit dem `id`-Attribut
selektiert, das den Attributwert `logout` hat.

Der Selektor beginnt bei IDs mit `#`

```html
<a id="logout" href="actions/logout">Logout</a>
```

```css
#logout {
  color: blue;
}
```

### HTML-Elemente mit class-Attribut

Angenommen es gibt nehrere Elemente im HTML-Dokument, die ähnlich
gestaltet werden sollten, z.B. Links einer Navigationsstruktur zu
verschiedenen Bereichen der Webseite/Webanwendung:

```html
<a class="navigation_item" href="/home">Home</a>
<a class="navigation_item" href="/blog">Blog</a>
<a class="navigation_item" href="/imprint">Impressum</a>
```

Es werden alle Elemente mit dem class-Attribut "nav" selektiert. Der Selektor beginnt
bei Klassen mit einem Punkt.

```css
.nav {
  color: orange;
  font-weight: bold;
}
```

### Weitere Selektoren:

- Position in der Hierarchie: `elem1 elem2`
- Direkte Kindelemente: `parent>child`
- Kombination: `#idval elem`, `elem.classval`, `#idval elem1 elem2.classval`, etc.

### Pseudoklassen (eigene Seite? weglassen?)

`a:link`, `a:hover`, `a:visited`, usw.
