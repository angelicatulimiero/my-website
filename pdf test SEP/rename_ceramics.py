import os
import json
from pathlib import Path

# Mapping nome opera → misure e temperatura
CERAMICS_DATA = {
    "unease": {"w": 65.5, "d": 44, "h": 18, "temp": 1260, "title": "Unease"},
    "groviglio": {"w": 43, "d": 32, "h": 18, "temp": 1350, "title": "Groviglio Cascante"},
    "cell": {"w": 53, "d": 37, "h": 12, "temp": 1260, "title": "Cell 5"},
    "tako": {"w": 45, "d": 30, "h": 17, "temp": 1260, "title": "Tako Tsubo"},
}

source_dir = Path(os.path.expanduser("~/Desktop/Angelica_WebP"))
metadata = []

for root, dirs, files in os.walk(source_dir):
    for file in files:
        if file.endswith(".webp"):
            filepath = Path(root) / file
            filename_lower = file.lower()
            
            # Estrai dati dall'opera
            ceramics_info = None
            for key, data in CERAMICS_DATA.items():
                if key in filename_lower:
                    ceramics_info = data
                    break
            
            if ceramics_info:
                # Rinomina file
                new_name = f"{filename_lower.replace('.webp', '')}-{int(ceramics_info['w'])}x{int(ceramics_info['d'])}x{int(ceramics_info['h'])}cm-{ceramics_info['temp']}c.webp"
                new_filepath = filepath.parent / new_name
                filepath.rename(new_filepath)
                
                # Aggiungi metadati
                metadata.append({
                    "title": ceramics_info["title"],
                    "filename": new_name,
                    "dimensions_cm": {
                        "width": ceramics_info["w"],
                        "depth": ceramics_info["d"],
                        "height": ceramics_info["h"]
                    },
                    "temperature_celsius": ceramics_info["temp"],
                    "category": Path(root).name,
                    "filepath": f"/images/{Path(root).name}/{new_name}"
                })
                
                print(f"Rinominato: {new_name}")

# Salva JSON
json_path = os.path.expanduser("~/Desktop/angelica-ceramics-metadata.json")
with open(json_path, "w") as f:
    json.dump(metadata, f, indent=2, ensure_ascii=False)

print(f"\nJSON salvato: {json_path}")
