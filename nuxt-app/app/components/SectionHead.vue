<template>
  <div class="sec-head">
    <div class="rule"><b>❖</b></div>
    <p v-if="eyebrow" class="eyebrow-s">{{ eyebrow }}</p>
    <h2 data-split>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, eyebrow?: string, text?: string }>()
</script>
