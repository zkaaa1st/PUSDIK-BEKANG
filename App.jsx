import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ============ KONFIGURASI FOTO ============ */
const FOTO = {
  gedung: 'public/images/backgrounds/lapang2.png',
  bendera: 'public/images/backgrounds/pesawa.png',
   logo: 'public/images/backgrounds/logo.png'
}

/* ============ DATA NAVIGASI ============ */
const NAV = [
  { label: 'PROFIL SATUAN', children: [
    { label: 'SEJARAH', page: 'sejarah' },
    { label: 'VISI & MISI', page: 'visi-misi' },
    { label: 'STRUKTUR', page: 'struktur' },
    { label: 'ORGANISASI', page: 'organisasi' },
    { label: 'FASILITAS', page: 'fasilitas' }
  ]},
  { label: 'PROG DIK', children: [
    { label: 'PROGRAM', page: 'prog-dik-program' },
    { label: 'NON PROGRAM', page: 'prog-dik-non-program' }
  ]},
  { label: 'GIAT SATUAN ORGANIK', children: [
    { label: 'PROGRAM', page: 'giat-organik-program' },
    { label: 'NON PROGRAM', page: 'giat-organik-non-program' },
    { label: 'GIAT RUTIN', page: 'giat-rutin' }
  ]},
  { label: 'GIAT PENGEMBANGAN SATUAN', children: [
    { label: 'DIKLAT', page: 'diklat' },
    { label: 'DIKBANG', page: 'dikbang' },
    { label: 'SUSBINTARA', page: 'susbintara' },
    { label: 'PENDIDIKAN', page: 'pendidikan' },
    { label: 'PAMONG TN', page: 'pamong-tn' },
    { label: 'P3K', page: 'p3k' },
    { label: 'KOMCAD', page: 'komcad' }
  ]},
  { label: 'PUBLIKASI', children: [
    { label: 'JURNAL BEKANG', page: 'jurnal' },
    { label: 'MODUL PENDIDIKAN', page: 'modul' },
    { label: 'PERATURAN', page: 'peraturan' }
  ]},
  { label: 'PERSIT', children: [
    { label: 'PERSIT', page: 'persit' }
  ]},
  { label: 'MEDIA SOSIAL', children: [
    { label: 'MEDIA SOSIAL', page: 'medsos' }
  ]}
]

/* ============ DATA BERITA ============ */
const BERITA = [
  { id: 1, cat: 'UPACARA', date: 'Senin, 19 Oktober 2026', title: 'Upacara Penutupan Pendidikan Bintara Pembekalan Angkatan XXIV Tahun 2026', img: 'public/images/backgrounds/imagess.png' },
  { id: 2, cat: 'LATIHAN', date: 'Senin, 19 Oktober 2026', title: 'Latihan Lapangan Terpadu Bekang: Simulasi Air Supply dan Fleet Support di Gadobangkong', img: 'public/images/backgrounds/dikma.png' },
  { id: 3, cat: 'PRESTASI', date: 'Minggu, 18 Oktober 2026', title: 'Evaluasi OPSDIK', img: 'public/images/backgrounds/evaluasi.png' },
  { id: 4, cat: 'WORKSHOP', date: 'Sabtu, 17 Oktober 2026', title: 'Workshop AI dan Digital Logistics Bersama Universitas Mitra', img: 'public/images/backgrounds/mitra.png' },
  { id: 5, cat: 'KUNJUNGAN', date: 'Jumat, 16 Oktober 2026', title: 'Kunjungan Kerja Tim Audit Inspektur Kodiklatad di Pusdik Bekang', img: 'public/images/backgrounds/lembaga.png' },
  { id: 6, cat: 'UPACARA', date: 'Kamis, 15 Oktober 2026', title: 'Pembukaan Dikma Angkutan Tactical Angkatan XXV', img: 'public/images/backgrounds/dikma2.png' }
]

/* ============ DATA GALERI ============ */
const GALLERY = [
  { cap: 'Upacara pembukaan pendidikan baru di lapangan utama Pusdik Bekang', img: 'public/images/backgrounds/imagess.png' },
  { cap: 'Latihan pengoperasian armada angkutan taktis siswa Dikma', img: 'public/images/backgrounds/dikma.png' },
  { cap: 'Praktik manajemen gudang di Laboratorium Sistem Informasi Bekang', img: 'public/images/backgrounds/laboratorium.png' },
  { cap: 'Kegiatan jasmani dan pembinaan fisik prajurit siswa', img: 'public/images/backgrounds/jasmani.png' },
  { cap: 'Kunjungan kerja pejabat Kodiklatad ke bengkel rekayasa', img: 'public/images/backgrounds/rekayasa.png' },
  { cap: 'Simulasi pembekalan udara dan rigging kargo', img: 'public/images/backgrounds/simulasi.png' }
]

/* ============ DATA VIDEO ============ */
const VIDEOS = [
  { title: 'Profil Pusdik Bekang Kodiklatad', dur: '05:12', src: '/images/backgrounds/anjay.mp4' },
  { title: 'Latihan Terpadu Air Supply & Fleet Support', dur: '08:40', src: '/images/backgrounds/anjay.mp4' },
  { title: 'Simulasi Pembekalan Udara (Air Drop)', dur: '06:25', src: 'ForBiggerBlazes.mp4' },
  { title: 'Kehidupan Prajurit Siswa di Kesatrian', dur: '09:03', src: 'ForBiggerEscapes.mp4' }
]

/* ============ DATA DOKUMEN ============ */
const DOCS = [
  { title: 'KURIKULUM DIKMA BEKALAN TAHUN 2026', size: '4.2 MB', year: '2026' },
  { title: 'MODUL MANAJEMEN GUDANG MILITER', size: '3.1 MB', year: '2026' },
  { title: 'JURNAL LOGISTIK MILITER VOL. 12', size: '8.7 MB', year: '2025' },
  { title: 'LAPORAN KINERJA PUSDIK BEKANG 2025', size: '2.5 MB', year: '2025' },
  { title: 'RENSTRA PUSDIK BEKANG 2026-2030', size: '5.0 MB', year: '2026' }
]

/* ============ DATA PIMPINAN ============ */
const PIMPINAN = [
  { role: 'KOMANDAN PUSDIK', name: 'Kolonel Cba S. Hardianto, S.E., M.M.' },
  { role: 'WAKIL KOMANDAN', name: 'Letkol Cba Bambang Sutrisno, S.T.' },
  { role: 'KEPALA STAF', name: 'Letkol Cba Siti Nurhaliza, M.M.' },
  { role: 'KADEP BEKALAN', name: 'Mayor Cba Agus Wijaya, S.T.' },
  { role: 'KADEP ANGKUTAN', name: 'Mayor Cba Dewi Lestari, S.E.' },
  { role: 'KADEP LOGISTIK', name: 'Mayor Cba Rudi Hartono' }
]

/* ============ DATA SOSIAL MEDIA ============ */
const SOCIALS = [
  { label: 'Facebook', cls: 'fb', icon: 'f', url: 'https://www.facebook.com/p/Pusdikbekang-Pusbekangad-100090651241478/' },
  { label: 'YouTube', cls: 'yt', icon: '▶', url: 'https://www.youtube.com/@pusdikbekangofficialchanne8729' },
  { label: 'Instagram', cls: 'ig', icon: '📷', url: 'https://www.instagram.com/pusdikbekang_pusbekangad/?hl=en/' }
]

/* ============ DATA UNIT ============ */
const UNITS = ['DANPUSDIK','WADAN','KAS','DEPBEKALAN','DEPANGKUTAN','BAGUM','BAGOPS','BAGPERS','BAGLOG','GADIK','SECABA','SECATA','DENMA','RUMKIT']

/* ============ DATA FASILITAS ============ */
const FASILITAS_PROFIL = [
  { nama: 'Kamar Siswa & Siswi', file: 'public/images/backgrounds/barak.png', desc: 'Asrama representatif terpisah untuk siswa dan siswi, dilengkapi tempat tidur, lemari, meja belajar, dan pendingin ruangan.' },
  { nama: 'Kantin', file: 'public/images/backgrounds/kantin.png', desc: 'Kantin bersih dan higienis yang menyajikan menu sehat dan terjangkau bagi prajurit siswa serta personel.' },
  { nama: 'Masjid', file: 'public/images/backgrounds/masjid.png', desc: 'Masjid sebagai sarana ibadah dan pembinaan mental rohani bagi prajurit siswa beragama Islam.' },
  { nama: 'Gereja', file: 'public/images/backgrounds/gereja.png', desc: 'Gereja untuk ibadah dan pembinaan rohani bagi prajurit siswa serta personel yang beragama Kristen/Katolik.' },
  { nama: 'UKS', file: 'public/images/backgrounds/uks.png', desc: 'Unit kesehatan menyediakan banyak sekali obat yang dibutuhkan oleh siswa dan masih banyak lagi.' },
  { nama: 'Lapangan Tenis', file: 'public/images/backgrounds/tennis.png', desc: 'Lapangan tenis standar untuk rekreasi, latihan rutin, dan turnamen antar satuan.' },
  { nama: 'Lapangan Basket', file: 'public/images/backgrounds/bola.png', desc: 'Lapangan basket outdoor untuk kegiatan olahraga bersama dan kompetisi antar angkatan.' },
  { nama: 'Lapangan Futsal', file: 'public/images/backgrounds/bola.png', desc: 'Lapangan futsal untuk pembinaan olahraga tim dan mempererat soliditas prajurit siswa.' }
]

