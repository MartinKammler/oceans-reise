# Oceans Reise

> **Programmiert von Martin Kammler, Mitglied der DLRG.**
>
> Privat entstanden und der DLRG **kostenlos** zur Verfügung gestellt – zur freien
> Verwendung in der **DLRG-Jugendarbeit und in der Ausbildung**, in allen Gliederungen,
> ohne Lizenzgebühren.
>
> Programmcode, Idee und Grafiken stammen von Martin Kammler und stehen unter der
> [MIT-Lizenz](LICENSE). Die angezeigten **Baderegeln sind die Originaltexte der DLRG**
> (© DLRG) und von der MIT-Lizenz ausgenommen. Das Spiel ist ein privates Projekt
> und kein offizielles Angebot der DLRG.

Ein Ausweichspiel für Kinder (6–9 Jahre): Die kleine Schildkröte Ocean schwimmt durchs Meer nach Hause, sammelt Leckeres ein und weicht Müll und Hindernissen aus. Nach jedem Level wird eine Baderegel angezeigt, der Reihe nach alle elf.

## Spielen

**Online spielen:** https://martinkammler.github.io/oceans-reise/

Läuft im Browser auf Tablet, Handy und PC, auch offline.

### Bedienung

- **Touch:** Finger auf den Bildschirm legen und ziehen, Ocean folgt. Sie schwimmt dabei etwas rechts oberhalb des Fingers, damit der Finger sie nicht verdeckt.
- **Maus:** Ocean folgt dem Mauszeiger, Klicken ist nicht nötig.
- **Tastatur:** Pfeiltasten oder W/A/S/D.
- Ocean bleibt immer im linken Teil des Bildschirms (etwa 70 % der Breite), damit genug Zeit zum Ausweichen bleibt.
- **Pause:** Pause-Knopf oben rechts, Leertaste, Esc oder P. Im Pausenmenü: „Weiter“ oder „Zum Menü“.
- **Ton:** Knopf oben rechts schaltet den Ton an und aus.

Oben im Bild stehen Punkte, Leben (Herzen), der Levelname und ein Balken, der den Fortschritt im Level zeigt.

### Startmenü

| Knopf | Was passiert |
|---|---|
| Spielen | Startet das erste noch nicht geschaffte Level |
| Von vorne | Startet bei Level 1 (Sterne und Bestenliste bleiben erhalten) |
| Level | Levelauswahl mit Sternen; noch gesperrte Level sind ausgegraut |
| Baderegeln | Alle elf Baderegeln zum Nachlesen |
| Bestenliste | Top 10 je Level, mit Pfeilen zwischen den Leveln blättern |

Am Level-Ende gibt es „Weiter“ (nächstes Level), „Nochmal“ und „Bestenliste“. Wer alle Leben verliert, sieht eine Baderegel und kann mit „Nochmal“ das Level neu starten oder „Zum Menü“ wählen.

### Als App installieren

- **Android / Chrome:** Seite öffnen, im Menü „App installieren“ bzw. „Zum Startbildschirm hinzufügen“
- **iPad / iPhone (Safari):** Teilen-Knopf → „Zum Home-Bildschirm“
- **PC (Chrome/Edge):** Installieren-Symbol in der Adressleiste

Nach der Installation läuft das Spiel im Vollbild und ohne Internet.

### Updates

Die App sucht beim Öffnen und alle 30 Minuten nach einer neuen Version. Ist eine da, wird sie im Hintergrund geladen und aktiviert, sobald das Startmenü angezeigt wird. Ein laufendes Level wird nie unterbrochen. Die aktuelle Version steht unten im Startmenü.

## Spielablauf

Zehn Level à etwa 60 Sekunden. Jedes Level beginnt mit einem kurzen Hinweis; gegen Ende kommen die Hindernisse etwas dichter.

