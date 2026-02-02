# FliesenKny Website - Redesign Brief für Antigravity/Gemini

## Ausgangslage

Die aktuelle Website sieht "gut" aus, aber es fehlt **Charakter und Individualität**. Sie wirkt zu generisch, zu "KI-generiert", zu austauschbar. Das Ziel ist eine Website, die man sofort mit Fliesen Kny verbindet - einzigartig, authentisch, hochwertig.

---

## Deine Aufgaben

### 1. Logo - Exakte 1:1 SVG-Replika erstellen

**WICHTIG:** Schau dir das Original-Logo an:
- **Datei:** `LOGOSCREENSHOT.png` (im Root-Verzeichnis)

Das Logo besteht aus:
- **Marokkanisches Quatrefoil-Symbol** (4-Punkt Fliesen-Muster) in Rot
- **Innere weiße Raute** mit einem **V-förmigen Element**
- **Text:** "Fliesen" (grau) + "Kny" (rot)
- **Tagline:** "Der Geheimtipp für Fliesen & Sanitär im Rhein-Main"

**Aufgabe:**
1. Analysiere `LOGOSCREENSHOT.png` pixelgenau
2. Erstelle eine **exakte SVG-Kopie** - keine Interpretation, sondern 1:1
3. Implementiere das Logo in `src/components/Logo.tsx`
4. Aktualisiere `public/logo.svg`

---

### 2. Design mit Charakter - Nicht generisch!

Die Website braucht eine **eigene Persönlichkeit**. Aktuell wirkt sie wie jede andere Premium-Website.

**Was fehlt:**
- Wiedererkennungswert
- Emotionale Verbindung
- Das "Handwerkliche" eines Familienbetriebs
- Das Besondere des marokkanischen Logo-Motivs

**Mögliche Ansätze (denke selbst nach!):**
- Das Quatrefoil-Muster subtil als wiederkehrendes Design-Element?
- Warme, einladende Atmosphäre statt kalter Perfektion?
- Handwerkliche Details (Texturen, organische Formen)?
- Typografie mit Persönlichkeit?
- Farbakzente die zur Fliesen-Branche passen?

**Frage dich:**
- Was macht einen Familienbetrieb mit 40+ Jahren Erfahrung besonders?
- Wie fühlt sich ein Besuch in einem Premium-Fliesen-Showroom an?
- Was unterscheidet Fliesen Kny von Baumarkt-Websites?

---

### 3. Fehler finden & optimieren

Gehe durch **alle Dateien** und finde:

**Code-Qualität:**
- TypeScript-Fehler oder Warnungen
- Unused Imports
- Inkonsistente Naming-Conventions
- Performance-Probleme (unnötige Re-Renders, große Bundle-Size)

**Design-Konsistenz:**
- Inkonsistente Abstände/Spacing
- Farben die nicht zusammenpassen
- Typografie-Hierarchie-Probleme
- Responsive-Breakpoint-Issues

**UX-Probleme:**
- Navigation verwirrend?
- CTAs nicht klar genug?
- Wichtige Infos versteckt?
- Mobile-Experience suboptimal?

**Inhaltliche Fehler:**
- Platzhalter-Texte
- Falsche Informationen
- Fehlende Seiten/Links

---

### 4. Alles neu durchdenken

Stelle dir diese Fragen:

1. **Ist die Seitenstruktur optimal?**
   - Brauchen wir wirklich separate Seiten für Fliesen/Sanitär/Naturstein?
   - Oder wäre eine kombinierte "Sortiment"-Seite besser?

2. **Ist der Hero-Bereich wirkungsvoll?**
   - Kommuniziert er sofort, worum es geht?
   - Lädt er zum Verweilen ein?

3. **Sind die CTAs richtig platziert?**
   - "Termin vereinbaren" vs "Ausstellung besuchen"
   - Was ist das primäre Ziel?

4. **Funktioniert die Mobile-Experience?**
   - Teste alle Seiten auf Mobile
   - Ist die Navigation intuitiv?

