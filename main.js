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
      visual_tagline: 'I exist<br>because I create',
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
      visual_tagline: 'Aku ada<br>karena aku berkarya',
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

  langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'EN' ? 'ID' : 'EN';
    langSwitch.textContent = currentLang === 'EN' ? 'ID' : 'EN'; 
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[currentLang][key]) {
        el.innerHTML = i18n[currentLang][key];
      }
    });

    if (document.body.classList.contains('menu-open')) {
      menuText.innerHTML = i18n[currentLang]['menu_btn_close'];
    } else {
      menuText.innerHTML = i18n[currentLang]['menu_btn'];
    }
  });

  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    if (document.body.classList.contains('menu-open')) {
      menuText.textContent = i18n[currentLang]['menu_btn_close'];
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      menuText.textContent = i18n[currentLang]['menu_btn'];
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
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
  const aboutBtn    = document.getElementById('about-btn');
  const aboutCircle = document.getElementById('about-circle');
  const aboutClose  = document.getElementById('about-close');

  function openAbout() {
    const dot = document.getElementById('hero-dot');
    const dotRect = dot.getBoundingClientRect();
    const dotCenterX = dotRect.left + dotRect.width / 2;
    const dotCenterY = dotRect.top  + dotRect.height / 2;

    const circleW = aboutCircle.offsetWidth;
    const circleH = aboutCircle.offsetHeight;
    const originX = 50 + ((dotCenterX - window.innerWidth  / 2) / circleW) * 100;
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
      index:    '01',
      year:     '2024',
      role:     'Full Stack Developer',
      duration: '6 months',
      title:    'Enterprise\nMicroservices',
      description:
        'A fully distributed backend system built to serve millions of daily active users across multiple regions. The architecture uses an event-driven approach with message queues, circuit breakers, and distributed tracing for complete observability.\n\nKey challenges included zero-downtime deployments, consistent data across services, and building an internal SDK to standardise service communication.',
      images: [
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Enterprise+Preview+1',
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Enterprise+Preview+2'
      ],
      tags:  ['Laravel', 'Vue.js','React.js','Next.js', 'Docker', 'Redis', 'RabbitMQ', 'MySQL', 'Nginx'],
      link:  '#',
    },
    iot: {
      index:    '02',
      year:     '2024',
      role:     'Embedded + Web Developer',
      duration: '4 months',
      title:    'IoT Dashboard\nSystem',
      description:
        'A real-time industrial monitoring and control platform connecting hundreds of ESP32-based sensors via MQTT to a central dashboard. Features live data streams, configurable alert thresholds, device grouping, and a predictive-maintenance module.\n\nThe frontend renders thousands of data points per minute using canvas-based charting without dropping frames.',
      images: [
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=IoT+Preview+1',
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=IoT+Preview+2'
      ],
      tags:  ['ESP32', 'MQTT', 'Vue.js', 'Chart.js', 'Node.js', 'WebSockets', 'InfluxDB'],
      link:  '#',
    },
    admin: {
      index:    '03',
      year:     '2023',
      role:     'Backend Developer',
      duration: '3 months',
      title:    'Admin Panel\nSuite',
      description:
        'A multi-tenant back-office management system built on the Laravel Filament ecosystem. Includes a granular RBAC module, a full audit-log trail for compliance, customisable data-export pipelines, and a plugin-based report builder.\n\nDesigned for non-technical operators — every complex workflow reduced to a single guided form.',
      images: [
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Admin+Preview+1',
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Admin+Preview+2'
      ],
      tags:  ['Laravel Filament', 'Livewire', 'Tailwind CSS', 'MySQL', 'Spatie Permissions'],
      link:  '#',
    },
    ecommerce: {
      index:    '04',
      year:     '2023',
      role:     'Frontend Lead',
      duration: '5 months',
      title:    'E-Commerce\nPlatform',
      description:
        'A headless storefront built with Next.js consuming the Shopify Storefront API. Achieves sub-800ms LCP via aggressive edge caching, incremental static regeneration, and image optimisation at the CDN layer.\n\nCustom checkout flow, loyalty-points UI, and an integrated order-management dashboard for the operations team.',
      images: [
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Ecommerce+Preview+1',
        'https://placehold.co/800x500/1a1a1a/e0e0e0?text=Ecommerce+Preview+2'
      ],
      tags:  ['Next.js', 'TypeScript', 'Shopify API', 'Vercel', 'TailwindCSS', 'SWR'],
      link:  '#',
    },
  };

  /* =========================================================================
     1. ACTIVE SCROLLER — IntersectionObserver on VIEWPORT
  ========================================================================= */
  const scrollerLinks  = document.querySelectorAll('.scroller__link');
  const sections       = document.querySelectorAll('.section');

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
  };

  setActive('hero');

  // We are tracking the window scroll now.
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    root:       null, // viewport
    rootMargin: '-40% 0px -55% 0px',
    threshold:  0,
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
      
      // Because #hero is position: sticky, scrollIntoView() thinks it's 
      // already in view. We must manually scroll to the absolute top.
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    root:       null, // viewport
    rootMargin: '0px 0px -8% 0px',
    threshold:  0.05,
  });

  revealEls.forEach(el => revealObserver.observe(el));

  /* =========================================================================
     4. PROJECT DETAIL PANEL
  ========================================================================= */
  const detailPanel         = document.getElementById('detail-panel');
  const detailContent       = document.getElementById('detail-content');
  const detailImagesOverlay = document.getElementById('detail-images-overlay');
  const detailImagesContent = document.getElementById('detail-images-content');
  const closeBtn            = document.getElementById('detail-close');
  const cards               = document.querySelectorAll('.card[data-project]');

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
        
        const maxTranslate = Math.max(0, orgTrack.scrollWidth - window.innerWidth * 0.5);
        orgTrack.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
      } else if (rect.top > 0) {
        orgTrack.style.transform = `translate3d(0px, 0, 0)`;
      } else if (rect.bottom < viewportHeight) {
        const maxTranslate = Math.max(0, orgTrack.scrollWidth - window.innerWidth * 0.5);
        orgTrack.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
      }
    }, { passive: true });
  }

})();