| Level | Hintergrund | Besonderheit | Hindernisse |
|---|---|---|---|
| 1. Lagune | heller Felsbogen | ruhig, zum Eingewöhnen | Felsen, Seeigel |
| 2. Seegraswiese | offenes Meer mit Fischschwärmen | viel Seegras und Krabben | Seeigel, Felsen, Tüte, Kugelfisch, Strohhalm |
| 3. Korallenriff | Riff | etwas schneller | Seeigel, Felsen, Tüte, Kugelfisch, Becher, Strohhalm |
| 4. Strömung | Eiswelt | Strömung zieht Ocean hoch und runter | Seeigel, Tüte, Flasche, Angelhaken, Kugelfisch, Strohhalm, Sixpack-Ringe |
| 5. Hafen | Kaimauer und Schiffsrumpf | viel Müll | Tüte, Flasche, Dose, Netz, Reifen, Eimer, Anker, Kanister, Plastikteile, Becher, Sixpack-Ringe |
| 6. Geisternetze | altes Schiffswrack | viele große, treibende Netze | Netze, Dose, Reifen, Anker, Sixpack-Ringe, Kanister |
| 7. Tiefsee | dunkle Tiefsee | Ocean sieht nur ihre Umgebung; viele Quallen, öfter Schatztruhen | Anglerfische, Seeigel, Felsen, Netz, Kanister |
| 8. Müllstrudel | Steg im trüben Wasser | alle paar Sekunden eine Müllwand mit einer Lücke | Müllwände (Tüten, Flaschen, Dosen, Becher, Kanister), dazu Reifen, Eimer, Anker, Plastikteile, Sixpack-Ringe |
| 9. Wilde See | Wellen an der Oberfläche | schnell, starke Strömung | fast alles, viele Angelhaken |
| 10. Heimweg | heller Felsbogen | ab und zu Müllwände; am Ende kommt Oceans Zuhause ins Bild | fast alles |

**Zum Einsammeln:** Seegras +1, Qualle +2, Krabbe +2, Muschel +3, Seestern +5, Schatztruhe +10. Ein Herz gibt ein verlorenes Leben zurück (erscheint nur, wenn eins fehlt). Rettungsgeräte (Rettungsring, Rettungsboje, Gurtretter) geben 5 Sekunden Schutzschild; der Name des Geräts wird beim Einsammeln angezeigt.

**Freunde:** Seepferdchen, Krake und Robbe (+10) sowie der Wal (+15) kommen nur 1–2 Mal pro Level vorbei. Sie werden nicht gefressen, sondern grüßen Ocean und schwimmen weiter.

**Meeresmüll:** Dosen, Flaschen und Netze gibt es in vielen Varianten, dazu Becher, Strohhalme, Sixpack-Ringe, Kanister und Plastikteile. Pro Hindernis-Art wird zufällig eine Bildvariante gewählt (`VARIANTS` in `index.html`).

**Besondere Hindernisse:** Anker und Angelhaken hängen von oben ins Wasser, der Kugelfisch bläst sich auf und schrumpft, der Anglerfisch schwimmt Ocean entgegen und leuchtet in der Tiefsee.

3 Leben pro Level. Nach einem Treffer blinkt Ocean kurz und kann in der Zeit nicht erneut getroffen werden. Wer alle Leben verliert, startet nur das Level neu. 1 Stern fürs Schaffen, 2 und 3 Sterne je nach Punkten. Ein Level wird freigeschaltet, sobald das vorherige geschafft ist. Fortschritt wird im Browser gespeichert (localStorage, Schlüssel `ocean-save-v2`).

**Bestenliste:** Jedes Level hat eine eigene Top 10. Wer nach einem geschafften Level genug Punkte hat, gibt seinen Namen ein (max. 12 Zeichen, der letzte Name wird vorgeschlagen; ohne Eingabe „Ocean-Fan“). Die Listen sind im Startmenü und am Level-Ende über „Bestenliste“ erreichbar. Gespeichert wird nur auf dem jeweiligen Gerät (localStorage, `ocean-hs-v1` und `ocean-name`).

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

Hintergrund und Meeresboden werden gekachelt (die Hintergründe im Format 3:1), jede zweite Kachel gespiegelt – dadurch passen die Ränder immer zusammen. Der Hintergrund zieht langsamer vorbei als der Boden (Parallaxe).

Heimweg-Finale: Gegen Ende fährt der Zuhause-Boden mit dem Höhlenbogen (`img/zuhause.webp`) von rechts ins Bild und bleibt am rechten Rand stehen, Hintergrund und Boden halten an. Dann übernimmt das Spiel die Steuerung: Ocean schwimmt in die Bogenöffnung (`HOME` in `index.html`), wird kleiner und verschwindet, danach erscheint „Ocean ist zu Hause!“.

## Lizenz und Credits

Spiel, Idee, Programmierung und Grafiken: **Martin Kammler**, Mitglied der DLRG.
Veröffentlicht unter der [MIT-Lizenz](LICENSE) und ausdrücklich zur **kostenlosen
Verwendung in der DLRG-Jugendarbeit und Ausbildung** freigegeben.

Die **Baderegeln** sind die offiziellen Originaltexte der DLRG (© DLRG) und werden
wörtlich angezeigt. Sie stehen **nicht** unter der MIT-Lizenz; die Rechte daran liegen
bei der DLRG.