/* ============ DATA DETAIL PROGRAM DIK ============ */
const PROG_DIK_PROGRAM = [
  {
    id: 'dikma-bekalan',
    title: 'Dikma Bekalan',
    subtitle: 'Pendidikan Pembentukan Bintara Bekalan',
    duration: '16 Minggu',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Pendidikan Pembentukan Bintara (Dikma) Bekalan merupakan pendidikan pembentukan pertama bagi calon Bintara TNI AD yang akan bertugas di bidang Pembekalan dan Angkutan.',
    materi: ['Pembentukan Karakter Prajurit', 'Dasar-Dasar Logistik Militer', 'Manajemen Pergudangan', 'Sistem Distribusi Bekalan', 'Administrasi Perbekalan', 'Teknik Pengemasan dan Penyimpanan'],
    syarat: 'Tamat SLTA/sederajat, lulus tes kesehatan, lulus tes kesamaptaan jasmani',
    lulusan: 'Bintara Bekang yang siap bertugas di satuan jajaran TNI AD'
  },
  {
    id: 'dikma-angkutan',
    title: 'Dikma Angkutan Tactical',
    subtitle: 'Pendidikan Pembentukan Bintara Angkutan',
    duration: '14 Minggu',
    img: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=900&h=600&fit=crop',
    desc: 'Dikma Angkutan Tactical adalah pendidikan pembentukan Bintara yang berfokus pada bidang angkutan militer, baik angkutan darat, air, maupun udara.',
    materi: ['Manajemen Angkutan Militer', 'Pengoperasian Kendaraan Taktis', 'Perencanaan Rute dan Logistik', 'Angkutan Udara dan Air Drop', 'Pemeliharaan Kendaraan Militer', 'Koordinasi Angkutan Lintas Moda'],
    syarat: 'Tamat SLTA/sederajat, memiliki SIM B1/B2, lulus tes kesamaptaan',
    lulusan: 'Bintara Angkutan yang mampu mengelola sistem angkutan taktis'
  },
  {
    id: 'dikma-pengemudi',
    title: 'Dikma Pengemudi Berat',
    subtitle: 'Pendidikan Pengemudi Kendaraan Berat',
    duration: '10 Minggu',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Pendidikan khusus untuk membentuk prajurit pengemudi kendaraan berat militer seperti truk taktis, tank transporter, dan kendaraan khusus lainnya.',
    materi: ['Teknik Mengemudi Kendaraan Berat', 'Pengoperasian di Medan Ekstrem', 'Pemeliharaan Kendaraan Tingkat Pertama', 'Navigasi dan Peta Militer', 'Konvoi dan Pengawalan', 'Keselamatan Operasi Angkutan'],
    syarat: 'Tamat SLTA/sederajat, memiliki SIM B2, lulus tes mengemudi',
    lulusan: 'Pengemudi kendaraan berat militer yang profesional'
  },
  {
    id: 'diklapa-bekang',
    title: 'Diklapa Bekang',
    subtitle: 'Pendidikan Lanjutan Perwira Bekang',
    duration: '6 Bulan',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Pendidikan Lanjutan Pertama (Diklapa) Bekang ditujukan bagi Perwira Muda TNI AD kecabangan Bekang untuk meningkatkan kemampuan manajerial dan kepemimpinan.',
    materi: ['Manajemen Logistik Strategis', 'Kepemimpinan Militer', 'Perencanaan Operasi Bekang', 'Sistem Informasi Logistik', 'Hukum Logistik Militer', 'Studi Kasus Operasi Logistik'],
    syarat: 'Perwira Pertama (Letda/Lettu) kecabangan Bekang, masa kerja minimal 4 tahun',
    lulusan: 'Perwira Bekang yang siap memimpin satuan logistik tingkat kompi/batalyon'
  }
]

const PROG_DIK_NON_PROGRAM = [
  {
    id: 'komcad',
    title: 'Komcad (Komponen Cadangan)',
    subtitle: 'Pendidikan dan Pelatihan Komponen Cadangan TNI AD',
    duration: '3 Bulan (Dasar) + 1 Bulan (Lanjutan)',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=900&h=600&fit=crop',
    desc: 'Program pendidikan dan pelatihan bagi warga negara yang mendaftar sebagai Komponen Cadangan (Komcad) TNI AD.',
    materi: ['Pembentukan Dasar Kemiliteran', 'Latihan Tempur Dasar', 'Penggunaan Senjata dan Taktik', 'Disiplin Militer dan Etika', 'Kesiapsiagaan Bela Negara', 'Koordinasi dengan Satuan Reguler'],
    syarat: 'WNI, usia 18-35 tahun, sehat jasmani dan rohani, tidak memiliki catatan kriminal',
    lulusan: 'Prajurit Komcad yang siap mendukung operasi TNI AD'
  },
  {
    id: 'p3k',
    title: 'P3K (Pegawai Pemerintah dengan Perjanjian Kerja)',
    subtitle: 'Pembinaan dan Pengembangan Kompetensi P3K',
    duration: 'Berkesinambungan',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Program pembinaan dan pengembangan kompetensi bagi Pegawai Pemerintah dengan Perjanjian Kerja (P3K) yang bekerja di lingkungan Pusdik Bekang.',
    materi: ['Orientasi Lingkungan Militer', 'Kompetensi Teknis Bidang Tugas', 'Etika dan Disiplin PNS/PPPK', 'Pengembangan Karier', 'Kesehatan dan Keselamatan Kerja', 'Teknologi Informasi dan Administrasi'],
    syarat: 'P3K yang telah diangkat dan ditempatkan di lingkungan Pusdik Bekang',
    lulusan: 'P3K yang kompeten dan profesional dalam mendukung tugas satuan'
  },
  {
    id: 'pamong-tn',
    title: 'Pamong TN (Pamong Tentara Nasional)',
    subtitle: 'Pendidikan dan Pelatihan Pamong Tentara Nasional',
    duration: '4 Minggu',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Pendidikan Pamong TN bertujuan membentuk pembina dan pendidik yang mampu membina generasi muda dalam rangka bela negara.',
    materi: ['Pembinaan Karakter Kebangsaan', 'Metode Pendidikan dan Pelatihan', 'Kepemimpinan dan Motivasi', 'Psikologi Remaja dan Pemuda', 'Manajemen Kegiatan Kepemudaan', 'Wawasan Nusantara dan Bela Negara'],
    syarat: 'Prajurit TNI AD dengan pangkat minimal Serka, memiliki kemampuan membina',
    lulusan: 'Pamong TN yang mampu membina generasi muda dalam bela negara'
  },
  {
    id: 'sppi',
    title: 'Diklat Bela Negara SPPI',
    subtitle: 'Sekolah Perwira Pembekalan Angkutan',
    duration: '6 Minggu',
    img: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=900&h=600&fit=crop',
    desc: 'Diklat SPPI KDKMP dan KNMP merupakan pendidikan kejuruan bagi Perwira Bekang untuk menguasai dasar-dasar kecabangan Bekang.',
    materi: ['Dasar-Dasar Kecabangan Bekang', 'Sistem Perbekalan TNI AD', 'Manajemen Angkutan Militer', 'Teknik Logistik Tempur', 'Administrasi Bekang', 'Latihan Lapangan Terpadu'],
    syarat: 'Perwira TNI AD yang baru selesai Akademi Militer atau alih kecabangan ke Bekang',
    lulusan: 'Perwira Bekang yang siap melaksanakan tugas di satuan jajaran'
  }
]

const GIAT_ORGANIK_PROGRAM = [
  {
    id: 'tupok',
    title: 'Pelaksanaan Tugas Pokok',
    subtitle: 'Penyelenggaraan Pendidikan dan Pelatihan Bekang',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Tugas pokok Pusdik Bekang adalah menyelenggarakan pendidikan dan pelatihan di bidang Pembekalan dan Angkutan bagi prajurit TNI AD.',
    kegiatan: ['Penyelenggaraan Dikma Bekalan dan Angkutan', 'Pelaksanaan Diklat SPPI KDKMP dan KNMP', 'Penyelenggaraan Kursus-Kursus Spesialis', 'Evaluasi dan Pengembangan Kurikulum', 'Pembinaan Guru Militer dan Pelatih', 'Pengelolaan Fasilitas Pendidikan'],
    tujuan: 'Menghasilkan prajurit Bekang yang profesional dan siap tugas',
    jadwal: 'Berkelanjutan sesuai tahun ajaran pendidikan'
  },
  {
    id: 'binprof',
    title: 'Pembinaan Profesional',
    subtitle: 'Peningkatan Kemampuan Prajurit Siswa',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Pembinaan profesional bertujuan meningkatkan kemampuan teknis dan taktis prajurit siswa melalui latihan-latihan terpadu.',
    kegiatan: ['Latihan Lapangan Terpadu', 'Simulasi Operasi Logistik', 'Praktik Manajemen Gudang', 'Latihan Pengoperasian Kendaraan', 'Uji Kompetensi dan Sertifikasi', 'Magang di Satuan Operasional'],
    tujuan: 'Meningkatkan kompetensi teknis prajurit siswa',
    jadwal: 'Terintegrasi dalam kurikulum pendidikan'
  },
  {
    id: 'baksos',
    title: 'Bakti Sosial',
    subtitle: 'Kegiatan Sosial dan Pembinaan Teritorial',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=900&h=600&fit=crop',
    desc: 'Kegiatan bakti sosial merupakan wujud kepedulian Pusdik Bekang terhadap masyarakat sekitar.',
    kegiatan: ['Bakti Sosial Kesehatan Gratis', 'Pembangunan Fasilitas Umum', 'Bantuan Bencana Alam', 'Pemberdayaan Masyarakat', 'Kerja Bakti Bersama Masyarakat', 'Santunan Anak Yatim dan Dhuafa'],
    tujuan: 'Meningkatkan kesejahteraan masyarakat dan hubungan TNI-Rakyat',
    jadwal: 'Minimal 2 kali dalam setahun'
  }
]

