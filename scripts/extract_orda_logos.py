from __future__ import annotations

from pathlib import Path

import pdfplumber
from PIL import Image


PDF_PATH = Path("C:/Users/user/Downloads/Флагис маскотами 16шт 1500_750мм.pdf")
OUT_DIR = Path("public/ordas/logos")
OUTPUT_SIZE = 1400

ORDAS = [
    (1, "aq"),
    (2, "qonyr"),
    (3, "kuren"),
    (4, "kok"),
    (6, "kumis"),
    (7, "jasyl"),
    (8, "sary"),
    (9, "qyzgylt"),
    (10, "qara"),
    (11, "sur"),
    (13, "altyn"),
    (14, "qola"),
    (15, "kulgin"),
    (16, "qyzyl"),
]


def center_square(image: Image.Image) -> Image.Image:
    w, h = image.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return image.crop((left, top, left + side, top + side))


def save_logo(page, slug: str) -> tuple[int, int]:
    rendered = page.to_image(resolution=144, antialias=True).original.convert("RGB")
    cropped = center_square(rendered)
    cropped = cropped.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)

    out_path = OUT_DIR / f"{slug}.webp"
    cropped.save(out_path, "WEBP", quality=94, method=6)
    return cropped.size


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for old in OUT_DIR.glob("*.webp"):
        old.unlink()

    with pdfplumber.open(PDF_PATH) as pdf:
        if len(pdf.pages) != 16:
            raise RuntimeError(f"Expected 16 PDF pages, got {len(pdf.pages)}")

        for page_number, slug in ORDAS:
            width, height = save_logo(pdf.pages[page_number - 1], slug)
            print(f"{slug}.webp page={page_number} size={width}x{height}")


if __name__ == "__main__":
    main()