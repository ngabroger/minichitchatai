# Mini Chitchat AI

Aplikasi chatbot AI sederhana yang dibangun dengan Next.js dan Groq API.


## Akses Website langsung
akses langsung website untuk mencoba gunakan link berikut 
[Demo Website](https://chitchatai.ngabroger.tech)

## AI yang Digunakan

- **Model**: Groq (llama-3.3-70b-versatile)
- **Bahasa**: Bahasa Indonesia

## Cara Menjalankan Project

### 1. Setup Environment Variable

Buat file `.env.local` di root project:

```bash
NEXT_PUBLIC_GROQ_API_URL=https://your-groq-api-url
```

Ganti `https://your-groq-api-url` dengan URL Groq API yang sesuai.

### 2. Install Dependencies

Jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Jalankan Development Server

Setelah semua dependensi terinstal, jalankan server pengembangan:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `app/page.tsx`. Halaman akan diperbarui secara otomatis saat Anda mengedit file.

## Deploy di Vercel

Cara termudah untuk menerapkan aplikasi Next.js Anda adalah dengan menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pembuat Next.js.

Lihat [dokumentasi penerapan Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.