const GIAT_ORGANIK_NON_PROGRAM = [
  {
    id: 'insidental',
    title: 'Kegiatan Insidental',
    subtitle: 'Tugas Tambahan dan Kegiatan Luar Biasa',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Kegiatan insidental adalah tugas-tugas tambahan yang diterima Pusdik Bekang di luar tugas pokok rutin.',
    kegiatan: ['Dukungan Logistik Operasi Militer', 'Bantuan Kemanusiaan dan Bencana', 'Pengamanan Acara Kenegaraan', 'Tugas Khusus dari Mabes AD', 'Dukungan Latihan Gabungan', 'Pengerahan Tenaga untuk Tugas Mendesak'],
    tujuan: 'Mendukung tugas TNI AD secara keseluruhan',
    jadwal: 'Sesuai kebutuhan dan perintah atasan'
  },
  {
    id: 'koordinasi',
    title: 'Koordinasi Lintas Satuan',
    subtitle: 'Sinkronisasi dengan Satuan Terkait',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Koordinasi lintas satuan dilakukan untuk memastikan sinkronisasi dan efisiensi dalam pelaksanaan tugas.',
    kegiatan: ['Rapat Koordinasi dengan Pusbekangad', 'Sinkronisasi Kurikulum dengan Kodiklatad', 'Kunjungan Kerja ke Satuan Jajaran', 'Pertukaran Informasi dan Best Practice', 'Latihan Bersama Antar Satuan', 'Evaluasi Bersama Program Pendidikan'],
    tujuan: 'Menjaga sinergi dan efisiensi pelaksanaan tugas',
    jadwal: 'Berkala sesuai kebutuhan koordinasi'
  }
]

const GIAT_RUTIN = [
  {
    id: 'tradisi',
    title: 'Tradisi',
    subtitle: 'Upacara Tradisional dan Serah Terima Jabatan',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Tradisi satuan merupakan kegiatan yang telah menjadi bagian dari budaya dan jati diri Pusdik Bekang.',
    kegiatan: ['Upacara Tradisi Kelulusan Dikma', 'Serah Terima Jabatan Danpusdik', 'Pelantikan Prajurit Siswa', 'Upacara Hari Jadi Pusdik Bekang', 'Tradisi Penyematan Brevet Bekang', 'Malam Renungan Suci'],
    makna: 'Menjaga nilai-nilai luhur dan semangat korps Bekang',
    jadwal: 'Sesuai kalender tradisi satuan'
  },
  {
    id: 'phb',
    title: 'PHB (Peringatan Hari Besar)',
    subtitle: 'HUT TNI, Hari Pahlawan, dan Hari Besar Nasional',
    img: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=900&h=600&fit=crop',
    desc: 'Peringatan Hari Besar (PHB) dilaksanakan untuk memperingati momen-momen bersejarah dan hari-hari penting nasional.',
    kegiatan: ['Upacara HUT TNI (5 Oktober)', 'Upacara Hari Pahlawan (10 November)', 'Peringatan Hari Ibu (22 Desember)', 'Upacara Hari Besar Keagamaan', 'Lomba-Lomba Memperingati HUT RI', 'Ziarah ke Taman Makam Pahlawan'],
    makna: 'Menumbuhkan jiwa patriotisme dan religiusitas',
    jadwal: 'Sesuai kalender nasional dan keagamaan'
  },
  {
    id: 'olahraga',
    title: 'Olahraga Rutin',
    subtitle: 'Lari Pagi, Senam, dan Pembinaan Jasmani',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Pembinaan jasmani merupakan kegiatan rutin yang wajib dilaksanakan oleh seluruh personel Pusdik Bekang.',
    kegiatan: ['Lari Pagi Bersama (setiap Jumat)', 'Senam Kesamaptaan (setiap Selasa & Kamis)', 'Latihan Cabang Olahraga Prestasi', 'Tes Kesamaptaan Jasmani Berkala', 'Turnamen Olahraga Antar Satuan', 'Pembinaan Atlet untuk Lomba Tingkat Tinggi'],
    makna: 'Menjaga kebugaran dan membentuk karakter sportif',
    jadwal: 'Minimal 3 kali dalam seminggu'
  }
]

const DIKLAT_DATA = [
  {
    id: 'diklat-pim',
    title: 'Diklat Kepemimpinan',
    subtitle: 'Pembinaan Kepemimpinan Prajurit',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Diklat Kepemimpinan bertujuan membentuk karakter kepemimpinan prajurit TNI AD di semua tingkatan.',
    materi: ['Teori Kepemimpinan Militer', 'Pengambilan Keputusan dalam Tekanan', 'Manajemen Konflik', 'Kepemimpinan Transformasional', 'Etika dan Moral Kepemimpinan', 'Studi Kasus Kepemimpinan'],
    peserta: 'Perwira dan Bintara TNI AD',
    durasi: '2-4 minggu tergantung jenjang'
  },
  {
    id: 'diklat-teknis',
    title: 'Diklat Teknis Kecabangan',
    subtitle: 'Pelatihan Teknis Bidang Bekang',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Diklat teknis kecabangan Bekang fokus pada penguasaan keterampilan teknis spesifik di bidang perbekalan dan angkutan.',
    materi: ['Sistem Manajemen Gudang Modern', 'Pengoperasian Alat Angkut Militer', 'Teknik Pengemasan dan Rigging', 'Sistem Informasi Logistik', 'Pemeliharaan Peralatan Bekang', 'Standar Operasional Prosedur Bekang'],
    peserta: 'Prajurit Bekang semua pangkat',
    durasi: '1-3 bulan'
  },
  {
    id: 'diklat-fungsional',
    title: 'Diklat Fungsional',
    subtitle: 'Pengembangan Kompetensi Fungsional',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Diklat fungsional ditujukan untuk pengembangan kompetensi dalam jabatan fungsional tertentu di lingkungan TNI AD.',
    materi: ['Kompetensi Jabatan Fungsional', 'Standar Kinerja dan Evaluasi', 'Pengembangan Karier Fungsional', 'Etika Profesi', 'Manajemen Waktu dan Produktivitas', 'Teknologi Pendukung Tugas Fungsional'],
    peserta: 'Personel dengan jabatan fungsional',
    durasi: '2-6 minggu'
  }
]

const DIKBANG_DATA = [
  {
    id: 'dikbang-kompetensi',
    title: 'Pengembangan Kompetensi',
    subtitle: 'Peningkatan Kemampuan Personel',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Program pengembangan kompetensi bertujuan meningkatkan kemampuan personel Pusdik Bekang secara berkelanjutan.',
    materi: ['Digital Literacy dan AI', 'Manajemen Proyek', 'Komunikasi Efektif', 'Problem Solving dan Critical Thinking', 'Bahasa Asing Militer', 'Leadership 4.0'],
    metode: 'Kelas, workshop, e-learning, dan on-the-job training',
    target: 'Seluruh personel Pusdik Bekang'
  },
  {
    id: 'dikbang-kapabilitas',
    title: 'Peningkatan Kapabilitas',
    subtitle: 'Program Peningkatan Kapabilitas Satuan',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=900&h=600&fit=crop',
    desc: 'Program peningkatan kapabilitas satuan berfokus pada peningkatan kemampuan organisasi secara keseluruhan.',
    materi: ['Modernisasi Sistem Logistik', 'Peningkatan Infrastruktur Pendidikan', 'Pengembangan Kurikulum Berbasis Kompetensi', 'Sertifikasi Internasional', 'Kerja Sama dengan Institusi Luar', 'Benchmarking dengan Satuan Terbaik'],
    metode: 'Program jangka panjang dengan target terukur',
    target: 'Peningkatan kapabilitas Pusdik Bekang secara menyeluruh'
  }
]

const SUSBINTARA_DATA = [
  {
    id: 'susbintara-keterampilan',
    title: 'Kursus Keterampilan Bintara',
    subtitle: 'Pelatihan Keterampilan Khusus Bintara',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Kursus keterampilan bintara ditujukan untuk meningkatkan keterampilan teknis spesifik Bintara Bekang.',
    materi: ['Teknik Manajemen Inventori', 'Pengoperasian Sistem Informasi Bekang', 'Teknik Pengelasan dan Fabrikasi', 'Mekanik Kendaraan Militer', 'Teknik Rigging dan Air Drop', 'Administrasi Logistik Digital'],
    peserta: 'Bintara Bekang dengan masa kerja 2-5 tahun',
    durasi: '4-8 minggu'
  },
  {
    id: 'susbintara-spesialisasi',
    title: 'Kursus Spesialisasi',
    subtitle: 'Kursus Bidang Spesialisasi Bekang',
    img: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=900&h=600&fit=crop',
    desc: 'Kursus spesialisasi memberikan pendalaman pada bidang-bidang khusus dalam kecabangan Bekang.',
    materi: ['Spesialisasi Air Supply', 'Spesialisasi Fleet Management', 'Spesialisasi Warehouse Automation', 'Spesialisasi Digital Logistics', 'Spesialisasi Cold Chain Management', 'Spesialisasi Hazardous Material Handling'],
    peserta: 'Bintara dan Tamtama Bekang terpilih',
    durasi: '6-12 minggu'
  }
]

