#!/usr/bin/env python3

from google import genai
from google.genai import types
import os
import datetime

# Load API key
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set!")

print(f"🔑 Using API Key: {api_key[:10]}...")

client = genai.Client(api_key=api_key)

# Image prompts for Fliesen KNY website
images_to_generate = [
    {
        "filename": "hero-luxury-bathroom.jpg",
        "prompt": "Modern luxury bathroom interior with elegant ceramic tiles, warm ambient lighting, marble countertop, chrome fixtures, large walk-in shower with glass doors, contemporary design, sophisticated color scheme, 4K ultra high definition photography, professional interior photography, soft natural lighting from windows, clean minimalist style"
    },
    {
        "filename": "service-tile-installation.jpg", 
        "prompt": "Professional tile installer at work, craftsman laying large format ceramic tiles on bathroom floor, wearing work clothes and knee pads, precise tile spacers, tile adhesive, professional tools visible, action shot of skilled work, industrial lighting, realistic photography style, high quality workmanship, focus on hands and tools"
    },
    {
        "filename": "service-showroom.jpg",
        "prompt": "Large tile showroom with extensive display of ceramic and porcelain tiles, wall displays showing different patterns and colors, floor samples, modern showroom lighting, organized presentation of various tile types, marble, granite, mosaic samples, professional retail environment, spacious and well-lit interior, contemporary design"
    },
    {
        "filename": "service-mosaic-art.jpg",
        "prompt": "Beautiful mosaic tile artwork on wall, intricate pattern with small colorful ceramic tiles forming geometric design, artistic mosaic installation, detailed craftsmanship, vibrant colors including blues, greens, and gold accents, professional photography, close-up detail showing individual mosaic pieces, creative tile art, decorative wall feature"
    },
    {
        "filename": "about-team.jpg",
        "prompt": "Professional team of tile installers posing together, 4-5 skilled craftsmen in work uniforms, friendly and confident expressions, construction site background with tile work in progress, professional portrait photography, natural lighting, diverse team showing expertise and reliability, tools and materials visible, teamwork and craftsmanship theme"
    },
    {
        "filename": "gallery-luxury-bathroom.jpg",
        "prompt": "Completed luxury bathroom renovation project, high-end ceramic and marble tiles, freestanding bathtub, walk-in rainfall shower, elegant vanity with double sinks, premium fixtures, sophisticated lighting design, finished project showcase, architectural photography, perfect tile installation, luxurious spa-like atmosphere"
    },
    {
        "filename": "gallery-modern-kitchen.jpg",
        "prompt": "Modern kitchen with beautiful backsplash tiles, sleek subway tiles or large format ceramic tiles, contemporary kitchen design, island with waterfall edge, stainless steel appliances, under-cabinet lighting, finished tile project showing perfect installation, architectural interior photography, clean lines and modern aesthetics"
    },
    {
        "filename": "gallery-outdoor-terrace.jpg",
        "prompt": "Beautiful outdoor terrace with premium outdoor tiles, large format porcelain tiles suitable for exterior use, patio furniture, outdoor dining setup, landscaping elements, weather-resistant tile installation, natural lighting, architectural exterior photography, modern outdoor living space, perfectly laid terrace flooring"
    }
]

output_dir = "/root/clawd/projects/fliesen-kny-pro/public/images/"
os.makedirs(output_dir, exist_ok=True)

print("🔧 FLIESEN KNY - Bildgenerierung startet...")
print(f"📁 Zielverzeichnis: {output_dir}")
print(f"🖼️  Anzahl Bilder: {len(images_to_generate)}")
print("-" * 50)

for i, img_data in enumerate(images_to_generate, 1):
    filename = img_data["filename"]
    prompt = img_data["prompt"]
    
    print(f"[{i}/{len(images_to_generate)}] Generiere: {filename}")
    print(f"Prompt: {prompt[:80]}...")
    
    try:
        response = client.models.generate_images(
            model="nano-banana-pro",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
                safety_filter_level="block_only_high",
                person_generation="allow_adult"
            ),
        )
        
        if response.generated_images:
            output_path = os.path.join(output_dir, filename)
            response.generated_images[0].image.save(output_path)
            
            # Check file size
            file_size = os.path.getsize(output_path)
            print(f"✅ GESPEICHERT: {filename} ({file_size:,} bytes)")
        else:
            print(f"❌ FEHLER: Keine Bilder generiert für {filename}")
            
    except Exception as e:
        print(f"❌ FEHLER bei {filename}: {str(e)}")
    
    print()

print("🎉 Bildgenerierung abgeschlossen!")
print(f"📂 Alle Bilder in: {output_dir}")