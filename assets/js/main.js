/**
 * IRSYAAD. Portfolio — main.js
 * Features:
 *   1. Active scroller link via IntersectionObserver (Viewport Root)
 *   2. Smooth anchor navigation (Native Window Scroll)
 *   3. Card scroll reveal
 *   4. Project detail panel (Fixed to Viewport)
 */

(function () {
    'use strict';

    /* =========================================================================
       TRANSLATION & MENU LOGIC
    ========================================================================= */
    const langSwitch = document.getElementById('lang-switch');
    const menuToggle = document.getElementById('menu-toggle');
    const menuText = document.getElementById('menu-toggle-text');
    const menuLinks = document.querySelectorAll('.fullscreen-menu__link');
    let currentLang = localStorage.getItem('portfolio-lang') || 'ID';

    const i18n = {
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
            footer_copy: '\u00a9 2024 IRSYAAD. All rights reserved.',
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
      footer_copy: '\u00a9 2024 IRSYAAD. Hak cipta dilindungi.',
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
    };

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });
    // Rebuild animated wave letters for contact section
    const waveEl = document.getElementById('contact-wave');
    const waveKey = i18n[lang]['contact_wave'] || 'something.';
    if (waveEl) {
      waveEl.innerHTML = waveKey.split('').map((ch, i) =>
        `<span style="--i:${i}">${ch}</span>`
      ).join('');
    }
    const langText = document.getElementById('lang-text');
    if (langText) langText.textContent = lang;
    if (document.body.classList.contains('menu-open')) {
      menuText.innerHTML = i18n[lang]['menu_btn_close'];
    } else {
      menuText.innerHTML = i18n[lang]['menu_btn'];
    }
  }

  // Apply EN translations immediately on page load
  applyTranslations(currentLang);

  langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'EN' ? 'ID' : 'EN';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations(currentLang);
  });

    menuToggle.addEventListener('click', () => {
        const isOpening = !document.body.classList.contains('menu-open');
        if (isOpening) {
            const scrollY = window.scrollY;
            document.documentElement.style.setProperty('--menu-scroll-offset', scrollY + 'px');
            document.body.classList.add('menu-open');
            menuText.textContent = i18n[currentLang]['menu_btn_close'];
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('menu-open');
            document.documentElement.style.removeProperty('--menu-scroll-offset');
            menuText.textContent = i18n[currentLang]['menu_btn'];
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
            document.documentElement.style.removeProperty('--menu-scroll-offset');
            menuText.textContent = i18n[currentLang]['menu_btn'];
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        });
    });

    /* =========================================================================
       HERO TEXT ANIMATION
    ========================================================================= */
    const animatedText = document.getElementById('hero-animated-text');
    if (animatedText) {
        const words = ['IRSYAAD', 'A CRAFTER', 'A DEVELOPER', 'A LEADER'];
        let currentWordIndex = 0;

        setInterval(() => {
            animatedText.classList.remove('text-in');
            animatedText.classList.add('text-out');

            setTimeout(() => {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                animatedText.textContent = words[currentWordIndex];

                animatedText.classList.remove('text-out');
                animatedText.classList.add('text-in');
            }, 400);
        }, 1500);
    }

    /* =========================================================================
       ABOUT CIRCLE
    ========================================================================= */
    const aboutBtn = document.getElementById('about-btn');
    const aboutCircle = document.getElementById('about-circle');
    const aboutClose = document.getElementById('about-close');

    function openAbout() {
        const dot = document.getElementById('hero-dot');
        let originX = 50;
        let originY = 50;

        if (dot) {
            const dotRect = dot.getBoundingClientRect();
            const dotCenterX = dotRect.left + dotRect.width / 2;
            const dotCenterY = dotRect.top + dotRect.height / 2;

            const circleW = aboutCircle.offsetWidth;
            const circleH = aboutCircle.offsetHeight;
            originX = 50 + ((dotCenterX - window.innerWidth / 2) / circleW) * 100;
            originY = 50 + ((dotCenterY - window.innerHeight / 2) / circleH) * 100;
        }

        aboutCircle.style.transformOrigin = `${originX}% ${originY}%`;

        document.body.classList.add('about-open');
        aboutCircle.setAttribute('aria-hidden', 'false');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        setTimeout(() => aboutClose.focus(), 700);
    }

    function closeAbout() {
        document.body.classList.remove('about-open');
        aboutCircle.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        aboutBtn.focus();
    }

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            if (window.innerWidth <= 860) {
                window.location.href = 'about.html';
                return;
            }
            openAbout();
        });
    }

    if (aboutClose) {
        aboutClose.addEventListener('click', closeAbout);
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('about-open')) {
            closeAbout();
        }
    });

    /* =========================================================================
       PROJECT DATA — source of truth for detail panel content
    ========================================================================= */
    const PROJECTS = {
        goturtle: {
            index: '01',
            year: '2024-2025',
            role: 'Backend Developer, Frontend Developer',
            duration: '2 Years',
            title: 'Go-Turtle | DKP Jabar',
            description: 'Website yang dibangun untuk memudahkan karyawan dinas perikanan dan kelautan dalam pendataan kedatangan penyu dan memudahkan stakeholder dinas untuk melihat kinerja karyawan serta untuk promosi konservasi penyu kepada masyarakat umum.',
            images: ['assets/images/go-turtle1.png', 'assets/images/go-turtle2.png', 'assets/images/go-turtle3.png'],
            tags: ['Laravel PHP', 'Nest.js', 'Java Spring Boot', 'React.js', 'PostgreSQL', 'DBngin', 'TablePlus'],
            myTools: ['Postman', 'ClickUp'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://go-turtle.jabarprov.go.id/',
        },
        sigapjabar: {
            index: '02',
            year: '2026',
            role: 'Backend Developer (Modul Auth + Role-Based Access Control & Modul Investasi)',
            duration: '1 Year',
            title: 'SIGAP JABAR - Dishut Jabar',
            description: 'Website yang dibangun untuk Mendukung rehabilitasi lahan kritis melalui pemetaan prioritas, monitoring lapangan berbasis bukti, serta transparansi kontribusi publik dan investasi.',
            images: [],
            tags: ['Laravel PHP', 'React.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Antigravity', 'Gemini 3.1 Agent AI', 'Postman'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://dishut.public.unikom.my.id/',
        },
        bemunikom: {
            index: '03',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'BEM Unikom',
            description: 'Website yang dibangun untuk mengenalkan BEM Unikom Kabinet Merajut Asa dan memudahkan sistem operasional internal BEM Unikom mulai dari Cashflow, Sekretariat,Absensi, Aktivitas Kerja hingga Pogram Kerja Kementerian secara Dinamis',
            images: ['assets/images/bemunikom.png'],
            tags: ['Laravel PHP', 'Vue.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://bem.unikom.ac.id',
        },
        gohireme: {
            index: '04',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Go Hireme',
            description: 'Website yang dibangun untuk mengenalkan mencari pekerja lepas untuk melakukan suatu pekerjaan/ kebutuhan dari pencari pekerja',
            images: ['assets/images/gohireme.png'],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Visual Studio Code', 'Blackbox AI Agent'],
            teamTools: [],
            link: 'https://gohireme.id',
        },
        hmifunikom: {
            index: '05',
            year: '2025',
            role: 'Backend Developer',
            duration: '1 Year',
            title: 'HMIF Unikom',
            description: 'Website yang dibangun untuk mengenalkan HMIF Unikom dan memudahkan sistem operasional internal HMIF Unikom mulai dari Cashflow, Sekretariat,Absensi, Mini Event & Mega Event Divisi secara Dinamis',
            images: ['assets/images/hmifunikom.png'],
            tags: ['Laravel PHP', 'React.js', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://hmif.unikom.my.id',
        },
        innoventure: {
            index: '06',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Innoventure 2025',
            description: 'Website yang dibangun sebagai landing page, upload hasil lomba dan memperlihatkan leaderboard peserta serta, sistem penilaian serta oleh juri',
            images: ['assets/images/innoventure1.png', 'assets/images/innoventure2.png'],
            tags: ['Laravel PHP', 'Vue.js (Monolith)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://innoventure.unikom.my.id',
        },
        pilkahim: {
            index: '07',
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
        gamatif: {
            index: '08',
            year: '2025',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Gathering Maba Teknik Informatika',
            description: 'Website yang dibangun untuk registrasi data maba, pemilihan kelompok acak dan juga buku saku maba serta fitur konfes untuk seluruh mahasiswa Teknik Informatika Unikom',
            images: ['assets/images/gamatif1.png', 'assets/images/gamatif2.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://gamatif.unikom.my.id',
        },
        sitelur: {
            index: '09',
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
        sidoku: {
            index: '10',
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
        cibeunying: {
            index: '11',
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
        savikindo: {
            index: '12',
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
        nobar: {
            index: '13',
            year: '2024',
            role: 'Project Manager + Backend Developer',
            duration: '1 Year',
            title: 'Nobar Kuy!',
            description: 'Website yang dibangun untuk memudahkan para supporter bola dalam mencari tempat nobar yang terdekat dengan rumahnya atau dengan tempat yang nyaman!.',
            images: ['assets/images/nobarkuy1.jpg', 'assets/images/nobarkuy2.jpg'],
            tags: ['Laravel PHP', 'Vue.js (REST API - Microservices)', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['Postman', 'ClickUp'],
            teamTools: ['Postman', 'ClickUp', 'Figma'],
            link: 'https://nobarkuy.my.id/',
        },
        peminjaman: {
            index: '14',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Sipesat',
            description: 'Website yang dibangun untuk memajukan kedisiplinan dan mematuhi aturan organisasi mengenai peminjaman barang terhadap sekretariat organisasi',
            images: ['assets/images/sipesat1.png', 'assets/images/sipesat2.png', 'assets/images/sipesat3.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://unikom.my.id',
        },
        simak: {
            index: '15',
            year: '2022',
            role: 'Frontend Developer',
            duration: '1 Year',
            title: 'Monitoring Simak.id',
            description: 'Website yang dibangun untuk kebutuhan monitoring dari aplikasi web SIMAK.id.',
            images: ['assets/images/simak-monitoring.webp'],
            tags: ['Vue.js', 'Nuxt.js'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
        hubin: {
            index: '16',
            year: '2022',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'HUBIN HUMAS SMKN 13',
            description: 'Website yang dibangun untuk memudahkan penanggung jawab Praktik Kerja Industri dalam memanajemen siswanya.',
            images: ['assets/images/hubin-13.webp','assets/images/hubin-13-2.jpg'],
            tags: ['Laravel PHP', 'MySQL'],
            myTools: [],
            teamTools: [],
            link: '#',
        },
    
        poktan07: {
            index: '17',
            year: '2026',
            role: 'Fullstack Developer',
            duration: '1 Year',
            title: 'Poktan07',
            description: 'Website yang dibangun untuk membantu kelompok tani RW07 pada desa di cibeunying untuk melakukan penjualan dan memudahkan agen dalam penjualannya',
            images: ['assets/images/poktan1.png', 'assets/images/poktan2.png', 'assets/images/poktan3.png'],
            tags: ['Laravel PHP', 'HTML', 'CSS', 'MySQL', 'DBngin', 'TablePlus'],
            myTools: ['AntiGravity', 'Gemini AI Agent'],
            teamTools: [],
            link: 'https://poktan.unikom.my.id',
        }
    };

    /* =========================================================================
       1. ACTIVE SCROLLER — IntersectionObserver on VIEWPORT
    ========================================================================= */
    const scrollerLinks = document.querySelectorAll('.scroller__link');
    const sections = document.querySelectorAll('.section');

    const linkMap = {};
    scrollerLinks.forEach(link => {
        const key = link.getAttribute('data-section');
        if (key) linkMap[key] = link;
    });

    const setActive = id => {
        scrollerLinks.forEach(l => l.classList.remove('is-active'));
        if (linkMap[id]) linkMap[id].classList.add('is-active');

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
    };

    const initialSection = sections.length > 0 ? sections[0].id : 'hero';
    setActive(initialSection);

    // We are tracking the window scroll now.
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, {
        root: null, // viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
    });

    sections.forEach(s => sectionObserver.observe(s));

    // Fix: Force initial section active when scrolled to top (since sticky elements might not re-trigger observer on scroll up)
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight * 0.3) {
            if (initialSection === 'hero' && document.body.classList.contains('not-on-hero')) {
                setActive('hero');
            } else if (initialSection !== 'hero') {
                setActive(initialSection);
            }
        }
    }, { passive: true });

    /* =========================================================================
       2. SMOOTH ANCHOR CLICKS
    ========================================================================= */
    [...scrollerLinks, ...menuLinks].forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            
            // If it's a cross-page link, let it navigate naturally
            if (href && !href.startsWith('#')) {
                return;
            }

            e.preventDefault();
            const id = href.replace('#', '');
            const isMenuLink = link.classList.contains('fullscreen-menu__link');

            const doScroll = () => {
                // Because #hero is position: sticky, scrollIntoView() thinks it's
                // already in view. We must manually scroll to the absolute top.
                if (id === 'hero') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }

                const el = document.getElementById(id);
                if (el) {
                    // Use getBoundingClientRect + scrollY for precise absolute position,
                    // avoiding scrollIntoView inaccuracies with sticky/fixed elements.
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            };

            if (isMenuLink) {
                // Defer scroll to next task so the browser can process the
                // menu-close style changes (removing overflow:hidden) before
                // attempting to scroll — otherwise the scroll is silently ignored.
                setTimeout(doScroll, 0);
            } else {
                doScroll();
            }
        });
    });

    /* =========================================================================
       3. SCROLL REVEAL — cards fade + slide-up on enter
    ========================================================================= */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05,
    });

    revealEls.forEach(el => revealObserver.observe(el));

    /* =========================================================================
       4. PROJECT DETAIL PANEL
    ========================================================================= */
    const detailPanel = document.getElementById('detail-panel');
    const detailContent = document.getElementById('detail-content');
    const detailImagesOverlay = document.getElementById('detail-images-overlay');
    const detailImagesContent = document.getElementById('detail-images-content');
    const closeBtn = document.getElementById('detail-close');
    const cards = document.querySelectorAll('.card[data-project]');

    /** Build detail panel HTML from project data */
    function buildDetailHTML(project) {
        const titleLines = project.title.split('\n').join('<br>');
        const tags = project.tags.map(t => `<span class="detail__tag">${t}</span>`).join('');
        const descParagraphs = project.description
            .split('\n\n')
            .map(p => `<p class="detail__description">${p.trim()}</p>`)
            .join('');

        const myToolsHtml = project.myTools && project.myTools.length > 0
            ? `<p class="detail__section-label">My Tools</p><div class="detail__tags">${project.myTools.map(t => `<span class="detail__tag">${t}</span>`).join('')}</div>`
            : '';

        const teamToolsHtml = project.teamTools && project.teamTools.length > 0 && project.teamTools[0] !== '-'
            ? `<p class="detail__section-label">Team Tools</p><div class="detail__tags">${project.teamTools.map(t => `<span class="detail__tag">${t}</span>`).join('')}</div>`
            : '';

        return `
      <span class="detail__kicker">${project.index} / Project Detail — ${project.year}</span>
      <h2 class="detail__title">${titleLines}</h2>
      <hr class="detail__divider">
      <div class="detail__meta-grid">
        <div class="detail__meta-item">
          <p class="detail__meta-label">Role</p>
          <p class="detail__meta-value">${project.role}</p>
        </div>
        <div class="detail__meta-item">
          <p class="detail__meta-label">Duration</p>
          <p class="detail__meta-value">${project.duration}</p>
        </div>
        <div class="detail__meta-item">
          <p class="detail__meta-label">Year</p>
          <p class="detail__meta-value">${project.year}</p>
        </div>
      </div>
      <hr class="detail__divider">
      <p class="detail__section-label">Overview</p>
      ${descParagraphs}
      <p class="detail__section-label">Tech Stack</p>
      <div class="detail__tags">${tags}</div>
      ${myToolsHtml}
      ${teamToolsHtml}
      <hr class="detail__divider">
      ${project.link && project.link !== '#' ? `
      <a href="${project.link}" class="detail__cta" target="_blank" rel="noopener noreferrer">
        Visit Project
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>` : `
      <div class="detail__cta" style="color: #ff3333; border-bottom-color: #ff3333; cursor: not-allowed; opacity: 1;">
        (Private Properties*)
      </div>`}
    `;
    }

    /** Open detail panel */
    function openDetail(projectKey) {
        const project = PROJECTS[projectKey];
        if (!project) return;

        // Populate images overlay
        const imagesHtml = (project.images || []).map(img => `<img src="${img}" alt="${project.title.replace('\n', ' ')} Image" class="detail__image-left">`).join('');
        detailImagesContent.innerHTML = imagesHtml;

        // Populate content BEFORE showing (prevents flash)
        detailContent.innerHTML = buildDetailHTML(project);

        detailPanel.removeAttribute('hidden');
        detailImagesOverlay.removeAttribute('hidden');

        // Ensure we start at the top
        detailPanel.scrollTop = 0;
        detailImagesOverlay.scrollTop = 0;

        // Trigger transition on next frame
        requestAnimationFrame(() => {
            document.body.classList.add('detail-open');
            detailPanel.setAttribute('aria-hidden', 'false');
            detailImagesOverlay.setAttribute('aria-hidden', 'false');
            closeBtn.focus();
        });

        // Lock body scroll
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    /** Close detail panel */
    function closeDetail() {
        document.body.classList.remove('detail-open');
        detailPanel.setAttribute('aria-hidden', 'true');
        detailImagesOverlay.setAttribute('aria-hidden', 'true');

        // Wait for transition, then truly hide
        detailPanel.addEventListener('transitionend', function onEnd() {
            detailPanel.setAttribute('hidden', '');
            detailImagesOverlay.setAttribute('hidden', '');
            detailPanel.removeEventListener('transitionend', onEnd);
        }, { once: true });

        // Restore body scroll
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

    // Card click → open detail
    cards.forEach(card => {
        const btn = card.querySelector('.card__link');
        btn.addEventListener('click', () => {
            const key = card.getAttribute('data-project');
            openDetail(key);
        });
    });

    // Close button
    closeBtn.addEventListener('click', closeDetail);

    // Keyboard: Escape closes panel
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('detail-open')) {
            closeDetail();
        }
    });

    /* =========================================================================
       HORIZONTAL SCROLL TIMELINE (Removed - Replaced with vertical gallery)
    ========================================================================= */

    /* =========================================================================
       DARK MODE TOGGLE
    ========================================================================= */
    const themeBtns = document.querySelectorAll('[data-theme-btn]');
    const htmlEl = document.documentElement;

    function applyTheme(theme) {
        let resolved = theme;
        if (theme === 'system') {
            resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        htmlEl.setAttribute('data-theme', resolved);
        localStorage.setItem('portfolio-theme', theme);

        // Update active dot in menu
        themeBtns.forEach(btn => {
            const isActive = btn.getAttribute('data-theme-btn') === theme;
            btn.classList.toggle('is-active', isActive);
            // Move the active-dot span to the active button
            const existingDot = btn.querySelector('.active-dot');
            if (!isActive && existingDot) existingDot.remove();
            if (isActive && !existingDot) {
                const dot = document.createElement('span');
                dot.className = 'active-dot';
                btn.appendChild(dot);
            }
        });
    }

    // Load saved preference
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    applyTheme(savedTheme);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => applyTheme(btn.getAttribute('data-theme-btn')));
    });

    // React to system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (localStorage.getItem('portfolio-theme') === 'system') applyTheme('system');
    });

    /* =========================================================================
       CUSTOM CURSOR
    ========================================================================= */
    const cursorEl = document.getElementById('cursor');
    if (cursorEl && window.matchMedia('(hover: hover)').matches) {
        const dot  = cursorEl.querySelector('.cursor__dot');
        const ring = cursorEl.querySelector('.cursor__ring');

        let mouseX = -100, mouseY = -100;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        // Hover state — expand ring over interactive elements
        const interactives = 'a, button, [role="button"], .card__link, .fullscreen-menu__link, label, input, textarea, select';
        document.addEventListener('mouseover', e => {
            if (e.target.closest(interactives)) document.body.classList.add('cursor-hover');
        });
        document.addEventListener('mouseout', e => {
            if (e.target.closest(interactives)) document.body.classList.remove('cursor-hover');
        });

        // Click flash
        document.addEventListener('mousedown', () => {
            document.body.classList.add('cursor-click');
        });
        document.addEventListener('mouseup', () => {
            document.body.classList.remove('cursor-click');
        });
    }

    /* =========================================================================
       SCROLL PROGRESS BAR
    ========================================================================= */
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const docH   = document.documentElement.scrollHeight - window.innerHeight;
            const pct    = docH > 0 ? (window.scrollY / docH) * 100 : 0;
            progressBar.style.width = pct + '%';
        }, { passive: true });
    }

    /* =========================================================================
       AVAILABILITY BADGE — bilingual support
    ========================================================================= */
    const availSpan = document.querySelector('[data-i18n-avail]');
    if (availSpan) {
        const availText = { EN: 'I EXIST BECAUSE I CREATE', ID: 'AKU ADA KARNA AKU BERKARYA' };
        // Patch applyTranslations to also update availability text
        const _origApply = window.__applyTranslations;
        function updateAvail(lang) {
            availSpan.textContent = availText[lang] || availText['EN'];
        }
        // Initial call
        updateAvail(currentLang);
        // Watch lang switch
        document.getElementById('lang-switch').addEventListener('click', () => {
            // currentLang already toggled by earlier listener, read html
            const lang = htmlEl.lang === 'en' ? 'EN' : 'ID';
            // Use a tiny delay to read after the other listener fires
            setTimeout(() => updateAvail(currentLang), 0);
        });
    }

    /* =========================================================================
       TEXT SCRAMBLE on section titles
    ========================================================================= */
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>—_\\/[]{}=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const len = newText.length;
            this.queue = [];
            for (let i = 0; i < len; i++) {
                const to    = newText[i];
                const start = Math.floor(Math.random() * 18);
                const end   = start + Math.floor(Math.random() * 18) + 6;
                this.queue.push({ to, start, end, char: '' });
            }
            cancelAnimationFrame(this.raf);
            this.frame = 0;
            this.update();
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        update() {
            let out = '';
            let done = 0;
            for (let i = 0; i < this.queue.length; i++) {
                const { to, start, end } = this.queue[i];
                // Convert newline chars to <br> so h2 line-breaks survive innerHTML
                const toHtml = to === '\n' ? '<br>' : to;
                if (this.frame >= end) {
                    done++;
                    out += toHtml;
                } else if (this.frame >= start) {
                    if (!this.queue[i].char || Math.random() < 0.28) {
                        this.queue[i].char = this.randomChar();
                    }
                    out += to === '\n' ? '<br>' : (to === ' ' ? ' ' : `<span style="opacity:0.45">${this.queue[i].char}</span>`);
                } else {
                    out += toHtml;
                }
            }
            this.el.innerHTML = out;
            if (done < this.queue.length) {
                this.raf = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    // Attach scramble to elements with [data-scramble] on first intersection
    document.querySelectorAll('[data-scramble]').forEach(el => {
        const plainText = el.innerText;
        const scrambler = new TextScramble(el);
        let played = false;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !played) {
                    played = true;
                    scrambler.setText(plainText);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.4 });
        obs.observe(el);
    });

    /* =========================================================================
       CARD IMAGE PREVIEW (follows cursor)
    ========================================================================= */
    const cardPreview    = document.getElementById('card-preview');
    const cardPreviewImg = document.getElementById('card-preview-img');

    // Map project key → first image (reuse PROJECTS data)
    if (cardPreview && cardPreviewImg) {
        let previewRaf;

        document.querySelectorAll('.card[data-project]').forEach(card => {
            const key     = card.getAttribute('data-project');
            const project = PROJECTS[key];
            if (!project || !project.images || !project.images[0]) return;

            const imgSrc = project.images[0];

            card.addEventListener('mouseenter', () => {
                cardPreviewImg.src = imgSrc;
                cardPreview.classList.add('is-visible');
            });

            card.addEventListener('mouseleave', () => {
                cardPreview.classList.remove('is-visible');
            });

            card.addEventListener('mousemove', e => {
                cancelAnimationFrame(previewRaf);
                previewRaf = requestAnimationFrame(() => {
                    cardPreview.style.left = e.clientX + 'px';
                    cardPreview.style.top  = e.clientY + 'px';
                });
            });
        });
    }

    /* =========================================================================
       PROJECT FILTER LOGIC
    ========================================================================= */
    const yearFilter = document.getElementById('year-filter');
    const projectCards = document.querySelectorAll('.work-list .card');

    function updateGrid(selectedYear) {
        let visibleCards = [];
        projectCards.forEach(card => {
            const cardYear = card.getAttribute('data-year') || "";
            if (selectedYear === 'all' || cardYear === selectedYear || cardYear.includes(selectedYear)) {
                card.style.display = 'block';
                visibleCards.push(card);
                // Re-trigger intersection observer for animation
                card.classList.remove('is-visible');
                setTimeout(() => card.classList.add('is-visible'), 50);
            } else {
                card.style.display = 'none';
                card.classList.remove('is-visible');
            }
        });

        // Apply grid classes to visible items
        visibleCards.forEach((card, index) => {
            card.classList.remove('is-left-col', 'is-right-col', 'is-last-row');
            
            if (index % 2 === 0) {
                card.classList.add('is-left-col');
            } else {
                card.classList.add('is-right-col');
            }

            // Check if it's in the last row
            const lastRowStartIndex = visibleCards.length - (visibleCards.length % 2 === 0 ? 2 : 1);
            if (index >= lastRowStartIndex) {
                card.classList.add('is-last-row');
            }
        });
    }

    if (yearFilter) {
        // Initial setup
        updateGrid('all');

        yearFilter.addEventListener('change', (e) => {
            updateGrid(e.target.value);
        });
    }



    /* =========================================================================
       COPY EMAIL TO CLIPBOARD
    ========================================================================= */
    const copyEmailLink = document.querySelector('[data-copy-email]');
    const copyToast     = document.getElementById('copy-toast');

    if (copyEmailLink && copyToast) {
        copyEmailLink.addEventListener('click', e => {
            e.preventDefault();
            const email = copyEmailLink.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                copyToast.classList.add('is-visible');
                setTimeout(() => copyToast.classList.remove('is-visible'), 2200);
            }).catch(() => {
                // Fallback: open mailto normally
                window.location.href = copyEmailLink.href;
            });
        });
    }

    /* =========================================================================
       KEYBOARD NAVIGATION
    ========================================================================= */
    const sectionIds = ['hero', 'work', 'organization', 'contact'];

    document.addEventListener('keydown', e => {
        // Don't fire if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const key = e.key;

        // 1-4: jump to section
        const num = parseInt(key);
        if (num >= 1 && num <= 4) {
            const id = sectionIds[num - 1];
            if (id === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.getElementById(id);
                if (target) {
                    const top = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
            return;
        }

        // M: toggle menu (only if no other panel is open)
        if (key === 'm' || key === 'M') {
            if (!document.body.classList.contains('detail-open') &&
                !document.body.classList.contains('about-open')) {
                document.getElementById('menu-toggle').click();
            }
            return;
        }
    });

    /* =========================================================================
       KEYBOARD HINT — static on landing, hidden when scrolled past hero
       (visibility is driven by CSS: body.not-on-hero .kb-hint { opacity: 0 })
    ========================================================================= */

})();