const PENDIDIKAN_DATA = [
  {
    id: 'pendidikan-berkelanjutan',
    title: 'Program Pendidikan Berkelanjutan',
    subtitle: 'Pendidikan Formal dan Non-Formal',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Program pendidikan berkelanjutan memastikan personel Pusdik Bekang terus mengembangkan diri sepanjang karier.',
    materi: ['Program S1 dan S2 untuk Perwira', 'Diploma dan Sertifikasi Profesional', 'E-Learning dan Distance Learning', 'Workshop dan Seminar Berkala', 'Studi Banding ke Institusi Lain', 'Penelitian dan Pengembangan'],
    peserta: 'Seluruh personel sesuai jenjang',
    durasi: 'Bervariasi sesuai program'
  },
  {
    id: 'pendidikan-formal',
    title: 'Pendidikan Formal',
    subtitle: 'Program Pendidikan Resmi',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Pendidikan formal merupakan program pendidikan yang diakui secara resmi dan menghasilkan kualifikasi akademik.',
    materi: ['S1 Logistik dan Supply Chain Management', 'S2 Manajemen Logistik Militer', 'Diploma Teknik Kendaraan Militer', 'Sertifikasi Internasional (CSCP, CLTD)', 'Program Affiliasi dengan Universitas', 'Beasiswa Pendidikan Lanjutan'],
    peserta: 'Personel yang memenuhi syarat akademik',
    durasi: '1-4 tahun tergantung program'
  }
]

const PAMONG_TN_DATA = [
  {
    id: 'pamong-pembinaan',
    title: 'Pembinaan Pamong Tentara',
    subtitle: 'Program Pembinaan dan Pengembangan Pamong TN',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Pamong Tentara Nasional adalah prajurit yang ditugaskan untuk membina generasi muda dalam rangka bela negara.',
    materi: ['Metodologi Pembinaan Pemuda', 'Psikologi Perkembangan Remaja', 'Manajemen Kegiatan Kepemudaan', 'Komunikasi dan Motivasi', 'Wawasan Kebangsaan', 'Teknik Fasilitator dan Mentor'],
    peserta: 'Prajurit TNI AD terpilih',
    durasi: '4 minggu pendidikan + pembinaan berkelanjutan'
  }
]

const P3K_DATA = [
  {
    id: 'p3k-pengembangan',
    title: 'Pengembangan Pegawai P3K',
    subtitle: 'Program Pengembangan Kompetensi P3K',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Program pengembangan P3K bertujuan meningkatkan kompetensi dan profesionalisme P3K yang bekerja di lingkungan Pusdik Bekang.',
    materi: ['Orientasi Sistem Pemerintahan', 'Kompetensi Teknis Bidang Tugas', 'Manajemen dan Administrasi Publik', 'Etika dan Integritas Pegawai', 'Teknologi Informasi dan Digitalisasi', 'Pengembangan Karier dan Sertifikasi'],
    peserta: 'Seluruh P3K di lingkungan Pusdik Bekang',
    durasi: 'Berkelanjutan sepanjang tahun'
  }
]

const KOMCAD_DATA = [
  {
    id: 'komcad-pengembangan',
    title: 'Pengembangan Komponen Cadangan',
    subtitle: 'Program Pembinaan Komcad',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=900&h=600&fit=crop',
    desc: 'Program pengembangan Komcad bertujuan mempertahankan dan meningkatkan kesiapan Komponen Cadangan.',
    materi: ['Latihan Penyegaran Berkala', 'Pembaruan Pengetahuan Militer', 'Latihan Gabungan dengan Satuan Reguler', 'Pembinaan Mental dan Fisik', 'Simulasi Mobilisasi', 'Evaluasi Kesiapan Operasional'],
    peserta: 'Prajurit Komcad yang telah lulus pendidikan dasar',
    durasi: 'Latihan berkala 1-2 minggu per tahun'
  }
]

const JURNAL_DATA = [
  {
    id: 'jurnal-1',
    title: 'Jurnal Logistik Militer Vol. 12',
    subtitle: 'Edisi 2025',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Jurnal Logistik Militer adalah publikasi ilmiah berkala yang memuat artikel-artikel penelitian dan kajian di bidang logistik militer.',
    artikel: ['Optimalisasi Rantai Pasok Logistik TNI AD di Era Digital', 'Penerapan AI dalam Manajemen Gudang Militer', 'Analisis Efisiensi Distribusi Bekalan di Daerah Terpencil', 'Studi Komparatif Sistem Logistik Militer ASEAN', 'Green Logistics dalam Operasi Militer'],
    penerbit: 'Pusdik Bekang Kodiklatad',
    issn: 'ISSN 2089-XXXX'
  },
  {
    id: 'jurnal-2',
    title: 'Jurnal Bekang Edisi Khusus',
    subtitle: 'Inovasi Logistik 4.0',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Edisi khusus yang membahas transformasi digital dalam logistik militer.',
    artikel: ['Transformasi Digital Logistik Militer', 'Blockchain untuk Traceability Bekalan', 'IoT dalam Monitoring Armada Angkutan', 'Big Data Analytics untuk Perencanaan Logistik', 'Cybersecurity dalam Sistem Informasi Logistik'],
    penerbit: 'Pusdik Bekang Kodiklatad',
    issn: 'ISSN 2089-XXXX'
  }
]

const MODUL_DATA = [
  {
    id: 'modul-1',
    title: 'Modul Manajemen Gudang Militer',
    subtitle: 'Panduan Lengkap Pengelolaan Gudang Bekang',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=600&fit=crop',
    desc: 'Modul ini merupakan panduan komprehensif untuk pengelolaan gudang militer sesuai standar TNI AD.',
    bab: ['Bab 1: Prinsip Dasar Manajemen Gudang', 'Bab 2: Sistem Inventori dan Stock Control', 'Bab 3: Teknik Penyimpanan dan Pengemasan', 'Bab 4: Keamanan dan Keselamatan Gudang', 'Bab 5: Teknologi Informasi dalam Gudang', 'Bab 6: Audit dan Evaluasi Gudang'],
    halaman: '245 halaman',
    tahun: '2026'
  },
  {
    id: 'modul-2',
    title: 'Modul Dasar-Dasar Logistik Militer',
    subtitle: 'Pengantar Ilmu Logistik untuk Prajurit Bekang',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'Modul pengantar yang memberikan pemahaman dasar tentang ilmu logistik militer.',
    bab: ['Bab 1: Pengantar Logistik Militer', 'Bab 2: Sejarah dan Perkembangan Bekang', 'Bab 3: Prinsip-Prinsip Logistik', 'Bab 4: Sistem Perbekalan TNI AD', 'Bab 5: Sistem Angkutan Militer', 'Bab 6: Logistik dalam Operasi Militer'],
    halaman: '180 halaman',
    tahun: '2026'
  }
]

const PERATURAN_DATA = [
  {
    id: 'peraturan-1',
    title: 'RENSTRA PUSDIK BEKANG 2026-2030',
    subtitle: 'Rencana Strategis Jangka Menengah',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
    desc: 'Rencana Strategis (RENSTRA) Pusdik Bekang 2026-2030 merupakan dokumen perencanaan jangka menengah.',
    isi: ['Visi dan Misi Pusdik Bekang 2026-2030', 'Tujuan dan Sasaran Strategis', 'Program dan Kegiatan Prioritas', 'Indikator Kinerja Utama', 'Anggaran dan Pembiayaan', 'Monitoring dan Evaluasi'],
    nomor: 'Perkasad No. XX Tahun 2025',
    status: 'Berlaku'
  },
  {
    id: 'peraturan-2',
    title: 'Peraturan Komandan Pusdik Bekang',
    subtitle: 'Tata Tertib dan Standar Operasional',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Kumpulan peraturan internal Pusdik Bekang yang mengatur tata tertib dan standar operasional prosedur.',
    isi: ['Tata Tertib Kehidupan Kesatrian', 'SOP Penyelenggaraan Pendidikan', 'Standar Kompetensi Lulusan', 'Pedoman Evaluasi dan Penilaian', 'Aturan Penggunaan Fasilitas', 'Sanksi dan Penghargaan'],
    nomor: 'Perdanpusdikbekang No. XX Tahun 2026',
    status: 'Berlaku'
  }
]

const PERSIT_DATA = [
  {
    id: 'persit-profil',
    title: 'Profil PERSIT Cabang XXIX',
    subtitle: 'Mengenal Pengurus dan Anggota PERSIT',
    img: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=900&h=600&fit=crop',
    desc: 'PERSIT (Persit Kartika Chandra Kirana) Cabang XXIX Pusdik Bekang merupakan organisasi istri prajurit TNI AD.',
    struktur: ['Ketua: Ny. [Nama Istri Danpusdik]', 'Wakil Ketua: Ny. [Nama Istri Wadanpusdik]', 'Sekretaris: Ny. [Nama]', 'Bendahara: Ny. [Nama]', 'Ketua Pokja: Berbagai Bidang'],
    anggota: 'Seluruh istri prajurit di lingkungan Pusdik Bekang',
    berdira: 'Sesuai dengan berdirinya Pusdik Bekang'
  },
  {
    id: 'persit-sosial',
    title: 'Kegiatan Sosial & Bakti',
    subtitle: 'Bakti Sosial, Pemberian Sembako, dan Kunjungan',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=900&h=600&fit=crop',
    desc: 'PERSIT Cabang XXIX secara rutin melaksanakan kegiatan sosial dan bakti untuk membantu masyarakat yang membutuhkan.',
    kegiatan: ['Bakti Sosial Kesehatan Gratis', 'Pembagian Sembako untuk Dhuafa', 'Kunjungan ke Anggota yang Sakit', 'Santunan Anak Yatim', 'Bakti Sosial di Daerah Terpencil', 'Donor Darah Bersama PMI'],
    jadwal: 'Minimal 4 kali dalam setahun',
    manfaat: 'Meningkatkan kepedulian sosial dan kesejahteraan masyarakat'
  },
  {
    id: 'persit-ekonomi',
    title: 'Pemberdayaan Ekonomi',
    subtitle: 'Pelatihan Keterampilan dan Koperasi',
    img: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=900&h=600&fit=crop',
    desc: 'Program pemberdayaan ekonomi bertujuan meningkatkan kemandirian ekonomi keluarga prajurit.',
    kegiatan: ['Pelatihan Menjahit dan Tata Busana', 'Pelatihan Memasak dan Boga', 'Pelatihan Kerajinan Tangan', 'Pengembangan Koperasi PERSIT', 'Bazar dan Pameran Produk Anggota', 'Pelatihan Digital Marketing'],
    jadwal: 'Berkala setiap bulan',
    manfaat: 'Meningkatkan pendapatan dan kemandirian ekonomi keluarga prajurit'
  },
  {
    id: 'persit-diklat',
    title: 'Pendidikan & Pelatihan',
    subtitle: 'Pembinaan Mental dan Keterampilan',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&h=600&fit=crop',
    desc: 'Program pendidikan dan pelatihan bagi anggota PERSIT untuk meningkatkan kualitas SDM istri prajurit.',
    kegiatan: ['Pembinaan Mental dan Spiritual', 'Pelatihan Parenting', 'Workshop Kesehatan Keluarga', 'Pelatihan Keuangan Keluarga', 'Seminar Wawasan Kebangsaan', 'Kelas Bahasa dan Komputer'],
    jadwal: 'Berkala sesuai program kerja',
    manfaat: 'Meningkatkan kualitas dan kesejahteraan anggota PERSIT'
  }
]

