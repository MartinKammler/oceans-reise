#!/usr/bin/env python3
"""Version setzen und Service Worker neu erzeugen.

Aufruf (im Projektordner):
    python3 tools/release.py 1.1.0 "Kurze Beschreibung der Änderung"

Das Skript
  - setzt APP_VERSION in index.html,
  - erzeugt sw.js mit der neuen Version und der aktuellen Dateiliste,
  - trägt die Version oben in CHANGELOG.md ein.

Weil sich sw.js dabei ändert, erkennen installierte Apps die neue Version
beim nächsten Start (oder spätestens nach 30 Minuten) und aktualisieren sich
automatisch, sobald das Startmenü angezeigt wird.
"""
import datetime
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PRECACHE_DIRS = ["img", "icons"]
PRECACHE_FILES = ["./", "index.html", "manifest.webmanifest"]


def main():
    if len(sys.argv) < 2 or not re.fullmatch(r"\d+\.\d+\.\d+", sys.argv[1]):
        sys.exit('Aufruf: python3 tools/release.py 1.2.3 "Beschreibung"')
    version, note = sys.argv[1], (sys.argv[2] if len(sys.argv) > 2 else "")

    index = ROOT / "index.html"
    html = index.read_text(encoding="utf-8")
    html, n = re.subn(r"const APP_VERSION = '[^']*';", f"const APP_VERSION = '{version}';", html)
    if n != 1:
        sys.exit("APP_VERSION in index.html nicht gefunden")
    index.write_text(html, encoding="utf-8")

    files = list(PRECACHE_FILES)
    for d in PRECACHE_DIRS:
        files += sorted(f"{d}/{p.name}" for p in (ROOT / d).iterdir() if p.is_file())
    template = (ROOT / "tools" / "sw.template.js").read_text(encoding="utf-8")
    sw = template.replace("__VERSION__", version).replace(
        "__FILES__", ",\n  ".join(f"'{f}'" for f in files))
    (ROOT / "sw.js").write_text(sw, encoding="utf-8")

    log = ROOT / "CHANGELOG.md"
    text = log.read_text(encoding="utf-8") if log.exists() else "# Änderungen\n"
    entry = f"\n## {version} ({datetime.date.today().isoformat()})\n\n- {note or 'Aktualisierung'}\n"
    head, _, rest = text.partition("\n")
    log.write_text(head + "\n" + entry + rest, encoding="utf-8")

    print(f"Version {version}: index.html, sw.js ({len(files)} Dateien) und CHANGELOG.md aktualisiert.")


if __name__ == "__main__":
    main()
