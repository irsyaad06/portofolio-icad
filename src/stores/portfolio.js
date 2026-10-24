import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    currentLang: localStorage.getItem('portfolio-lang') || 'ID',
    isMenuOpen: false,
    isAboutOpen: false,
    isDetailOpen: false,
    activeSection: 'hero',
    activeProjectKey: null,
    selectedProject: null,
    i18n: {
      EN: {
        menu_btn: 'MENU',
        menu_btn_close: 'CLOSE',
        menu_home: 'HOME',
        menu_works: 'WORKS',
        menu_experience: 'ORGANIZATION',
        menu_contact: 'CONTACT',
        hero_eyebrow: 'Creative Developer — ',
        hero_sub: 'Crafting distinct digital experiences.',
        hero_about: 'About',
        hero_cta: 'View Work',
        work_kicker: '02 / PORTFOLIO',
        work_title: 'Karya<br>Pilihan.',
        card_btn: 'View Detail',
        filter_label: 'Filter Year:',
        filter_all: 'All Years',
        card1_title: 'Go-Turtle',
        card1_desc: 'Website built to facilitate marine and fisheries department employees in recording turtle arrivals.',
        card2_title: 'SIGAP JABAR',
        card2_desc: 'Website built to support critical land rehabilitation through priority mapping and evidence-based field monitoring.',
        card3_title: 'BEM Unikom',
        card3_desc: 'Website built to introduce BEM Unikom Kabinet Merajut Asa and streamline internal operational systems dynamically.',
        card4_title: 'Go Hireme',
        card4_desc: 'Website built to introduce freelancers to perform jobs or meet the needs of job seekers.',
        card5_title: 'HMIF Unikom',
        card5_desc: 'Website built to introduce HMIF Unikom and streamline its internal operational systems dynamically.',
        card6_title: 'Innoventure 2025',
        card6_desc: 'Website built as a landing page to upload competition results and display participant leaderboards and judging systems.',
        card7_title: 'PILKAHIM IF',
        card7_desc: 'Website built for E-Voting and displaying Quick Counts to ensure the election upholds integrity principles.',
        card8_title: 'GAMATIF',
        card8_desc: 'Website built for new student registration, random group selection, new student handbook, and confession features.',
        card9_title: 'SITELUR',
        card9_desc: 'Website built to digitize employee performance documents for overtime pay.',
        card10_title: 'SIDOKU',
        card10_desc: 'Website built for analyzing the management of goods in delivery.',
        card11_title: 'Pendataan Cibeunying',
        card11_desc: 'Website built to facilitate district employees in collecting regional data.',
        card12_title: 'Savikindo CMS',
        card12_desc: 'Website built for company promotional needs with a CMS for easy content management.',
        card13_title: 'Nobar Kuy!',
        card13_desc: 'Website built to make it easier for football supporters to find the nearest viewing locations.',
        card14_title: 'Sistem Peminjaman',
        card14_desc: 'Website built to promote discipline and comply with organizational rules regarding borrowing items.',
        card15_title: 'Monitoring Simak.id',
        card15_desc: 'Website built for monitoring the SIMAK.id web application.',
        card16_title: 'HUBIN HUMAS SMKN 13',
        card16_desc: 'Website built to facilitate the person in charge of Industrial Work Practices in managing students.',
        card17_title: 'Poktan07',
        card17_desc: 'Website built to assist the RW07 farmer group in Cibeunying village with sales and to facilitate agents in selling.',
        visual_tagline: 'I exist<br>because I create',
        visual_meta1: 'Based in Bandung, Indonesia',
        visual_meta2: 'Enjoy the experiences',
        visual_meta3: 'peace out',
        contact_wave: 'something.',
        footer_copy: '© 2024 IRSYAAD. All rights reserved.',
        contact_title: 'Let\'s build<br>',
        about_btn_close: 'Back',
        about_label: 'About me',
        about_title: 'Creative Developer · Indonesia',
        about_bio: 'I build digital experiences that are sharp, purposeful, and crafted to last. From full-stack web apps to embedded IoT systems — if it runs on a screen, I\'ve probably shipped it.',
        org_kicker: '03 / ORGANIZATION',
        org_title: 'Organizations &<br>Roles.',
        org_1_title: 'Coordinating Minister of Technology &<br>Creative Economy BEM Unikom',
        org_1_desc: '',
        org_2_title: 'General Chairman of Informatics<br>Engineering Student Association Unikom',
        org_2_desc: '',
        org_3_title: 'General Chairman of Youth Mosque<br>Al-Muhajirin',
        org_3_desc: '',
        org_4_title: 'Vice Commander of PMR<br>SMKN 13 Bandung',
        org_4_desc: '',
        org_5_title: 'Co-Founder + General Chairman<br>of Aku Berkarya',
        org_5_desc: ''
      },
      ID: {
        menu_btn: 'MENU',
        menu_btn_close: 'TUTUP',
        menu_home: 'BERANDA',
        menu_works: 'KARYA',
        menu_experience: 'ORGANISASI',
        menu_contact: 'KONTAK',
        hero_eyebrow: 'Pengembang Kreatif — ',
        hero_sub: 'Menciptakan pengalaman digital yang berbeda.',
        hero_about: 'Tentang',
        hero_cta: 'Lihat Karya',
        work_kicker: '02 / PORTOFOLIO',
        work_title: 'Karya<br>Pilihan.',
        card_btn: 'Lihat Detail',
        filter_label: 'Filter Tahun:',
        filter_all: 'Semua Tahun',
        card1_title: 'Go-Turtle',
        card1_desc: 'Website yang dibangun untuk memudahkan karyawan dinas perikanan dan kelautan dalam pendataan kedatangan penyu.',
        card2_title: 'SIGAP JABAR',
        card2_desc: 'Website yang dibangun untuk Mendukung rehabilitasi lahan kritis melalui pemetaan prioritas dan monitoring lapangan berbasis bukti.',
        card3_title: 'BEM Unikom',
        card3_desc: 'Website yang dibangun untuk mengenalkan BEM Unikom Kabinet Merajut Asa dan memudahkan sistem operasional internal BEM Unikom mulai dari Cashflow, Sekretariat,Absensi, Aktivitas Kerja hingga Pogram Kerja Kementerian secara Dinamis',
        card4_title: 'Go Hireme',
        card4_desc: 'Website yang dibangun untuk mencari pekerja lepas untuk melakukan suatu pekerjaan/ kebutuhan dari pencari pekerja',
        card5_title: 'HMIF Unikom',
        card5_desc: 'Website yang dibangun untuk mengenalkan HMIF Unikom dan memudahkan sistem operasional internal HMIF Unikom mulai dari Cashflow, Sekretariat,Absensi, Mini Event & Mega Event Divisi secara Dinamis',
        card6_title: 'Innoventure 2025',
        card6_desc: 'Website yang dibangun sebagai landing page, upload hasil lomba dan memperlihatkan leaderboard peserta serta, sistem penilaian serta oleh juri',
        card7_title: 'PILKAHIM IF',
        card7_desc: 'Website yang dibangun untuk melakukan E-Voting dan memperlihatkan Quick Count agar pemilihan tetap berpegang teguh terhadap prinsip LUBERJURDIL',
        card8_title: 'GAMATIF',
        card8_desc: 'Website yang dibangun untuk registrasi data maba, pemilihan kelompok acak dan juga buku saku maba serta fitur konfes untuk seluruh mahasiswa Teknik Informatika Unikom',
        card9_title: 'SITELUR',
        card9_desc: 'Website yang dibangun untuk digitalisasi dokumen kinerja karyawan dalam pembayaran gaji lembur.',
        card10_title: 'SIDOKU',
        card10_desc: 'Website yang dibangun untuk analisis pengelolaan barang dalam pengiriman.',
        card11_title: 'Pendataan Cibeunying',
        card11_desc: 'Website yang dibangun untuk memudahkan karyawan dinas kecamatan cibeunying dalam mendata daerahnya.',
        card12_title: 'Savikindo CMS',
        card12_desc: 'Website yang dibangun untuk kebutuhan promosi perusahaan Savikindo dengan metode CMS.',
        card13_title: 'Nobar Kuy!',
        card13_desc: 'Website yang dibangun untuk memudahkan para supporter bola dalam mencari tempat nobar yang terdekat.',
        card14_title: 'Sistem Peminjaman',
        card14_desc: 'Website yang dibangun untuk memajukan kedisiplinan dan mematuhi aturan organisasi mengenai peminjaman barang.',
        card15_title: 'Monitoring Simak.id',
        card15_desc: 'Website yang dibangun untuk kebutuhan monitoring dari aplikasi web SIMAK.id.',
        card16_title: 'HUBIN HUMAS SMKN 13',
        card16_desc: 'Website yang dibangun untuk memudahkan pengelola siswa yang akan praktek kerja industri.',
        visual_tagline: 'Aku ada<br>karena aku berkarya',
        visual_meta1: 'Berbasis di Bandung, Indonesia',
        visual_meta2: 'Nikmati pengalamannya',
        visual_meta3: 'salam sejahtera',
        contact_wave: 'sesuatu.',
        footer_copy: '© 2024 IRSYAAD. Hak cipta dilindungi.',
        contact_title: 'Mari bangun<br>',
        about_btn_close: 'Kembali',
        about_label: 'Tentang saya',
        about_title: 'Pengembang Kreatif · Indonesia',
        about_bio: 'Saya membangun pengalaman digital yang tajam, bertujuan, dan dibuat untuk bertahan lama. Dari aplikasi web full-stack hingga sistem IoT tertanam — jika itu berjalan di layar, saya mungkin pernah merilisnya.',
        org_kicker: '03 / ORGANISASI',
        org_title: 'Organisasi &<br>Peran.',
        org_1_title: 'Menteri Koordinator Teknologi &<br>Ekonomi Kreatif BEM Unikom',
        org_1_desc: '',
        org_2_title: 'Ketua Umum Himpunan Mahasiswa<br>Teknik Informatika Unikom',
        org_2_desc: '',
        org_3_title: 'Ketua Umum Remaja Masjid<br>Al-Muhajirin',
        org_3_desc: '',
        org_4_title: 'Wakil Komandan PMR<br>SMKN 13 Bandung',
        org_4_desc: '',
        org_5_title: 'Co-Founder + Ketua Umum<br>Aku Berkarya',
        org_5_desc: ''
      }
    },
    projects: [
        {
            key: 'goturtle',
            index: '01',
            year: '2024-2025',
            role: 'Backend Developer, Frontend Developer',
            duration: '2 Years',
            title: 'Go-Turtle | DKP Jabar',
            description: 'Website yang dibangun untuk memudahkan karyawan dinas perikanan dan kelautan dalam pendataan kedatangan penyu dan memudahkan stakeholder dinas untuk melihat kinerja karyawan serta untuk promosi konservasi penyu kepada masyarakat umum.',
            images: ['/assets/images/projects/go-turtle1.png', '/assets/images/projects/go-turtle2.png', '/assets/images/projects/go-turtle3.png'],
            tags: ['Laravel PHP', 'Nest.js', 'Java Spring Boot', 'React.js', 'PostgreSQL', 'DBngin', 'TablePlus'],
            myTools: ['Postman', 'ClickUp'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://go-turtle.jabarprov.go.id/',
        },
        {
            key: 'sigapjabar',
            index: '02',
            year: '2026',
            role: 'Backend Developer (Modul Auth + Role-Based Access Control & Modul Investasi)',
            duration: '1 Year',
            title: 'SIGAP JABAR - Dishut Jabar',
            description: 'Website yang dibangun untuk Mendukung rehabilitasi lahan kritis melalui pemetaan prioritas, monitoring lapangan berbasis bukti, serta transparansi kontribusi publik dan investasi.',
            images: ['/assets/images/projects/sigapjabar1.png', '/assets/images/projects/sigapjabar2.png', '/assets/images/projects/sigapjabar3.png'],
            tags: ['Laravel PHP', 'React.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Antigravity', 'Gemini 3.1 Agent AI', 'Postman'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://dishut.public.unikom.my.id/',
        },
        {
            key: 'bemunikom',
            index: '03',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'BEM Unikom',
            description: 'Website yang dibangun untuk mengenalkan BEM Unikom Kabinet Merajut Asa dan memudahkan sistem operasional internal BEM Unikom mulai dari Cashflow, Sekretariat,Absensi, Aktivitas Kerja hingga Pogram Kerja Kementerian secara Dinamis',
            images: ['/assets/images/projects/bemunikom.png'],
            tags: ['Laravel PHP', 'Vue.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://bem.unikom.ac.id',
        },
        {
            key: 'icmarket',
            index: '04',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'iC Market',
            description: 'Adalah website yang E-Commerce yang dibangun untuk memudahkan mahasiswa dalam mencari template',
            images: ['/assets/images/projects/icmarket1.png', '/assets/images/projects/icmarket2.png'],
            tags: ['Laravel PHP', 'Vue.js', 'Nuxt.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://market.icraftds.id',
        },
        {
            key: 'icraftds',
            index: '05',
            year: '2026',
            role: 'Frontend Developer',
            duration: '1 Year',
            title: 'iCraft DS',
            description: 'Adalah website yang Landing Page untuk Startup iCraft Digital Services',
            images: ['/assets/images/projects/iCraft.jpg'],
            tags: ['Vue.js'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://icraftds.id',
        },
        {
            key: 'gohireme',
            index: '06',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Go Hireme',
            description: 'Website yang dibangun untuk mengenalkan mencari pekerja lepas untuk melakukan suatu pekerjaan/ kebutuhan dari pencari pekerja',
            images: ['/assets/images/projects/gohireme.png'],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Visual Studio Code', 'Blackbox AI Agent'],
            teamTools: [],
            link: 'https://gohireme.id',
        },
        {
            key: 'hmifunikom',
            index: '07',
            year: '2025',
            role: 'Backend Developer',
            duration: '1 Year',
            title: 'HMIF Unikom',
            description: 'Website yang dibangun untuk mengenalkan HMIF Unikom dan memudahkan sistem operasional internal HMIF Unikom mulai dari Cashflow, Sekretariat,Absensi, Mini Event & Mega Event Divisi secara Dinamis',
            images: ['/assets/images/projects/hmifunikom.png'],
            tags: ['Laravel PHP', 'React.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://hmif.unikom.my.id',
        },
        {
            key: 'innoventure',
            index: '08',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Innoventure 2025',
            description: 'Website yang dibangun sebagai landing page, upload hasil lomba dan memperlihatkan leaderboard peserta serta, sistem penilaian serta oleh juri',
            images: ['/assets/images/projects/innoventure1.png', '/assets/images/projects/innoventure2.png'],
            tags: ['Laravel PHP', 'Vue.js (Monolith)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://innoventure.unikom.my.id',
        },
        {
            key: 'pilkahim',
            index: '09',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'PILKAHIM IF',
            description: 'Website yang dibangun untuk melakukan E-Voting dan memperlihatkan Quick Count agar pemilihan tetap berpegang teguh terhadap prinsip LUBERJURDIL',
            images: [],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://pilkahimif.unikom.my.id',
        },
        {
            key: 'gamatif',
            index: '10',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Gathering Maba Teknik Informatika',
            description: 'Website yang dibangun untuk registrasi data maba, pemilihan kelompok acak dan juga buku saku maba serta fitur konfes untuk seluruh mahasiswa Teknik Informatika Unikom',
            images: ['/assets/images/projects/gamatif1.png', '/assets/images/projects/gamatif2.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://gamatif.unikom.my.id',
        },
        {
            key: 'sitelur',
            index: '11',
            year: '2023',
            role: 'UI/UX Design',
            duration: '1 Year',
            title: 'SITELUR',
            description: 'Website yang dibangun untuk digitalisasi dokumen kinerja karyawan BR**S dan memudahkan stakeholder untuk melihat kinerja lembur karyawan dalam pembayaran gaji lembur',
            images: [],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'sidoku',
            index: '12',
            year: '2022',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'SIDOKU',
            description: 'Website yang dibangun untuk analisis pengelolaan barang dalam pengiriman.',
            images: [],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'cibeunying',
            index: '13',
            year: '2023',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Pendataan Cibeunying',
            description: 'Website yang dibangun untuk memudahkan karyawan dinas kecamatan cibeunying dalam mendata daerahnya.',
            images: [],
            tags: ['Laravel PHP', 'Filament V3', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'savikindo',
            index: '14',
            year: '2022',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Savikindo CMS',
            description: 'Website yang dibangun untuk kebutuhan promosi perusahaan Savikindo dengan metode CMS.',
            images: [],
            tags: ['Vue.js', 'Laravel PHP (Monolith)', 'PostgreSQL', 'DBeaver'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'nobar',
            index: '15',
            year: '2024',
            role: 'Project Manager + Backend Developer',
            duration: '1 Year',
            title: 'Nobar Kuy!',
            description: 'Website yang dibangun untuk memudahkan para supporter bola dalam mencari tempat nobar yang terdekat dengan rumahnya atau dengan tempat yang nyaman!.',
            images: ['/assets/images/projects/nobarkuy1.jpg', '/assets/images/projects/nobarkuy2.jpg'],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Postman', 'ClickUp'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://nobarkuy.my.id/',
        },
        {
            key: 'peminjaman',
            index: '16',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Sipesat',
            description: 'Website yang dibangun untuk memajukan kedisiplinan dan mematuhi aturan organisasi mengenai peminjaman barang terhadap sekretariat organisasi',
            images: ['/assets/images/projects/sipesat1.png', '/assets/images/projects/sipesat2.png', '/assets/images/projects/sipesat3.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://unikom.my.id',
        },
        {
            key: 'simak',
            index: '17',
            year: '2022',
            role: 'Frontend Developer',
            duration: '1 Year',
            title: 'Monitoring Simak.id',
            description: 'Website yang dibangun untuk kebutuhan monitoring dari aplikasi web SIMAK.id.',
            images: ['/assets/images/projects/simak-monitoring.webp'],
            tags: ['Vue.js', 'Nuxt.js'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'hubin',
            index: '18',
            year: '2022',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'HUBIN HUMAS SMKN 13',
            description: 'Website yang dibangun untuk memudahkan penanggung jawab Praktik Kerja Industri dalam memanajemen siswanya.',
            images: ['/assets/images/projects/hubin-13.webp','/assets/images/projects/hubin-13-2.jpg'],
            tags: ['Laravel PHP', 'MySQL'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        {
            key: 'poktan07',
            index: '19',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Poktan07',
            description: 'Website yang dibangun untuk membantu kelompok tani RW07 pada desa di cibeunying untuk melakukan penjualan dan memudahkan agen dalam penjualannya',
            images: ['/assets/images/projects/poktan1.png', '/assets/images/projects/poktan2.png', '/assets/images/projects/poktan3.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://poktan.unikom.my.id',
        }
    ]
  }),
  getters: {
    t: (state) => (key) => {
      return state.i18n[state.currentLang][key] || key
    }
  },
  actions: {
    toggleLang() {
      this.currentLang = this.currentLang === 'EN' ? 'ID' : 'EN'
      localStorage.setItem('portfolio-lang', this.currentLang)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.documentElement.style.setProperty('--menu-scroll-offset', window.scrollY + 'px')
        document.body.classList.add('menu-open')
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.body.classList.remove('menu-open')
        document.documentElement.style.removeProperty('--menu-scroll-offset')
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      if (this.isMenuOpen) {
        this.toggleMenu()
      }
    },
    openAbout() {
      this.isAboutOpen = true
      document.body.classList.add('about-open')
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    },
    closeAbout() {
      this.isAboutOpen = false
      document.body.classList.remove('about-open')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    },
    openDetail(projectKey) {
      this.selectedProject = this.projects.find(p => p.key === projectKey)
      this.isDetailOpen = true
      document.body.classList.add('detail-open')
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    },
    closeDetail() {
      this.isDetailOpen = false
      document.body.classList.remove('detail-open')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    },
    setActiveProject(key) {
      this.activeProjectKey = key
    },
    setActiveSection(id) {
        this.activeSection = id
        if (id === 'hero') {
            document.body.classList.remove('not-on-hero');
        } else {
            document.body.classList.add('not-on-hero');
        }
        
        if (id === 'organization') {
            document.body.classList.add('on-org');
        } else {
            document.body.classList.remove('on-org');
        }

        if (id === 'contact') {
            document.body.classList.add('on-contact');
        } else {
            document.body.classList.remove('on-contact');
        }
    }
  }
})
