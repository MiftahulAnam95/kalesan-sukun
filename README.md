# Kalesan Sukun Alu — Website

Website statis (HTML + CSS + JS murni, tanpa framework/build tool) untuk brand **Kalesan Sukun Alu**. Siap langsung di-deploy ke GitHub Pages atau hosting statis apa pun.

## Struktur File

```
├── index.html            # Halaman Home
├── product.html          # Halaman Produk
├── about.html            # Halaman Our Story (Cerita Kami)
├── how-to-serve.html     # Halaman How to Serve (Cara Menikmati)
├── testimonials.html     # Halaman Testimonials
├── faq.html              # Halaman FAQ
├── order.html            # Halaman Order (Pesan Sekarang)
├── styles.css            # Semua styling (design system, komponen, responsive)
├── script.js             # Navbar scroll effect + mobile menu toggle
└── images/                # Semua foto produk
```

Setiap halaman adalah file HTML terpisah yang berdiri sendiri (bukan single-page app), saling terhubung lewat link biasa (`<a href="...">`) — jadi bisa dibuka langsung tanpa server/build step, dan search-engine-friendly.

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misal `kalesan-sukun-alu-website`).
2. Push semua isi folder ini (`index.html`, `styles.css`, `script.js`, folder `images/`, dst) ke branch `main`.
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kalesan Sukun Alu website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```
3. Di GitHub, buka repo → **Settings** → **Pages**.
4. Pada bagian **Build and deployment**, pilih **Source: Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`.
5. Klik **Save**. Setelah beberapa menit, situs akan aktif di:
   `https://USERNAME.github.io/REPO-NAME/`

## Catatan

- Link tombol "Pesan Sekarang", ikon media sosial (Instagram, WhatsApp, Tokopedia, Shopee), dan metode order di `order.html` masih memakai placeholder `href="#"` — ganti dengan link asli (nomor WhatsApp, link toko Tokopedia/Shopee, dsb) sebelum go-live.
- Font yang dipakai: **Plus Jakarta Sans** dari Google Fonts (sudah di-link di setiap `<head>`, butuh koneksi internet saat halaman dibuka).
- Semua warna, spacing, dan gaya visual diatur lewat CSS variables di bagian atas `styles.css` — bisa diubah di satu tempat untuk mengubah tampilan seluruh situs.
