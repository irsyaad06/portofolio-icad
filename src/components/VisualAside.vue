<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
const store = usePortfolioStore()
</script>

<template>
  <div class="right-col" aria-live="polite">
    <aside class="visual" aria-hidden="true">
      <div class="visual__decor">
        <div class="visual__grid-lines">
          <span></span><span></span><span></span>
        </div>
        <div class="visual__text-block">
          <p class="visual__big-text">IRSYAAD.</p>
          <p class="visual__tagline" v-html="store.t('visual_tagline')"></p>
        </div>
        <div class="visual__meta">
          <span>{{ store.t('visual_meta1') }}</span>
          <span>{{ store.t('visual_meta2') }}</span>
          <span>{{ store.t('visual_meta3') }}</span>
        </div>
      </div>
    </aside>
  </div>
</template>
