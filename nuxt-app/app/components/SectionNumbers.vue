<template>
  <section>
    <div class="wrap">
      <SectionHead eyebrow="नज़राना • SOCIAL PROOF • नाते सुरांचे" title="Our Shared Journey in Numbers" text="Every number is a smile, a shared couplet, a quiet tear under candlelight, and a bridge built across modern isolation." />
      <div class="stats3">
        <div v-for="n in numbers" :key="n.label">
          <b :data-count="n.value" data-suffix="+">0</b><em>{{ n.hi }}</em><span>{{ n.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { numbers } from '~/data/site'
</script>
