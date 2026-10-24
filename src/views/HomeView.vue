<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ScrollerNav from '@/components/ScrollerNav.vue'
import WorkSection from '@/components/WorkSection.vue'
import VisualAside from '@/components/VisualAside.vue'
import ContactSection from '@/components/ContactSection.vue'

import { usePortfolioStore } from '@/stores/portfolio'
import { onMounted, onUnmounted } from 'vue'

const store = usePortfolioStore()

let sectionObserver = null

onMounted(() => {
  const sections = document.querySelectorAll('.section')
  sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        store.setActiveSection(entry.target.id)
      }
    })
  }, {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  })

  sections.forEach(s => sectionObserver.observe(s))

  // Initial fix
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight * 0.3) {
      if (document.body.classList.contains('not-on-hero')) {
        store.setActiveSection('hero')
      }
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  if (sectionObserver) sectionObserver.disconnect()
})
</script>

<template>
  <div class="page-wrapper" id="page-wrapper">
    <HeroSection />
    
    <div class="split-layout" id="split-layout">
      <ScrollerNav />
      <main class="content" id="content-scroll" role="main">
        <WorkSection />
      </main>
      <VisualAside />
    </div>

    <ContactSection />
  </div>
</template>
