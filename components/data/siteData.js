// ============================================
// SITE DATA - Single Source of Truth
// ============================================

export const NAVIGATION = [
  {
    id: 'profil',
    label: 'PROFIL',
    children: [
      { id: 'tentang', label: 'Tentang Kami', path: '/profil/tentang' },
      { id: 'organisasi', label: 'Organisasi', path: '/profil/organisasi' }
    ]
  },
  {
    id: 'tentang-kami',
    label: 'TENTANG KAMI',
    children: [
      {
        id: 'pimpinan',
        label: 'Pimpinan',
        children: [
          { id: 'menteri', label: 'Menteri Pertahanan', path: '/tentang-kami/pimpinan/menteri' },
          { id: 'wakil-menteri', label: 'Wakil Menteri', path: '/tentang-kami/pimpinan/wakil-menteri' },
          { id: 'sekjen', label: 'Sekjen', path: '/tentang-kami/pimpinan/sekjen' },
          { id: 'irjen', label: 'Irjen', path: '/tentang-kami/pimpinan/irjen' },
          { id: 'ditjen-strahan', label: 'Ditjen Strahan', path: '/tentang-kami/pimpinan/ditjen-strahan' },
          { id: 'ditjen-renhan', label: 'Ditjen Renhan', path: '/tentang-kami/pimpinan/ditjen-renhan' },
          { id: 'ditjen-pot', label: 'Ditjen Pot', path: '/tentang-kami/pimpinan/ditjen-pot' },
          { id: 'ditjen-kuhan', label: 'Ditjen Kuhan', path: '/tentang-kami/pimpinan/ditjen-kuhan' },
          { id: 'bk-intelhan', label: 'BK Intelhan', path: '/tentang-kami/pimpinan/bk-intelhan' },
          { id: 'pusjak', label: 'Pusjak', path: '/tentang-kami/pimpinan/pusjak' },
          { id: 'pusdatin', label: 'Pusdatin', path: '/tentang-kami/pimpinan/pusdatin' },
          { id: 'puslapbang', label: 'Puslapbang', path: '/tentang-kami/pimpinan/puslapbang' }
        ]
      },
      { id: 'tupoksi', label: 'Tugas dan Fungsi', path: '/tentang-kami/tupoksi' },
      { id: 'sejarah', label: 'Sejarah', path: '/tentang-kami/sejarah' },
      { id: 'visi-misi', label: 'Visi dan Misi', path: '/tentang-kami/visi-misi' },
      { id: 'strategi', label: 'Strategi', path: '/tentang-kami/strategi' },
      { id: 'lhkpn', label: 'LHKPN', path: '/tentang-kami/lhkpn' }
    ]
  },
  {
    id: 'berita-media',
    label: 'BERITA DAN MEDIA',
    children: [
      { id: 'berita', label: 'Berita', path: '/berita-media/berita' },
      { id: 'video', label: 'Video', path: '/berita-media/video' },
      { id: 'foto', label: 'Foto', path: '/berita-media/foto' },
      { id: 'infografis', label: 'Infografis', path: '/berita-media/infografis' },
      { id: 'siaran-pers', label: 'Siaran Pers', path: '/berita-media/siaran-pers' }
    ]
  },
  {
    id: 'layanan-data',
    label: 'LAYANAN DATA',
    children: [
      { id: 'ppid', label: 'PPID', path: '/layanan-data/ppid' },
      { id: 'layanan', label: 'Layanan Data', path: '/layanan-data/layanan' }
    ]
  },
  {
    id: 'publikasi',
    label: 'PUBLIKASI',
    children: [
      { id: 'buku-putih', label: 'Buku Putih', path: '/publikasi/buku-putih' },
      { id: 'naskah', label: 'Naskah Penyelenggaraan Pertahanan', path: '/publikasi/naskah' },
      { id: 'kebijakan', label: 'Kebijakan Umum', path: '/publikasi/kebijakan' },
      { id: 'perpres', label: 'Perpres', path: '/publikasi/perpres' },
      { id: 'permenhan', label: 'Permenhan', path: '/publikasi/permenhan' },
      { id: 'peraturan', label: 'Peraturan Menteri', path: '/publikasi/peraturan' }
    ]
  }
]

