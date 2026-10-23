# BI SETBAY — Mode Lokal

Dashboard BI SETBAY berjalan tanpa Supabase, tanpa login, dan tanpa koneksi database. Pengguna dapat mengunggah file Excel secara langsung. Seluruh perhitungan dilakukan di browser; data hasil impor disimpan pada `localStorage` browser yang sedang digunakan.

## Menjalankan di komputer

Persyaratan: Node.js 18 atau lebih baru.

1. Ekstrak ZIP ini.
2. Buka terminal pada folder proyek `BI_SETBAY_Supabase_Vercel`.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`.
5. Buka `http://localhost:3000`.
6. Klik **Pilih file Excel** dan unggah workbook.

## Workbook yang didukung

Dashboard membaca sheet `SETBAY MANADO` dan/atau `SETBAY KASTIP`. Pemetaan kolom yang saat ini digunakan: `COTC_TRAN_DATE`, `TRANSACTION_TYPE`, `MONEY_TYPE`, `BANK_NAME`, `Denom`, `COTCP_AMOUNT`, `COTCP_PIECES`, `Inflow`, `Outflow`, `Neflow`; untuk Kastip: `COTCR_AMOUNT`, `COTCR_PIECES`, `Inflow Kastip`, `Outflow Kasti`, `Netflow Kastip`, dan `Nama Kastip`. Baris tanpa tanggal valid diabaikan.

## Privasi dan batasan

- Tidak ada Supabase, autentikasi, atau akses database.
- Kolom `BANK_ACCOUNT` tidak dipetakan atau disimpan.
- Data diproses di browser dan disimpan lokal pada browser/perangkat ini; data tidak otomatis tersedia di browser atau komputer lain.
- Membersihkan data situs/browser dapat menghapus dataset lokal. Gunakan **Ekspor CSV** sebagai cadangan.
- Upload workbook baru mengganti dataset yang sedang aktif.
- Dashboard tidak memuat data dummy. Jika belum mengunggah data, metrik tetap kosong/nol.

## Catatan

ZIP ini disiapkan untuk penggunaan lokal. Jangan deploy sebagai situs publik jika tujuannya harus benar-benar lokal. Untuk menggunakan tanpa internet setelah pertama kali, dependensi npm perlu sudah terpasang di komputer.
