<template>
  <section id="safar">
    <div class="wrap">
      <SectionHead eyebrow="अटूट सफ़र • OUR EVOLUTION • प्रवास सुरांचा" title="How the Melody Matured" text="Tracing our steps from local balcony sittings in Kalyan to premium candlelight theater sittings." />
      <TimelineThread :steps="steps" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { journey } from '~/data/site'

const steps = journey.map(j => ({ time: j.time, title: j.title, hi: j.hi, text: j.text }))
</script>