export const SIDEBAR_ICONS = [
  { id: 'ppid', label: 'PPID', icon: '📋', color: '#8B4513' },
  { id: 'lapor', label: 'Lapor!', icon: '📢', color: '#D32F2F' },
  { id: 'whistleblowing', label: 'Whistleblowing', icon: '🔔', color: '#F57C00' },
  { id: 'jdih', label: 'JDIH', icon: '⚖️', color: '#1976D2' },
  { id: 'bela-negara', label: 'Bela Negara', icon: '🇮🇩', color: '#388E3C' },
  { id: 'wbs', label: 'WBS', icon: '🛡️', color: '#7B1FA2' }
]

export const NEWS_SLIDES = [
  {
    id: 1,
    category: 'BERITA',
    title: 'Merdeka Satria Titian Youti TP 929/MM di Soe, Tegaskan Kesiapan Tempur dan Pembangunan Teritorial',
    description: 'Kegiatan ini menegaskan kesiapan tempur prajurit TNI dalam mendukung pembangunan teritorial di wilayah perbatasan.',
    image: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=1200&h=600&fit=crop',
    date: '15 Oktober 2026'
  },
  {
    id: 2,
    category: 'KEGIATAN',
    title: 'Keluarga Besar Kemhan Sambut Kedatangan Dua Wakil Menteri Pertahanan RI',
    description: 'Penyambutan resmi di lingkungan Kementerian Pertahanan Republik Indonesia dengan penuh kehangatan.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1200&h=600&fit=crop',
    date: '14 Oktober 2026'
  },
  {
    id: 3,
    category: 'INTERNASIONAL',
    title: 'Kemenhan Perkuat Kerjasama Pertahanan dengan Negara Sahabat di Kawasan ASEAN',
    description: 'Penguatan kerjasama bilateral di bidang pertahanan untuk menjaga stabilitas kawasan.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=1200&h=600&fit=crop',
    date: '13 Oktober 2026'
  }
]

export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Merdeka Satria Titian Youti TP 929/MM di Soe, Tegaskan Kesiapan Tempur dan Pembangunan Teritorial',
    date: '15 Oktober 2026',
    category: 'BERITA',
    image: 'https://images.unsplash.com/photo-1579912437656-78b191225258?w=400&h=300&fit=crop',
    excerpt: 'Kegiatan ini menegaskan kesiapan tempur prajurit TNI dalam mendukung pembangunan teritorial di wilayah perbatasan Negara Kesatuan Republik Indonesia.',
    author: 'Humas Kemhan'
  },
  {
    id: 2,
    title: 'Keluarga Besar Kemhan Sambut Kedatangan Dua Wakil Menteri Pertahanan RI',
    date: '14 Oktober 2026',
    category: 'KEGIATAN',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=400&h=300&fit=crop',
    excerpt: 'Penyambutan resmi di lingkungan Kementerian Pertahanan Republik Indonesia dengan penuh kehangatan dan semangat kebersamaan.',
    author: 'Setjen Kemhan'
  },
  {
    id: 3,
    title: 'Kemenhan Perkuat Kerjasama Pertahanan dengan Negara Sahabat',
    date: '13 Oktober 2026',
    category: 'INTERNASIONAL',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop',
    excerpt: 'Penguatan kerjasama bilateral di bidang pertahanan untuk menjaga stabilitas kawasan dan kepentingan nasional.',
    author: 'Ditjen Strahan'
  },
  {
    id: 4,
    title: 'Rapat Koordinasi Sistem Pertahanan Negara Tahun 2026',
    date: '12 Oktober 2026',
    category: 'RAPAT',
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=400&h=300&fit=crop',
    excerpt: 'Rakor membahas penguatan sistem pertahanan negara menghadapi tantangan global dan regional yang semakin kompleks.',
    author: 'Sekjen Kemhan'
  },
  {
    id: 5,
    title: 'Modernisasi Alutsista TNI Tahap II Dimulai',
    date: '11 Oktober 2026',
    category: 'PROGRAM',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop',
    excerpt: 'Program modernisasi alat utama sistem senjata tahap kedua resmi dimulai dengan fokus pada peningkatan kapabilitas tempur.',
    author: 'Ditjen Renhan'
  },
  {
    id: 6,
    title: 'Prajurit TNI Raih Prestasi di Kompetisi Internasional',
    date: '10 Oktober 2026',
    category: 'PRESTASI',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    excerpt: 'Bangga! Prajurit TNI berhasil meraih medali emas dalam kompetisi ketangkasan militer internasional di Korea Selatan.',
    author: 'Puspen TNI'
  }
]

