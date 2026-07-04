#!/usr/bin/env bash
# Converte tutte le immagini di assets/img/ in WebP ottimizzato (max 1600px, q82).
# Prerequisito (una volta sola):  brew install webp
# Uso, dalla cartella del sito:   bash converti-webp.sh
set -u
cd "$(dirname "$0")/assets/img" || { echo "assets/img non trovata"; exit 1; }
command -v cwebp >/dev/null 2>&1 || { echo "Manca cwebp. Installa con:  brew install webp"; exit 1; }
ok=0; fail=0
for f in *.jpg *.jpeg *.png; do
  [ -e "$f" ] || continue
  out="${f%.*}.webp"
  [ -e "$out" ] && { echo "  --  $out esiste già, salto"; continue; }
  if cwebp -quiet -q 82 -resize 1600 0 "$f" -o "$out"; then
    echo "  ok  $out  ($(du -h "$out" | cut -f1) da $(du -h "$f" | cut -f1))"; ok=$((ok+1))
  else
    echo "  !!  $f"; fail=$((fail+1))
  fi
done
echo; echo "Fatto: $ok convertite, $fail fallite."
echo "I .jpg/.png originali restano come backup: quando il sito online funziona, puoi cancellarli."
