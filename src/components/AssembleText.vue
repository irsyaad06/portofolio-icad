<script setup>
/**
 * AssembleText
 * Renders text as individual characters that start scattered (random
 * position, rotation, blur) and fly together into the final sentence.
 * The animation plays once on mount; later text changes (e.g. language
 * switch) render instantly in their assembled state.
 */
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  // Base delay (ms) before this block starts assembling
  delay: { type: Number, default: 0 },
  // How far characters are scattered (in em)
  spread: { type: Number, default: 6 },
  // Max extra random delay per character (ms)
  stagger: { type: Number, default: 500 },
  // Prevent line wrapping
  nowrap: { type: Boolean, default: false },
})

const assembled = ref(false)

const rand = (min, max) => Math.random() * (max - min) + min

// Split into words → chars so line-wrapping still happens between words
const words = computed(() =>
  props.text.split(' ').map((word) =>
    Array.from(word).map((ch) => ({
      ch,
      style: {
        '--ax': `${rand(-props.spread, props.spread).toFixed(2)}em`,
        '--ay': `${rand(-props.spread, props.spread).toFixed(2)}em`,
        '--ar': `${rand(-180, 180).toFixed(0)}deg`,
        '--as': rand(0.3, 1.8).toFixed(2),
        '--ad': `${(props.delay + rand(0, props.stagger)).toFixed(0)}ms`,
      },
    }))
  )
)

onMounted(() => {
  // Two frames so the scattered state is painted before transitioning
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      assembled.value = true
    })
  })
})
</script>

<template>
  <span class="assemble" :class="{ 'is-assembled': assembled, 'is-nowrap': nowrap }" :aria-label="text">
    <template v-for="(word, wi) in words" :key="wi">
      <span class="assemble__word" aria-hidden="true">
        <span v-for="(c, ci) in word" :key="ci" class="assemble__char" :style="c.style">{{ c.ch }}</span>
      </span>
      <template v-if="wi < words.length - 1">{{ ' ' }}</template>
    </template>
  </span>
</template>

<style>
.assemble.is-nowrap {
  display: inline-block;
  white-space: nowrap;
}

.assemble.is-nowrap .assemble__word {
  white-space: nowrap;
}

.assemble__word {
  display: inline-block;
  white-space: nowrap;
}

.assemble__char {
  display: inline-block;
  opacity: 0;
  filter: blur(6px);
  transform: translate(var(--ax), var(--ay)) rotate(var(--ar)) scale(var(--as));
  transition:
    transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) var(--ad),
    opacity 0.6s ease var(--ad),
    filter 0.9s ease var(--ad);
  will-change: transform, opacity, filter;
}

.assemble.is-assembled .assemble__char {
  opacity: 1;
  filter: blur(0);
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .assemble__char {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>