export const SIDEBAR_NEWS = [
  'Kemenhan Luncurkan Sistem Informasi Pelayanan Publik Baru',
  'Rapat Koordinasi Pertahanan Nasional Tahun 2026',
  'Prajurit TNI Raih Prestasi Internasional di Korea',
  'Modernisasi Alutsista Tahap II Resmi Dimulai',
  'Kerjasama Pertahanan ASEAN Diperkuat',
  'Program Bela Negara untuk Generasi Muda',
  'Digitalisasi Sistem Administrasi Kemhan',
  'Peningkatan Kapasitas SDM Pertahanan'
]

export const STATISTICS = {
  today: '1,234',
  month: '45,678',
  total: '2,345,678',
  online: '156'
}

export const FOOTER_LINKS = {
  menuUtama: [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Kemenhan', path: '/profil/tentang' },
    { label: 'Berita', path: '/berita-media/berita' },
    { label: 'Informasi Publik', path: '/layanan-data/ppid' },
    { label: 'Kontak', path: '/kontak' }
  ],
  tautan: [
    { label: 'Mabes TNI', url: '#' },
    { label: 'TNI AD', url: '#' },
    { label: 'TNI AL', url: '#' },
    { label: 'TNI AU', url: '#' },
    { label: 'Setjen', url: '#' },
    { label: 'Sesmilpran', url: '#' },
    { label: 'Ditjen Strahan', url: '#' },
    { label: 'Ditjen Renhan', url: '#' },
    { label: 'BK Integritas', url: '#' },
    { label: 'Pusjak', url: '#' },
    { label: 'Pusdatin', url: '#' },
    { label: 'Puslapbang', url: '#' }
  ],
  organisasi: [
    { label: 'Setjen', url: '#' },
    { label: 'Itjen', url: '#' },
    { label: 'Ditjen Strahan', url: '#' },
    { label: 'Ditjen Renhan', url: '#' },
    { label: 'Ditjen Pot', url: '#' },
    { label: 'Ditjen Kuhan', url: '#' },
    { label: 'BK Intelhan', url: '#' },
    { label: 'Pusjak', url: '#' },
    { label: 'Pusdatin', url: '#' },
    { label: 'Puslapbang', url: '#' },
    { label: 'BK Integritas', url: '#' },
    { label: 'Puslaik', url: '#' },
    { label: 'Pusbinhan', url: '#' },
    { label: 'Puskum', url: '#' }
  ]
}

export const CONTACT_INFO = {
  address: 'Jl. Medan Merdeka Barat No. 13-14, Jakarta Pusat, 10110',
  phone: '(021) 3822021',
  email: 'setjen@kemhan.go.id',
  website: 'www.kemhan.go.id'
}

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', icon: '📘', url: '#' },
  { id: 'twitter', label: 'Twitter/X', icon: '🐦', url: '#' },
  { id: 'youtube', label: 'YouTube', icon: '▶️', url: '#' },
  { id: 'instagram', label: 'Instagram', icon: '📸', url: '#' }
]