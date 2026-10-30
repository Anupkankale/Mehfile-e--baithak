<template>
  <section id="upcoming">
    <div class="wrap">
      <SectionHead eyebrow="UPCOMING SITTINGS" title="Join the Next Circle · सुरांचा सोहळा" text="Spaces are limited to preserve absolute acoustic intimacy and authentic face-to-face interaction." />
      <div class="event">
        <div>
          <p class="eyebrow-s">NEXT UP · CURATED COLLABORATION</p>
          <h3>{{ ev.name }}</h3>
          <p class="quote">{{ ev.tagline }}</p>
          <div class="detail">
            <div><b>DATE</b><span>{{ ev.date }}</span></div>
            <div><b>TIME</b><span>{{ ev.time }}</span><em>{{ ev.timeNote }}</em></div>
            <div><b>VENUE</b><span>{{ ev.venue }}</span></div>
            <div><b>FORMAT</b><span>{{ ev.format }}</span></div>
          </div>
          <p class="note">{{ ev.note }}</p>
        </div>
        <div>
          <p class="eyebrow-s">ENTRY</p>
          <div class="price">₹{{ ev.price }}</div>
          <p class="note" style="margin:0 0 16px">{{ ev.priceNote }}</p>
          <span v-for="b in ev.badges" :key="b" class="alert">{{ b }}</span>
          <p style="margin-top:24px"><a class="btn solid" :href="whatsappLink(ev.ctaMessage)" target="_blank" rel="noopener">{{ ev.cta }}</a></p>
          <p class="note">Or call <a :href="site.phoneHref">{{ site.phone }}</a></p>
        </div>
      </div>
      <div class="aadaab" style="margin-bottom:clamp(44px,6vw,72px)">
        <div v-for="s in ev.segments" :key="s.title"><h4>{{ s.title }}</h4><p>{{ s.text }}</p></div>
      </div>
      <TimelineThread :steps="schedule" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredEvent as ev, schedule, site } from '~/data/site'
</script>
