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
| 2. Seegraswiese | besonders viel Seegras | Seeigel, Felsen, Tüte |
| 3. Korallenriff | etwas schneller | Seeigel, Felsen, Tüte |
| 4. Strömung | Wasser zieht Ocean hoch und runter | Seeigel, Tüte, Flasche |
| 5. Hafen | viel Müll | Tüte, Flasche, Dose, Netz, Reifen, Eimer |
| 6. Geisternetze | viele große, treibende Netze | Netze, Dose, Reifen |
| 7. Tiefsee | dunkel, Ocean sieht nur ihre Umgebung | Seeigel, Felsen, Netz, Flasche |
| 8. Müllstrudel | Müllwände mit einer Lücke | Wände aus Tüten, Flaschen, Dosen |
| 9. Wilde See | schnell und starke Strömung | fast alles |
| 10. Heimweg | Müllwände, am Ende kommt der Strand | fast alles |

**Goodies:** Seegras +1, Muschel +3, Seestern +5, Herz (Leben zurück), Rettungsring (5 Sekunden Schutzschild)

3 Leben pro Level. Wer sie verliert, startet nur das Level neu. 1 Stern fürs Schaffen, 2 und 3 Sterne je nach Punkten. Ein Level wird freigeschaltet, sobald das vorherige geschafft ist. Fortschritt wird im Browser gespeichert (localStorage, Schlüssel `ocean-save-v2`).

## Aufbau

- `index.html` – das komplette Spiel (HTML, CSS, JavaScript in einer Datei)
- `img/` – aufbereitete Spielgrafiken (zugeschnitten, verkleinert, WebP/JPG)
- `quellgrafiken/original/` – die Originalgrafiken in voller Größe
- `quellgrafiken/rig.json` – Gelenkpunkte, mit denen Ocean aus Körper, Kopf und Flossen zusammengesetzt wird
- `quellgrafiken/assets.json` – Größen der Spielgrafiken (auch in `index.html` eingebettet)

### Ocean-Animation

Ocean besteht aus Einzelteilen (Körper, vier Köpfe, vordere und hintere Flosse). Die Flossen drehen sich um ihren Gelenkpunkt, der Kopf wippt leicht. Für die abgewandte Seite werden abgedunkelte Kopien der Flossen versetzt dahinter gezeichnet. Der Kopf wechselt je nach Situation: fröhlich, überrascht (Seestern/Herz), besorgt (Treffer), entschlossen (Schutzschild).

### Endlos-Hintergrund

Hintergrund und Meeresboden werden gekachelt, jede zweite Kachel gespiegelt – dadurch passen die Ränder immer zusammen. Der Hintergrund zieht langsamer vorbei als der Boden (Parallaxe).

## Hinweise

- Der Schriftzug auf dem Panzerring wurde für die generische Version aus den Grafiken entfernt. Die Originale mit Schriftzug liegen in `quellgrafiken/original/ocean/`.
- Die Baderegeln-Texte stammen von Martin und werden wörtlich angezeigt.
