# Unterschiede zwischen JavaScript und Java

_Java is to JavaScript like Car is to Carpet._

Java und JavaScript haben zwar einige Gemeinsamkeiten, aber
auch wesentliche Unterschiede:

| Java                                                                                                        | JavaScript                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statisch typisiert                                                                                          | dynamisch typisiert                                                                                                                                    |
| Anweisungsende ist `;`                                                                                      | Anweisungsende ist `;` oder Zeilenende                                                                                                                 |
| Programmcode benötigt mindestens eine Klasse und eine Methode (`main`).                                     | Jeder JavaScript-Ausdruck ist ein lauffähiges Programm (z.B. `1+2`).                                                                                   |
| Methoden haben festen Parameter und können einen Rückgabewert haben (oder keinen mit `void`)                | Funktionen sind Objekte, die flexible Parameteranzahlen und immer einen Rückgabewert haben. Funktionen können als Teil von Klassen auch Methoden sein. |
| Objekte sind Instanzen von Klassen.                                                                         | `object` ist ein eigener Datentyp für JavaScript-Objekte (_key/value_-Paare ähnlich wie `HashMap` in Java).                                            |
| `this` bezieht sich auf die Objektinstanz.                                                                  | `this` bezieht sich auf den Kontext, in dem eine Funktion aufgerufen wird.                                                                             |
| Konstruktoren in Klassen sind für die Objekterzeugung zuständig.                                            | Einerseits gibt es in Klassen Konstruktor-Methoden. Andererseits lassen sich Funktionen wie Konstruktoren verwenden (siehe Prototypen in JavaScript).  |
| Java-Quellcode wird kompiliert in Bytecode, der dann von der JVM ausgeführt wird.                           | JavaScript-Quellcode wird als Skriptsprache direkt Anweisung für Anweisung interpretiert.                                                              |
| Vererbung mit Klassen und Interfaces                                                                        | Vererbung basiert ursprünglich auf Prototypen, Klassenhierarchien erst seit ECMAScript 2015.                                                           |
| Java wird durch den von Oracle dominierten _Java Community Process (JCP)_ spezifiziert                      | JavaScript wird als ECMAScript von Vertretern verschiedener Unternehmen standardisiert.                                                                |
| Der Entwurf von Java dauerte mehrere Jahre. Veröffentlichung Anfang 1996 mit vorausgehenden Beta-Versionen. | JavaScript wurde in 2-3 Wochen konzipiert und implementiert. Veröffentlichung Ende 1995.                                                               |

**Bemerkung**: Mit TypeScript erhält JavaScript eine statische Typisierung.
