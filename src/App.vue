<script setup>
import { RouterView } from 'vue-router'
import GlobalHeader from '@/components/GlobalHeader.vue'
import FullscreenMenu from '@/components/FullscreenMenu.vue'
import ProjectDetail from '@/components/ProjectDetail.vue'
import AboutCircle from '@/components/AboutCircle.vue'
import GlobalScripts from '@/components/GlobalScripts.vue'
</script>

<template>
  <GlobalScripts />
  <!-- Custom cursor -->
  <div class="cursor" id="cursor" aria-hidden="true">
    <div class="cursor__dot"></div>
    <div class="cursor__ring"></div>
  </div>

  <!-- Scroll progress bar -->
  <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

  <!-- Copy email toast -->
  <div class="copy-toast" id="copy-toast" aria-live="polite">EMAIL COPIED</div>

  <!-- Keyboard hint -->
  <div class="kb-hint" id="kb-hint" aria-hidden="true">
    <span><kbd>1-4</kbd> Navigate</span>
    <span><kbd>M</kbd> Menu</span>
    <span><kbd>ESC</kbd> Close</span>
  </div>

  <!-- Card image preview -->
  <div class="card-preview" id="card-preview" aria-hidden="true">
    <img id="card-preview-img" src="" alt="">
  </div>

  <GlobalHeader />
  <FullscreenMenu />
  
  <RouterView />

  <ProjectDetail />
  <AboutCircle />
</template>
