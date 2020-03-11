---
templateKey: markdown-unit
title: Formulare
---

Mit Formularen werden in HTML-Seiten Benutzereingaben möglich. Beispiele hierfür
sind Textfelder zur Eingabe einer Adresse oder die Auswahl aus einer vordefinierten
Liste von Ländern. Im Allgemeinen werden verschiedene Eingabefelder als Kindelemente
eines `<form>`-Elements angegeben:

```html
<form action="https://...">
  <!-- verschiedene Eingabefelder -->
  <input type="text" name="first-name" />
  <!-- usw. -- >
</form>
```

Zusammen mit seinen Kindelementen wird das `form`-Element dann als Formular
bezeichnet und kann zur Verarbeitung vom Browser an einen Server geschickt
werden. Die Webadresse des Servers wird im `action`-Attribut angegeben.

Im Allgemeinen werden diese Eingaben werden entweder direkt im Browser durch
JavaScript ausgewertet oder zur Verarbeitung an einen Server im Web verschickt.
Diese Themen werden hier nicht behandelt, sondern wir werden nur betrachten, wie einige
häufig verwendete Eingabefelder mit HTML deklariert werden können.

### Eingabefelder und Labels

Ein einzeiliges Textfeld wird so `input`-Element deklariert:

```html
<input type="text" name="first-name" />
```

Dieses Element würde so in HTML erscheinen:

<input type="text" name="first-name" />
<br/>
<br/>

Der Wert des `type`-Attributs legt die Art des Eingabfelds fest. Hier verwenden
wir `"text"` für gewöhnliche Texteingabe. Es gibt viele Varianten von Eingabefeldern,
die über das `type`-Attribut konfiguriert werden. Mit `type="password"` erhält man
ein Eingabefeld für Passwörter, bei denen die Eingabe z.B. in Form von Punkten
verborgen wird.

Die `name`-Attribute von `input`-Elementen dienen zur Verarbeitung der Eingabe
mit JavaScript oder auf einem Server.

Eingabefelder sollten beschriftet werden, damit dem Benutzer klar ist, wozu
die Eingabe dienen soll. Dies kann dadurch erreicht werden, dass das `input`-Element
mit einem `<label>`-Element und der Beschriftung umgeben wird:

```html
<label>
  Vorname:
  <input type="text" name="first-name" />
</label>
```

<label style="font-family: serif">
  Vorname:
  <input type="text" name="first-name" />
</label>
<br/>
<br/>

Das `input`-Element mit dem Attribut `type="text"` wird für die Eingabe von
einzeiligem Text verwendet. Um mehrzeiligen Text eingeben zu können, muss
ein `<textarea>`-Element eingesetzt werden, hier bereits mit umgebendem `label`-Element:

```html
<label>
  Notizen:
  <textarea name="notes"></textarea>
</label>
```

Dieses mehrzeilige Eingabefeld erscheint so im Browser:

<label>
  Notizen:
  <textarea name="notes"></textarea>
</label>
<br/>
<br/>

Auch hier dient das `name`-Attribut wieder zur Verarbeitung der Daten mit JavaScript
oder auf Serverseite.

