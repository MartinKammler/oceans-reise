# Oceans Reise

*by Martin Kammler*

Ein Ausweichspiel für Kinder (6–9 Jahre): Die kleine Schildkröte Ocean schwimmt durchs Meer nach Hause, sammelt Leckeres ein und weicht Müll und Hindernissen aus. Nach jedem Level wird eine Baderegel angezeigt, der Reihe nach alle elf.

## Spielen

**Online spielen:** https://martinkammler.github.io/oceans-reise/

Läuft im Browser auf Tablet, Handy und PC, auch offline.

- **Steuerung:** Finger oder Maus bewegen (Ocean folgt), oder Pfeiltasten / WASD
- **Pause:** Pause-Knopf, Leertaste oder Esc

### Als App installieren

- **Android / Chrome:** Seite öffnen, im Menü „App installieren“ bzw. „Zum Startbildschirm hinzufügen“
- **iPad / iPhone (Safari):** Teilen-Knopf → „Zum Home-Bildschirm“
- **PC (Chrome/Edge):** Installieren-Symbol in der Adressleiste

Nach der Installation läuft das Spiel im Vollbild und ohne Internet.

### Updates

Die App sucht beim Öffnen und alle 30 Minuten nach einer neuen Version. Ist eine da, wird sie im Hintergrund geladen und aktiviert, sobald das Startmenü angezeigt wird. Ein laufendes Level wird nie unterbrochen. Die aktuelle Version steht unten im Startmenü.

## Spielablauf

Zehn Level à 60 Sekunden, jedes mit eigenem Hintergrund, Meeresboden und einem kurzen Hinweis zum Start:

| Level | Besonderheit | Hindernisse |
|---|---|---|
| 1. Lagune | ruhig, zum Eingewöhnen | Felsen, Seeigel |
| 2. Seegraswiese | offenes Meer mit Fischschwärmen, viel Seegras und Krabben | Seeigel, Felsen, Tüte, Kugelfisch |
| 3. Korallenriff | etwas schneller | Seeigel, Felsen, Tüte, Kugelfisch |
| 4. Strömung | Eiswelt, Wasser zieht Ocean hoch und runter | Seeigel, Tüte, Flasche, Angelhaken, Kugelfisch |
| 5. Hafen | Kaimauer und Schiffsrumpf, viel Müll | Tüte, Flasche, Dose, Netz, Reifen, Eimer, Anker |
| 6. Geisternetze | altes Schiffswrack, viele große, treibende Netze | Netze, Dose, Reifen, Anker |
| 7. Tiefsee | dunkel, viele Quallen, Schatz am Grund | Anglerfische, Seeigel, Felsen, Netz |
| 8. Müllstrudel | Steg im trüben Wasser, Müllwände mit einer Lücke | Wände aus Tüten, Flaschen, Dosen, Anker |
| 9. Wilde See | Wellen, starke Strömung | fast alles, viele Angelhaken |
| 10. Heimweg | Müllwände, am Ende fährt Oceans Zuhause mit dem Höhlenbogen ins Bild | fast alles |

**Goodies:** Seegras +1, Qualle +2, Krabbe +2, Muschel +3, Freunde: Seepferdchen, Krake und Robbe +10, Wal +15 (kommen nur 1–2 Mal pro Level vorbei, werden nicht gefressen, sondern grüßen und schwimmen weiter), Seestern +5, Schatztruhe +10, Herz (Leben zurück), Rettungsgeräte (Rettungsring, Rettungsboje, Gurtretter: 5 Sekunden Schutzschild, der Name wird beim Einsammeln angezeigt)

**Meeresmüll:** Dosen, Flaschen und Netze gibt es in vielen Varianten, dazu Becher, Strohhalme, Sixpack-Ringe, Kanister und Plastikteile. Pro Hindernis-Art wird zufällig eine Bildvariante gewählt (`VARIANTS` in `index.html`).

**Besondere Hindernisse:** Anker und Angelhaken hängen von oben ins Wasser, der Kugelfisch bläst sich auf und schrumpft, der Anglerfisch schwimmt Ocean entgegen und leuchtet in der Tiefsee.

