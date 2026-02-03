const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'AIzaSyDa6M_ixO25wGkz_q0m3Z-o44ZAFKw9Upc';
const outputDir = path.join(__dirname, '..', 'public', 'images');

const images = [
  {
    filename: 'services/service-handwerker.png',
    prompt: 'Professional tile installation scene, large format porcelain tile being placed with leveling system clips visible, premium ceramic materials, construction tools arranged neatly, close-up detail of tile installation process, natural lighting, documentary style photography, 8k quality, no people'
  },
  {
    filename: 'news/news-handwerker.png',
    prompt: 'Tile installation workspace, large format gray tiles stacked professionally, leveling system tools and spacers arranged, construction site with premium ceramic materials, professional workmanship scene, documentary photography style, 8k quality, no people'
  }
];

async function generateImage(imageConfig, index) {
  const { filename, prompt } = imageConfig;

  console.log(`\n[${index + 1}/${images.length}] Generiere: ${filename}`);

  const requestBody = JSON.stringify({
    instances: [{ prompt: prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: '4:3',
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

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            console.log(`   FEHLER: ${response.error.message}`);
            resolve(false);
            return;
          }
          if (response.predictions && response.predictions[0]) {
            const imageData = response.predictions[0].bytesBase64Encoded;
            const outputPath = path.join(outputDir, filename);
            fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
            console.log(`   ERFOLG: ${outputPath}`);
            resolve(true);
          } else {
            console.log(`   FEHLER: Keine Bilddaten`);
            console.log(`   Response: ${JSON.stringify(response)}`);
            resolve(false);
          }
        } catch (err) {
          console.log(`   FEHLER: ${err.message}`);
          resolve(false);
        }
      });
    });
    req.on('error', (err) => {
      console.log(`   FEHLER: ${err.message}`);
      resolve(false);
    });
    req.write(requestBody);
    req.end();
  });
}

async function main() {
  console.log('Generiere fehlende Handwerker-Bilder...');
  for (let i = 0; i < images.length; i++) {
    await generateImage(images[i], i);
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log('\nFertig!');
}

main();
