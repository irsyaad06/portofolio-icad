<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { useRouter, useRoute } from 'vue-router'

const store = usePortfolioStore()
const router = useRouter()
const route = useRoute()

const navigateTo = (target) => {
  store.closeMenu()
  if (target === 'organization') {
    router.push('/organization')
  } else {
    if (route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          store.scrollToSection(target)
        }, 150)
      })
    } else {
      store.scrollToSection(target)
    }
  }
}
</script>

<template>
  <nav class="fullscreen-menu" id="fullscreen-menu" :aria-hidden="!store.isMenuOpen" :hidden="!store.isMenuOpen && false">
    <div class="fullscreen-menu__inner">
      <ul class="fullscreen-menu__list">
        <li><a href="#" class="fullscreen-menu__link" @click.prevent="navigateTo('hero')">{{ store.t('menu_home') }}</a></li>
        <li><a href="#" class="fullscreen-menu__link" @click.prevent="navigateTo('work')">{{ store.t('menu_works') }}</a></li>
        <li><a href="/organization" class="fullscreen-menu__link" @click.prevent="navigateTo('organization')">{{ store.t('menu_experience') }}</a></li>
        <li><a href="#" class="fullscreen-menu__link" @click.prevent="navigateTo('contact')">{{ store.t('menu_contact') }}</a></li>
      </ul>
      <div class="fullscreen-menu__footer">
        <div class="fullscreen-menu__theme-toggle">
          <p class="is-active" data-theme-btn="light">LIGHT <span class="active-dot"></span></p>
          <p data-theme-btn="dark">DARK</p>
          <p data-theme-btn="system">SYSTEM</p>
        </div>
        <div class="fullscreen-menu__legal">
          <a href="/assets/cv_irsyaad_fatahilah.pdf" download="CV_Irsyaad_Fatahilah_ATS.pdf" target="_blank">DOWNLOAD CV (ATS)</a>
        </div>
      </div>
    </div>
  </nav>
</template>
