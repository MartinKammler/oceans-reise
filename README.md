# Ocean im Meer

Ein Ausweichspiel für Kinder (6–9 Jahre): Die kleine Schildkröte Ocean schwimmt durchs Meer nach Hause, sammelt Leckeres ein und weicht Müll und Hindernissen aus. Zwischen den Leveln gibt es abwechselnd eine Baderegel und einen Fakt zum Meeresschutz.

## Spielen

`index.html` im Browser öffnen. Läuft ohne Installation auf Tablet, Handy und PC.

- **Steuerung:** Finger oder Maus bewegen (Ocean folgt), oder Pfeiltasten / WASD
- **Pause:** Pause-Knopf, Leertaste oder Esc

## Spielablauf

Zehn Level à 60 Sekunden, jedes mit eigenem Hintergrund, Meeresboden und einem kurzen Hinweis zum Start:

| Level | Besonderheit | Hindernisse |
|---|---|---|
| 1. Lagune | ruhig, zum Eingewöhnen | Felsen, Seeigel |
| 2. Seegraswiese | viel Seegras und Krabben | Seeigel, Felsen, Tüte, Kugelfisch |
| 3. Korallenriff | etwas schneller | Seeigel, Felsen, Tüte, Kugelfisch |
| 4. Strömung | Wasser zieht Ocean hoch und runter | Seeigel, Tüte, Flasche, Angelhaken, Kugelfisch |
| 5. Hafen | Kaimauer und Schiffsrumpf, viel Müll | Tüte, Flasche, Dose, Netz, Reifen, Eimer, Anker |
| 6. Geisternetze | viele große, treibende Netze | Netze, Dose, Reifen, Anker |
| 7. Tiefsee | dunkel, viele Quallen, Schatz am Grund | Anglerfische, Seeigel, Felsen, Netz |
| 8. Müllstrudel | Müllwände mit einer Lücke | Wände aus Tüten, Flaschen, Dosen, Anker |
| 9. Wilde See | Wellen, starke Strömung | fast alles, viele Angelhaken |
| 10. Heimweg | Müllwände, am Ende kommt der Strand | fast alles |

**Goodies:** Seegras +1, Qualle +2, Krabbe +2, Muschel +3, Seepferdchen +4 (sagt Hallo und schwimmt weiter), Seestern +5, Schatztruhe +10, Herz (Leben zurück), Rettungsgeräte (Rettungsring, Rettungsboje, Gurtretter: 5 Sekunden Schutzschild, der Name wird beim Einsammeln angezeigt)

**Meeresmüll:** Dosen, Flaschen und Netze gibt es in vielen Varianten, dazu Becher, Strohhalme, Sixpack-Ringe, Kanister und Plastikteile. Pro Hindernis-Art wird zufällig eine Bildvariante gewählt (`VARIANTS` in `index.html`).

**Besondere Hindernisse:** Anker und Angelhaken hängen von oben ins Wasser, der Kugelfisch bläst sich auf und schrumpft, der Anglerfisch schwimmt Ocean entgegen und leuchtet in der Tiefsee.

3 Leben pro Level. Wer sie verliert, startet nur das Level neu. 1 Stern fürs Schaffen, 2 und 3 Sterne je nach Punkten. Ein Level wird freigeschaltet, sobald das vorherige geschafft ist. Fortschritt wird im Browser gespeichert (localStorage, Schlüssel `ocean-save-v2`).

**Bestenliste:** Jedes Level hat eine eigene Top 10. Wer nach einem geschafften Level genug Punkte hat, gibt seinen Namen ein (max. 12 Zeichen, der letzte Name wird vorgeschlagen). Die Listen sind im Startmenü und am Level-Ende über „Bestenliste“ erreichbar. Gespeichert wird nur auf dem jeweiligen Gerät (localStorage, `ocean-hs-v1` und `ocean-name`).

## Aufbau

- `index.html` – das komplette Spiel (HTML, CSS, JavaScript in einer Datei)
- `img/` – aufbereitete Spielgrafiken (zugeschnitten, verkleinert, WebP/JPG)
- `quellgrafiken/original/` – die Originalgrafiken in voller Größe
- `quellgrafiken/rig.json` – Gelenkpunkte, mit denen Ocean aus Körper, Kopf und Flossen zusammengesetzt wird
- `quellgrafiken/assets.json` – Größen der Spielgrafiken und Kachelhöhe von Ankerkette und Angelschnur (auch in `index.html` eingebettet)

### Ocean-Animation

Ocean besteht aus Einzelteilen (Körper, vier Köpfe, vordere und hintere Flosse). Die Flossen drehen sich um ihren Gelenkpunkt, der Kopf wippt leicht. Für die abgewandte Seite werden abgedunkelte Kopien der Flossen versetzt dahinter gezeichnet. Der Kopf wechselt je nach Situation: fröhlich, überrascht (Seestern/Herz), besorgt (Treffer), entschlossen (Schutzschild).

### Endlos-Hintergrund

Hintergrund und Meeresboden werden gekachelt, jede zweite Kachel gespiegelt – dadurch passen die Ränder immer zusammen. Der Hintergrund zieht langsamer vorbei als der Boden (Parallaxe).

## Hinweise

- Der Schriftzug auf dem Panzerring wurde für die generische Version aus den Grafiken entfernt. Die Originale mit Schriftzug liegen in `quellgrafiken/original/ocean/`.
- Die Baderegeln-Texte stammen von Martin und werden wörtlich angezeigt.