3 Leben pro Level. Wer sie verliert, startet nur das Level neu. 1 Stern fürs Schaffen, 2 und 3 Sterne je nach Punkten. Ein Level wird freigeschaltet, sobald das vorherige geschafft ist. Fortschritt wird im Browser gespeichert (localStorage, Schlüssel `ocean-save-v2`).

„Von vorne“ im Startmenü startet die Reise wieder bei Level 1; mit „Weiter“ nach jedem Level geht es durch alle zehn. Sterne und Bestenliste bleiben erhalten.

**Bestenliste:** Jedes Level hat eine eigene Top 10. Wer nach einem geschafften Level genug Punkte hat, gibt seinen Namen ein (max. 12 Zeichen, der letzte Name wird vorgeschlagen). Die Listen sind im Startmenü und am Level-Ende über „Bestenliste“ erreichbar. Gespeichert wird nur auf dem jeweiligen Gerät (localStorage, `ocean-hs-v1` und `ocean-name`).

## Aufbau

- `index.html` – das komplette Spiel (HTML, CSS, JavaScript in einer Datei)
- `manifest.webmanifest`, `icons/` – App-Name, Icons und Darstellung für die Installation
- `sw.js` – Service Worker: Offline-Cache und automatische Updates (wird erzeugt, nicht von Hand ändern)
- `img/` – aufbereitete Spielgrafiken (zugeschnitten, verkleinert, WebP/JPG/PNG)
- `quellgrafiken/original/` – die Originalgrafiken in voller Größe
- `quellgrafiken/rig.json` – Gelenkpunkte, mit denen Ocean aus Körper, Kopf und Flossen zusammengesetzt wird
- `quellgrafiken/assets.json` – Größen der Spielgrafiken (auch in `index.html` eingebettet)
- `tools/release.py`, `tools/sw.template.js` – neue Version erstellen
- `CHANGELOG.md` – Änderungen je Version

### Neue Version veröffentlichen

```bash
python3 tools/release.py 1.1.0 "Was sich geändert hat"
git commit -am "Version 1.1.0" && git push
```

Das Skript setzt die Versionsnummer in `index.html`, erzeugt `sw.js` mit der neuen Version und der aktuellen Dateiliste und ergänzt `CHANGELOG.md`. Installierte Apps holen sich die neue Version dann automatisch. Versionsnummern nach dem Schema *Major.Minor.Patch* (z. B. 1.1.0 für neue Inhalte, 1.0.1 für Fehlerbehebungen).

### Ocean-Animation

Ocean besteht aus Einzelteilen (Körper, vier Köpfe, vordere und hintere Flosse). Die Flossen drehen sich um ihren Gelenkpunkt, der Kopf wippt leicht. Für die abgewandte Seite werden abgedunkelte Kopien der Flossen versetzt dahinter gezeichnet. Der Kopf wechselt je nach Situation: fröhlich, überrascht (Seestern/Herz), besorgt (Treffer), entschlossen (Schutzschild).

### Endlos-Hintergrund

Hintergrund und Meeresboden werden gekachelt, jede zweite Kachel gespiegelt – dadurch passen die Ränder immer zusammen. Der Hintergrund zieht langsamer vorbei als der Boden (Parallaxe).

Heimweg-Finale: Gegen Ende fährt der Zuhause-Boden mit dem Höhlenbogen (`img/zuhause.webp`) von rechts ins Bild und bleibt am rechten Rand stehen, Hintergrund und Boden halten an. Dann übernimmt das Spiel die Steuerung: Ocean schwimmt in die Bogenöffnung (`HOME` in `index.html`), wird kleiner und verschwindet, danach erscheint „Ocean ist zu Hause!“.

## Lizenz und Credits

Spiel, Idee und Grafiken: **Martin Kammler**. Veröffentlicht unter der [MIT-Lizenz](LICENSE).

Die Baderegeln-Texte stammen von Martin Kammler und werden wörtlich angezeigt.
