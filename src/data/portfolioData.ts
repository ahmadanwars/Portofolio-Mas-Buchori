export interface ProjectItem {
  id: string;
  title: string;
  isFeatured: boolean;
  description: string;
  role: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  impact?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  institution: string;
  major: string;
  period: string;
  notes?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: "Teknis & Jaringan" | "Security & K3" | "Leadership & Team" | "Budaya BUMN";
  issuer: string;
  pdfUrl: string;
  fileName: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  badge: string;
  category?: "harian" | "rapat";
  objectPosition?: string;
  highlights?: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    brandName: string;
    role: string;
    location: string;
    tagline: string;
    bio: string;
    statusBadge: string;
    avatarUrl: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github?: string;
    website?: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  skills: SkillCategory[];
  certificates: CertificateItem[];
  photos: PhotoItem[];
  activities: PhotoItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  preferences: {
    communicationTone: string;
    designTheme: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Muhammad Buchori Triyanto",
    brandName: "M. Buchori Triyanto",
    role: "Team Leader Telekomunikasi & Spesialis Infrastruktur Jaringan FTTX",
    location: "Tangerang & Banten, Indonesia (Siap Mobilitas Kerja)",
    tagline: "Saya seorang pekerja keras, disiplin, memiliki loyalitas dan integritas tinggi, serta terbiasa bekerja dengan target tinggi. Memiliki pemahaman dalam manajemen data, analisis data, sistem IT, dan sistem komunikasi, dan saya memiliki berbagai sertifikat resmi serta rekam jejak prestasi yang telah saya raih.",
    bio: "Praktisi telekomunikasi berpengalaman lebih dari satu dekade di PT Telkom Akses dengan rekam jejak kepemimpinan lapangan yang teruji dan sukses membawa regu teknisi meraih predikat Juara 1 Tim Berprestasi. Terampil mengelola instalasi, penanganan gangguan, pemeliharaan jaringan Fiber Optic (FTTX), koordinasi bersama Network Operation Center (NOC), analisis data teknis, serta konsisten menerapkan standar K3 dan budaya kerja AKHLAK BUMN.",
    statusBadge: "Siap Bergabung • Terbuka untuk Peluang Karir",
    avatarUrl: "/foto/foto profil.jpg",
  },
  contact: {
    email: "toleworksheet@gmail.com",
    whatsapp: "082211697461",
    linkedin: "https://www.linkedin.com/in/tolesheet-work-083636411",
    github: "https://github.com/CostaBanten",
    website: "https://costabanten.github.io",
  },
  stats: [
    { label: "Pengalaman Kerja", value: "15+ Thn" },
    { label: "Resmi", value: "Sertifikat" },
    { label: "Pencapaian Tim", value: "Juara 1" },
  ],
  certificates: [
    {
      id: "cert-cyber-sec",
      title: "Sertifikasi Cyber Security Fundamentals",
      category: "Security & K3",
      issuer: "Lembaga Sertifikasi Keamanan Digital",
      pdfUrl: "/sertifikat/SERTIFIKAT CYBER SECURITY.pdf",
      fileName: "SERTIFIKAT CYBER SECURITY.pdf",
    },
    {
      id: "cert-fiber-optik",
      title: "Sertifikasi Kompetensi Fiber Optik",
      category: "Teknis & Jaringan",
      issuer: "Telkom Akses / Telkom Group",
      pdfUrl: "/sertifikat/SERTIFIKAT FIBER OPTIK.pdf",
      fileName: "SERTIFIKAT FIBER OPTIK.pdf",
    },
    {
      id: "cert-teknisi-assurance",
      title: "Sertifikasi Teknisi Assurance Jaringan",
      category: "Teknis & Jaringan",
      issuer: "Telkom Akses / Telkom Group",
      pdfUrl: "/sertifikat/SERTIFIKAT TEKNISI ASSURANCE.pdf",
      fileName: "SERTIFIKAT TEKNISI ASSURANCE.pdf",
    },
    {
      id: "cert-fulfillment",
      title: "Sertifikasi Behavior Teknisi Fulfillment",
      category: "Teknis & Jaringan",
      issuer: "Telkom Akses / Telkom Group",
      pdfUrl: "/sertifikat/SERTIFIKAT BAHAVIOR TEKNISI FULLFILMENT.pdf",
      fileName: "SERTIFIKAT BAHAVIOR TEKNISI FULLFILMENT.pdf",
    },
    {
      id: "cert-team-leader",
      title: "Surat Keputusan / Penugasan Team Leader TA",
      category: "Leadership & Team",
      issuer: "PT Telkom Akses",
      pdfUrl: "/sertifikat/SURAT TUGAS TEAM LEADER TA.pdf",
      fileName: "SURAT TUGAS TEAM LEADER TA.pdf",
    },
    {
      id: "cert-k3",
      title: "Sertifikasi Dasar Keselamatan & Kesehatan Kerja (K3)",
      category: "Security & K3",
      issuer: "Badan Pelatihan K3 & Operasional",
      pdfUrl: "/sertifikat/SERTIFIKAT DASAR K3.pdf",
      fileName: "SERTIFIKAT DASAR K3.pdf",
    },
    {
      id: "cert-teamwork",
      title: "Sertifikat Kolaborasi & Bekerja Dalam Tim",
      category: "Leadership & Team",
      issuer: "Corporate People Development",
      pdfUrl: "/sertifikat/SERIFIKAT BEKRJA DALAM TEAM.pdf",
      fileName: "SERIFIKAT BEKRJA DALAM TEAM.pdf",
    },
    {
      id: "cert-komunikasi",
      title: "Sertifikat Skill Komunikasi Efektif & Negosiasi",
      category: "Leadership & Team",
      issuer: "Corporate People Development",
      pdfUrl: "/sertifikat/SERTIFIKAT SKILL KOMUNIKASI.pdf",
      fileName: "SERTIFIKAT SKILL KOMUNIKASI.pdf",
    },
    {
      id: "cert-akhlak",
      title: "Sertifikasi Nilai Budaya AKHLAK BUMN",
      category: "Budaya BUMN",
      issuer: "Kementerian BUMN / Telkom Group",
      pdfUrl: "/sertifikat/SERTIFIKAT AKHLAK BUMN.pdf",
      fileName: "SERTIFIKAT AKHLAK BUMN.pdf",
    },
    {
      id: "cert-telkom-way",
      title: "Sertifikasi Corporate Culture The Telkom Way",
      category: "Budaya BUMN",
      issuer: "Telkom Indonesia Corporate University",
      pdfUrl: "/sertifikat/SERTIFIKAT TELKOM WAY.pdf",
      fileName: "SERTIFIKAT TELKOM WAY.pdf",
    },
  ],
  photos: [
    {
      id: "photo-juara",
      title: "Pencapaian Juara 1 Tim Teknisi Berprestasi Telkom Akses",
      description: "Bukti nyata kepemimpinan lapangan dan kerja sama solid, berhasil membawa regu teknisi meraih peringkat pertama kinerja optimal dan kualitas layanan terbaik.",
      imgUrl: "/foto/6253469583113568550.jpg",
      badge: "PENGHARGAAN JUARA 1",
      objectPosition: "center 30%",
    },
    {
      id: "photo-sk-leader",
      title: "Serah Terima Surat Tugas Resmi Team Leader TA",
      description: "Momen penganugerahan mandat dan kepercayaan manajemen PT Telkom Akses sebagai Team Leader Teknisi Assurance untuk supervisi operasional wilayah.",
      imgUrl: "/foto/6208595464157249737.jpg",
      badge: "SK RESMI TEAM LEADER",
      objectPosition: "center 22%",
    },
    {
      id: "photo-apresiasi",
      title: "Apresiasi Formal Manajemen PT Telkom Akses",
      description: "Momen silaturahmi korporat dan penerimaan apresiasi kepemimpinan bersama pimpinan manajemen serta rekan sejawat operasional telekomunikasi.",
      imgUrl: "/foto/6253469583113568549.jpg",
      badge: "APRESIASI RESMI",
      objectPosition: "center 72%",
    },
  ],
  activities: [
    // --- Kegiatan Persiapan Harian (Apel, Briefing, K3) ---
    {
      id: "activity-geotag-apel",
      title: "Apel Pagi & Inspeksi K3 Terverifikasi Geotag Resmi",
      description: "Dokumentasi apel pagi dan verifikasi kehadiran tim teknisi di Serpong, Banten.",
      imgUrl: "/foto/lap kinerja 1.jpg",
      badge: "GEOTAG & TIMESTAMP RESMI",
      category: "harian",
      objectPosition: "center 30%",
    },
    {
      id: "activity-briefing-leader",
      title: "Instruksi Kerja & Pengarahan Operasional Lapangan",
      description: "Briefing arahan teknis penanganan tiket gangguan dan pembagian rute teknisi.",
      imgUrl: "/foto/lap kinerja 2.jpg",
      badge: "LEADERSHIP & PENGARAHAN",
      category: "harian",
      objectPosition: "center 40%",
    },
    {
      id: "activity-inspeksi-alat",
      title: "Inspeksi Kesiapan Alat Kerja, Tangga & Toolkit K3",
      description: "Pemeriksaan kelayakan APD, tangga teleskopik, dan alat ukur fiber optik.",
      imgUrl: "/foto/lap kinerja 3.jpg",
      badge: "INSPEKSI ALAT & K3",
      category: "harian",
      objectPosition: "center 40%",
    },
    {
      id: "activity-komitmen-akhlak",
      title: "Penyelarasan Nilai AKHLAK & Doa Bersama Sebelum Tugas",
      description: "Doa bersama dan pembacaan komitmen budaya AKHLAK BUMN.",
      imgUrl: "/foto/lap kinerja 4.jpg",
      badge: "BUDAYA KERJA AKHLAK",
      category: "harian",
      objectPosition: "center 25%",
    },
    {
      id: "activity-supervisi-tower",
      title: "Supervisi Kesiapan Tim di Area Kantor Operasional & Tower",
      description: "Koordinasi operasional lapangan bersama tim NOC dan dispatcher.",
      imgUrl: "/foto/lap kinerja 5.jpg",
      badge: "SUPERVISI LAPANGAN",
      category: "harian",
      objectPosition: "center 25%",
    },
    {
      id: "activity-disiplin-operasional",
      title: "Penegakan Standar 'Disiplin Operasional' Perusahaan",
      description: "Penerapan ketat 4 pilar Disiplin Operasional Telkom Akses.",
      imgUrl: "/foto/lap kinerja 6.jpg",
      badge: "STANDAR DISIPLIN TELKOM",
      category: "harian",
      objectPosition: "center 25%",
    },

    // --- Rapat & Koordinasi Manajerial ---
    {
      id: "activity-rapat-metrik",
      title: "Rapat Tinjauan Performa & Evaluasi Metrik Operasional (Witel Tangerang)",
      description: "Evaluasi capaian performa SLA tiket dan performansi harian bersama tim pengawas Witel Tangerang.",
      imgUrl: "/foto/rapat 1.jpg",
      badge: "EVALUASI METRIK",
      category: "rapat",
      objectPosition: "center center",
    },
    {
      id: "activity-rapat-posko",
      title: "Koordinasi Operasional di Posko Pemenangan STO Witel Tangerang",
      description: "Sinkronisasi strategi operasional dan pemantauan order layanan di posko STO.",
      imgUrl: "/foto/rapat 2.jpg",
      badge: "POSKO OPERASIONAL",
      category: "rapat",
      objectPosition: "center center",
    },
    {
      id: "activity-rapat-dashboard",
      title: "Presentasi & Analisis Dashboard Kinerja Lapangan",
      description: "Pemaparan analisis data teknis jaringan dan monitoring gangguan via dashboard sistem.",
      imgUrl: "/foto/rapat 3.jpg",
      badge: "ANALISIS DASHBOARD",
      category: "rapat",
      objectPosition: "center center",
    },
    {
      id: "activity-rapat-siaga-naru",
      title: "Rapat Koordinasi Posko TelkomGroup Siaga IOC Witel Tangerang",
      description: "Rapat koordinasi kesiapan satgas pengamanan jaringan telekomunikasi posko siaga.",
      imgUrl: "/foto/rapat 4.jpg",
      badge: "RAPAT SIAGA IOC",
      category: "rapat",
      objectPosition: "center center",
    },
    {
      id: "activity-rapat-strategi",
      title: "Penyusunan Strategi & Mitigasi Posko Siaga Bersama Manajemen",
      description: "Perumusan mitigasi gangguan jaringan serta rencana cadangan pemeliharaan infrastruktur.",
      imgUrl: "/foto/rapat 5.jpg",
      badge: "STRATEGI MANAJERIAL",
      category: "rapat",
      objectPosition: "center center",
    },
  ],
  skills: [
    {
      category: "Infrastruktur Jaringan & FTTX",
      items: [
        "FTTX Network Architecture",
        "Fiber Optic Maintenance",
        "Network Configuration",
        "NOC Coordination",
        "OTDR Testing & Splicing",
        "Troubleshooting Jaringan",
        "Pencapaian Target SLA",
      ],
    },
    {
      category: "Sistem IT, Monitoring & Analisis Data",
      items: [
        "Manajemen Sistem IT",
        "Analisis Data Operasional",
        "Pemantauan Kinerja Jaringan",
        "Problem Solving & Root Cause Analysis",
        "Dokumentasi & Pelaporan Teknis",
      ],
    },
    {
      category: "Kepemimpinan & Manajemen Lapangan",
      items: [
        "Field Team Leadership",
        "Komunikasi Efektif & Koordinasi",
        "Supervisi Teknisi Lapangan",
        "Manajemen Waktu & Prioritas Kerja",
        "Kerja Sama Tim Berorientasi Target",
      ],
    },
    {
      category: "Keselamatan Kerja (K3) & Standar Korporat",
      items: [
        "Standar K3 Lapangan",
        "Cyber Security Fundamentals",
        "Core Values AKHLAK BUMN",
        "The Telkom Way",
        "Driver Profesional (Safety Driving)",
      ],
    },
  ],
  experiences: [
    {
      company: "PT Telkom Akses",
      role: "Team Leader Operasional",
      period: "2013 — Sekarang",
      points: [
        "Memimpin, mengawasi, dan mengarahkan regu teknisi lapangan dalam instalasi, pemeliharaan jaringan dan infrastruktur, serta pemulihan gangguan jaringan infrastruktur Fiber Optic (FTTX).",
        "Mengelola konfigurasi jaringan (Network Configuration) dan koordinasi harian bersama Network Operation Center (NOC)",
        "Menerapkan protokol keselamatan dan kesehatan kerja (K3)",
        "Membina loyalitas, kedisiplinan kerja, dan kekompakan tim",
      ],
    },
    {
      company: "Bank Mega",
      role: "Staf Assurance",
      period: "2012 — 2013",
      points: [
        "Melakukan penawaran produk asuransi kepada calon nasabah secara profesional dan persuasif.",
        "Mencapai target pemasaran yang ditetapkan perusahaan",
      ],
    },
    {
      company: "PT Indorent",
      role: "Driver Profesional",
      period: "2011 — 2012",
      points: [
        "Menyediakan jasa transportasi eksekutif untuk kebutuhan rental korporat dan personal",
        "Menjaga kondisi armada kendaraan selalu prima, bersih, dan mematuhi seluruh regulasi lalu lintas serta standar kenyamanan penumpang.",
      ],
    },
  ],
  education: [
    {
      institution: "Universitas Muhammadiyah Ponorogo",
      major: "D1 Ilmu Pemerintahan — FISIP",
      period: "2009 — 2011",
      notes: "Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) &bull; Mempelajari dasar administrasi, tata kelola kelembagaan, dan kepemimpinan organisasi.",
    },
    {
      institution: "SMA Nusa Putra 1 Tangerang",
      major: "Sekolah Menengah Atas",
      period: "2006 — 2008",
      notes: "Tangerang, Banten",
    },
    {
      institution: "SMP Nusantara 1 Tangerang",
      major: "Sekolah Menengah Pertama",
      period: "2003 — 2006",
      notes: "Tangerang, Banten",
    },
  ],
  preferences: {
    communicationTone: "Profesional, berintegritas, komunikatif, dan berorientasi hasil",
    designTheme: "Dark mode modern dengan aksen gradien cyan-emerald dan glassmorphism",
  },
};