/* ============ KOMPONEN BANTU ============ */
function SmartImg({ src, alt, className, fbClass, fbLabel }) {
  const [ok, setOk] = useState(true)
  useEffect(() => { setOk(true) }, [src])
  if (!ok) return <div className={'img-fallback ' + (fbClass || '')} role="img" aria-label={alt || fbLabel}>{fbLabel}</div>
  return <img src={src} alt={alt || ''} className={className} onError={() => setOk(false)} />
}

function Crumb({ trail, go }) {
  return (
    <div className="crumb">
      <button onClick={() => go('home')}>Beranda</button>
      {trail.map((t, i) => (
        <span key={i}>
          <span className="crumb-sep">›</span>
          <button className={i === trail.length - 1 ? 'now' : ''} onClick={() => go(t.page)}>{t.label}</button>
        </span>
      ))}
    </div>
  )
}

function PageShell({ title, trail, go, children }) {
  return (
    <div className="page-wrap">
      <Crumb trail={trail} go={go} />
      <h1 className="page-title">{title}</h1>
      {children}
    </div>
  )
}

function FormPage({ title, desc, fields, notify, go, trail }) {
  const [vals, setVals] = useState({})
  const [errs, setErrs] = useState({})
  const submit = (e) => {
    e.preventDefault()
    const er = {}
    fields.forEach(f => {
      const v = (vals[f.name] || '').trim()
      if (f.req && !v) er[f.name] = 'Wajib diisi'
      if (f.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) er[f.name] = 'Email tidak valid'
    })
    setErrs(er)
    if (Object.keys(er).length) { notify('️ Periksa kembali isian formulir.'); return }
    setVals({})
    notify('✅ ' + title + ': berhasil dikirim!')
  }
  return (
    <PageShell title={title} trail={trail} go={go}>
      <p className="page-desc">{desc}</p>
      <form className="form-card" onSubmit={submit}>
        <div className="form-grid">
          {fields.map(f => (
            <div key={f.name} className={'field' + (f.full ? ' full' : '')}>
              <label>{f.label}{f.req && <span className="req">*</span>}</label>
              {f.type === 'textarea' ? (
                <textarea rows="5" value={vals[f.name] || ''} placeholder={f.ph} onChange={e => setVals({ ...vals, [f.name]: e.target.value })} />
              ) : f.type === 'select' ? (
                <select value={vals[f.name] || ''} onChange={e => setVals({ ...vals, [f.name]: e.target.value })}>
                  <option value="">-- Pilih --</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={f.type || 'text'} value={vals[f.name] || ''} placeholder={f.ph} onChange={e => setVals({ ...vals, [f.name]: e.target.value })} />
              )}
              {errs[f.name] && <span className="err">{errs[f.name]}</span>}
            </div>
          ))}
        </div>
        <button type="submit" className="submit-btn">KIRIM ▸</button>
      </form>
    </PageShell>
  )
}

