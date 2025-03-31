Lihat juga **peningkatan keren** yang diperkenalkan di [3.0.0 Beta 6](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/3.0.0-Beta-6)!


---

**3.0.0 Beta 7** membawa beberapa peningkatan kecil dan perbaikan bug.

Berikut semua yang baru:

**Peningkatan**

- Menambahkan **terjemahan Korea**. Terima kasih banyak kepada @jeongtae! (Temukan dia di [GitHub](https://github.com/jeongtae))
- Membuat **pengguliran** dengan opsi 'Kelancaran: Tinggi' **lebih halus lagi**, dengan hanya mengubah kecepatan secara bertahap, alih-alih memiliki lompatan mendadak dalam kecepatan pengguliran saat Anda menggerakkan roda gulir. Ini seharusnya membuat pengguliran terasa sedikit lebih halus dan lebih mudah diikuti dengan mata tanpa membuat hal-hal kurang responsif. Pengguliran dengan 'Kelancaran: Tinggi' sekarang menggunakan sekitar 30% lebih banyak CPU, di komputer saya meningkat dari 1.2% penggunaan CPU saat terus menggulir menjadi 1.6%. Jadi pengguliran masih sangat efisien dan saya harap ini tidak akan membuat perbedaan bagi siapa pun. Terima kasih banyak kepada [MOS](https://mos.caldis.me/), yang menginspirasi fitur ini dan yang 'Scroll Monitor'-nya saya gunakan untuk membantu mengimplementasikan fitur tersebut.
- Mac Mouse Fix sekarang **menangani input tombol dari semua sumber**. Sebelumnya, Mac Mouse Fix hanya menangani input dari mouse yang dikenalinya. Saya pikir ini mungkin membantu kompatibilitas dengan mouse tertentu dalam kasus tertentu, seperti saat menggunakan Hackintosh, tetapi ini juga akan membuat Mac Mouse Fix menangkap input tombol buatan dari aplikasi lain, yang mungkin menyebabkan masalah dalam kasus tertentu lainnya. Beri tahu saya jika ini menyebabkan masalah bagi Anda, dan saya akan menanganinya dalam pembaruan mendatang.
- Menyempurnakan nuansa dan kehalusan gerakan 'Klik dan Gulir' untuk 'Desktop & Launchpad' dan 'Klik dan Gulir' untuk 'Berpindah Antar Spaces'.
- Sekarang memperhitungkan kepadatan informasi suatu bahasa saat menghitung **waktu notifikasi ditampilkan**. Sebelumnya, notifikasi hanya akan tetap terlihat dalam waktu sangat singkat dalam bahasa dengan kepadatan informasi tinggi seperti Mandarin atau Korea.
- Mengaktifkan **gerakan berbeda** untuk berpindah antara **Spaces**, membuka **Mission Control**, atau membuka **App Exposé**. Di Beta 6, saya membuat agar aksi-aksi ini hanya tersedia melalui gerakan 'Klik dan Seret' - sebagai eksperimen untuk melihat berapa banyak orang yang benar-benar peduli tentang kemampuan mengakses aksi-aksi tersebut dengan cara lain. Sepertinya beberapa orang memang peduli, jadi sekarang saya memungkinkan kembali untuk mengakses aksi-aksi ini melalui 'Klik' sederhana pada tombol atau melalui 'Klik dan Gulir'.
- Memungkinkan untuk **Memutar** melalui gerakan **Klik dan Gulir**.
- **Meningkatkan** cara kerja opsi **Simulasi Trackpad** dalam beberapa skenario. Misalnya saat menggulir horizontal untuk menghapus pesan di Mail, arah pergerakan pesan sekarang dibalik, yang saya harap terasa lebih alami dan konsisten bagi kebanyakan orang.
- Menambahkan fitur untuk **memetakan ulang** ke **Klik Utama** atau **Klik Sekunder**. Saya mengimplementasikan ini karena tombol kanan mouse favorit saya rusak. Opsi-opsi ini disembunyikan secara default. Anda dapat melihatnya dengan menahan tombol Option saat memilih sebuah aksi.
  - Saat ini masih kurang terjemahan untuk bahasa Mandarin dan Korea, jadi jika Anda ingin berkontribusi terjemahan untuk fitur-fitur ini, itu akan sangat dihargai!

**Perbaikan Bug**

- Memperbaiki bug di mana **arah 'Klik dan Seret'** untuk 'Mission Control & Spaces' **terbalik** untuk orang-orang yang tidak pernah mengubah opsi 'Pengguliran natural' di Pengaturan Sistem. Sekarang, arah gerakan 'Klik dan Seret' di Mac Mouse Fix seharusnya selalu sesuai dengan arah gerakan di Trackpad atau Magic Mouse Anda. Jika Anda menginginkan opsi terpisah untuk membalik arah 'Klik dan Seret', alih-alih mengikuti Pengaturan Sistem, beri tahu saya.
- Memperbaiki bug di mana **hari gratis** akan **bertambah terlalu cepat** untuk beberapa pengguna. Jika Anda terkena dampak ini, beri tahu saya dan saya akan melihat apa yang bisa saya lakukan.
- Memperbaiki masalah di macOS Sonoma di mana bar tab tidak ditampilkan dengan benar.
- Memperbaiki ketidaklancaran saat menggunakan kecepatan pengguliran 'macOS' sambil menggunakan 'Klik dan Gulir' untuk membuka Launchpad.
- Memperbaiki crash di mana aplikasi 'Mac Mouse Fix Helper' (yang berjalan di latar belakang ketika Mac Mouse Fix diaktifkan) kadang-kadang crash saat merekam pintasan keyboard.
- Memperbaiki bug di mana Mac Mouse Fix akan crash saat mencoba menangkap event buatan yang dihasilkan oleh [MiddleClick-Sonoma](https://github.com/artginzburg/MiddleClick-Sonoma)
- Memperbaiki masalah di mana nama untuk beberapa mouse yang ditampilkan di dialog 'Kembalikan Default...' akan memuat nama produsen dua kali.
- Membuat 'Klik dan Seret' untuk 'Mission Control & Spaces' lebih kecil kemungkinannya untuk macet ketika komputer lambat.
- Memperbaiki penggunaan 'Force Touch' dalam string UI di mana seharusnya 'Force click'.
- Memperbaiki bug yang terjadi untuk konfigurasi tertentu, di mana membuka Launchpad atau menampilkan Desktop melalui 'Klik dan Gulir' tidak akan berfungsi jika Anda melepaskan tombol saat animasi transisi masih berlangsung.


**Lainnya**

- Beberapa peningkatan di balik layar, peningkatan stabilitas, pembersihan di balik layar, dan lainnya.

## Bagaimana Anda Dapat Membantu

Anda dapat membantu dengan membagikan **ide**, **masalah** dan **umpan balik** Anda!

Tempat terbaik untuk membagikan **ide** dan **masalah** Anda adalah [Asisten Umpan Balik](https://noah-nuebling.github.io/mac-mouse-fix-feedback-assistant/?type=bug-report).
Tempat terbaik untuk memberikan umpan balik **cepat** tidak terstruktur adalah [Diskusi Umpan Balik](https://github.com/noah-nuebling/mac-mouse-fix/discussions/366).

Anda juga dapat mengakses tempat-tempat ini dari dalam aplikasi di tab '**ⓘ Tentang**'.

**Terima kasih** telah membantu membuat Mac Mouse Fix lebih baik! 😎:)