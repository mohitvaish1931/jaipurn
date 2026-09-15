import fitz
import os

pdf_path = "Full NABH certificate.pdf"
output_dir = "public"

doc = fitz.open(pdf_path)
for page_index in range(len(doc)):
    page = doc[page_index]
    pix = page.get_pixmap(dpi=300)
    output_path = os.path.join(output_dir, f"nabh-certificate-{page_index + 1}.png")
    pix.save(output_path)
    print(f"Saved {output_path}")