/* ============ KOMPONEN DETAIL CARD ============ */
function DetailCard({ item, onBack, go }) {
  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack}>← Kembali</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${item.img})` }}>
        <div className="detail-hero-overlay">
          <h2>{item.title}</h2>
          <p className="detail-subtitle">{item.subtitle}</p>
        </div>
      </div>
      <div className="detail-content">
        {item.duration && <div className="detail-meta"><strong>Durasi:</strong> {item.duration}</div>}
        {item.peserta && <div className="detail-meta"><strong>Peserta:</strong> {item.peserta}</div>}
        {item.syarat && <div className="detail-meta"><strong>Syarat:</strong> {item.syarat}</div>}
        {item.lulusan && <div className="detail-meta"><strong>Lulusan:</strong> {item.lulusan}</div>}
        {item.tujuan && <div className="detail-meta"><strong>Tujuan:</strong> {item.tujuan}</div>}
        {item.jadwal && <div className="detail-meta"><strong>Jadwal:</strong> {item.jadwal}</div>}
        {item.makna && <div className="detail-meta"><strong>Makna:</strong> {item.makna}</div>}
        {item.metode && <div className="detail-meta"><strong>Metode:</strong> {item.metode}</div>}
        {item.target && <div className="detail-meta"><strong>Target:</strong> {item.target}</div>}
        {item.penerbit && <div className="detail-meta"><strong>Penerbit:</strong> {item.penerbit}</div>}
        {item.issn && <div className="detail-meta"><strong>ISSN:</strong> {item.issn}</div>}
        {item.halaman && <div className="detail-meta"><strong>Halaman:</strong> {item.halaman}</div>}
        {item.tahun && <div className="detail-meta"><strong>Tahun:</strong> {item.tahun}</div>}
        {item.nomor && <div className="detail-meta"><strong>Nomor:</strong> {item.nomor}</div>}
        {item.status && <div className="detail-meta"><strong>Status:</strong> {item.status}</div>}
        {item.anggota && <div className="detail-meta"><strong>Anggota:</strong> {item.anggota}</div>}
        {item.berdira && <div className="detail-meta"><strong>Berdiri:</strong> {item.berdira}</div>}
        {item.manfaat && <div className="detail-meta"><strong>Manfaat:</strong> {item.manfaat}</div>}

        <div className="detail-section">
          <h3>📋 Deskripsi</h3>
          <p>{item.desc}</p>
        </div>

        {item.materi && (
          <div className="detail-section">
            <h3>📚 Materi Pendidikan</h3>
            <ul>{item.materi.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>
        )}

        {item.kegiatan && (
          <div className="detail-section">
            <h3>🎯 Kegiatan</h3>
            <ul>{item.kegiatan.map((k, i) => <li key={i}>{k}</li>)}</ul>
          </div>
        )}

        {item.artikel && (
          <div className="detail-section">
            <h3>📰 Artikel</h3>
            <ul>{item.artikel.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </div>
        )}

        {item.bab && (
          <div className="detail-section">
            <h3>📖 Daftar Isi</h3>
            <ul>{item.bab.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        )}

        {item.isi && (
          <div className="detail-section">
            <h3>📑 Isi Peraturan</h3>
            <ul>{item.isi.map((is, i) => <li key={i}>{is}</li>)}</ul>
          </div>
        )}

        {item.struktur && (
          <div className="detail-section">
            <h3> Struktur Pengurus</h3>
            <ul>{item.struktur.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        )}

        <div className="cta-row">
          <button className="submit-btn" onClick={() => go('kontak')}>✉ Hubungi Kami</button>
          <button className="ghost-btn" onClick={onBack}>← Kembali</button>
        </div>
      </div>
    </div>
  )
}

/* ============ HERO ============ */
function Hero({ go }) {
  return (
    <header className="hero">
      <div className="hero-base">
        <SmartImg src={FOTO.gedung} alt="Gedung Pusdik Bekang" className="building-photo" fbClass="fb-building" fbLabel="PUSDIK BEKANG — CIMAHI" />
      </div>
      <div className="b-sign">PUSDIK BEKANG</div>
      <div className="flag-wrap">
        <SmartImg src={FOTO.bendera} alt="Bendera Merah Putih" className="flag-photo" fbClass="fb-flag" fbLabel="" />
      </div>
      <div className="hero-gold">CEPAT • TEPAT • HANDAL</div>
      <button className="emblem" onClick={() => go('tentang')} title="Tentang Pusdik Bekang">
        <SmartImg src={FOTO.logo} alt="Logo Pusdik Bekang" className="emblem-photo" fbClass="fb-logo" fbLabel="PB" />
      </button>
    </header>
  )
}

/* ============ NAVBAR ============ */
function Navbar({ go, setSearchOpen }) {
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button className="nav-home" onClick={() => go('home')} aria-label="Beranda">🏠</button>
        <button className={'hamb' + (mobile ? ' on' : '')} onClick={() => setMobile(!mobile)} aria-label="Menu"><span /><span /><span /></button>
        <ul className={'nav-menu' + (mobile ? ' open' : '')}>
          {NAV.map((item, i) => (
            <li key={i} className={'nav-item' + (open === i ? ' opened' : '')} onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}>
              <button className="nav-link" onClick={() => { setOpen(open === i ? null : i); if (item.children && item.children[0]) { go(item.children[0].page); setMobile(false) } }}>
                {item.label}
              </button>
              <div className="dropdown">
                {item.children.map((c, ci) => (
                  <div key={ci} className="dd-item">
                    <button className="dd-link" onClick={() => { go(c.page); setMobile(false) }}>{c.label}</button>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <button className="nav-search" onClick={() => setSearchOpen(true)} aria-label="Cari"></button>
      </div>
    </nav>
  )
}

/* ============ SLIDER ============ */
function Slider({ go }) {
  const [idx, setIdx] = useState(0)
  const SLIDES = [
    { type: 'image', berita: BERITA[0] },
    { type: 'banner' },
    { type: 'image', berita: BERITA[1] },
    { type: 'image', berita: { id: 901, cat: 'DOKUMENTASI', title: 'Gedung Utama Pusdik Bekang Cimahi pada Pagi Hari', img: 'public/images/backgrounds/gedung.png' }},
    { type: 'image', berita: { id: 902, cat: 'FASILITAS', title: 'Pusdik Bekang Tampak Dari Depan', img: 'public/images/backgrounds/pesawa.png' }}
  ]
  
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(t)
  }, [])
  
  return (
    <div className="slider">
      {SLIDES.map((s, i) => (
        <div key={i} className={'slide' + (i === idx ? ' active' : '')}
          onClick={() => s.berita && go('berita-detail', s.berita.id)}
          style={{ cursor: s.berita ? 'pointer' : 'default' }}>
          {s.type === 'banner' ? (
            <div className="slide-banner">
              <div className="sb-left">
                <div className="sb-81">76</div>
                <div className="sb-text">
                  <strong>HUT PUSDIK BEKANG</strong>
                  <strong>PUSAT PENDIDIKAN BEKALAN ANGKUTAN</strong>
                  <span>CEPAT • TEPAT • HANDAL</span>
                </div>
              </div>
              <div className="sb-dots" aria-hidden="true" />
            </div>
          ) : (
            <>
              <div className="slide-img" style={{ backgroundImage: `url(${s.berita.img})` }} />
              <div className="slide-cap">
                <span className="s-cat">{s.berita.cat}</span>
                <h3>{s.berita.title}</h3>
              </div>
            </>
          )}
        </div>
      ))}
      <button className="sl-arrow prev" onClick={e => { e.stopPropagation(); setIdx((idx - 1 + SLIDES.length) % SLIDES.length) }} aria-label="Sebelumnya">‹</button>
      <button className="sl-arrow next" onClick={e => { e.stopPropagation(); setIdx((idx + 1) % SLIDES.length) }} aria-label="Berikutnya">›</button>
      <div className="sl-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={'sl-dot' + (i === idx ? ' on' : '')} onClick={e => { e.stopPropagation(); setIdx(i) }} aria-label={'Slide ' + (i + 1)} />
        ))}
      </div>
    </div>
  )
}

/* ============ FOOTER ============ */
function Footer({ go, notify, openExternal }) {
  const [email, setEmail] = useState('')
  const sub = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { notify('⚠️ Email tidak valid.'); return }
    setEmail('')
    notify('✅ Terima kasih! Anda terdaftar newsletter Pusdik Bekang.')
  }
  return (
    <footer className="footer">
      <div className="f-inner">
        <div className="f-grid">
          <div className="f-col">
            <h4>MENU UTAMA</h4>
            <ul>
              <li><button onClick={() => go('home')}>Beranda</button></li>
              <li><button onClick={() => go('sejarah')}>Sejarah</button></li>
              <li><button onClick={() => go('prog-dik-program')}>Program Pendidikan</button></li>
              <li><button onClick={() => go('berita')}>Berita</button></li>
              <li><button onClick={() => go('kontak')}>Kontak</button></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>TAUTAN</h4>
            <ul>
              <li><button onClick={() => openExternal('https://tniad.mil.id', 'TNI AD')}>TNI AD</button></li>
              <li><button onClick={() => openExternal('https://www.tni.mil.id', 'Mabes TNI')}>MABES TNI</button></li>
              <li><button onClick={() => openExternal('https://www.kemhan.go.id', 'Kemhan RI')}>KEMHAN RI</button></li>
              <li><button onClick={() => go('struktur')}>Struktur</button></li>
              <li><button onClick={() => go('persit')}>PERSIT</button></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>INFORMASI KONTAK</h4>
            <p>Pusdik Bekang Kodiklatad</p>
            <p>Jl. Gatot Subroto No.1, Kota Cimahi, Jawa Barat 40523</p>
            <p>Telp: (022) 665-4321</p>
            <p>info@pusdikbekang.mil.id</p>
            <div className="f-social">
              {SOCIALS.map(s => (
                <button key={s.cls} className={'soc ' + s.cls} onClick={() => openExternal(s.url, s.label)} aria-label={s.label}>{s.icon}</button>
              ))}
            </div>
          </div>
          <div className="f-col">
            <h4>STATISTIK & NEWSLETTER</h4>
            <ul className="f-stats">
              <li><span>Pengunjung Hari Ini:</span> <strong>342</strong></li>
              <li><span>Minggu Ini:</span> <strong>2.180</strong></li>
              <li><span>Bulan Ini:</span> <strong>9.456</strong></li>
              <li><span>Jumlah:</span> <strong>1.284.930</strong></li>
            </ul>
            <form className="f-news" onSubmit={sub}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email newsletter…" />
              <button type="submit">KIRIM</button>
            </form>
          </div>
        </div>
        <div className="f-bottom">Hak Cipta © {new Date().getFullYear()} Pusdik Bekang Kodiklatad TNI AD. Hak Cipta Dilindungi.</div>
      </div>
    </footer>
  )
}

/* ============ APP ============ */
export default function App() {
  const [route, setRoute] = useState({ page: 'home' })
  const [toast, setToast] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [lightbox, setLightbox] = useState(null)
  const [videoPlay, setVideoPlay] = useState(null)
  const [backTop, setBackTop] = useState(false)
  const [detailItem, setDetailItem] = useState(null)
  const toastTimer = useRef(null)

  const go = (page, param) => {
    setRoute({ page, param })
    setDetailItem(null)
    setSearchOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const notify = (msg) => {
    setToast(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 3200)
  }
  
  useEffect(() => {
    const onScroll = () => setBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  const download = (title) => {
    const blob = new Blob(['PUSDIK BEKANG KODIKLATAD TNI AD\n\n' + title + '\n\n(Dokumen contoh)'], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = title.replace(/[^\w\d]+/g, '_').slice(0, 60) + '.txt'
    document.body.appendChild(a); a.click(); a.remove()
    URL.revokeObjectURL(url)
    notify('⬇️ Unduhan dimulai: ' + title.slice(0, 40) + '…')
  }
  
  const openExternal = (url, label) => { 
    window.open(url, '_blank', 'noopener'); 
    notify(' Membuka ' + label + '…') 
  }

  const results = query.trim()
    ? [
        ...BERITA.filter(b => b.title.toLowerCase().includes(query.toLowerCase())).map(b => ({ label: b.title, page: 'berita-detail', param: b.id })),
        ...Object.keys(PAGE_TITLES).filter(k => k !== 'home' && PAGE_TITLES[k].toLowerCase().includes(query.toLowerCase())).map(k => ({ label: 'Halaman: ' + PAGE_TITLES[k], page: k }))
      ].slice(0, 8)
    : []

  const berita = BERITA.find(b => b.id === route.param)
  const openDetail = (item) => { setDetailItem(item); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const closeDetail = () => setDetailItem(null)

  const renderDetailPage = (data) => {
    if (detailItem) {
      return <DetailCard item={detailItem} onBack={closeDetail} go={go} />
    }
    return (
      <div className="doc-list">
        {data.map((item, i) => (
          <div key={i} className="list-card detail-card">
            <div className="detail-card-img" style={{ backgroundImage: `url(${item.img})` }} />
            <div className="detail-card-body">
              <h3>{item.title}</h3>
              <p className="detail-card-subtitle">{item.subtitle}</p>
              <p>{item.desc.substring(0, 120)}...</p>
              <button className="dl-btn" onClick={() => openDetail(item)}>📖 Baca Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const PAGE_TITLES = {
    home: 'Beranda', sejarah: 'Sejarah', 'visi-misi': 'Visi & Misi', struktur: 'Struktur',
    organisasi: 'Organisasi', fasilitas: 'Fasilitas', 'prog-dik-program': 'Program Pendidikan',
    'prog-dik-non-program': 'Non Program', 'giat-organik-program': 'Program Giat Organik',
    'giat-organik-non-program': 'Non Program Giat Organik', 'giat-rutin': 'Giat Rutin',
    diklat: 'Diklat', dikbang: 'Dikbang', susbintara: 'Susbintara', pendidikan: 'Pendidikan',
    'pamong-tn': 'Pamong TN', p3k: 'P3K', komcad: 'Komcad', berita: 'Berita',
    'berita-detail': 'Detail Berita', galeri: 'Galeri Foto', video: 'Video',
    medsos: 'Media Sosial', kontak: 'Kontak', persit: 'PERSIT',
    kurikulum: 'Kurikulum', jurnal: 'Jurnal Bekang', modul: 'Modul Pendidikan',
    peraturan: 'Peraturan', jadwal: 'Jadwal Pendidikan', elearning: 'E-Learning',
    perpustakaan: 'Perpustakaan'
  }

  const renderPage = () => {
    if (route.page === 'sejarah') {
      return (
        <PageShell title="Sejarah Pusdik Bekang" trail={[{ label: 'Profil Satuan', page: 'sejarah' }]} go={go}>
          <p className="page-desc">Pusat Pendidikan Pembekalan Angkutan (Pusdik Bekang) didirikan sebagai komando pelaksana pendidikan di bawah Kodiklatad.</p>
          <div className="info-cards">
            <div className="info-card"><h3>📅 Pembentukan</h3><p>Berdiri sebagai pusat pendidikan spesialisasi Bekang Angkatan Darat.</p></div>
            <div className="info-card"><h3>📈 Perkembangan</h3><p>Berkembang menjadi pusat pendidikan modern dengan teknologi terkini.</p></div>
            <div className="info-card"><h3>🏆 Prestasi</h3><p>Mencetak ribuan prajurit Bekang profesional untuk seluruh Indonesia.</p></div>
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('visi-misi')}>Lihat Visi & Misi ▸</button>
            <button className="ghost-btn" onClick={() => go('struktur')}>Lihat Struktur ▸</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'visi-misi') {
      return (
        <PageShell title="Visi & Misi" trail={[{ label: 'Profil Satuan', page: 'visi-misi' }]} go={go}>
          <div className="info-cards">
            <div className="info-card"><h3>🎯 Visi</h3><p>Menjadi pusat pendidikan Bekang yang modern, adaptif, dan profesional.</p></div>
            <div className="info-card"><h3>🚀 Misi</h3><p>Mencetak prajurit Bekang unggul berbasis teknologi logistik terkini.</p></div>
            <div className="info-card"><h3>⚙️ Motto</h3><p>Cepat, Tepat, Handal dalam setiap penyelenggaraan pendidikan.</p></div>
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('sejarah')}>← Kembali ke Sejarah</button>
            <button className="ghost-btn" onClick={() => go('organisasi')}>Lihat Organisasi ▸</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'struktur') {
      return (
        <PageShell title="Struktur Organisasi" trail={[{ label: 'Profil Satuan', page: 'struktur' }]} go={go}>
          <div className="org-top"><div className="org-box gold">KOMANDAN PUSDIK BEKANG</div></div>
          <div className="org-line" />
          <div className="org-row">
            <div className="org-box">WAKIL KOMANDAN</div>
            <div className="org-box">KEPALA STAF</div>
          </div>
          <div className="org-line" />
          <div className="unit-grid">
            {UNITS.filter(u => !['DANPUSDIK','WADAN','KAS'].includes(u)).map((u, i) => (
              <button key={i} className="unit-card" onClick={() => notify('✅ Membuka profil unit: ' + u)}>🏛️ {u}</button>
            ))}
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('organisasi')}>Lihat Organisasi Lengkap ▸</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'organisasi') {
      return (
        <PageShell title="Organisasi Pusdik Bekang" trail={[{ label: 'Profil Satuan', page: 'organisasi' }]} go={go}>
          <p className="page-desc">Organisasi Pusdik Bekang terdiri dari berbagai departemen dan satuan.</p>
          <div className="unit-grid">
            {UNITS.map((u, i) => (
              <button key={i} className="unit-card" onClick={() => notify('✅ Membuka detail: ' + u)}>🏛️ {u}</button>
            ))}
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('fasilitas')}>Lihat Fasilitas ▸</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'fasilitas') {
      return (
        <PageShell title="Fasilitas Pusdik Bekang" trail={[{ label: 'Profil Satuan', page: 'fasilitas' }]} go={go}>
          <p className="page-desc">Sarana lengkap untuk menunjang kehidupan sehari-hari, ibadah, dan pembinaan jasmani.</p>
          <div className="fas-grid">
            {FASILITAS_PROFIL.map((f, i) => (
              <div key={i} className="fas-card">
                <div className="fas-img">
                  <SmartImg src={f.file} alt={f.nama} className="fas-photo" fbClass="fb-fac" fbLabel={f.nama} />
                </div>
                <div className="fas-body">
                  <h3>{f.nama}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('galeri')}> Lihat Galeri</button>
            <button className="ghost-btn" onClick={() => go('kontak')}>✉ Hubungi Kami</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'prog-dik-program') {
      return (
        <PageShell title="Program Pendidikan" trail={[{ label: 'Prog Dik', page: 'prog-dik-program' }]} go={go}>
          <p className="page-desc">Program pendidikan reguler Pusdik Bekang untuk membentuk prajurit Bekang yang profesional.</p>
          {renderDetailPage(PROG_DIK_PROGRAM)}
        </PageShell>
      )
    }

    if (route.page === 'prog-dik-non-program') {
      return (
        <PageShell title="Non Program Pendidikan" trail={[{ label: 'Prog Dik', page: 'prog-dik-non-program' }]} go={go}>
          <p className="page-desc">Program pendidikan non-gelar dan pelatihan khusus untuk pengembangan kompetensi.</p>
          {renderDetailPage(PROG_DIK_NON_PROGRAM)}
        </PageShell>
      )
    }

    if (route.page === 'giat-organik-program') {
      return (
        <PageShell title="Program Kegiatan Satuan Organik" trail={[{ label: 'Giat Satuan Organik', page: 'giat-organik-program' }]} go={go}>
          <p className="page-desc">Kegiatan program satuan yang merupakan pelaksanaan tugas pokok Pusdik Bekang.</p>
          {renderDetailPage(GIAT_ORGANIK_PROGRAM)}
        </PageShell>
      )
    }

    if (route.page === 'giat-organik-non-program') {
      return (
        <PageShell title="Non Program Kegiatan Satuan" trail={[{ label: 'Giat Satuan Organik', page: 'giat-organik-non-program' }]} go={go}>
          <p className="page-desc">Kegiatan non-program yang meliputi tugas tambahan dan koordinasi lintas satuan.</p>
          {renderDetailPage(GIAT_ORGANIK_NON_PROGRAM)}
        </PageShell>
      )
    }

    if (route.page === 'giat-rutin') {
      return (
        <PageShell title="Kegiatan Rutinitas" trail={[{ label: 'Giat Satuan Organik', page: 'giat-rutin' }]} go={go}>
          <p className="page-desc">Kegiatan rutin yang dilaksanakan secara berkala untuk menjaga tradisi dan pembinaan.</p>
          {renderDetailPage(GIAT_RUTIN)}
        </PageShell>
      )
    }

    if (route.page === 'diklat') {
      return (
        <PageShell title="Diklat (Pendidikan dan Pelatihan)" trail={[{ label: 'Giat Pengembangan', page: 'diklat' }]} go={go}>
          <p className="page-desc">Program pendidikan dan pelatihan untuk meningkatkan kompetensi prajurit TNI AD.</p>
          {renderDetailPage(DIKLAT_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'dikbang') {
      return (
        <PageShell title="Dikbang (Pendidikan dan Pengembangan)" trail={[{ label: 'Giat Pengembangan', page: 'dikbang' }]} go={go}>
          <p className="page-desc">Program pengembangan kompetensi dan kapabilitas personel serta satuan.</p>
          {renderDetailPage(DIKBANG_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'susbintara') {
      return (
        <PageShell title="Susbintara (Kursus Bintara)" trail={[{ label: 'Giat Pengembangan', page: 'susbintara' }]} go={go}>
          <p className="page-desc">Kursus keterampilan dan spesialisasi untuk Bintara Bekang.</p>
          {renderDetailPage(SUSBINTARA_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'pendidikan') {
      return (
        <PageShell title="Pendidikan" trail={[{ label: 'Giat Pengembangan', page: 'pendidikan' }]} go={go}>
          <p className="page-desc">Program pendidikan berkelanjutan untuk pengembangan karier dan kompetensi.</p>
          {renderDetailPage(PENDIDIKAN_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'pamong-tn') {
      return (
        <PageShell title="Pamong TN" trail={[{ label: 'Giat Pengembangan', page: 'pamong-tn' }]} go={go}>
          <p className="page-desc">Program pembinaan Pamong Tentara Nasional untuk membina generasi muda.</p>
          {renderDetailPage(PAMONG_TN_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'p3k') {
      return (
        <PageShell title="P3K" trail={[{ label: 'Giat Pengembangan', page: 'p3k' }]} go={go}>
          <p className="page-desc">Program pengembangan kompetensi bagi Pegawai Pemerintah dengan Perjanjian Kerja.</p>
          {renderDetailPage(P3K_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'komcad') {
      return (
        <PageShell title="Komcad" trail={[{ label: 'Giat Pengembangan', page: 'komcad' }]} go={go}>
          <p className="page-desc">Program pembinaan dan pengembangan Komponen Cadangan.</p>
          {renderDetailPage(KOMCAD_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'jurnal') {
      return (
        <PageShell title="Jurnal Bekang" trail={[{ label: 'Publikasi', page: 'jurnal' }]} go={go}>
          <p className="page-desc">Publikasi ilmiah berkala yang memuat artikel-artikel penelitian di bidang logistik militer.</p>
          {renderDetailPage(JURNAL_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'modul') {
      return (
        <PageShell title="Modul Pendidikan" trail={[{ label: 'Publikasi', page: 'modul' }]} go={go}>
          <p className="page-desc">Modul-modul pendidikan yang digunakan dalam penyelenggaraan pendidikan dan pelatihan.</p>
          {renderDetailPage(MODUL_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'peraturan') {
      return (
        <PageShell title="Peraturan & Kebijakan" trail={[{ label: 'Publikasi', page: 'peraturan' }]} go={go}>
          <p className="page-desc">Dokumen peraturan dan kebijakan yang menjadi pedoman pelaksanaan tugas.</p>
          {renderDetailPage(PERATURAN_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'persit') {
      return (
        <PageShell title="PERSIT Kartika Chandra Kirana" trail={[{ label: 'PERSIT', page: 'persit' }]} go={go}>
          <p className="page-desc">PERSIT Cabang XXIX Pusdik Bekang merupakan wadah organisasi istri prajurit.</p>
          {renderDetailPage(PERSIT_DATA)}
        </PageShell>
      )
    }

    if (route.page === 'medsos') {
      return (
        <PageShell title="Media Sosial Pusdik Bekang" trail={[{ label: 'Media Sosial', page: 'medsos' }]} go={go}>
          <p className="page-desc">Ikuti perkembangan informasi melalui kanal media sosial resmi kami.</p>
          <div className="soc-grid">
            {SOCIALS.map(s => (
              <button key={s.cls} className={'soc-card ' + s.cls} onClick={() => openExternal(s.url, s.label)}>
                <span className="soc-big">{s.icon}</span>
                <span>{s.label}</span>
                <small>@pusdikbekang_pusbekangad</small>
              </button>
            ))}
          </div>
          <div className="cta-row" style={{marginTop: '32px'}}>
            <button className="submit-btn" onClick={() => go('berita')}>📰 Lihat Berita Terbaru</button>
            <button className="ghost-btn" onClick={() => go('galeri')}> Lihat Galeri Foto</button>
          </div>
        </PageShell>
      )
    }

    if (route.page === 'berita') {
      return (
        <PageShell title="Berita Pusdik Bekang" trail={[{ label: 'Berita', page: 'berita' }]} go={go}>
          <div className="card-list">
            {BERITA.map(b => (
              <button key={b.id} className="row-card" onClick={() => go('berita-detail', b.id)}>
                <div className="row-img" style={{ backgroundImage: `url(${b.img})` }} />
                <div className="row-body">
                  <span className="s-cat">{b.cat}</span>
                  <h3>{b.title}</h3>
                  <span className="n-meta">📅 {b.date}</span>
                </div>
              </button>
            ))}
          </div>
        </PageShell>
      )
    }
        
    if (route.page === 'berita-detail') {
      return berita ? (
        <PageShell title="Detail Berita" trail={[{ label: 'Berita', page: 'berita' }, { label: 'Detail', page: 'berita-detail' }]} go={go}>
          <article className="article">
            <span className="s-cat">{berita.cat}</span>
            <h2>{berita.title}</h2>
            <p className="n-meta">📅 {berita.date} | ✍️ Humas Pusdik Bekang</p>
            <div className="article-img" style={{ backgroundImage: `url(${berita.img})` }} />
            <p>Cimahi — Pusat Pendidikan Pembekalan Angkutan (Pusdik Bekang) Kodiklatad terus berkomitmen mencetak prajurit Bekang yang profesional. {berita.title}.</p>
            <p>Kegiatan ini merupakan bagian dari program pendidikan dan pembinaan satuan guna mendukung kesiapan operasional logistik TNI Angkatan Darat.</p>
            <div className="article-actions">
              <button className="submit-btn" onClick={() => download(berita.title)}>⬇ Unduh Siaran Pers</button>
              <button className="ghost-btn" onClick={() => go('berita')}>← Kembali ke Berita</button>
            </div>
          </article>
        </PageShell>
      ) : null
    }
        
    if (route.page === 'galeri') {
      return (
        <PageShell title="Galeri Foto Kegiatan" trail={[{ label: 'Galeri', page: 'galeri' }]} go={go}>
          <div className="gal-grid">
            {GALLERY.map((g, i) => (
              <button key={i} className="gal-item" onClick={() => setLightbox(i)}>
                <div className="g-img" style={{ backgroundImage: `url(${g.img})` }} />
                <span className="gal-zoom">🔍</span>
              </button>
            ))}
          </div>
        </PageShell>
      )
    }
        
    if (route.page === 'video') {
      return (
        <PageShell title="Video Pusdik Bekang" trail={[{ label: 'Video', page: 'video' }]} go={go}>
          <div className="vid-grid">
            {VIDEOS.map((v, i) => (
              <button key={i} className="vid-card" onClick={() => setVideoPlay(v)}>
                <div className="vid-thumb"><span className="play-badge">▶</span><span className="vid-dur">{v.dur}</span></div>
                <h3>{v.title}</h3>
              </button>
            ))}
          </div>
        </PageShell>
      )
    }
        
    if (route.page === 'kontak') {
      return <FormPage go={go} notify={notify} title="Hubungi Pusdik Bekang" trail={[{ label: 'Kontak', page: 'kontak' }]}
        desc="Pusdik Bekang Kodiklatad — Jl. Gatot Subroto No.1, Cimahi, Jawa Barat 40523. Telp (022) 665-4321."
        fields={[
          { name: 'nama', label: 'Nama', req: true, ph: 'Nama Anda' },
          { name: 'email', label: 'Email', type: 'email', req: true, ph: 'nama@email.com' },
          { name: 'pesan', label: 'Pesan', type: 'textarea', req: true, full: true, ph: 'Tulis pesan…' }
        ]} />
    }

    const t = PAGE_TITLES[route.page] || 'Informasi'
    return (
      <PageShell title={t} trail={[{ label: t, page: route.page }]} go={go}>
        <div className="text-page">
          <p>Halaman resmi <strong>{t}</strong> Pusat Pendidikan Pembekalan Angkutan (Pusdik Bekang) Kodiklatad TNI AD.</p>
          <div className="info-cards">
            <div className="info-card"><h3> Visi</h3><p>Menjadi pusat pendidikan Bekang yang modern, adaptif, dan profesional.</p></div>
            <div className="info-card"><h3>🚀 Misi</h3><p>Mencetak prajurit Bekang unggul berbasis teknologi logistik terkini.</p></div>
            <div className="info-card"><h3>️ Motto</h3><p>Cepat, Tepat, Handal dalam setiap penyelenggaraan pendidikan.</p></div>
          </div>
          <div className="cta-row">
            <button className="submit-btn" onClick={() => go('berita')}>📰 Lihat Berita</button>
            <button className="ghost-btn" onClick={() => go('kontak')}>✉ Hubungi Kami</button>
          </div>
        </div>
      </PageShell>
    )
  }

  const home = (
    <main className="main">
      <div className="col-left">
        <Slider go={go} />
        <div className="berita-head"><button className="berita-tab" onClick={() => go('berita')}>BERITA</button></div>
        <div className="news-list">
          {BERITA.map(b => (
            <button key={b.id} className="news-row" onClick={() => go('berita-detail', b.id)}>
              <span className="n-title">› {b.title}</span>
              <span className="n-meta">📅 {b.date}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="col-right">
        <div className="gallery">
          {GALLERY.slice(0, 3).map((g, i) => (
            <button key={i} className="g-item" onClick={() => setLightbox(i)}>
              <div className="g-img" style={{ backgroundImage: `url(${g.img})` }} />
              <div className="g-cap">{g.cap}</div>
            </button>
          ))}
        </div>
        <button className="g-more" onClick={() => go('galeri')}>Lihat Galeri Selengkapnya →</button>
        <div className="docs">
          {DOCS.slice(0, 3).map((d, i) => (
            <button key={i} className="doc-item" onClick={() => download(d.title)}>
              <span className="doc-arrow">›</span><span>{d.title}</span>
            </button>
          ))}
        </div>
        <div className="report-row">
          <button className="report-box" onClick={() => go('jadwal')}>JADWAL PENDIDIKAN 2026</button>
          <button className="report-box" onClick={() => go('elearning')}>E-LEARNING</button>
        </div>
      </div>
    </main>
  )

  return (
    <div className="app">
      <Hero go={go} />
      <Navbar go={go} setSearchOpen={setSearchOpen} />
      <div className="units-row">
        <div className="units-inner">
          {UNITS.map((u, i) => (
            <span key={i} className="unit-wrap">
              <button className="unit-link" onClick={() => go('struktur')}>{u}</button>
              {i < UNITS.length - 1 && <span className="unit-sep">|</span>}
            </span>
          ))}
        </div>
      </div>

      {route.page === 'home' ? home : (
        <div className="main single"><div className="col-full">{renderPage()}</div></div>
      )}

      <Footer go={go} notify={notify} openExternal={openExternal} />

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-panel" onClick={e => e.stopPropagation()}>
            <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Cari berita / halaman Pusdik Bekang…" />
            <div className="search-results">
              {query.trim() === '' && <p className="sr-hint">Contoh: "upacara", "dikma", "jadwal"…</p>}
              {results.map((r, i) => (
                <button key={i} className="sr-item" onClick={() => go(r.page, r.param)}>{r.label}</button>
              ))}
              {query.trim() !== '' && results.length === 0 && <p className="sr-hint">Tidak ada hasil untuk "{query}"</p>}
            </div>
          </div>
        </div>
      )}

      {lightbox !== null && (
        <div className="lb2" onClick={() => setLightbox(null)}>
          <div className="lb2-box" onClick={e => e.stopPropagation()}>
            <button className="lb2-x" onClick={() => setLightbox(null)}>✕</button>
            <img src={GALLERY[lightbox].img} alt={GALLERY[lightbox].cap} />
            <p>{GALLERY[lightbox].cap}</p>
            <div className="lb2-nav">
              <button onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}>‹ Sebelumnya</button>
              <button onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}>Berikutnya ›</button>
            </div>
          </div>
        </div>
      )}

      {videoPlay && (
        <div className="lb2" onClick={() => setVideoPlay(null)}>
          <div className="vid-box" onClick={e => e.stopPropagation()}>
            <button className="lb2-x" onClick={() => setVideoPlay(null)}>✕</button>
            <h3>{videoPlay.title}</h3>
            <video controls autoPlay src={videoPlay.src} />
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
      {backTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Kembali ke atas">↑</button>}
    </div>
  )
}