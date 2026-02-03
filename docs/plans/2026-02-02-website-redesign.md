# Fliesen Kny Website Redesign

## Design-Entscheidungen

| Aspekt | Entscheidung |
|--------|--------------|
| Stil | Minimalistisch-Elegant |
| Seiten | Startseite, Ausstellung, Über uns, Kontakt |
| Hero | Immersives Vollbild-Foto |
| Animationen | Subtil & Smooth |

## Farbpalette

```
Primär:     #FFFFFF (Weiß)
Sekundär:   #F5F5F3 (Warmgrau)
Text:       #1A1A1A (Anthrazit)
Akzent:     #C41E3A (Rose-Rot)
```

## Typografie

- **Headlines**: Playfair Display (700)
- **Body**: Inter (400, 500)
- **Skala**: 72px → 48px → 32px → 24px → 18px → 16px

## Seitenstruktur

### 1. Startseite
1. Hero (100vh) - Vollbild Luxus-Bad, Logo zentriert
2. Intro - "Der Geheimtipp" + 3 Kategorien
3. Ausstellungs-Teaser - Großes Showroom-Bild
4. Vertrauens-Sektion - 40+ Jahre, Größte Ausstellung, Beratung
5. Footer - Kontakt, Öffnungszeiten, Mini-Karte

### 2. Ausstellung
- Filter: Fliesen | Bad & Sanitär | Naturstein
- Masonry-Grid mit hochwertigen Produktbildern
- Hover: Leichter Zoom + Overlay mit Info

### 3. Über uns
- Geschichte (Timeline seit 40+ Jahren)
- Philosophie & Werte
- Team-Vorstellung (optional)

### 4. Kontakt
- Großes Kontaktformular
- Google Maps Integration
- Öffnungszeiten prominent
- Anfahrtsbeschreibung

## Firmendaten

- **Name**: Fliesen Kny
- **Tagline**: Der Geheimtipp für Fliesen und Sanitär im Rhein-Main-Gebiet
- **Adresse**: Benzstraße 3, 64546 Mörfelden
- **Telefon**: 06105–330 67
- **E-Mail**: info@fliesen-kny.de
- **Öffnungszeiten**:
  - Mo-Fr: 9:00–12:30 und 14:00–18:00 Uhr
  - Sa: 9:00–12:30 Uhr
- **USP**: 40+ Jahre Erfahrung, Größte Ausstellung im Rhein-Main-Gebiet

## Animationen (Framer Motion)

- Fade-in beim Scroll (threshold: 0.1)
- Hover-Zoom auf Bildern (scale: 1.05)
- Smooth page transitions
- Stagger auf Listen (delay: 0.1s pro Item)

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons
