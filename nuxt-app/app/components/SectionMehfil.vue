<template>
  <section id="mehfil">
    <div class="wrap">
      <SectionHead eyebrow="सूफ़ी सुर • PURE SUFI CHORDS" title="शाम के रंग · Elements of the Evening" text="Every baithak is thoughtfully crafted to weave poetry, acoustics, and hospitality into pure human feelings." />
      <div class="arches">
        <article v-for="e in elements" :key="e.en" class="arch">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" v-html="e.icon" />
          <h3>{{ e.hi }}</h3>
          <p class="en">{{ e.en }}</p>
          <p>{{ e.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { elements } from '~/data/site'
</script>
