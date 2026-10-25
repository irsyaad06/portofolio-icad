<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { ref, onMounted, onUnmounted } from 'vue'

const store = usePortfolioStore()
const words = ['IRSYAAD', 'A CRAFTER', 'A DEVELOPER', 'A LEADER']
const currentWord = ref(words[0])
const isOut = ref(false)
let intervalId = null

onMounted(() => {
  let idx = 0
  intervalId = setInterval(() => {
    isOut.value = true
    setTimeout(() => {
      idx = (idx + 1) % words.length
      currentWord.value = words[idx]
      isOut.value = false
    }, 400)
  }, 1500)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section id="hero" class="section section--hero" aria-label="Hero introduction">
    <div class="section__inner">
      <p class="hero__eyebrow" aria-hidden="true">{{ store.t('hero_eyebrow') }}</p>
      <h1 class="hero__headline">
        <span class="hero__line">I AM</span>
        <span class="hero__line">
          <span class="hero__animated-wrapper">
            <span class="hero__animated-spacer" aria-hidden="true">A DEVELOPER</span>
            <span id="hero-animated-text" class="hero__animated-text" :class="{ 'text-out': isOut, 'text-in': !isOut }">{{ currentWord }}</span>
          </span><span class="hero__dot" id="hero-dot">.</span>
        </span>
      </h1>
      <p class="hero__sub" v-html="store.t('hero_sub')"></p>
      <div class="hero__actions">
        <button class="hero__about-btn" id="about-btn" aria-label="About me" @click="store.openAbout()">{{ store.t('hero_about') }}</button>
        <a href="#work" class="hero__cta" aria-label="View selected works">
          <span>{{ store.t('hero_cta') }}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
      <div class="hero__availability" aria-label="Availability status">
        <span>Available for work</span>
      </div>
      <div class="hero__scroll-indicator">
        <div class="hero__scroll-line"></div>
      </div>
    </div>
  </section>
</template>
