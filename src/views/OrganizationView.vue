<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { onMounted, onUnmounted } from 'vue'

const store = usePortfolioStore()

onMounted(() => {
  store.setActiveSection('organization')
})

onUnmounted(() => {
  store.setActiveSection('hero')
})
</script>

<template>
  <div class="page-wrapper" id="page-wrapper">
    <section class="section section--org" id="organization" aria-label="Organizational Experience">
      <div class="section__inner">
        <header class="section__header">
          <span class="section__kicker" id="org-kicker">{{ store.t('org_kicker') }}</span>
          <h2 class="section__title" id="org-title" v-html="store.t('org_title')"></h2>
        </header>

        <div class="timeline-container">
          <div class="timeline-track" id="org-track" role="list">

            <article class="timeline-item reveal is-visible" role="listitem">
              <div class="timeline-item__content">
                <span class="timeline-item__index">01</span>
                <div class="timeline-item__year">2025 - 2026</div>
                <h3 class="timeline-item__title" v-html="store.t('org_1_title')"></h3>
              </div>
            </article>

            <article class="timeline-item reveal is-visible" role="listitem">
              <div class="timeline-item__content">
                <span class="timeline-item__index">02</span>
                <div class="timeline-item__year">2024 - 2025</div>
                <h3 class="timeline-item__title" v-html="store.t('org_2_title')"></h3>
              </div>
            </article>

            <article class="timeline-item reveal is-visible" role="listitem">
              <div class="timeline-item__content">
                <span class="timeline-item__index">03</span>
                <div class="timeline-item__year">2022 - 2024</div>
                <h3 class="timeline-item__title" v-html="store.t('org_3_title')"></h3>
              </div>
            </article>

            <article class="timeline-item reveal is-visible" role="listitem">
              <div class="timeline-item__content">
                <span class="timeline-item__index">04</span>
                <div class="timeline-item__year">2020 - 2021</div>
                <h3 class="timeline-item__title" v-html="store.t('org_4_title')"></h3>
              </div>
            </article>

            <article class="timeline-item reveal is-visible" role="listitem">
              <div class="timeline-item__content">
                <span class="timeline-item__index">05</span>
                <div class="timeline-item__year">2018 - 2020</div>
                <h3 class="timeline-item__title" v-html="store.t('org_5_title')"></h3>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
