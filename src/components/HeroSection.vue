<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { ref, onMounted, onUnmounted } from 'vue'
import AssembleText from './AssembleText.vue'

const store = usePortfolioStore()
const words = ['IRSYAAD', 'A CRAFTER', 'A DEVELOPER', 'A LEADER']
const currentWord = ref(words[0])
const isOut = ref(false)
const blocksAssembled = ref(false)
const introDone = ref(false)
let intervalId = null
let startTimeout = null
let introTimeout = null

// Random scattered start state for whole elements (buttons, badges)
const rand = (min, max) => Math.random() * (max - min) + min
const scatter = (delay) => ({
  '--bx': `${rand(-30, 30).toFixed(0)}vw`,
  '--by': `${rand(-25, 25).toFixed(0)}vh`,
  '--br': `${rand(-90, 90).toFixed(0)}deg`,
  '--bd': `${delay}ms`,
})
const blockStyles = {
  about: scatter(900),
  cv: scatter(1000),
  cta: scatter(1100),
  avail: scatter(1200),
}

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      blocksAssembled.value = true
    })
  })

  // Drop intro styles afterwards so hover transitions behave normally
  introTimeout = setTimeout(() => { introDone.value = true }, 2800)

  // Start the rotating word only after the intro assembly has finished
  let idx = 0
  startTimeout = setTimeout(() => {
    intervalId = setInterval(() => {
      isOut.value = true
      setTimeout(() => {
        idx = (idx + 1) % words.length
        currentWord.value = words[idx]
        isOut.value = false
      }, 400)
    }, 1500)
  }, 2200)
})

onUnmounted(() => {
  if (startTimeout) clearTimeout(startTimeout)
  if (introTimeout) clearTimeout(introTimeout)
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section id="hero" class="section section--hero" :class="{ 'hero--assemble': !introDone, 'blocks-assembled': blocksAssembled }" aria-label="Hero introduction">
    <div class="section__inner">
      <p class="hero__eyebrow" aria-hidden="true">
        <AssembleText :text="store.t('hero_eyebrow')" :delay="0" :spread="10" />
      </p>
      <h1 class="hero__headline">
        <span class="hero__line">
          <AssembleText text="I AM" :delay="150" :spread="4" />
        </span>
        <span class="hero__line">
          <span class="hero__animated-wrapper">
            <span class="hero__animated-spacer" aria-hidden="true">A DEVELOPER</span>
            <span id="hero-animated-text" class="hero__animated-text" :class="{ 'text-out': isOut, 'text-in': !isOut }">
              <AssembleText v-if="!introDone" :text="currentWord" :delay="300" :spread="4" :nowrap="true" />
              <template v-else>{{ currentWord }}</template>
            </span>
          </span><span class="hero__dot" id="hero-dot"><AssembleText text="." :delay="700" :spread="6" /></span>
        </span>
      </h1>
      <p class="hero__sub">
        <AssembleText :text="store.t('hero_sub')" :delay="450" :spread="8" />
      </p>
      <div class="hero__actions">
        <button class="hero__about-btn assemble-block" :style="blockStyles.about" id="about-btn" aria-label="About me" @click="store.openAbout()">{{ store.t('hero_about') }}</button>
        <a href="/assets/cv_irsyaad_fatahilah.pdf" download="CV_Irsyaad_Fatahilah_ATS.pdf" class="hero__cv-btn assemble-block" :style="blockStyles.cv" aria-label="Download CV">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>{{ store.t('hero_cv') }}</span>
        </a>
        <a href="#" class="hero__cta assemble-block" :style="blockStyles.cta" aria-label="View selected works" @click.prevent="store.scrollToSection('work')">
          <span>{{ store.t('hero_cta') }}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
      <div class="hero__availability assemble-block" :style="blockStyles.avail" aria-label="Availability status">
        <span>Available for work</span>
      </div>
      <div class="hero__scroll-indicator">
        <div class="hero__scroll-line"></div>
      </div>
    </div>
  </section>
</template>
