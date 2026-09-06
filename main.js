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

  aboutBtn.addEventListener('click', openAbout);
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

  /* =========================================================================
     2. SMOOTH ANCHOR CLICKS
  ========================================================================= */
  scrollerLinks.forEach(link => {
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
  const detailPanel   = document.getElementById('detail-panel');
  const detailContent = document.getElementById('detail-content');
  const closeBtn      = document.getElementById('detail-close');
  const cards         = document.querySelectorAll('.card[data-project]');

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

    // Populate content BEFORE showing (prevents flash)
    detailContent.innerHTML = buildDetailHTML(project);
    detailPanel.removeAttribute('hidden');
    // Ensure we start at the top of the panel (Bug fix applied)
    detailPanel.scrollTop = 0;

    // Trigger transition on next frame
    requestAnimationFrame(() => {
      document.body.classList.add('detail-open');
      detailPanel.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
    });

    // Lock body scroll so user doesn't scroll the background page while reading details
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  /** Close detail panel */
  function closeDetail() {
    document.body.classList.remove('detail-open');
    detailPanel.setAttribute('aria-hidden', 'true');

    // Wait for transition, then truly hide
    detailPanel.addEventListener('transitionend', function onEnd() {
      detailPanel.setAttribute('hidden', '');
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

})();