Für die Konfiguration von Eingabefeldern gibt es zahlreiche Konfigurationsmöglichkeiten
über weitere Attribute, womit die Breite, Höhe, usw. festgelegt werden kann. Wir beschreiben
diese Möglichkeiten hier nicht, denn diese sind leicht im Web zu finden, z.B. beim
[Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

### Checkbox

Mit Checkboxen können mehrere Auswahlen aus Alternativen gewählt werden.
Dafür steht das `input`-Element mit dem Attribut `type="checkbox"` bereit.
Hier ein Beispiel für die Auswahl von Pizzabelägen (mit `label`-Elementen):

```html
<label>
  <input type="checkbox" name="pizza" value="olives" />
  Oliven
</label>
<label>
  <input type="checkbox" name="pizza" value="artichokes" />
  Artischocken
</label>
<label>
  <input type="checkbox" name="pizza" value="champignons" />
  Champignons
</label>
<label>
  <input type="checkbox" name="pizza" value="spinach" />
  Spinat
</label>
```

Hier gibt es zusätzlich zum `name`-Attribut, das bei den zusammengehörigen
Checkboxen den gleichen Wert haben sollte, das Attribut `value` für die
einzelnen Werte der Checkboxen zur Verarbeitung auf dem Server bzw. mit JavaScript.

Obiges HTML-Fragment erscheint wie folgt im Browser:

<label>      
  <input style="margin-right: 3px" type="checkbox" name="pizza" value="olives"/>
  Oliven&nbsp;&nbsp;&nbsp;
</label>
<label>      
  <input style="margin-right: 3px" type="checkbox" name="pizza" value="artichokes"/>
  Artischocken&nbsp;&nbsp;&nbsp;
</label>
<label>      
  <input style="margin-right: 3px" type="checkbox" name="pizza" value="champignons"/>
  Champignons&nbsp;&nbsp;&nbsp;
</label>
<label>      
  <input style="margin-right: 3px" type="checkbox" name="pizza" value="spinach"/>
  Spinat&nbsp;&nbsp;&nbsp;
</label>
<br/>
<br/>

Es können beliebig viele zusammengehörige Checkboxen deklariert werden.

### Radio-Buttons

Um Benutzer genau eine Sache aus mehreren Alternativen auswählen zu lassen, können
Radio-Buttons zum Einsatz kommen. Diese werden mit `<input type="radio">` deklariert.
Als Beispiel dient die Auswahl der Schärfe für eine Mahlzeit:

```html
<label>
  <input type="radio" name="chili" value="mild" />
  Mild
</label>
<label>
  <input type="radio" name="chili" value="hot" />
  Scharf
</label>
<label>
  <input type="radio" name="chili" value="very hot" />
  Sehr Scharf
</label>
```

Dazu die Darstellung im Browser:

<label>
  <input style="margin-right: 3px" type="radio" name="chili" value="mild" />
  Mild&nbsp;&nbsp;&nbsp;
</label>
<label>
  <input style="margin-right: 3px" type="radio" name="chili" value="hot" />
  Scharf&nbsp;&nbsp;&nbsp;
</label>
<label>
  <input style="margin-right: 3px" type="radio" name="chili" value="very hot" />
  Sehr Scharf&nbsp;&nbsp;&nbsp;
</label>
<br/>
<br/>

Wichtig ist, dass nur eine Option ausgewählt werden kann. Dies wird durch die
Verwendung des gleichen Wertes im `name`-Attribut gewährleistet. Es können beliebig viele
zusammengehörige Radio-Buttons deklariert werden.

### Select-Auswahllisten

Aus Auswahllisten bzw _DropDown_-Listen kann etwas aus einer längeren Listen
gewählt werden. Dazu gibt es in HTML das Element `select` mit den einzelnen
`option`-Kindelementen für die verschiedenen Optionen:

```html
<label>
  Wie schnell war die Lieferung?
  <select name="feedback">
    <option value="">Bitte wählen</option>
    <option value="veryfast">Superschnell</option>
    <option value="fast">Schnell</option>
    <option value="slow">Langsam</option>
    <option value="tooslow">Zu langsam</option>
  </select>
</label>
```

Dieses Beispiel erscheint im Browser so:

<label>
  Wie schnell war die Lieferung?
  <select name="feedback">
    <option value="">Bitte wählen</option>
    <option value="veryfast">Superschnell</option>
    <option value="fast">Schnell</option>
    <option value="slow">Langsam</option>
    <option value="tooslow">Zu langsam</option>
  </select>
</label>

### Buttons Für die Bestätigung der Eingabe und die

Verarbeitung des Formulars auf dem Server oder durch JavaScript kommen
Buttons zum Einsatz. Es gibt zwei Möglichkeiten. Als `input`-Element
mit `type="submit"`:

```html
<input type="submit" value="Abschicken" />
```

Die Beschriftung des Buttons wird im Attribut `value` deklariert. Dies ergibt
folgende Darstellung:

<input type="submit" value="Abschicken"/>
<br/>
<br/>

Oder als `button`-Element mit der Beschriftung als Textinhalt des Elements:

```html
<button>Fertig</button>
```

<button>Fertig</button>
<br/>
<br/>

Es gibt noch zahlreiche weitere Möglichkeiten, Benutzereingaben im Browser mit
HTML-Formularen zu ermitteln, siehe die Referenz zu [Formularelementen bei MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms).

```

```
