<template>
  <section id="team">
    <div class="wrap">
      <SectionHead eyebrow="BEHIND THE SPOTLIGHT" title="The Hands Behind the Harmony · परदे के पीछे" text="The warm hearts and creative curators working silently behind the scenes to gather, welcome, and weave the acoustic magic of Mehfil-E-Baithak." />
      <div class="team">
        <article v-for="p in team" :key="p.name" class="card person">
          <div class="ini">{{ p.name[0] }}</div>
          <h3>{{ p.name }}</h3>
          <p class="role">{{ p.role }}</p>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { team } from '~/data/site'
</script>
