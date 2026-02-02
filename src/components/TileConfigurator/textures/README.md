# Fliesen-Texturen für KNY Konfigurator

## Übersicht
Die Fliesen-Texturen werden momentan als Placeholder programmatisch generiert. Für die Produktionsumgebung sollten diese durch hochwertige Texture-Dateien ersetzt werden.

## Generierte Texturen

### 1. Classic White (classic-white.jpg)
- **Farbe**: #f8f8f8 (Hellgrau-Weiß)
- **Pattern**: 64x64px Standard-Quadratfliesen
- **Beschreibung**: Zeitlose weiße Keramikfliesen mit subtilen Fugenlinien
- **Empfohlene Auflösung**: 1024x1024px
- **Material**: Glänzende Keramik, leicht reflektierend

### 2. Marble Grey (marble-grey.jpg) 
- **Farbe**: #d4d4d4 (Mittelgrau)
- **Pattern**: 64x64px Standard-Quadratfliesen
- **Beschreibung**: Luxuriöse graue Marmorfliesen mit natürlicher Maserung
- **Empfohlene Auflösung**: 1024x1024px
- **Material**: Matt-glänzend, natürliche Steinoptik

### 3. Subway Beige (subway-beige.jpg)
- **Farbe**: #e8d7c3 (Warmes Beige)
- **Pattern**: 128x64px U-Bahn-Fliesen (Rechteck)
- **Beschreibung**: Moderne beige U-Bahn-Fliesen im Metro-Stil
- **Empfohlene Auflösung**: 1024x1024px
- **Material**: Glänzende Keramik mit Facettenkanten

### 4. Mosaic Blue (mosaic-blue.jpg)
- **Farbe**: #4a90a4 (Meeresblau)
- **Pattern**: 32x32px Kleine Mosaikfliesen
- **Beschreibung**: Stilvolle blaue Mosaikfliesen für Akzentbereiche
- **Empfohlene Auflösung**: 512x512px (feineres Pattern)
- **Material**: Glasmosaik, stark reflektierend

### 5. Wood Look Brown (wood-look-brown.jpg)
- **Farbe**: #8b4513 (Warmes Braun)
- **Pattern**: 64x64px Standard-Quadratfliesen
- **Beschreibung**: Warme Holzoptik-Fliesen für natürlichen Look
- **Empfohlene Auflösung**: 1024x1024px
- **Material**: Matt, Holzmaserung-Textur

### 6. Black Matt (black-matt.jpg)
- **Farbe**: #2c2c2c (Anthrazit-Schwarz)
- **Pattern**: 64x64px Standard-Quadratfliesen
- **Beschreibung**: Elegante matte schwarze Fliesen, modern und zeitlos
- **Empfohlene Auflösung**: 1024x1024px
- **Material**: Matt, keine Reflexion

## Implementierung

Die Texturen werden aktuell via HTML Canvas generiert in der `TileSurface` Komponente:

```typescript
const texture = useMemo(() => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  
  // Grundfarbe + Pattern-Generierung
  // ...
}, [tileType, area.surface]);
```

## Produktions-Texturen

Für die finale Version sollten diese Placeholder durch echte Textur-Dateien ersetzt werden:

### Dateiformate:
- **JPG**: Für fotorealistische Texturen (Marmor, Holzoptik)
- **PNG**: Für Texturen mit Transparenz oder scharfen Kanten
- **WebP**: Für optimierte Web-Performance

### Ordnerstruktur:
```
textures/
├── classic-white.jpg
├── marble-grey.jpg  
├── subway-beige.jpg
├── mosaic-blue.jpg
├── wood-look-brown.jpg
├── black-matt.jpg
└── normal-maps/          # Optional: Normale Maps für 3D-Tiefe
    ├── classic-white-normal.jpg
    ├── marble-grey-normal.jpg
    └── ...
```

### Three.js Integration:
```typescript
import { useTexture } from '@react-three/drei';

// In der Komponente:
const texture = useTexture(`/textures/${tileType.texture}`);
```

## KNY-spezifische Anpassungen

- Farbschema sollte zur KNY-Marke passen
- Weitere Fliesen-Kollektionen können einfach hinzugefügt werden
- Normale Maps für bessere 3D-Darstellung
- LOD (Level of Detail) für Performance-Optimierung