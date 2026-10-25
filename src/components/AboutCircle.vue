<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { onMounted, onUnmounted } from 'vue'

const store = usePortfolioStore()

const handleKeydown = (e) => {
  if (e.key === 'Escape' && store.isAboutOpen) {
    store.closeAbout()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="about-circle" id="about-circle" :aria-hidden="!store.isAboutOpen" role="dialog" aria-modal="true"
    aria-label="About Irsyaad">
    <div class="about-circle__content">
      <div class="about-circle__photo-wrap">
        <div class="about-circle__photo-placeholder" aria-label="Photo of Irsyaad">
          <img src="/assets/images/irssat.png" alt="Irsyaad Fatahilah" />
        </div>
        <p class="about-circle__availability">let us meet!</p>
      </div>
      <div class="about-circle__text">
        <p class="about-circle__label">{{ store.t('about_label') }}</p>
        <h2 class="about-circle__name">Irsyaad<br>Fatahilah</h2>
        <p class="about-circle__title">{{ store.t('about_title') }}</p>
        <div class="about-circle__divider"></div>
        <p class="about-circle__bio">{{ store.t('about_bio') }}</p>
        <div class="about-circle__skills">
          <span class="about-circle__skill">Laravel</span>
          <span class="about-circle__skill">Vue.js</span>
          <span class="about-circle__skill">React.js</span>
          <span class="about-circle__skill">Next.js</span>
          <span class="about-circle__skill">TypeScript</span>
          <span class="about-circle__skill">IoT / ESP32</span>
        </div>
      </div>
    </div>
  </div>
  <button class="about-circle__close" id="about-close" :class="{ 'is-active': store.isAboutOpen }" aria-label="Close about me" @click="store.closeAbout()">
    <span class="about-circle__close-text">{{ store.t('about_btn_close') }}</span>
    <span class="about-circle__close-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </span>
  </button>
</template>
