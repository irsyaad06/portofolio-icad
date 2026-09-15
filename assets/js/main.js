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
    let currentLang = 'ID';

    const i18n = {
        EN: {
            menu_btn: 'MENU',
            menu_btn_close: 'CLOSE',
            menu_home: 'HOME',
            menu_works: 'WORKS',
            menu_experience: 'EXPERIENCE',
            menu_contact: 'CONTACT',
            hero_eyebrow: 'Creative Developer — ',
            hero_sub: 'Crafting distinct digital experiences.<br>No filler.',
            hero_about: 'About',
            hero_cta: 'View Work',
            work_kicker: '02 / PORTFOLIO',
            work_title: 'Selected<br>Works.',
            card_btn: 'View Detail',
            card1_title: 'Go Turtles',
      card1_desc: 'Go Turtles is a platform that helps you to start an eco-friendly lifestyle.',
      card2_title: 'IoT Dashboard<br>System',
      card2_desc: 'Real-time industrial monitoring platform with live data streams, alert management, and predictive analytics.',
      card3_title: 'Admin Panel<br>Suite',
      card3_desc: 'Fully customised back-office system built on Filament with role-based access, audit logs, and reporting.',
      card4_title: 'E-Commerce<br>Platform',
      card4_desc: 'High-performance headless storefront with sub-second load times and an integrated order management system.',
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
            org_kicker: '03 / EXPERIENCE',
            org_title: 'Organizations &<br>Roles.',
            org_1_title: 'Head of Informatics<br>Student Association',
            org_1_desc: 'Led over 50 board members in executing university and national level programs. Responsible for budget management and inter-division coordination.',
            org_2_title: 'Head of Research<br>& Development Division',
            org_2_desc: 'Formulated technology training curriculum for members, including Web Development and IoT workshops. Increased student participation in national competitions.',
            org_3_title: 'IT Expert<br>Staff',
            org_3_desc: 'Assisted in basic technology training for new students and served as a laboratory assistant for programming courses.',
            org_4_title: 'Communication Media<br>Coordinator',
            org_4_desc: 'Managed the publication of organizational activities through digital platforms. Designed interactive posters and content for social media.',
            org_5_title: 'Core Committee<br>of Anniversary',
            org_5_desc: 'Organized an annual celebration event attended by hundreds of students. Coordinated entertainment and academic competitions.',
            org_6_title: 'Executive Board<br>Member',
            org_6_desc: 'Played an active role in channeling student aspirations. Participated in the formulation of policies for student activities at the faculty level.',
            org_7_title: 'Chief Executive<br>of Social Service',
            org_7_desc: 'Led a fundraising campaign and distributed aid to underdeveloped areas. Managed logistics and field volunteers.',
            org_8_title: 'Secretary<br>of Competition Committee',
            org_8_desc: 'Drafted event proposals, handled administrative permits, and documented the entire series of regional-level competition events.',
            org_9_title: 'Education<br>Volunteer',
            org_9_desc: 'Taught basic computer technology to elementary school children. Developed a curriculum for safe internet introduction.',
            org_10_title: 'Participant<br>of Basic Training',
            org_10_desc: 'Learned basic leadership, teamwork, and organizational management as the first step in joining the student association.'
        },
        ID: {
            menu_btn: 'MENU',
            menu_btn_close: 'TUTUP',
            menu_home: 'BERANDA',
            menu_works: 'KARYA',
            menu_experience: 'PENGALAMAN',
            menu_contact: 'KONTAK',
            hero_eyebrow: 'Pengembang Kreatif — ',
            hero_sub: 'Menciptakan pengalaman digital yang berbeda.<br>Tanpa basa-basi.',
            hero_about: 'Tentang',
            hero_cta: 'Lihat Karya',
            work_kicker: '02 / PORTOFOLIO',
            work_title: 'Karya<br>Pilihan.',
            card_btn: 'Lihat Detail',
            card1_title: 'Go Turtles',
      card1_desc: 'Go Turtles is a platform that helps you to start an eco-friendly lifestyle.',
      card2_title: 'Dasbor IoT<br>Industri',
      card2_desc: 'Platform pemantauan industri real-time yang menghubungkan ratusan sensor ESP32 via MQTT ke dasbor terpusat.',
      card3_title: 'Admin Panel<br>Suite',
      card3_desc: 'Sistem back-office multi-tenant berbasis Laravel Filament dengan modul RBAC, audit log, dan pembuat laporan.',
      card4_title: 'Platform<br>E-Commerce',
      card4_desc: 'Storefront headless berbasis Next.js yang mencapai LCP sub-800ms via edge caching dan optimasi gambar CDN.',
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
            org_kicker: '03 / PENGALAMAN',
            org_title: 'Organisasi &<br>Peran.',
            org_1_title: 'Ketua Himpunan<br>Mahasiswa Informatika',
            org_1_desc: 'Memimpin lebih dari 50 anggota pengurus dalam menjalankan program kerja tingkat universitas dan nasional. Bertanggung jawab atas pengelolaan anggaran dan koordinasi antar divisi.',
            org_2_title: 'Kepala Divisi<br>Penelitian & Pengembangan',
            org_2_desc: 'Merumuskan kurikulum pelatihan teknologi untuk anggota himpunan, termasuk workshop Web Development dan IoT. Meningkatkan partisipasi mahasiswa dalam lomba tingkat nasional.',
            org_3_title: 'Staf Ahli<br>Teknologi Informasi',
            org_3_desc: 'Membantu pelaksanaan pelatihan teknologi dasar bagi mahasiswa baru dan menjadi asisten laboratorium untuk mata kuliah pemrograman.',
            org_4_title: 'Koordinator<br>Media Komunikasi',
            org_4_desc: 'Mengelola publikasi kegiatan organisasi melalui platform digital. Mendesain poster dan konten interaktif untuk media sosial.',
            org_5_title: 'Panitia Inti<br>Dies Natalis',
            org_5_desc: 'Menyelenggarakan acara perayaan tahunan yang dihadiri ratusan mahasiswa. Mengkoordinasikan acara hiburan dan kompetisi akademik.',
            org_6_title: 'Anggota<br>Badan Eksekutif',
            org_6_desc: 'Berperan aktif dalam menyalurkan aspirasi mahasiswa. Turut serta dalam perumusan kebijakan kegiatan kemahasiswaan tingkat fakultas.',
            org_7_title: 'Ketua Pelaksana<br>Bakti Sosial',
            org_7_desc: 'Memimpin kampanye penggalangan dana dan penyaluran bantuan ke daerah tertinggal. Mengatur logistik dan relawan di lapangan.',
            org_8_title: 'Sekretaris<br>Kepanitiaan Lomba',
            org_8_desc: 'Menyusun proposal kegiatan, mengurus perizinan administrasi, dan mendokumentasikan seluruh rangkaian acara perlombaan tingkat regional.',
            org_9_title: 'Relawan<br>Pendidikan',
            org_9_desc: 'Mengajar teknologi dasar komputer kepada anak-anak sekolah dasar. Menyusun kurikulum pengenalan internet yang aman.',
            org_10_title: 'Peserta<br>Diklat Dasar',
            org_10_desc: 'Mempelajari kepemimpinan dasar, kerja sama tim, dan manajemen organisasi sebagai langkah awal bergabung dalam himpunan mahasiswa.'
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
        const dotRect = dot.getBoundingClientRect();
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;

        const circleW = aboutCircle.offsetWidth;
        const circleH = aboutCircle.offsetHeight;
        const originX = 50 + ((dotCenterX - window.innerWidth / 2) / circleW) * 100;
        const originY = 50 + ((dotCenterY - window.innerHeight / 2) / circleH) * 100;
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

    aboutBtn.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
            window.location.href = 'about.html';
            return;
        }
        openAbout();
    });
    aboutClose.addEventListener('click', closeAbout);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('about-open')) {
            closeAbout();
        }
    });

    /* =========================================================================
       PROJECT DATA — source of truth for detail panel content
    ========================================================================= */
    const PROJECTS = {
        enterprise: {
            index: '01',
            year: '2025',
            role: 'CEO & Full Stack Developer',
            duration: '4 months',
            title: 'GO-TURTLE',
            description:
                'GO-TURTLE is an integrated digital solution connecting community-based ecotourism with marine biodiversity conservation at Pangumbahan Beach, Sukabumi. It enables visitors to participate directly in sea turtle preservation programs, such as observing night-time egg-laying and hatchling releases.\n\nKey Features:\n• Conservation Ticketing & Tourism\n• Hatchling Population Tracker\n• Public Conservation Donation\n• Educational Blog & Travel Guide',
            images: [
                'assets/images/goturtles.png',
            ],
            tags: ['Laravel', 'React.js', 'Nest.js','Java Springboot', 'PostgreSQL', 'Nginx'],
            link: 'https://go-turtle.jabarprov.go.id/',
        },
        iot: {
            index: '02',
            year: '2024',
            role: 'Embedded + Web Developer',
            duration: '4 months',
            title: 'IoT Dashboard\nSystem',
            description:
                'A real-time industrial monitoring and control platform connecting hundreds of ESP32-based sensors via MQTT to a central dashboard. Features live data streams, configurable alert thresholds, device grouping, and a predictive-maintenance module.\n\nThe frontend renders thousands of data points per minute using canvas-based charting without dropping frames.',
            images: [
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=IoT+Preview+1',
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=IoT+Preview+2'
            ],
            tags: ['ESP32', 'MQTT', 'Vue.js', 'Chart.js', 'Node.js', 'WebSockets', 'InfluxDB'],
            link: '#',
        },
        admin: {
            index: '03',
            year: '2023',
            role: 'Backend Developer',
            duration: '3 months',
            title: 'Admin Panel\nSuite',
            description:
                'A multi-tenant back-office management system built on the Laravel Filament ecosystem. Includes a granular RBAC module, a full audit-log trail for compliance, customisable data-export pipelines, and a plugin-based report builder.\n\nDesigned for non-technical operators — every complex workflow reduced to a single guided form.',
            images: [
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Admin+Preview+1',
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Admin+Preview+2'
            ],
            tags: ['Laravel Filament', 'Livewire', 'Tailwind CSS', 'MySQL', 'Spatie Permissions'],
            link: '#',
        },
        ecommerce: {
            index: '04',
            year: '2023',
            role: 'Frontend Lead',
            duration: '5 months',
            title: 'E-Commerce\nPlatform',
            description:
                'A headless storefront built with Next.js consuming the Shopify Storefront API. Achieves sub-800ms LCP via aggressive edge caching, incremental static regeneration, and image optimisation at the CDN layer.\n\nCustom checkout flow, loyalty-points UI, and an integrated order-management dashboard for the operations team.',
            images: [
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Ecommerce+Preview+1',
                'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Ecommerce+Preview+2'
            ],
            tags: ['Next.js', 'TypeScript', 'Shopify API', 'Vercel', 'TailwindCSS', 'SWR'],
            link: '#',
        },
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
    };

    setActive('hero');

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

    // Fix: Force 'hero' active when scrolled to top (since sticky hero doesn't re-trigger observer on scroll up)
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight * 0.3) {
            if (document.body.classList.contains('not-on-hero')) {
                setActive('hero');
            }
        }
    }, { passive: true });

    /* =========================================================================
       2. SMOOTH ANCHOR CLICKS
    ========================================================================= */
    [...scrollerLinks, ...menuLinks].forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href').replace('#', '');
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
      <hr class="detail__divider">
      <a href="${project.link}" class="detail__cta" target="_blank" rel="noopener noreferrer">
        Visit Project
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
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
       HORIZONTAL SCROLL TIMELINE
    ========================================================================= */
    const orgWrapper = document.getElementById('organization');
    const orgTrack = document.getElementById('org-track');

    if (orgWrapper && orgTrack) {
        window.addEventListener('scroll', () => {
            const rect = orgWrapper.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top <= 0 && rect.bottom >= viewportHeight) {
                const scrollableDistance = rect.height - viewportHeight;
                const scrolled = -rect.top;
                let progress = scrolled / scrollableDistance;
                progress = Math.max(0, Math.min(1, progress));

                // 0.90 = viewport width minus 5vw on each side (matches section padding)
                const maxTranslate = Math.max(0, orgTrack.scrollWidth - window.innerWidth * 0.90);
                orgTrack.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
            } else if (rect.top > 0) {
                orgTrack.style.transform = `translate3d(0px, 0, 0)`;
            } else if (rect.bottom < viewportHeight) {
                const maxTranslate = Math.max(0, orgTrack.scrollWidth - window.innerWidth * 0.90);
                orgTrack.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
            }
        }, { passive: true });
    }

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
