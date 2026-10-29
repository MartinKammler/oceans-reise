# Ocean im Meer

Ein Ausweichspiel für Kinder (6–9 Jahre): Die kleine Schildkröte Ocean schwimmt durchs Meer nach Hause, sammelt Leckeres ein und weicht Müll und Hindernissen aus. Zwischen den Leveln gibt es abwechselnd eine Baderegel und einen Fakt zum Meeresschutz.

## Spielen

`index.html` im Browser öffnen. Läuft ohne Installation auf Tablet, Handy und PC.

- **Steuerung:** Finger oder Maus bewegen (Ocean folgt), oder Pfeiltasten / WASD
- **Pause:** Pause-Knopf, Leertaste oder Esc

## Spielablauf

Vier Level à 60 Sekunden, jedes mit eigenem Hintergrund und Meeresboden:

| Level | Hindernisse | Besonderheit |
|---|---|---|
| 1. Lagune | Felsen, Seeigel | ruhig, zum Eingewöhnen |
| 2. Korallenriff | Seeigel, Felsen, Plastiktüte | etwas schneller |
| 3. Hafen | Tüte, Flasche, Dose, Netz, Reifen, Eimer | viel Müll |
| 4. Heimweg | fast alles gemischt | am Ende kommt der Strand ins Bild |

**Goodies:** Seegras +1, Muschel +3, Seestern +5, Herz (Leben zurück), Rettungsring (5 Sekunden Schutzschild)

3 Leben pro Level. Wer sie verliert, startet nur das Level neu. 1 Stern fürs Schaffen, 2 und 3 Sterne je nach Punkten. Fortschritt wird im Browser gespeichert (localStorage).

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
