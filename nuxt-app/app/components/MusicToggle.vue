<template>
  <button class="sur" :class="{ on: playing }" :aria-pressed="playing" aria-label="Play tanpura drone" @click="toggle">
    <span class="bars"><i /><i /><i /><i /></span>
    <span>{{ failed ? 'सुर बंद' : playing ? 'सुर चालू' : 'तानपुरा' }}</span>
  </button>
</template>

<script setup lang="ts">
const { playing, failed, toggle } = useTanpura()
</script>
