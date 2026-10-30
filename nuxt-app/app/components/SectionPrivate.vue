<template>
  <section id="private">
    <div class="wrap">
      <SectionHead eyebrow="खास आमंत्रण • LUXURY CURATIONS • खास मैफिल" title="Private Mehfil Curation" text="Bring the timeless prestige of a candle-lit acoustic sitting directly into your personal sanctuary. We curate the stage, lights, and artists." />
      <div class="aadaab">
        <div v-for="p in privateCurations" :key="p.title"><h4>{{ p.title }}</h4><p>{{ p.text }}</p></div>
      </div>
      <p class="center" style="margin-top:34px"><a class="btn" href="#nishist">Inquire For Private Curations</a></p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { privateCurations } from '~/data/site'
</script>
