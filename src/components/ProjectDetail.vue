<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
const store = usePortfolioStore()
</script>

<template>
  <div class="detail-images-overlay" id="detail-images-overlay" :aria-hidden="!store.isDetailOpen" :hidden="!store.isDetailOpen && false">
    <div class="detail-images-overlay__inner" id="detail-images-content" v-if="store.selectedProject">
      <img v-for="(img, idx) in store.selectedProject.images" :key="idx" :src="img" :alt="store.selectedProject.title" class="detail__image-left">
    </div>
  </div>

  <div class="detail-panel" id="detail-panel" role="dialog" aria-modal="true" aria-label="Project detail" :hidden="!store.isDetailOpen && false" :aria-hidden="!store.isDetailOpen">
    <button class="detail-panel__close" id="detail-close" aria-label="Close project detail" @click="store.closeDetail()">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>
    <div class="detail-panel__inner" id="detail-content" v-if="store.selectedProject">
      <span class="detail__kicker">{{ store.selectedProject.index }} / Project Detail — {{ store.selectedProject.year }}</span>
      <h2 class="detail__title" v-html="store.selectedProject.title.replace(/\n/g, '<br>')"></h2>
      <hr class="detail__divider">
      <div class="detail__meta-grid">
        <div class="detail__meta-item">
          <p class="detail__meta-label">Role</p>
          <p class="detail__meta-value">{{ store.selectedProject.role }}</p>
        </div>
        <div class="detail__meta-item">
          <p class="detail__meta-label">Duration</p>
          <p class="detail__meta-value">{{ store.selectedProject.duration }}</p>
        </div>
        <div class="detail__meta-item">
          <p class="detail__meta-label">Year</p>
          <p class="detail__meta-value">{{ store.selectedProject.year }}</p>
        </div>
      </div>
      <hr class="detail__divider">
      <p class="detail__section-label">Overview</p>
      <p class="detail__description" v-for="(p, i) in store.selectedProject.description.split('\n\n')" :key="i">
        {{ p }}
      </p>
      <p class="detail__section-label">Tech Stack</p>
      <div class="detail__tags">
        <span class="detail__tag" v-for="tag in store.selectedProject.tags" :key="tag">{{ tag }}</span>
      </div>
      <template v-if="store.selectedProject.myTools && store.selectedProject.myTools.length > 0">
        <p class="detail__section-label">My Tools</p>
        <div class="detail__tags">
          <span class="detail__tag" v-for="tag in store.selectedProject.myTools" :key="tag">{{ tag }}</span>
        </div>
      </template>
      <template v-if="store.selectedProject.teamTools && store.selectedProject.teamTools.length > 0 && store.selectedProject.teamTools[0] !== '-'">
        <p class="detail__section-label">Team Tools</p>
        <div class="detail__tags">
          <span class="detail__tag" v-for="tag in store.selectedProject.teamTools" :key="tag">{{ tag }}</span>
        </div>
      </template>
      <hr class="detail__divider">
      <a v-if="store.selectedProject.link && store.selectedProject.link !== '#'" :href="store.selectedProject.link" class="detail__cta" target="_blank" rel="noopener noreferrer">
        Visit Project
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div v-else class="detail__cta" style="color: #ff3333; border-bottom-color: #ff3333; cursor: not-allowed; opacity: 1;">
        (Private Properties*)
      </div>
    </div>
  </div>
</template>
