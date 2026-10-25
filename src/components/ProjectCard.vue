<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const store = usePortfolioStore()
const cardRef = ref(null)

let observer = null
let activeObserver = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.05
  })
  
  activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        store.setActiveProject(props.project.key)
      }
    })
  }, {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
  })

  if (cardRef.value) {
    observer.observe(cardRef.value)
    activeObserver.observe(cardRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (activeObserver) activeObserver.disconnect()
})

const onMouseEnter = () => {
  store.setActiveProject(props.project.key)
  if (props.project.images && props.project.images[0]) {
    const cardPreview = document.getElementById('card-preview')
    const cardPreviewImg = document.getElementById('card-preview-img')
    if (cardPreview && cardPreviewImg) {
      cardPreviewImg.src = props.project.images[0]
      cardPreview.classList.add('is-visible')
    }
  }
}

const onMouseLeave = () => {
  const cardPreview = document.getElementById('card-preview')
  if (cardPreview) {
    cardPreview.classList.remove('is-visible')
  }
}

let previewRaf;
const onMouseMove = (e) => {
  const cardPreview = document.getElementById('card-preview')
  if (cardPreview && cardPreview.classList.contains('is-visible')) {
    cancelAnimationFrame(previewRaf);
    previewRaf = requestAnimationFrame(() => {
      cardPreview.style.left = e.clientX + 'px';
      cardPreview.style.top  = e.clientY + 'px';
    });
  }
}
</script>

<template>
  <article class="card reveal" role="listitem" :data-project="project.key" :data-year="project.year.substring(0,4)" ref="cardRef" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="onMouseMove">
    <button class="card__link" :aria-label="'View detail: ' + project.title" @click="store.openDetail(project.key)">
      <div class="card__body">
        <div class="card__meta">
          <span class="card__index">{{ project.index }}</span>
          <span class="card__year">{{ project.year }}</span>
        </div>
        <h3 class="card__title">{{ project.title }}</h3>
        <p class="card__desc">{{ project.description }}</p>
        <ul class="card__tags" aria-label="Tech stack">
          <li class="card__tag" v-for="tag in project.tags.slice(0, 5)" :key="tag">{{ tag }}</li>
          <li class="card__tag" v-if="project.tags.length > 5">...</li>
        </ul>
      </div>
      <div class="card__arrow" aria-hidden="true">
        <span>{{ store.t('card_btn') }}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </button>
  </article>
</template>
