import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("assets/qrs", exist_ok=True)

# Base URLs with tracking parameters
urls = {
    "qr_publicidad_general": "https://lcd-store.vercel.app/?utm_source=qr_publicidad&utm_medium=flyer&utm_campaign=catalogo2026",
    "qr_empaques_bolsas": "https://lcd-store.vercel.app/?utm_source=qr_empaque&utm_medium=packaging&utm_campaign=catalogo2026",
    "qr_tarjetas_presentacion": "https://lcd-store.vercel.app/?utm_source=qr_tarjetas&utm_medium=card&utm_campaign=catalogo2026",
    "qr_directo_web": "https://lcd-store.vercel.app/"
}

# Try loading logo
logo_path = "logo.png"
logo = None
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")

def generate_qr(name, url, fill_color="black", back_color="white", add_logo=True, border=3):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H, # High error correction to allow logo overlay
        box_size=20,
        border=border
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color=fill_color, back_color=back_color).convert("RGBA")
    
    if add_logo and logo:
        # Resize logo to fit in center (approx 22% of QR code width)
        qr_w, qr_h = img.size
        logo_size = int(qr_w * 0.22)
        
        # Create circular masked logo with border
        logo_thumb = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
        
        # Create white background circle for logo
        bg_circle = Image.new("RGBA", (logo_size + 16, logo_size + 16), (0, 0, 0, 0))
        draw = ImageDraw.Draw(bg_circle)
        draw.ellipse((0, 0, logo_size + 15, logo_size + 15), fill=(255, 255, 255, 255), outline=(212, 175, 55, 255), width=4)
        
        # Paste logo onto circular background
        offset_logo = 8
        bg_circle.paste(logo_thumb, (offset_logo, offset_logo), mask=logo_thumb)
        
        # Center on QR
        pos = ((qr_w - bg_circle.size[0]) // 2, (qr_h - bg_circle.size[1]) // 2)
        img.paste(bg_circle, pos, mask=bg_circle)

    # Save high-res PNG
    out_path = f"assets/qrs/{name}.png"
    img.save(out_path, "PNG", dpi=(300, 300))
    print(f"Generated: {out_path} ({img.size[0]}x{img.size[1]}px)")
    return out_path

# 1. Print Standard (High-Contrast Black & White with Gold Border and Logo) - Perfect for flyers/stickers
generate_qr("qr_lcd_store_impresion_flyers", urls["qr_publicidad_general"], fill_color="#0A0B0E", back_color="#FFFFFF", add_logo=True)

# 2. Luxury Dark Edition (Obsidian & Gold) - For digital stories, posters, screens
generate_qr("qr_lcd_store_luxury_gold", urls["qr_publicidad_general"], fill_color="#D4AF37", back_color="#07080C", add_logo=True)

# 3. Empaques & Bolsas QR
generate_qr("qr_lcd_store_empaques", urls["qr_empaques_bolsas"], fill_color="#111111", back_color="#FFFFFF", add_logo=True)

# 4. Tarjetas de Presentación QR
generate_qr("qr_lcd_store_tarjetas", urls["qr_tarjetas_presentacion"], fill_color="#111111", back_color="#FFFFFF", add_logo=True)

# 5. QR Directo Limpio (Sin parámetros, estándar)
generate_qr("qr_lcd_store_directo", urls["qr_directo_web"], fill_color="#000000", back_color="#FFFFFF", add_logo=True)

print("All QR codes generated successfully.")
