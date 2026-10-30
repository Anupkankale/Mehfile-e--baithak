<template>
  <div class="thread">
    <div class="spine" /><div class="lit" />
    <div v-for="s in steps" :key="s.time + s.title" class="step">
      <time>{{ s.time }}</time>
      <h4>{{ s.title }}</h4>
      <span v-if="s.hi" class="hi">{{ s.hi }}</span>
      <p>{{ s.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ steps: { time: string, title: string, hi?: string, text: string }[] }>()
</script>
