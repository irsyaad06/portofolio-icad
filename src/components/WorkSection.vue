<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const store = usePortfolioStore()
const yearFilter = ref('all')

const filteredProjects = computed(() => {
  if (yearFilter.value === 'all') return store.projects
  return store.projects.filter(p => p.year.includes(yearFilter.value))
})
</script>

<template>
  <section id="work" class="section section--work" aria-label="Selected works">
    <div class="section__inner">
      <header class="section__header section__header--with-filter">
        <div>
          <span class="section__kicker">{{ store.t('work_kicker') }}</span>
          <h2 class="section__title" v-html="store.t('work_title')"></h2>
        </div>
        <div class="filter-wrapper">
          <label for="year-filter" class="filter-label">{{ store.t('filter_label') }}</label>
          <div class="filter-select-wrapper">
            <select id="year-filter" class="filter-select" v-model="yearFilter">
              <option value="all">{{ store.t('filter_all') }}</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <svg class="filter-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </header>
      <div class="work-list" role="list">
        <ProjectCard v-for="project in filteredProjects" :key="project.key" :project="project" />
      </div>
    </div>
  </section>
</template>
