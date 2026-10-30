<template>
  <NuxtLayout>
    <main class="wrap" style="min-height:100svh;display:grid;place-content:center;text-align:center;gap:18px">
      <h1 class="title" style="font-size:clamp(2.4rem,8vw,4.5rem)">{{ error?.statusCode === 404 ? 'यह महफ़िल नहीं मिली' : 'कुछ गड़बड़ हो गई' }}</h1>
      <p class="roman">{{ error?.statusCode === 404 ? 'PAGE NOT FOUND' : 'SOMETHING WENT WRONG' }}</p>
      <p><button class="btn solid" @click="clearError({ redirect: '/' })">Back to the Mehfil</button></p>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps<{ error?: { statusCode?: number } }>()
</script>
