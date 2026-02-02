# 🏢 Fliesen KNY - Professionelle Website

Eine moderne, professionelle Website für Fliesen KNY mit interaktivem 3D-Fliesen-Konfigurator.

## ✨ Features

- **🎨 Modernes Design** - Professionelles UI mit Framer Motion Animationen
- **🎮 3D-Fliesen-Konfigurator** - Interaktive Three.js Visualisierung
- **📱 Responsive** - Perfekt auf Desktop, Tablet & Mobile
- **⚡ Schnell** - Optimiert mit Vite, Code-Splitting
- **🎯 SEO-optimiert** - Meta-Tags, strukturierte Daten

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** TailwindCSS
- **Animationen:** Framer Motion
- **3D:** Three.js (@react-three/fiber, @react-three/drei)
- **Routing:** React Router DOM
- **Icons:** Lucide React

## 🚀 Quick Start

```bash
# Installation
npm install

# Development
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview
```

## 📁 Projektstruktur

```
fliesen-kny-pro/
├── src/
│   ├── components/          # Wiederverwendbare Komponenten
│   │   ├── Header.tsx       # Navigation
│   │   ├── Footer.tsx       # Footer
│   │   ├── ContactForm.tsx  # Kontaktformular
│   │   ├── GalleryGrid.tsx  # Bildergalerie
│   │   ├── ServiceCard.tsx  # Service-Karten
│   │   ├── TestimonialSlider.tsx  # Kundenbewertungen
│   │   └── TileConfigurator/      # 3D-Konfigurator
│   ├── pages/               # Seiten
│   │   ├── Home.tsx         # Startseite
│   │   ├── Services.tsx     # Leistungen
│   │   ├── Gallery.tsx      # Galerie
│   │   ├── About.tsx        # Über uns
│   │   └── Contact.tsx      # Kontakt
│   ├── styles/
│   │   └── globals.css      # Globale Styles
│   ├── App.tsx              # App-Komponente
│   └── main.tsx             # Entry Point
├── public/
│   └── images/              # KI-generierte Bilder (DALL-E 3 HD)
├── dist/                    # Production Build
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🖼️ Generierte Bilder

Alle Bilder wurden mit **DALL-E 3 HD** (1792x1024) generiert:

| Bild | Beschreibung | Größe |
|------|--------------|-------|
| hero-luxus-badezimmer.png | Luxuriöses Badezimmer Hero | 2.7 MB |
| service-fliesenverlegung.png | Professionelle Verlegung | 2.7 MB |
| service-showroom.png | Fliesen-Ausstellung | 2.9 MB |
| service-mosaik-kunst.png | Mosaik Kunstwerk | 3.9 MB |
| about-team.png | Team-Foto | 2.9 MB |
| gallery-luxusbad.png | Galerie: Luxusbad | 2.4 MB |
| gallery-kueche.png | Galerie: Küche | 2.7 MB |
| gallery-terrasse.png | Galerie: Terrasse | 3.4 MB |

## 🌐 Deployment

### Vercel (Empfohlen)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# dist/ Ordner zu Netlify deployen
```

### Selbst-Hosting
```bash
npm run build
# dist/ Ordner auf Server kopieren (nginx/apache)
```

## 📋 Seiten

1. **Home** - Hero, Services, Testimonials, CTA
2. **Leistungen** - 6 Dienstleistungen mit Details
3. **Galerie** - Projekt-Showcase mit Lightbox
4. **Über uns** - Firmengeschichte, Team, Werte
5. **Kontakt** - Formular, Karte, Öffnungszeiten

## 🎮 3D-Konfigurator

Der interaktive Fliesen-Konfigurator ermöglicht:
- 360° Badezimmer-Ansicht
- 4 fliesbare Bereiche (Wände + Boden)
- 6 verschiedene Fliesen-Typen
- Echtzeit-Vorschau
- Touch-optimiert für Mobile

## 💰 Kosten

- **Bildgenerierung:** 8x DALL-E 3 HD = ~$0.96
- **Hosting:** Vercel/Netlify Free Tier = $0
- **Domain:** Optional, ~€10/Jahr

## 📞 Firmeninfo

**Fliesen Kny**
- Adresse: Benzstraße 3, 64546 Mörfelden-Walldorf
- Erfahrung: Über 40 Jahre
- Region: Rhein-Main-Gebiet

---

*Erstellt mit ❤️ von Clawdbot AI | Februar 2026*
