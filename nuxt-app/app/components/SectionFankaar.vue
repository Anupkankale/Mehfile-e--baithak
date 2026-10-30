<template>
  <section id="fankaar">
    <div class="wrap">
      <SectionHead eyebrow="MASTERS OF SOUND • सुर-साधक" title="साज़-ए-महफ़िल · Voices & Chords" text="The real souls who bring classical compositions, acoustic strings, bansuri breaths, and tabla beats to life under our spotlights." />
      <div class="voices">
        <article v-for="v in voices" :key="v.name" class="voice">
          <img :src="asset(`images/${v.img}`)" :alt="`${v.name}, ${v.role}`" loading="lazy">
          <h3>{{ v.name }}</h3>
          <p class="role">{{ v.role.toUpperCase() }}</p>
        </article>
      </div>
      <div class="diary">
        <img :src="asset('images/rahul.webp')" alt="Rahul, Mehfil performer" loading="lazy">
        <div>
          <p class="eyebrow-s">आवाज़ • VOCALS · ARTISTE DIARY (रोजनामचा)</p>
          <h3>The Vessel of Poetry</h3>
          <p>Soulful classical ghazals and emotional shayari come to life through the gentle modulations of classical vocal training. Rahul translates Ghalib's written sorrow directly into the listener's soul, carrying raw sentiment in every breath and pause.</p>
          <blockquote>"हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले..."</blockquote>
          <div class="kv">
            <div><b>FAV POET • प्रिय कवी</b>Mirza Ghalib</div>
            <div><b>PHILOSOPHY • संगीत तत्त्व</b>The pause between two emotions.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { voices } from '~/data/site'
</script>
