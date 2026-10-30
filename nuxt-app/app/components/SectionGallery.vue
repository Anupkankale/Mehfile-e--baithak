<template>
  <section id="gallery">
    <div class="wrap">
      <SectionHead eyebrow="नज़ारा • VISUAL POETRY • चित्रमैफिल" title="Moments That Stayed" />
      <div class="filters">
        <button v-for="f in galleryFilters" :key="f" :class="{ on: active === f }" @click="setFilter(f)">
          {{ f[0]!.toUpperCase() + f.slice(1) }}
        </button>
      </div>
      <div class="gallery">
        <article v-for="g in shown" :key="g.img + g.title" class="shot">
          <img :src="asset(`images/${g.img}`)" :alt="g.title" loading="lazy">
          <div>
            <span class="tag">{{ g.cat.toUpperCase() }}</span>
            <h3>{{ g.title }}</h3>
            <p>{{ g.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gallery, galleryFilters, type GalleryFilter } from '~/data/site'

const active = ref<GalleryFilter>('all')
const shown = computed(() => active.value === 'all' ? gallery : gallery.filter(g => g.cat === active.value))

async function setFilter(f: GalleryFilter) {
  active.value = f
  await nextTick()
  ScrollTrigger.refresh()
}
</script>
