#!/usr/bin/env python3

from PIL import Image, ImageDraw, ImageFont
import os

# Image specifications for Fliesen KNY website
images_to_create = [
    {
        "filename": "hero-luxury-bathroom.jpg",
        "title": "Luxury Bathroom",
        "description": "Modern bathroom with\nelegant ceramic tiles",
        "color": (70, 130, 180)  # Steel Blue
    },
    {
        "filename": "service-tile-installation.jpg", 
        "title": "Professional Installation",
        "description": "Skilled craftsmen\nat work",
        "color": (139, 69, 19)  # Saddle Brown
    },
    {
        "filename": "service-showroom.jpg",
        "title": "Tile Showroom",
        "description": "Extensive display of\nceramic & porcelain tiles",
        "color": (188, 143, 143)  # Rosy Brown
    },
    {
        "filename": "service-mosaic-art.jpg",
        "title": "Mosaic Artwork",
        "description": "Beautiful artistic\nmosaic installations",
        "color": (160, 82, 45)  # Chocolate
    },
    {
        "filename": "about-team.jpg",
        "title": "Our Team",
        "description": "Professional tile\ninstallers",
        "color": (47, 79, 79)  # Dark Slate Gray
    },
    {
        "filename": "gallery-luxury-bathroom.jpg",
        "title": "Gallery: Luxury Bath",
        "description": "Completed bathroom\nrenovation project",
        "color": (95, 158, 160)  # Cadet Blue
    },
    {
        "filename": "gallery-modern-kitchen.jpg",
        "title": "Gallery: Modern Kitchen",
        "description": "Beautiful backsplash\ntile installation",
        "color": (85, 107, 47)  # Dark Olive Green
    },
    {
        "filename": "gallery-outdoor-terrace.jpg",
        "title": "Gallery: Outdoor Terrace",
        "description": "Premium outdoor\ntile installation",
        "color": (112, 128, 144)  # Slate Gray
    }
]

output_dir = "/root/clawd/projects/fliesen-kny-pro/public/images/"
os.makedirs(output_dir, exist_ok=True)

print("🖼️  FLIESEN KNY - Erstelle Platzhalter-Bilder...")
print(f"📁 Zielverzeichnis: {output_dir}")
print(f"🎨 Anzahl Bilder: {len(images_to_create)}")
print("-" * 50)

for i, img_data in enumerate(images_to_create, 1):
    filename = img_data["filename"]
    title = img_data["title"] 
    description = img_data["description"]
    color = img_data["color"]
    
    print(f"[{i}/{len(images_to_create)}] Erstelle: {filename}")
    
    # Create image (1920x1080 for 16:9 aspect ratio)
    width, height = 1920, 1080
    img = Image.new('RGB', (width, height), color=color)
    draw = ImageDraw.Draw(img)
    
    try:
        # Try to use a system font
        title_font = ImageFont.truetype("/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf", 80)
        desc_font = ImageFont.truetype("/usr/share/fonts/dejavu/DejaVuSans.ttf", 50)
    except:
        # Fallback to default font
        title_font = ImageFont.load_default()
        desc_font = ImageFont.load_default()
    
    # Add company name at top
    company_name = "FLIESEN KNY"
    company_bbox = draw.textbbox((0, 0), company_name, font=title_font)
    company_width = company_bbox[2] - company_bbox[0]
    draw.text(((width - company_width) // 2, 100), company_name, 
              fill="white", font=title_font)
    
    # Add title
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text(((width - title_width) // 2, height // 2 - 100), title, 
              fill="white", font=title_font)
    
    # Add description (multiline)
    lines = description.split('\n')
    line_height = 60
    total_height = len(lines) * line_height
    start_y = height // 2 + 50
    
    for j, line in enumerate(lines):
        line_bbox = draw.textbbox((0, 0), line, font=desc_font)
        line_width = line_bbox[2] - line_bbox[0]
        draw.text(((width - line_width) // 2, start_y + j * line_height), 
                  line, fill="white", font=desc_font)
    
    # Add decorative frame
    frame_thickness = 20
    draw.rectangle([frame_thickness, frame_thickness, 
                   width - frame_thickness, height - frame_thickness], 
                  outline="white", width=10)
    
    # Save image
    output_path = os.path.join(output_dir, filename)
    img.save(output_path, "JPEG", quality=85)
    
    # Check file size
    file_size = os.path.getsize(output_path)
    print(f"✅ ERSTELLT: {filename} ({file_size:,} bytes)")

print("\n🎉 Platzhalter-Bilder erfolgreich erstellt!")
print(f"📂 Alle Bilder in: {output_dir}")
print("\n📝 HINWEIS: Dies sind hochqualitative Platzhalter-Bilder.")
print("   Sobald die Gemini-API wieder verfügbar ist, können")
print("   professionelle KI-generierte Bilder erstellt werden.")