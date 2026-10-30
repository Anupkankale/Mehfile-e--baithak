<template>
  <section id="partner">
    <div class="wrap">
      <SectionHead eyebrow="सहयोग • SUFI PATRONS • सदिच्छा" title="Partner With The Mehfil" text="Mehfil-E-Baithak is Kalyan's premium grassroots movement. By partnering with us, your brand integrates organically into a highly focused, emotionally engaged local audience that values fine aesthetics, literature, and hospitality." />
      <div class="perks">
        <div v-for="p in perks" :key="p.title"><h4>{{ p.title }}</h4><p>{{ p.text }}</p></div>
      </div>
      <p class="eyebrow-s center" style="margin-top:44px">OUR CULTURAL COHORT · SUPPORTING KALYAN'S INDEPENDENT ARTS</p>
      <div class="partners"><span v-for="p in partners" :key="p">{{ p }}</span></div>
      <p class="center"><a class="btn" href="#nishist">Become a Patron</a></p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { perks, partners } from '~/data/site'
</script>
