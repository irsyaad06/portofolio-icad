<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
const store = usePortfolioStore()
</script>

<template>
  <header class="global-header">
    <button class="lang-switch" id="lang-switch" aria-label="Switch Language" @click="store.toggleLang()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20"></path>
      </svg>
      <span id="lang-text">{{ store.currentLang }}</span>
    </button>
    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu" @click="store.toggleMenu()">
      <span class="menu-toggle__text" id="menu-toggle-text">{{ store.isMenuOpen ? store.t('menu_btn_close') : store.t('menu_btn') }}</span>
    </button>
  </header>
</template>
