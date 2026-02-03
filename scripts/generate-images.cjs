/**
 * Fliesen Kny - Bildgenerierung mit Google Imagen 4 API
 *
 * Verwendung: node scripts/generate-images.cjs
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'AIzaSyDa6M_ixO25wGkz_q0m3Z-o44ZAFKw9Upc';

// Bildkonfigurationen - alle 41 Bilder
const images = [
  // HERO BEREICH
  {
    filename: 'hero/hero-homepage.png',
    prompt: 'Luxurious modern bathroom interior, dark moody atmosphere, large format gray stone tiles on walls and floor, freestanding oval white bathtub, black matte fixtures, floor-to-ceiling window with soft natural light, minimalist aesthetic, professional architectural photography, 8k quality, clean lines, no people, warm wood accent panel on one wall, subtle shadows, premium real estate photography style',
    aspectRatio: '16:9'
  },
  {
    filename: 'hero/hero-ausstellung.png',
    prompt: 'High-end tile showroom interior, dramatic lighting, rows of large format porcelain tiles displayed on walls, dark anthracite flooring, modern industrial ceiling with black track lighting, professional showroom photography, moody atmosphere, clean minimal design, premium materials on display, architectural photography, 8k quality',
    aspectRatio: '16:9'
  },
  {
    filename: 'hero/hero-ueber-uns.png',
    prompt: 'Modern tile showroom consultation area, dark elegant interior, large stone samples displayed on walls, wooden consultation table, soft ambient lighting, professional business atmosphere, high-end materials store, architectural interior photography, moody sophisticated mood, 8k quality',
    aspectRatio: '16:9'
  },

  // INTRO BEREICH
  {
    filename: 'intro/intro-textur.png',
    prompt: 'Close-up of ribbed ceramic tile texture, vertical grooves pattern, warm beige oak wood color, dramatic side lighting creating deep shadows in grooves, material texture photography, premium porcelain surface detail, macro shot, studio lighting, 8k quality, minimalist composition',
    aspectRatio: '9:16'
  },
  {
    filename: 'intro/intro-showroom.png',
    prompt: 'Modern bathroom vanity detail shot, dark gray concrete-look countertop, integrated sink basin, black matte wall-mounted faucet, ribbed wood panel cabinet below, moody lighting, premium bathroom design, architectural detail photography, minimalist aesthetic, 8k quality',
    aspectRatio: '4:3'
  },

  // ÜBER UNS
  {
    filename: 'showroom/geschichte.png',
    prompt: 'Elegant tile showroom interior, large format marble-look porcelain slabs leaning against dark wall, warm wood flooring, soft natural light from side, professional showroom display, premium materials, sophisticated atmosphere, interior design photography, 8k quality',
    aspectRatio: '3:4'
  },
  {
    filename: 'showroom/beratung.png',
    prompt: 'Modern consultation room in tile showroom, dark wooden table with stone tile samples spread out, warm ambient lighting, professional business setting, material samples visible, high-end interior, no people, architectural photography, moody atmosphere, 8k quality',
    aspectRatio: '4:3'
  },

  // KATEGORIEN
  {
    filename: 'kategorien/kategorie-grossformat.png',
    prompt: 'Dramatic close-up of large format marble-look porcelain tile, white Calacatta marble pattern with subtle gray veins, leaning against dark anthracite wall, professional product photography, studio lighting, luxury material, clean minimal composition, 8k quality, premium tile showroom setting',
    aspectRatio: '3:4'
  },
  {
    filename: 'kategorien/kategorie-bad.png',
    prompt: 'Modern luxury bathroom, freestanding white oval bathtub, large format gray stone tiles, black matte floor-mounted tub filler, walk-in glass shower in background, moody atmospheric lighting, minimalist design, warm wood accent, architectural photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'kategorien/kategorie-naturstein.png',
    prompt: 'Natural stone texture close-up, gray slate or travertine surface, dramatic lighting emphasizing texture and depth, material photography, earthy tones, organic patterns, professional product shot, dark moody background, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'kategorien/sortiment-fliesen.png',
    prompt: 'Stack of large format porcelain tiles in showroom, various gray and beige tones, leaning against dark wall, professional product display, soft studio lighting, premium ceramic materials, minimalist composition, architectural product photography, 8k quality',
    aspectRatio: '3:4'
  },
  {
    filename: 'kategorien/sortiment-sanitaer.png',
    prompt: 'Modern bathroom fixtures display, cylindrical brushed metal freestanding washbasins, black matte tall faucets, dark showroom background, dramatic spotlight lighting, premium sanitary products, minimalist design aesthetic, professional product photography, 8k quality',
    aspectRatio: '3:4'
  },
  {
    filename: 'kategorien/sortiment-naturstein.png',
    prompt: 'Natural stone slabs displayed in showroom, various textures of marble granite and slate, leaning against dark wall, warm accent lighting, premium stone materials, elegant showroom setting, material texture visible, professional photography, 8k quality',
    aspectRatio: '3:4'
  },

  // SERVICES
  {
    filename: 'services/service-beratung.png',
    prompt: 'Elegant consultation space in tile showroom, large stone samples displayed on wall, modern dark furniture, warm ambient lighting, professional business atmosphere, premium interior design, no people, sophisticated mood, architectural interior photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'services/service-3d-planung.png',
    prompt: 'Modern bathroom design visualization, architectural 3D render style, gray stone tiles, floating vanity with integrated sink, frameless glass shower, black matte fixtures, dramatic lighting, photorealistic interior design, clean minimal aesthetic, professional quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'services/service-handwerker.png',
    prompt: 'Professional tile installation detail, hands placing large format porcelain tile, leveling system visible, precision workmanship, construction site with premium materials, professional craftsmanship, close-up action shot, natural lighting, documentary style photography, 8k quality',
    aspectRatio: '4:3'
  },

  // NEWS
  {
    filename: 'news/news-fruehjahr.png',
    prompt: 'New tile collection display, warm beige and cream colored large format tiles, elegant showroom presentation, soft natural lighting, spring collection aesthetic, premium ceramics, minimalist styling, professional product photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'news/news-service.png',
    prompt: 'Welcoming tile showroom entrance, modern glass doors, elegant interior visible, warm inviting lighting, professional business exterior, premium store facade, architectural photography, evening atmosphere, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'news/news-jubilaeum.png',
    prompt: 'Elegant showroom interior celebrating heritage, classic and modern tiles displayed together, warm ambient lighting, sophisticated atmosphere, premium materials, timeless design aesthetic, professional interior photography, celebratory mood, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'news/news-naturstein.png',
    prompt: 'New natural stone collection display, various stone samples in warm earth tones, elegant presentation, soft studio lighting, premium materials, professional product photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'news/news-3d.png',
    prompt: '3D bathroom visualization on screen, photorealistic render of modern bathroom, computer display showing design software, professional planning workspace, architectural design atmosphere, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'news/news-handwerker.png',
    prompt: 'Professional tile installation in progress, craftsman hands placing large format tile, precision tools visible, construction site with premium materials, skilled workmanship, documentary photography style, 8k quality',
    aspectRatio: '4:3'
  },

  // PROJEKTE
  {
    filename: 'projekte/projekt-penthouse.png',
    prompt: 'Luxury penthouse bathroom, floor-to-ceiling large format gray tiles, freestanding bathtub with city view, frameless glass shower, black matte fixtures, minimalist luxury design, dramatic natural lighting, high-end residential interior, architectural photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'projekte/projekt-villa.png',
    prompt: 'Luxury outdoor terrace with natural stone flooring, travertine or limestone pavers, modern villa architecture, pool edge visible, warm Mediterranean atmosphere, premium landscape design, architectural exterior photography, golden hour lighting, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'projekte/projekt-mainz.png',
    prompt: 'Modern bathroom with mosaic accent wall, teal or sage green small format tiles, freestanding white vessel sink on wood counter, black wall-mounted faucet, frameless round mirror, contemporary bathroom design, professional interior photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'projekte/projekt-loft.png',
    prompt: 'Industrial loft interior with concrete-look floor tiles, large open space, modern minimalist furniture, black metal accents, exposed ceiling, warm wood elements, contemporary urban living, architectural interior photography, moody lighting, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'projekte/projekt-spa.png',
    prompt: 'Luxury spa bathroom, walk-in rain shower with bench, large format stone tiles in warm gray, recessed niche with ambient lighting, glass partition, steam visible, wellness atmosphere, premium bathroom design, professional photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'projekte/projekt-altbau.png',
    prompt: 'Renovated historic building bathroom, herringbone pattern floor tiles in warm gray, modern freestanding bathtub, exposed brick accent wall, contemporary meets classic design, black fixtures, architectural interior photography, warm natural lighting, 8k quality',
    aspectRatio: '4:3'
  },

  // SHOWROOM
  {
    filename: 'showroom/showroom-interior.png',
    prompt: 'Spacious tile showroom interior, large format tiles displayed on walls, modern presentation systems, warm ambient lighting, professional retail space, dark elegant flooring, clean minimal design, architectural interior photography, 8k quality',
    aspectRatio: '16:9'
  },

  // GALERIE
  {
    filename: 'galerie/galerie-01.png',
    prompt: 'Luxurious bathroom with ribbed wall panels, integrated floating vanity with stone top, wall-mounted black faucet, round mirror, warm wood tones mixed with gray stone, moody atmospheric lighting, premium interior design, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-02.png',
    prompt: 'Modern showroom display, large format porcelain tiles in gray tones, dramatic spotlight lighting, professional tile presentation, dark background, clean minimal aesthetic, material showcase, architectural photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-03.png',
    prompt: 'Natural stone texture macro shot, gray marble with subtle veining, dramatic side lighting, material detail photography, luxury surface texture, professional product shot, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-04.png',
    prompt: 'Wide angle tile showroom interior, multiple display areas visible, large format tiles on walls, modern lighting system, professional retail environment, dark elegant atmosphere, architectural interior photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-05.png',
    prompt: 'Designer bathroom vignette, wall-mounted toilet, large format gray tiles, recessed shelf with decorative items, black matte accessories, minimalist design, moody lighting, showroom display, professional photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-06.png',
    prompt: 'Geometric mosaic tile detail, chevron or herringbone pattern, warm beige and cream tones, dramatic side lighting creating shadows, material texture photography, premium ceramic art, close-up detail shot, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-07.png',
    prompt: 'Modern living space with wood-look porcelain floor tiles, minimalist black chair, warm natural lighting, contemporary interior design, clean aesthetic, premium flooring showcase, architectural photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'galerie/galerie-08.png',
    prompt: 'Premium material samples display, various stone and ceramic tiles arranged artistically, dramatic studio lighting, dark background, luxury materials showcase, professional product photography, 8k quality',
    aspectRatio: '4:3'
  },

  // HIGHLIGHTS
  {
    filename: 'highlights/highlight-fliesen.png',
    prompt: 'Ceramic tile collection display, various formats and colors arranged on dark wall, professional showroom lighting, material showcase, clean presentation, architectural retail photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'highlights/highlight-sanitaer.png',
    prompt: 'Modern bathroom fixtures showroom display, designer washbasins and faucets, dramatic spotlight lighting, premium sanitary products, dark elegant background, professional product photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'highlights/highlight-naturstein.png',
    prompt: 'Natural stone gallery display, marble and granite slabs standing against dark wall, warm accent lighting, premium stone materials, elegant showroom atmosphere, professional photography, 8k quality',
    aspectRatio: '4:3'
  },
  {
    filename: 'highlights/highlight-musterbaeder.png',
    prompt: 'Complete bathroom vignette in showroom, walk-in shower with gray tiles, modern vanity, black fixtures, fully styled display bathroom, professional showroom photography, inviting atmosphere, 8k quality',
    aspectRatio: '4:3'
  }
];

// Ordnerstruktur erstellen
const outputDir = path.join(__dirname, '..', 'public', 'images');
const folders = ['hero', 'intro', 'kategorien', 'services', 'news', 'projekte', 'showroom', 'galerie', 'highlights'];

function createFolders() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  folders.forEach(folder => {
    const folderPath = path.join(outputDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  });
  console.log('Ordnerstruktur erstellt unter:', outputDir);
}

// Bild mit Imagen 4 generieren
async function generateImage(imageConfig, index) {
  const { filename, prompt, aspectRatio } = imageConfig;

  console.log(`\n[${index + 1}/${images.length}] Generiere: ${filename}`);
  console.log(`   Prompt: ${prompt.substring(0, 60)}...`);

  const requestBody = JSON.stringify({
    instances: [{ prompt: prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: aspectRatio || '4:3',
      personGeneration: 'dont_allow',
      safetySetting: 'block_low_and_above'
    }
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestBody)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', chunk => { data += chunk; });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);

          if (response.error) {
            console.log(`   FEHLER: ${response.error.message}`);
            resolve({ success: false, filename, error: response.error.message });
            return;
          }

          if (response.predictions && response.predictions[0]) {
            const imageData = response.predictions[0].bytesBase64Encoded;
            const outputPath = path.join(outputDir, filename);

            // Bild speichern
            fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
            console.log(`   ERFOLG: Gespeichert als ${outputPath}`);
            resolve({ success: true, filename, path: outputPath });
          } else {
            console.log(`   FEHLER: Keine Bilddaten erhalten`);
            console.log(`   Response: ${JSON.stringify(response).substring(0, 200)}`);
            resolve({ success: false, filename, error: 'No image data' });
          }
        } catch (err) {
          console.log(`   FEHLER: ${err.message}`);
          resolve({ success: false, filename, error: err.message });
        }
      });
    });

    req.on('error', (err) => {
      console.log(`   NETZWERK-FEHLER: ${err.message}`);
      resolve({ success: false, filename, error: err.message });
    });

    req.write(requestBody);
    req.end();
  });
}

// Hauptfunktion
async function main() {
  console.log('='.repeat(60));
  console.log('FLIESEN KNY - BILDGENERIERUNG MIT IMAGEN 4');
  console.log('='.repeat(60));
  console.log(`\nGeneriere ${images.length} Bilder...\n`);

  createFolders();

  const results = { success: [], failed: [] };

  // Bilder nacheinander generieren (um Rate Limits zu vermeiden)
  for (let i = 0; i < images.length; i++) {
    const result = await generateImage(images[i], i);

    if (result.success) {
      results.success.push(result.filename);
    } else {
      results.failed.push({ filename: result.filename, error: result.error });
    }

    // Pause zwischen Anfragen (Rate Limiting)
    if (i < images.length - 1) {
      console.log('   Warte 3 Sekunden...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  // Zusammenfassung
  console.log('\n' + '='.repeat(60));
  console.log('ZUSAMMENFASSUNG');
  console.log('='.repeat(60));
  console.log(`Erfolgreich: ${results.success.length}/${images.length}`);
  console.log(`Fehlgeschlagen: ${results.failed.length}/${images.length}`);

  if (results.success.length > 0) {
    console.log('\nErfolgreich generierte Bilder:');
    results.success.forEach(f => console.log(`  + ${f}`));
  }

  if (results.failed.length > 0) {
    console.log('\nFehlgeschlagene Bilder:');
    results.failed.forEach(f => console.log(`  - ${f.filename}: ${f.error}`));
  }

  // Ergebnis speichern
  fs.writeFileSync(
    path.join(__dirname, 'generation-results.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('\nErgebnisse gespeichert in: scripts/generation-results.json');
}

main().catch(console.error);
