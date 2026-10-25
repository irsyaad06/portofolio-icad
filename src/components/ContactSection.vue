<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { computed } from 'vue'
const store = usePortfolioStore()

const contactWave = computed(() => {
  return store.t('contact_wave') || 'something.'
})
</script>

<template>
  <div class="contact-curtain-wrap">
    <section id="contact" class="section section--contact-full" aria-label="Contact section">
      <div class="contact-full__inner reveal is-visible">
        <h2 class="contact-full__title">
          <span v-html="store.t('contact_title')"></span>
          <span id="contact-wave" class="contact-full__wave">
            <span v-for="(char, i) in contactWave.split('')" :key="i" :style="{ '--i': i }">{{ char }}</span>
          </span>
        </h2>
        <div class="contact-full__links">
          <a href="mailto:irsyaadfatahilah@gmail.com" class="contact-full__link" data-copy-email
            aria-label="Email Irsyaad">irsyaadfatahilah@gmail.com</a>
          <div class="contact-full__socials">
            <a href="https://instagram.com/caadd__" target="_blank" rel="noopener noreferrer"
              class="contact-full__social">Instagram ↗</a>
            <a href="https://www.linkedin.com/in/irsyaad-fatahilah-1329b91b5/" target="_blank"
              rel="noopener noreferrer" class="contact-full__social">LinkedIn ↗</a>
            <a href="https://github.com/irsyaad06" target="_blank" rel="noopener noreferrer"
              class="contact-full__social">GitHub ↗</a>
          </div>
        </div>
      </div>
      <footer class="site-footer contact-full__footer" role="contentinfo">
        <p>{{ store.t('footer_copy') }}</p>
      </footer>
    </section>
  </div>
</template>
