<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { computed } from 'vue'

const store = usePortfolioStore()

const tagToIcon = {
  'Laravel PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Laravel PHP (Monolith)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Vue.js (REST API - Microservices)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Vue.js (Monolith)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Nest.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  'Java Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Filament V3': 'https://cdn.simpleicons.org/filament/F9A826',
  'TablePlus': '/assets/images/icons/tableplus.png',
  'DBeaver': 'https://cdn.simpleicons.org/dbeaver/382923',
  'DBngin': '/assets/images/icons/dbngin.png',
}

const activeTags = computed(() => {
  if (store.activeSection !== 'work') return []
  if (!store.activeProjectKey) return []
  const proj = store.projects.find(p => p.key === store.activeProjectKey)
  if (!proj) return []
  return proj.tags.map(tag => ({
    name: tag,
    icon: tagToIcon[tag]
  })).filter(t => t.icon) // only tags with mapped icons
})
</script>

<template>
  <nav class="scroller" aria-label="Tech stack">
    <TransitionGroup name="stack-fade" tag="ol" class="scroller__list" style="gap: 1.5rem; display: flex; flex-direction: column; align-items: center;">
      <li v-for="tag in activeTags" :key="tag.name" :title="tag.name">
        <img :src="tag.icon" :alt="tag.name" style="width: 24px; height: 24px; object-fit: contain; filter: grayscale(0.5); opacity: 0.8; transition: all 0.3s;" onmouseover="this.style.filter='grayscale(0)'; this.style.opacity='1'" onmouseout="this.style.filter='grayscale(0.5)'; this.style.opacity='0.8'">
      </li>
    </TransitionGroup>
    <span class="scroller__label" aria-hidden="true" v-if="activeTags.length > 0">TECH STACK</span>
    <span class="scroller__label" aria-hidden="true" v-else>SCROLL</span>
  </nav>
</template>

<style scoped>
.stack-fade-move,
.stack-fade-enter-active,
.stack-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.stack-fade-enter-from,
.stack-fade-leave-to {
  opacity: 0;
  transform: translateY(15px) scale(0.8);
}
.stack-fade-leave-active {
  position: absolute;
}
</style>
