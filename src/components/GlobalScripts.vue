<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePortfolioStore } from '@/stores/portfolio'

const router = useRouter()
const store = usePortfolioStore()

onMounted(() => {
  // 1. Custom Cursor
  const cursorEl = document.getElementById('cursor')
  if (cursorEl && window.matchMedia('(hover: hover)').matches) {
    const handleMouseMove = (e) => {
      cursorEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }
    const interactives = 'a, button, input, textarea, select, label, [role="button"]'
    const handleMouseOver = (e) => {
      if (e.target.closest(interactives)) document.body.classList.add('cursor-hover')
    }
    const handleMouseOut = (e) => {
      if (e.target.closest(interactives)) document.body.classList.remove('cursor-hover')
    }
    const handleMouseDown = () => document.body.classList.add('cursor-click')
    const handleMouseUp = () => document.body.classList.remove('cursor-click')

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // 2. Scroll Progress
  const scrollProgress = document.getElementById('scroll-progress')
  const updateScrollProgress = () => {
    if (scrollProgress) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      scrollProgress.style.width = `${progress}%`
    }
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true })

  // 3. Copy Email
  const handleCopyEmail = (e) => {
    const el = e.target.closest('[data-copy-email]')
    if (el) {
      e.preventDefault()
      const email = el.href.replace('mailto:', '')
      navigator.clipboard.writeText(email).then(() => {
        const copyToast = document.getElementById('copy-toast')
        if (copyToast) {
          copyToast.classList.add('is-visible')
          setTimeout(() => copyToast.classList.remove('is-visible'), 2200)
        }
      }).catch(() => {
        window.location.href = el.href
      })
    }
  }
  document.addEventListener('click', handleCopyEmail)

  // 4. Keyboard Navigation
  const sectionIds = ['hero', 'work', 'organization', 'contact']
  const handleKeydown = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

    const key = e.key
    const num = parseInt(key)
    if (num >= 1 && num <= 4) {
      const id = sectionIds[num - 1]
      if (id === 'organization') {
        router.push('/organization')
        return
      }
      
      router.push({ path: '/', hash: '#' + id })
      return
    }

    if (key === 'm' || key === 'M') {
      if (!store.isDetailOpen && !store.isAboutOpen) {
        store.toggleMenu()
      }
      return
    }
  }
  document.addEventListener('keydown', handleKeydown)

  // 5. Scramble Text
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        const toHtml = to === '\n' ? '<br>' : to
        if (this.frame >= end) {
          complete++
          output += toHtml
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += to === '\n' ? '<br>' : (to === ' ' ? ' ' : `<span style="opacity:0.45">${char}</span>`)
        } else {
          output += toHtml
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.played) {
        entry.target.dataset.played = 'true'
        const scrambler = new TextScramble(entry.target)
        scrambler.setText(entry.target.innerText)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.4 })

  setTimeout(() => {
    document.querySelectorAll('[data-scramble]').forEach(el => observer.observe(el))
  }, 100)

})
</script>

<template>
  <!-- Renderless component -->
</template>
