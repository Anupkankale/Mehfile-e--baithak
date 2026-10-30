<template>
  <section class="band">
    <div class="wrap">
      <div id="couplet" class="couplet">
        <div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p id="cLine" class="line" v-html="couplets[0]![0]" />
          <p id="cBy" class="by">{{ couplets[0]![1] }}</p>
        </div>
      </div>
    </div>
    <div id="marquee" class="marquee">
      <template v-for="(w, i) in [...marqueeWords, ...marqueeWords, ...marqueeWords]" :key="i">
        <span>{{ w }}</span><span>❖</span>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { couplets, marqueeWords } from '~/data/site'
</script>