5. **Lädt die Seite schnell genug?**
   - Bilder optimiert?
   - Code-Splitting sinnvoll?

---

## Technischer Kontext

### Tech-Stack
- **React 18** + **TypeScript**
- **Vite 5** (Build-Tool)
- **Tailwind CSS 3** (Styling)
- **Framer Motion** (Animationen)
- **Lucide React** (Icons)
- **React Router 6** (Navigation)

### Projektstruktur
```
src/
├── components/
│   ├── Header.tsx      # Navigation mit Dropdown
│   ├── Footer.tsx      # 4-spaltig, dunkel
│   └── Logo.tsx        # SVG Logo-Komponente
├── pages/
│   ├── Home.tsx        # Startseite
│   ├── Fliesen.tsx     # Fliesen-Sortiment
│   ├── Sanitaer.tsx    # Bad & Sanitär
│   ├── Naturstein.tsx  # Naturstein
│   ├── Ausstellung.tsx # Showroom
│   ├── UeberUns.tsx    # Über uns
│   └── Kontakt.tsx     # Kontaktformular
├── styles/
│   └── index.css       # Tailwind + Custom CSS
└── App.tsx             # Router-Setup
```

### Aktuelle Farbpalette (in `tailwind.config.js`)
```javascript
primary: '#C41E3A'      // Karminrot (vom Logo)
neutral-cream: '#F8F7F4' // Creme-Weiß
neutral-beige: '#F5F3EF' // Warm Beige
neutral-text: '#1A1A1A'  // Dunkelgrau
```

### Firmen-Informationen
- **Name:** Fliesen Kny oHG
- **Adresse:** Benzstraße 3, 64546 Mörfelden
- **Telefon:** 06105 - 330 67
- **Email:** info@fliesen-kny.de
- **Öffnungszeiten:**
  - Mo-Fr: 9:00-12:30 & 14:00-18:00 Uhr
  - Sa: 9:00-12:30 Uhr
- **USPs:** 40+ Jahre, 1000m² Ausstellung, 100+ Marken

---

## Erwartetes Ergebnis

Nach deiner Überarbeitung sollte die Website:

1. **Einzigartig** sein - nicht verwechselbar mit anderen Fliesen-Websites
2. **Das Logo perfekt darstellen** - exakte SVG-Kopie des Originals
3. **Charakter haben** - warm, einladend, professionell, handwerklich
4. **Fehlerfrei** sein - kein TypeScript-Fehler, keine Console-Warnings
5. **Performant** sein - schnelle Ladezeiten, optimierte Assets
6. **Responsive** sein - perfekt auf Desktop, Tablet, Mobile

---

## Workflow

1. **Analysiere** das Logo (`LOGOSCREENSHOT.png`) und erstelle die exakte SVG-Kopie
2. **Review** alle bestehenden Dateien auf Fehler und Inkonsistenzen
3. **Plane** die Design-Änderungen die Charakter bringen
4. **Implementiere** die Änderungen
5. **Teste** auf verschiedenen Geräten/Bildschirmgrößen
6. **Optimiere** Performance und Code-Qualität

---

## Wichtige Dateien zum Starten

```bash
# Logo-Original anschauen
LOGOSCREENSHOT.png

# Aktuelle Logo-Implementierung
src/components/Logo.tsx
public/logo.svg

# Design-System
tailwind.config.js
src/styles/index.css

# Hauptseiten
src/pages/Home.tsx
src/components/Header.tsx
src/components/Footer.tsx
```

---

## Abschließende Notiz

**Qualität über Geschwindigkeit.**

Nimm dir die Zeit, die Website wirklich zu verstehen und dann mit einem durchdachten Konzept zu verbessern. Es geht nicht darum, schnell fertig zu sein, sondern darum, eine Website zu schaffen, auf die Fliesen Kny stolz sein kann.

Das Ergebnis sollte sich anfühlen wie: *"Ja, DAS ist Fliesen Kny!"*
